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

---@class CountryOfAsylum
---@field code? string
---@field name? string
---@field region? string

---@class CountryOfAsylumListMatch

---@class CountryOfOrigin
---@field code? string
---@field name? string
---@field region? string

---@class CountryOfOriginListMatch

---@class CountryOfResettlement
---@field code? string
---@field name? string
---@field region? string

---@class CountryOfResettlementListMatch

---@class Demographic
---@field destination? string
---@field destination_name? string
---@field females_adult? number
---@field females_senior? number
---@field females_total? number
---@field females_underage? number
---@field females_unknown? number
---@field males_adult? number
---@field males_senior? number
---@field males_total? number
---@field males_underage? number
---@field males_unknown? number
---@field origin? string
---@field origin_name? string
---@field other? number
---@field total? number
---@field year? number

---@class DemographicListMatch

---@class Departure
---@field asylum? string
---@field asylum_name? string
---@field destination? string
---@field destination_name? string
---@field origin? string
---@field origin_name? string
---@field person? number
---@field year? number

---@class DepartureListMatch

---@class Helper

---@class HelperLoadMatch

---@class Region
---@field name? string

---@class RegionListMatch

---@class Submission
---@field asylum? string
---@field asylum_name? string
---@field destination? string
---@field destination_name? string
---@field origin? string
---@field origin_name? string
---@field person? number
---@field year? number

---@class SubmissionListMatch

---@class UrlFetch
---@field status? string
---@field url? string

---@class UrlFetchListMatch

---@class Year

---@class YearListMatch

local M = {}

return M
