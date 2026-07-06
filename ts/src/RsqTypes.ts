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

export interface CategoryListMatch {
  code?: string
  name?: string
}

export interface CountryOfAsylum {
  code?: string
  name?: string
  region?: string
}

export interface CountryOfAsylumListMatch {
  code?: string
  name?: string
  region?: string
}

export interface CountryOfOrigin {
  code?: string
  name?: string
  region?: string
}

export interface CountryOfOriginListMatch {
  code?: string
  name?: string
  region?: string
}

export interface CountryOfResettlement {
  code?: string
  name?: string
  region?: string
}

export interface CountryOfResettlementListMatch {
  code?: string
  name?: string
  region?: string
}

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

export interface DemographicListMatch {
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

export interface DepartureListMatch {
  asylum?: string
  asylum_name?: string
  destination?: string
  destination_name?: string
  origin?: string
  origin_name?: string
  person?: number
  year?: number
}

export interface Helper {
}

export interface HelperLoadMatch {
}

export interface Region {
  name?: string
}

export interface RegionListMatch {
  name?: string
}

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

export interface SubmissionListMatch {
  asylum?: string
  asylum_name?: string
  destination?: string
  destination_name?: string
  origin?: string
  origin_name?: string
  person?: number
  year?: number
}

export interface UrlFetch {
  status?: string
  url?: string
}

export interface UrlFetchListMatch {
  status?: string
  url?: string
}

export interface Year {
}

export interface YearListMatch {
}

