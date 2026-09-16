# Rsq SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RsqFeatures
  def self.make_feature(name)
    case name
    when "base"
      RsqBaseFeature.new
    when "ratelimit"
      RsqRatelimitFeature.new
    when "retry"
      RsqRetryFeature.new
    when "test"
      RsqTestFeature.new
    when "timeout"
      RsqTimeoutFeature.new
    else
      RsqBaseFeature.new
    end
  end
end
