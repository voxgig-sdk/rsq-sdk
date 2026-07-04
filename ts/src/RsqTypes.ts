// Typed models for the Rsq SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Category {
  code?: string
  name?: string
}

export type CategoryListMatch = Partial<Category>

export interface CountryOfAsylum {
  code?: string
  name?: string
  region?: string
}

export type CountryOfAsylumListMatch = Partial<CountryOfAsylum>

export interface CountryOfOrigin {
  code?: string
  name?: string
  region?: string
}

export type CountryOfOriginListMatch = Partial<CountryOfOrigin>

export interface CountryOfResettlement {
  code?: string
  name?: string
  region?: string
}

export type CountryOfResettlementListMatch = Partial<CountryOfResettlement>

export interface Demographic {
  destination?: string
  destination_name?: string
  females_adult?: number
  females_senior?: number
  females_total?: number
  females_underage?: number
  females_unknown?: number
  males_adult?: number
  males_senior?: number
  males_total?: number
  males_underage?: number
  males_unknown?: number
  origin?: string
  origin_name?: string
  other?: number
  total?: number
  year?: number
}

export type DemographicListMatch = Partial<Demographic>

export interface Departure {
  asylum?: string
  asylum_name?: string
  destination?: string
  destination_name?: string
  origin?: string
  origin_name?: string
  person?: number
  year?: number
}

export type DepartureListMatch = Partial<Departure>

export interface Helper {
}

export type HelperLoadMatch = Partial<Helper>

export interface Region {
  name?: string
}

export type RegionListMatch = Partial<Region>

export interface Submission {
  asylum?: string
  asylum_name?: string
  destination?: string
  destination_name?: string
  origin?: string
  origin_name?: string
  person?: number
  year?: number
}

export type SubmissionListMatch = Partial<Submission>

export interface UrlFetch {
  status?: string
  url?: string
}

export type UrlFetchListMatch = Partial<UrlFetch>

export interface Year {
}

export type YearListMatch = Partial<Year>

