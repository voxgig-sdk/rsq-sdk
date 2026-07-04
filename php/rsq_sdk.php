<?php
declare(strict_types=1);

// Rsq SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

class RsqSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new RsqUtility();
        $this->_utility = $utility;

        $config = RsqConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features from config.
        $feature_opts = RsqHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $items = Struct::items($feature_opts);
            if ($items) {
                foreach ($items as $item) {
                    $fname = $item[0];
                    $fopts = RsqHelpers::to_map($item[1]);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, RsqFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return RsqUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = RsqHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = RsqHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = RsqHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new RsqSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = RsqHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = RsqHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_category = null;

    // Canonical facade: $client->Category()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->category()
    // resolves here too.
    public function Category($data = null)
    {
        require_once __DIR__ . '/entity/category_entity.php';
        if ($data === null) {
            if ($this->_category === null) {
                $this->_category = new CategoryEntity($this, null);
            }
            return $this->_category;
        }
        return new CategoryEntity($this, $data);
    }


    private $_country_of_asylum = null;

    // Canonical facade: $client->CountryOfAsylum()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->country_of_asylum()
    // resolves here too.
    public function CountryOfAsylum($data = null)
    {
        require_once __DIR__ . '/entity/country_of_asylum_entity.php';
        if ($data === null) {
            if ($this->_country_of_asylum === null) {
                $this->_country_of_asylum = new CountryOfAsylumEntity($this, null);
            }
            return $this->_country_of_asylum;
        }
        return new CountryOfAsylumEntity($this, $data);
    }


    private $_country_of_origin = null;

    // Canonical facade: $client->CountryOfOrigin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->country_of_origin()
    // resolves here too.
    public function CountryOfOrigin($data = null)
    {
        require_once __DIR__ . '/entity/country_of_origin_entity.php';
        if ($data === null) {
            if ($this->_country_of_origin === null) {
                $this->_country_of_origin = new CountryOfOriginEntity($this, null);
            }
            return $this->_country_of_origin;
        }
        return new CountryOfOriginEntity($this, $data);
    }


    private $_country_of_resettlement = null;

    // Canonical facade: $client->CountryOfResettlement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->country_of_resettlement()
    // resolves here too.
    public function CountryOfResettlement($data = null)
    {
        require_once __DIR__ . '/entity/country_of_resettlement_entity.php';
        if ($data === null) {
            if ($this->_country_of_resettlement === null) {
                $this->_country_of_resettlement = new CountryOfResettlementEntity($this, null);
            }
            return $this->_country_of_resettlement;
        }
        return new CountryOfResettlementEntity($this, $data);
    }


    private $_demographic = null;

    // Canonical facade: $client->Demographic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->demographic()
    // resolves here too.
    public function Demographic($data = null)
    {
        require_once __DIR__ . '/entity/demographic_entity.php';
        if ($data === null) {
            if ($this->_demographic === null) {
                $this->_demographic = new DemographicEntity($this, null);
            }
            return $this->_demographic;
        }
        return new DemographicEntity($this, $data);
    }


    private $_departure = null;

    // Canonical facade: $client->Departure()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->departure()
    // resolves here too.
    public function Departure($data = null)
    {
        require_once __DIR__ . '/entity/departure_entity.php';
        if ($data === null) {
            if ($this->_departure === null) {
                $this->_departure = new DepartureEntity($this, null);
            }
            return $this->_departure;
        }
        return new DepartureEntity($this, $data);
    }


    private $_helper = null;

    // Canonical facade: $client->Helper()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->helper()
    // resolves here too.
    public function Helper($data = null)
    {
        require_once __DIR__ . '/entity/helper_entity.php';
        if ($data === null) {
            if ($this->_helper === null) {
                $this->_helper = new HelperEntity($this, null);
            }
            return $this->_helper;
        }
        return new HelperEntity($this, $data);
    }


    private $_region = null;

    // Canonical facade: $client->Region()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->region()
    // resolves here too.
    public function Region($data = null)
    {
        require_once __DIR__ . '/entity/region_entity.php';
        if ($data === null) {
            if ($this->_region === null) {
                $this->_region = new RegionEntity($this, null);
            }
            return $this->_region;
        }
        return new RegionEntity($this, $data);
    }


    private $_submission = null;

    // Canonical facade: $client->Submission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->submission()
    // resolves here too.
    public function Submission($data = null)
    {
        require_once __DIR__ . '/entity/submission_entity.php';
        if ($data === null) {
            if ($this->_submission === null) {
                $this->_submission = new SubmissionEntity($this, null);
            }
            return $this->_submission;
        }
        return new SubmissionEntity($this, $data);
    }


    private $_url_fetch = null;

    // Canonical facade: $client->UrlFetch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->url_fetch()
    // resolves here too.
    public function UrlFetch($data = null)
    {
        require_once __DIR__ . '/entity/url_fetch_entity.php';
        if ($data === null) {
            if ($this->_url_fetch === null) {
                $this->_url_fetch = new UrlFetchEntity($this, null);
            }
            return $this->_url_fetch;
        }
        return new UrlFetchEntity($this, $data);
    }


    private $_year = null;

    // Canonical facade: $client->Year()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->year()
    // resolves here too.
    public function Year($data = null)
    {
        require_once __DIR__ . '/entity/year_entity.php';
        if ($data === null) {
            if ($this->_year === null) {
                $this->_year = new YearEntity($this, null);
            }
            return $this->_year;
        }
        return new YearEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new RsqSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
