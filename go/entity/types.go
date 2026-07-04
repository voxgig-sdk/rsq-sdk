// Typed models for the Rsq SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Category is the typed data model for the category entity.
type Category struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CategoryListMatch mirrors the category fields as an all-optional match
// filter (Go analog of Partial<Category>).
type CategoryListMatch struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CountryOfAsylum is the typed data model for the country_of_asylum entity.
type CountryOfAsylum struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// CountryOfAsylumListMatch mirrors the country_of_asylum fields as an all-optional match
// filter (Go analog of Partial<CountryOfAsylum>).
type CountryOfAsylumListMatch struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// CountryOfOrigin is the typed data model for the country_of_origin entity.
type CountryOfOrigin struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// CountryOfOriginListMatch mirrors the country_of_origin fields as an all-optional match
// filter (Go analog of Partial<CountryOfOrigin>).
type CountryOfOriginListMatch struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// CountryOfResettlement is the typed data model for the country_of_resettlement entity.
type CountryOfResettlement struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// CountryOfResettlementListMatch mirrors the country_of_resettlement fields as an all-optional match
// filter (Go analog of Partial<CountryOfResettlement>).
type CountryOfResettlementListMatch struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// Demographic is the typed data model for the demographic entity.
type Demographic struct {
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	FemalesAdult *int `json:"females_adult,omitempty"`
	FemalesSenior *int `json:"females_senior,omitempty"`
	FemalesTotal *int `json:"females_total,omitempty"`
	FemalesUnderage *int `json:"females_underage,omitempty"`
	FemalesUnknown *int `json:"females_unknown,omitempty"`
	MalesAdult *int `json:"males_adult,omitempty"`
	MalesSenior *int `json:"males_senior,omitempty"`
	MalesTotal *int `json:"males_total,omitempty"`
	MalesUnderage *int `json:"males_underage,omitempty"`
	MalesUnknown *int `json:"males_unknown,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Other *int `json:"other,omitempty"`
	Total *int `json:"total,omitempty"`
	Year *int `json:"year,omitempty"`
}

// DemographicListMatch mirrors the demographic fields as an all-optional match
// filter (Go analog of Partial<Demographic>).
type DemographicListMatch struct {
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	FemalesAdult *int `json:"females_adult,omitempty"`
	FemalesSenior *int `json:"females_senior,omitempty"`
	FemalesTotal *int `json:"females_total,omitempty"`
	FemalesUnderage *int `json:"females_underage,omitempty"`
	FemalesUnknown *int `json:"females_unknown,omitempty"`
	MalesAdult *int `json:"males_adult,omitempty"`
	MalesSenior *int `json:"males_senior,omitempty"`
	MalesTotal *int `json:"males_total,omitempty"`
	MalesUnderage *int `json:"males_underage,omitempty"`
	MalesUnknown *int `json:"males_unknown,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Other *int `json:"other,omitempty"`
	Total *int `json:"total,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Departure is the typed data model for the departure entity.
type Departure struct {
	Asylum *string `json:"asylum,omitempty"`
	AsylumName *string `json:"asylum_name,omitempty"`
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Person *int `json:"person,omitempty"`
	Year *int `json:"year,omitempty"`
}

// DepartureListMatch mirrors the departure fields as an all-optional match
// filter (Go analog of Partial<Departure>).
type DepartureListMatch struct {
	Asylum *string `json:"asylum,omitempty"`
	AsylumName *string `json:"asylum_name,omitempty"`
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Person *int `json:"person,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Helper is the typed data model for the helper entity.
type Helper struct {
}

// HelperLoadMatch mirrors the helper fields as an all-optional match
// filter (Go analog of Partial<Helper>).
type HelperLoadMatch struct {
}

// Region is the typed data model for the region entity.
type Region struct {
	Name *string `json:"name,omitempty"`
}

// RegionListMatch mirrors the region fields as an all-optional match
// filter (Go analog of Partial<Region>).
type RegionListMatch struct {
	Name *string `json:"name,omitempty"`
}

// Submission is the typed data model for the submission entity.
type Submission struct {
	Asylum *string `json:"asylum,omitempty"`
	AsylumName *string `json:"asylum_name,omitempty"`
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Person *int `json:"person,omitempty"`
	Year *int `json:"year,omitempty"`
}

// SubmissionListMatch mirrors the submission fields as an all-optional match
// filter (Go analog of Partial<Submission>).
type SubmissionListMatch struct {
	Asylum *string `json:"asylum,omitempty"`
	AsylumName *string `json:"asylum_name,omitempty"`
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Person *int `json:"person,omitempty"`
	Year *int `json:"year,omitempty"`
}

// UrlFetch is the typed data model for the url_fetch entity.
type UrlFetch struct {
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// UrlFetchListMatch mirrors the url_fetch fields as an all-optional match
// filter (Go analog of Partial<UrlFetch>).
type UrlFetchListMatch struct {
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Year is the typed data model for the year entity.
type Year struct {
}

// YearListMatch mirrors the year fields as an all-optional match
// filter (Go analog of Partial<Year>).
type YearListMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
