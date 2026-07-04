# Rsq SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import RsqUtility
from core.spec import RsqSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import RsqBaseFeature
from features import _make_feature


class RsqSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = RsqUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features from config.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            feature_items = vs.items(feature_opts)
            if feature_items is not None:
                for item in feature_items:
                    fname = item[0]
                    fopts = helpers.to_map(item[1])
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return RsqUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = RsqSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    def direct(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }


    @property
    def category(self):
        """Idiomatic facade: client.category.list() / client.category.load({"id": ...})."""
        from entity.category_entity import CategoryEntity
        cached = getattr(self, "_category", None)
        if cached is None:
            cached = CategoryEntity(self, None)
            self._category = cached
        return cached

    def Category(self, data=None):
        # Deprecated: use client.category instead.
        from entity.category_entity import CategoryEntity
        return CategoryEntity(self, data)


    @property
    def country_of_asylum(self):
        """Idiomatic facade: client.country_of_asylum.list() / client.country_of_asylum.load({"id": ...})."""
        from entity.country_of_asylum_entity import CountryOfAsylumEntity
        cached = getattr(self, "_country_of_asylum", None)
        if cached is None:
            cached = CountryOfAsylumEntity(self, None)
            self._country_of_asylum = cached
        return cached

    def CountryOfAsylum(self, data=None):
        # Deprecated: use client.country_of_asylum instead.
        from entity.country_of_asylum_entity import CountryOfAsylumEntity
        return CountryOfAsylumEntity(self, data)


    @property
    def country_of_origin(self):
        """Idiomatic facade: client.country_of_origin.list() / client.country_of_origin.load({"id": ...})."""
        from entity.country_of_origin_entity import CountryOfOriginEntity
        cached = getattr(self, "_country_of_origin", None)
        if cached is None:
            cached = CountryOfOriginEntity(self, None)
            self._country_of_origin = cached
        return cached

    def CountryOfOrigin(self, data=None):
        # Deprecated: use client.country_of_origin instead.
        from entity.country_of_origin_entity import CountryOfOriginEntity
        return CountryOfOriginEntity(self, data)


    @property
    def country_of_resettlement(self):
        """Idiomatic facade: client.country_of_resettlement.list() / client.country_of_resettlement.load({"id": ...})."""
        from entity.country_of_resettlement_entity import CountryOfResettlementEntity
        cached = getattr(self, "_country_of_resettlement", None)
        if cached is None:
            cached = CountryOfResettlementEntity(self, None)
            self._country_of_resettlement = cached
        return cached

    def CountryOfResettlement(self, data=None):
        # Deprecated: use client.country_of_resettlement instead.
        from entity.country_of_resettlement_entity import CountryOfResettlementEntity
        return CountryOfResettlementEntity(self, data)


    @property
    def demographic(self):
        """Idiomatic facade: client.demographic.list() / client.demographic.load({"id": ...})."""
        from entity.demographic_entity import DemographicEntity
        cached = getattr(self, "_demographic", None)
        if cached is None:
            cached = DemographicEntity(self, None)
            self._demographic = cached
        return cached

    def Demographic(self, data=None):
        # Deprecated: use client.demographic instead.
        from entity.demographic_entity import DemographicEntity
        return DemographicEntity(self, data)


    @property
    def departure(self):
        """Idiomatic facade: client.departure.list() / client.departure.load({"id": ...})."""
        from entity.departure_entity import DepartureEntity
        cached = getattr(self, "_departure", None)
        if cached is None:
            cached = DepartureEntity(self, None)
            self._departure = cached
        return cached

    def Departure(self, data=None):
        # Deprecated: use client.departure instead.
        from entity.departure_entity import DepartureEntity
        return DepartureEntity(self, data)


    @property
    def helper(self):
        """Idiomatic facade: client.helper.list() / client.helper.load({"id": ...})."""
        from entity.helper_entity import HelperEntity
        cached = getattr(self, "_helper", None)
        if cached is None:
            cached = HelperEntity(self, None)
            self._helper = cached
        return cached

    def Helper(self, data=None):
        # Deprecated: use client.helper instead.
        from entity.helper_entity import HelperEntity
        return HelperEntity(self, data)


    @property
    def region(self):
        """Idiomatic facade: client.region.list() / client.region.load({"id": ...})."""
        from entity.region_entity import RegionEntity
        cached = getattr(self, "_region", None)
        if cached is None:
            cached = RegionEntity(self, None)
            self._region = cached
        return cached

    def Region(self, data=None):
        # Deprecated: use client.region instead.
        from entity.region_entity import RegionEntity
        return RegionEntity(self, data)


    @property
    def submission(self):
        """Idiomatic facade: client.submission.list() / client.submission.load({"id": ...})."""
        from entity.submission_entity import SubmissionEntity
        cached = getattr(self, "_submission", None)
        if cached is None:
            cached = SubmissionEntity(self, None)
            self._submission = cached
        return cached

    def Submission(self, data=None):
        # Deprecated: use client.submission instead.
        from entity.submission_entity import SubmissionEntity
        return SubmissionEntity(self, data)


    @property
    def url_fetch(self):
        """Idiomatic facade: client.url_fetch.list() / client.url_fetch.load({"id": ...})."""
        from entity.url_fetch_entity import UrlFetchEntity
        cached = getattr(self, "_url_fetch", None)
        if cached is None:
            cached = UrlFetchEntity(self, None)
            self._url_fetch = cached
        return cached

    def UrlFetch(self, data=None):
        # Deprecated: use client.url_fetch instead.
        from entity.url_fetch_entity import UrlFetchEntity
        return UrlFetchEntity(self, data)


    @property
    def year(self):
        """Idiomatic facade: client.year.list() / client.year.load({"id": ...})."""
        from entity.year_entity import YearEntity
        cached = getattr(self, "_year", None)
        if cached is None:
            cached = YearEntity(self, None)
            self._year = cached
        return cached

    def Year(self, data=None):
        # Deprecated: use client.year instead.
        from entity.year_entity import YearEntity
        return YearEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None):
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk
