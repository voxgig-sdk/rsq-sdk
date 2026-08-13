// Typed models for the Rsq SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/rsq-sdk/go/core"
)

// Category is the typed data model for the category entity.
type Category struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CategoryListMatch is the typed request payload for Category.ListTyped.
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

// CountryOfAsylumListMatch is the typed request payload for CountryOfAsylum.ListTyped.
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

// CountryOfOriginListMatch is the typed request payload for CountryOfOrigin.ListTyped.
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

// CountryOfResettlementListMatch is the typed request payload for CountryOfResettlement.ListTyped.
type CountryOfResettlementListMatch struct {
	Code *string `json:"code,omitempty"`
	Name *string `json:"name,omitempty"`
	Region *string `json:"region,omitempty"`
}

// Demographic is the typed data model for the demographic entity.
type Demographic struct {
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	FemalesAdult *int `json:"femalesAdult,omitempty"`
	FemalesSenior *int `json:"femalesSenior,omitempty"`
	FemalesTotal *int `json:"femalesTotal,omitempty"`
	FemalesUnderage *int `json:"femalesUnderage,omitempty"`
	FemalesUnknown *int `json:"femalesUnknown,omitempty"`
	MalesAdult *int `json:"malesAdult,omitempty"`
	MalesSenior *int `json:"malesSenior,omitempty"`
	MalesTotal *int `json:"malesTotal,omitempty"`
	MalesUnderage *int `json:"malesUnderage,omitempty"`
	MalesUnknown *int `json:"malesUnknown,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Other *int `json:"other,omitempty"`
	Total *int `json:"total,omitempty"`
	Year *int `json:"year,omitempty"`
}

// DemographicListMatch is the typed request payload for Demographic.ListTyped.
type DemographicListMatch struct {
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	FemalesAdult *int `json:"femalesAdult,omitempty"`
	FemalesSenior *int `json:"femalesSenior,omitempty"`
	FemalesTotal *int `json:"femalesTotal,omitempty"`
	FemalesUnderage *int `json:"femalesUnderage,omitempty"`
	FemalesUnknown *int `json:"femalesUnknown,omitempty"`
	MalesAdult *int `json:"malesAdult,omitempty"`
	MalesSenior *int `json:"malesSenior,omitempty"`
	MalesTotal *int `json:"malesTotal,omitempty"`
	MalesUnderage *int `json:"malesUnderage,omitempty"`
	MalesUnknown *int `json:"malesUnknown,omitempty"`
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
	Persons *int `json:"persons,omitempty"`
	Year *int `json:"year,omitempty"`
}

// DepartureListMatch is the typed request payload for Departure.ListTyped.
type DepartureListMatch struct {
	Asylum *string `json:"asylum,omitempty"`
	AsylumName *string `json:"asylum_name,omitempty"`
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Persons *int `json:"persons,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Helper is the typed data model for the helper entity.
type Helper struct {
}

// HelperLoadMatch is the typed request payload for Helper.LoadTyped.
type HelperLoadMatch struct {
}

// Region is the typed data model for the region entity.
type Region struct {
	Name *string `json:"name,omitempty"`
}

// RegionListMatch is the typed request payload for Region.ListTyped.
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
	Persons *int `json:"persons,omitempty"`
	Year *int `json:"year,omitempty"`
}

// SubmissionListMatch is the typed request payload for Submission.ListTyped.
type SubmissionListMatch struct {
	Asylum *string `json:"asylum,omitempty"`
	AsylumName *string `json:"asylum_name,omitempty"`
	Destination *string `json:"destination,omitempty"`
	DestinationName *string `json:"destination_name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	OriginName *string `json:"origin_name,omitempty"`
	Persons *int `json:"persons,omitempty"`
	Year *int `json:"year,omitempty"`
}

// UrlFetch is the typed data model for the url_fetch entity.
type UrlFetch struct {
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// UrlFetchListMatch is the typed request payload for UrlFetch.ListTyped.
type UrlFetchListMatch struct {
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Year is the typed data model for the year entity.
type Year struct {
}

// YearListMatch is the typed request payload for Year.ListTyped.
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
