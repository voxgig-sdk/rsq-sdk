package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/rsq-sdk"
	"github.com/voxgig-sdk/rsq-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestCountryOfOriginEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CountryOfOrigin(nil)
		if ent == nil {
			t.Fatal("expected non-nil CountryOfOriginEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := country_of_originBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "country_of_origin." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set RSQ_TEST_COUNTRY_OF_ORIGIN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		countryOfOriginRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.country_of_origin", setup.data)))
		var countryOfOriginRef01Data map[string]any
		if len(countryOfOriginRef01DataRaw) > 0 {
			countryOfOriginRef01Data = core.ToMapAny(countryOfOriginRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = countryOfOriginRef01Data

		// LIST
		countryOfOriginRef01Ent := client.CountryOfOrigin(nil)
		countryOfOriginRef01Match := map[string]any{}

		countryOfOriginRef01ListResult, err := countryOfOriginRef01Ent.List(countryOfOriginRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, countryOfOriginRef01ListOk := countryOfOriginRef01ListResult.([]any)
		if !countryOfOriginRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", countryOfOriginRef01ListResult)
		}

	})
}

func country_of_originBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "country_of_origin", "CountryOfOriginTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read country_of_origin test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse country_of_origin test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"country_of_origin01", "country_of_origin02", "country_of_origin03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("RSQ_TEST_COUNTRY_OF_ORIGIN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"RSQ_TEST_COUNTRY_OF_ORIGIN_ENTID": idmap,
		"RSQ_TEST_LIVE":      "FALSE",
		"RSQ_TEST_EXPLAIN":   "FALSE",
		"RSQ_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["RSQ_TEST_COUNTRY_OF_ORIGIN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["RSQ_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["RSQ_APIKEY"],
			},
			extra,
		})
		client = sdk.NewRsqSDK(core.ToMapAny(mergedOpts))
	}

	live := env["RSQ_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["RSQ_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
