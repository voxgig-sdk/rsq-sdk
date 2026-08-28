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
  language?: string
}

export interface CountryOfAsylum {
  code?: string
  name?: string
  region?: string
}

export interface CountryOfAsylumListMatch {
  language?: string
}

export interface CountryOfOrigin {
  code?: string
  name?: string
  region?: string
}

export interface CountryOfOriginListMatch {
  language?: string
}

export interface CountryOfResettlement {
  code?: string
  name?: string
  region?: string
}

export interface CountryOfResettlementListMatch {
  language?: string
}

export interface Demographic {
  destination?: string
  destination_name?: string
  femalesAdult?: number
  femalesSenior?: number
  femalesTotal?: number
  femalesUnderage?: number
  femalesUnknown?: number
  malesAdult?: number
  malesSenior?: number
  malesTotal?: number
  malesUnderage?: number
  malesUnknown?: number
  origin?: string
  origin_name?: string
  other?: number
  total?: number
  year?: number
}

export interface DemographicListMatch {
  language?: string
  origin?: any[]
  origin_compare?: boolean
  resettlement?: any[]
  year?: any[]
}

export interface Departure {
  asylum?: string
  asylum_name?: string
  destination?: string
  destination_name?: string
  origin?: string
  origin_name?: string
  persons?: number
  year?: number
}

export interface DepartureListMatch {
  asylum?: any[]
  asylum_compare?: boolean
  asylum_sort?: string
  language?: string
  origin?: any[]
  origin_compare?: boolean
  origin_sort?: string
  page?: number
  persons_sort?: string
  resettlement?: any[]
  resettlement_sort?: string
  year?: any[]
  year_sort?: string
}

export interface Helper {
}

export interface HelperLoadMatch {
  origin?: any[]
  resettlement?: any[]
  type?: string
  year?: any[]
}

export interface Region {
  name?: string
}

export interface RegionListMatch {
  language?: string
}

export interface Submission {
  asylum?: string
  asylum_name?: string
  destination?: string
  destination_name?: string
  origin?: string
  origin_name?: string
  persons?: number
  year?: number
}

export interface SubmissionListMatch {
  asylum?: any[]
  asylum_compare?: boolean
  asylum_sort?: string
  language?: string
  origin?: any[]
  origin_compare?: boolean
  origin_sort?: string
  page?: number
  persons_sort?: string
  resettlement?: any[]
  resettlement_sort?: string
  year?: any[]
  year_sort?: string
}

export interface UrlFetch {
  status?: string
  url?: string
}

export interface UrlFetchListMatch {
  language?: string
  url_hash: string
}

export interface Year {
}

export interface YearListMatch {

  // Selects a custom action instead of the plain list:
  //   'demographic'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

