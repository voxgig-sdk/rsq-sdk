package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCategoryEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewCountryOfAsylumEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewCountryOfOriginEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewCountryOfResettlementEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewDemographicEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewDepartureEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewHelperEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewRegionEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewSubmissionEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewUrlFetchEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

var NewYearEntityFunc func(client *RsqSDK, entopts map[string]any) RsqEntity

