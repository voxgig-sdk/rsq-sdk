# Rsq SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RsqFeatures
  def self.make_feature(name)
    case name
    when "base"
      RsqBaseFeature.new
    when "test"
      RsqTestFeature.new
    else
      RsqBaseFeature.new
    end
  end
end
