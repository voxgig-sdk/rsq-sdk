package voxgigrsqsdk

import (
	"github.com/voxgig-sdk/rsq-sdk/go/core"
	"github.com/voxgig-sdk/rsq-sdk/go/entity"
	"github.com/voxgig-sdk/rsq-sdk/go/feature"
	_ "github.com/voxgig-sdk/rsq-sdk/go/utility"
)

// Type aliases preserve external API.
type RsqSDK = core.RsqSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RsqEntity = core.RsqEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RsqError = core.RsqError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCategoryEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewCategoryEntity(client, entopts)
	}
	core.NewCountryOfAsylumEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewCountryOfAsylumEntity(client, entopts)
	}
	core.NewCountryOfOriginEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewCountryOfOriginEntity(client, entopts)
	}
	core.NewCountryOfResettlementEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewCountryOfResettlementEntity(client, entopts)
	}
	core.NewDemographicEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewDemographicEntity(client, entopts)
	}
	core.NewDepartureEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewDepartureEntity(client, entopts)
	}
	core.NewHelperEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewHelperEntity(client, entopts)
	}
	core.NewRegionEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewRegionEntity(client, entopts)
	}
	core.NewSubmissionEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewSubmissionEntity(client, entopts)
	}
	core.NewUrlFetchEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewUrlFetchEntity(client, entopts)
	}
	core.NewYearEntityFunc = func(client *core.RsqSDK, entopts map[string]any) core.RsqEntity {
		return entity.NewYearEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRsqSDK = core.NewRsqSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewRsqSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *RsqSDK  { return NewRsqSDK(nil) }
func Test() *RsqSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
