-- Typed models for the Rsq SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Category
---@field code? string
---@field name? string

---@class CategoryListMatch
---@field code? string
---@field name? string

---@class CountryOfAsylum
---@field code? string
---@field name? string
---@field region? string

---@class CountryOfAsylumListMatch
---@field code? string
---@field name? string
---@field region? string

---@class CountryOfOrigin
---@field code? string
---@field name? string
---@field region? string

---@class CountryOfOriginListMatch
---@field code? string
---@field name? string
---@field region? string

---@class CountryOfResettlement
---@field code? string
---@field name? string
---@field region? string

---@class CountryOfResettlementListMatch
---@field code? string
---@field name? string
---@field region? string

---@class Demographic
---@field destination? string
---@field destination_name? string
---@field femalesAdult? number
---@field femalesSenior? number
---@field femalesTotal? number
---@field femalesUnderage? number
---@field femalesUnknown? number
---@field malesAdult? number
---@field malesSenior? number
---@field malesTotal? number
---@field malesUnderage? number
---@field malesUnknown? number
---@field origin? string
---@field origin_name? string
---@field other? number
---@field total? number
---@field year? number

---@class DemographicListMatch
---@field destination? string
---@field destination_name? string
---@field femalesAdult? number
---@field femalesSenior? number
---@field femalesTotal? number
---@field femalesUnderage? number
---@field femalesUnknown? number
---@field malesAdult? number
---@field malesSenior? number
---@field malesTotal? number
---@field malesUnderage? number
---@field malesUnknown? number
---@field origin? string
---@field origin_name? string
---@field other? number
---@field total? number
---@field year? number

---@class Departure
---@field asylum? string
---@field asylum_name? string
---@field destination? string
---@field destination_name? string
---@field origin? string
---@field origin_name? string
---@field persons? number
---@field year? number

---@class DepartureListMatch
---@field asylum? string
---@field asylum_name? string
---@field destination? string
---@field destination_name? string
---@field origin? string
---@field origin_name? string
---@field persons? number
---@field year? number

---@class Helper

---@class HelperLoadMatch

---@class Region
---@field name? string

---@class RegionListMatch
---@field name? string

---@class Submission
---@field asylum? string
---@field asylum_name? string
---@field destination? string
---@field destination_name? string
---@field origin? string
---@field origin_name? string
---@field persons? number
---@field year? number

---@class SubmissionListMatch
---@field asylum? string
---@field asylum_name? string
---@field destination? string
---@field destination_name? string
---@field origin? string
---@field origin_name? string
---@field persons? number
---@field year? number

---@class UrlFetch
---@field status? string
---@field url? string

---@class UrlFetchListMatch
---@field status? string
---@field url? string

---@class Year

---@class YearListMatch

local M = {}

return M
