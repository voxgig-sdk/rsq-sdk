# CountryOfResettlement entity test

require "minitest/autorun"
require "json"
require_relative "../Rsq_sdk"
require_relative "runner"

class CountryOfResettlementEntityTest < Minitest::Test
  def test_create_instance
    testsdk = RsqSDK.test(nil, nil)
    ent = testsdk.CountryOfResettlement(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = country_of_resettlement_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "country_of_resettlement." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set RSQ_TEST_COUNTRY_OF_RESETTLEMENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    country_of_resettlement_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.country_of_resettlement")))
    country_of_resettlement_ref01_data = nil
    if country_of_resettlement_ref01_data_raw.length > 0
      country_of_resettlement_ref01_data = Helpers.to_map(country_of_resettlement_ref01_data_raw[0][1])
    end

    # LIST
    country_of_resettlement_ref01_ent = client.CountryOfResettlement(nil)
    country_of_resettlement_ref01_match = {}

    country_of_resettlement_ref01_list_result = country_of_resettlement_ref01_ent.list(country_of_resettlement_ref01_match, nil)
    assert country_of_resettlement_ref01_list_result.is_a?(Array)

  end
end

def country_of_resettlement_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "country_of_resettlement", "CountryOfResettlementTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = RsqSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["country_of_resettlement01", "country_of_resettlement02", "country_of_resettlement03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["RSQ_TEST_COUNTRY_OF_RESETTLEMENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "RSQ_TEST_COUNTRY_OF_RESETTLEMENT_ENTID" => idmap,
    "RSQ_TEST_LIVE" => "FALSE",
    "RSQ_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["RSQ_TEST_COUNTRY_OF_RESETTLEMENT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["RSQ_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = RsqSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["RSQ_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["RSQ_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
