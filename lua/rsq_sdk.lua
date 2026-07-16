-- Rsq SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local RsqSDK = {}
RsqSDK.__index = RsqSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

RsqSDK._make_feature = _make_feature


function RsqSDK.new(options)
  local self = setmetatable({}, RsqSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

  -- #BuildFeatures

  return self
end


function RsqSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function RsqSDK:get_utility()
  return Utility.copy(self._utility)
end


function RsqSDK:get_root_ctx()
  return self._rootctx
end


function RsqSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


function RsqSDK:direct(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end



-- Idiomatic facade: client:Category():list() / client:Category():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:Category(data)
  local EntityMod = require("entity.category_entity")
  if data == nil then
    if self._category == nil then
      self._category = EntityMod.new(self, nil)
    end
    return self._category
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CountryOfAsylum():list() / client:CountryOfAsylum():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:CountryOfAsylum(data)
  local EntityMod = require("entity.country_of_asylum_entity")
  if data == nil then
    if self._country_of_asylum == nil then
      self._country_of_asylum = EntityMod.new(self, nil)
    end
    return self._country_of_asylum
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CountryOfOrigin():list() / client:CountryOfOrigin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:CountryOfOrigin(data)
  local EntityMod = require("entity.country_of_origin_entity")
  if data == nil then
    if self._country_of_origin == nil then
      self._country_of_origin = EntityMod.new(self, nil)
    end
    return self._country_of_origin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CountryOfResettlement():list() / client:CountryOfResettlement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:CountryOfResettlement(data)
  local EntityMod = require("entity.country_of_resettlement_entity")
  if data == nil then
    if self._country_of_resettlement == nil then
      self._country_of_resettlement = EntityMod.new(self, nil)
    end
    return self._country_of_resettlement
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Demographic():list() / client:Demographic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:Demographic(data)
  local EntityMod = require("entity.demographic_entity")
  if data == nil then
    if self._demographic == nil then
      self._demographic = EntityMod.new(self, nil)
    end
    return self._demographic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Departure():list() / client:Departure():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:Departure(data)
  local EntityMod = require("entity.departure_entity")
  if data == nil then
    if self._departure == nil then
      self._departure = EntityMod.new(self, nil)
    end
    return self._departure
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Helper():list() / client:Helper():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:Helper(data)
  local EntityMod = require("entity.helper_entity")
  if data == nil then
    if self._helper == nil then
      self._helper = EntityMod.new(self, nil)
    end
    return self._helper
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Region():list() / client:Region():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:Region(data)
  local EntityMod = require("entity.region_entity")
  if data == nil then
    if self._region == nil then
      self._region = EntityMod.new(self, nil)
    end
    return self._region
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Submission():list() / client:Submission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:Submission(data)
  local EntityMod = require("entity.submission_entity")
  if data == nil then
    if self._submission == nil then
      self._submission = EntityMod.new(self, nil)
    end
    return self._submission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UrlFetch():list() / client:UrlFetch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:UrlFetch(data)
  local EntityMod = require("entity.url_fetch_entity")
  if data == nil then
    if self._url_fetch == nil then
      self._url_fetch = EntityMod.new(self, nil)
    end
    return self._url_fetch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Year():list() / client:Year():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function RsqSDK:Year(data)
  local EntityMod = require("entity.year_entity")
  if data == nil then
    if self._year == nil then
      self._year = EntityMod.new(self, nil)
    end
    return self._year
  end
  return EntityMod.new(self, data)
end




function RsqSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = RsqSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return RsqSDK
