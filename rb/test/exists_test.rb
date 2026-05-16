# Rsq SDK exists test

require "minitest/autorun"
require_relative "../Rsq_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RsqSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
