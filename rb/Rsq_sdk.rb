# Rsq SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Rsq_types'


class RsqSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = RsqUtility.new
    @_utility = utility

    config = RsqConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features from config.
    feature_opts = RsqHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      items = VoxgigStruct.items(feature_opts)
      if items
        items.each do |item|
          fname = item[0]
          fopts = RsqHelpers.to_map(item[1])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, RsqFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    RsqUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = RsqHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = RsqHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = RsqHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = RsqSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    utility.make_fetch_def.call(ctx)
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue RsqError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = RsqHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = RsqHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Idiomatic facade: client.category.list / client.category.load({ "id" => ... })
  def category
    require_relative 'entity/category_entity'
    @category ||= CategoryEntity.new(self, nil)
  end

  # Deprecated: use client.category instead.
  def Category(data = nil)
    require_relative 'entity/category_entity'
    CategoryEntity.new(self, data)
  end


  # Idiomatic facade: client.country_of_asylum.list / client.country_of_asylum.load({ "id" => ... })
  def country_of_asylum
    require_relative 'entity/country_of_asylum_entity'
    @country_of_asylum ||= CountryOfAsylumEntity.new(self, nil)
  end

  # Deprecated: use client.country_of_asylum instead.
  def CountryOfAsylum(data = nil)
    require_relative 'entity/country_of_asylum_entity'
    CountryOfAsylumEntity.new(self, data)
  end


  # Idiomatic facade: client.country_of_origin.list / client.country_of_origin.load({ "id" => ... })
  def country_of_origin
    require_relative 'entity/country_of_origin_entity'
    @country_of_origin ||= CountryOfOriginEntity.new(self, nil)
  end

  # Deprecated: use client.country_of_origin instead.
  def CountryOfOrigin(data = nil)
    require_relative 'entity/country_of_origin_entity'
    CountryOfOriginEntity.new(self, data)
  end


  # Idiomatic facade: client.country_of_resettlement.list / client.country_of_resettlement.load({ "id" => ... })
  def country_of_resettlement
    require_relative 'entity/country_of_resettlement_entity'
    @country_of_resettlement ||= CountryOfResettlementEntity.new(self, nil)
  end

  # Deprecated: use client.country_of_resettlement instead.
  def CountryOfResettlement(data = nil)
    require_relative 'entity/country_of_resettlement_entity'
    CountryOfResettlementEntity.new(self, data)
  end


  # Idiomatic facade: client.demographic.list / client.demographic.load({ "id" => ... })
  def demographic
    require_relative 'entity/demographic_entity'
    @demographic ||= DemographicEntity.new(self, nil)
  end

  # Deprecated: use client.demographic instead.
  def Demographic(data = nil)
    require_relative 'entity/demographic_entity'
    DemographicEntity.new(self, data)
  end


  # Idiomatic facade: client.departure.list / client.departure.load({ "id" => ... })
  def departure
    require_relative 'entity/departure_entity'
    @departure ||= DepartureEntity.new(self, nil)
  end

  # Deprecated: use client.departure instead.
  def Departure(data = nil)
    require_relative 'entity/departure_entity'
    DepartureEntity.new(self, data)
  end


  # Idiomatic facade: client.helper.list / client.helper.load({ "id" => ... })
  def helper
    require_relative 'entity/helper_entity'
    @helper ||= HelperEntity.new(self, nil)
  end

  # Deprecated: use client.helper instead.
  def Helper(data = nil)
    require_relative 'entity/helper_entity'
    HelperEntity.new(self, data)
  end


  # Idiomatic facade: client.region.list / client.region.load({ "id" => ... })
  def region
    require_relative 'entity/region_entity'
    @region ||= RegionEntity.new(self, nil)
  end

  # Deprecated: use client.region instead.
  def Region(data = nil)
    require_relative 'entity/region_entity'
    RegionEntity.new(self, data)
  end


  # Idiomatic facade: client.submission.list / client.submission.load({ "id" => ... })
  def submission
    require_relative 'entity/submission_entity'
    @submission ||= SubmissionEntity.new(self, nil)
  end

  # Deprecated: use client.submission instead.
  def Submission(data = nil)
    require_relative 'entity/submission_entity'
    SubmissionEntity.new(self, data)
  end


  # Idiomatic facade: client.url_fetch.list / client.url_fetch.load({ "id" => ... })
  def url_fetch
    require_relative 'entity/url_fetch_entity'
    @url_fetch ||= UrlFetchEntity.new(self, nil)
  end

  # Deprecated: use client.url_fetch instead.
  def UrlFetch(data = nil)
    require_relative 'entity/url_fetch_entity'
    UrlFetchEntity.new(self, data)
  end


  # Idiomatic facade: client.year.list / client.year.load({ "id" => ... })
  def year
    require_relative 'entity/year_entity'
    @year ||= YearEntity.new(self, nil)
  end

  # Deprecated: use client.year instead.
  def Year(data = nil)
    require_relative 'entity/year_entity'
    YearEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = RsqSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
