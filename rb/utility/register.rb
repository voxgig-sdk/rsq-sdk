# Rsq SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RsqUtility.registrar = ->(u) {
  u.clean = RsqUtilities::Clean
  u.done = RsqUtilities::Done
  u.make_error = RsqUtilities::MakeError
  u.feature_add = RsqUtilities::FeatureAdd
  u.feature_hook = RsqUtilities::FeatureHook
  u.feature_init = RsqUtilities::FeatureInit
  u.fetcher = RsqUtilities::Fetcher
  u.make_fetch_def = RsqUtilities::MakeFetchDef
  u.make_context = RsqUtilities::MakeContext
  u.make_options = RsqUtilities::MakeOptions
  u.make_request = RsqUtilities::MakeRequest
  u.make_response = RsqUtilities::MakeResponse
  u.make_result = RsqUtilities::MakeResult
  u.make_point = RsqUtilities::MakePoint
  u.make_spec = RsqUtilities::MakeSpec
  u.make_url = RsqUtilities::MakeUrl
  u.param = RsqUtilities::Param
  u.prepare_auth = RsqUtilities::PrepareAuth
  u.prepare_body = RsqUtilities::PrepareBody
  u.prepare_headers = RsqUtilities::PrepareHeaders
  u.prepare_method = RsqUtilities::PrepareMethod
  u.prepare_params = RsqUtilities::PrepareParams
  u.prepare_path = RsqUtilities::PreparePath
  u.prepare_query = RsqUtilities::PrepareQuery
  u.result_basic = RsqUtilities::ResultBasic
  u.result_body = RsqUtilities::ResultBody
  u.result_headers = RsqUtilities::ResultHeaders
  u.transform_request = RsqUtilities::TransformRequest
  u.transform_response = RsqUtilities::TransformResponse
}
