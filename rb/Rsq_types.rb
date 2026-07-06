# frozen_string_literal: true

# Typed models for the Rsq SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Category entity data model.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
Category = Struct.new(
  :code,
  :name,
  keyword_init: true
)

# Request payload for Category#list.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
CategoryListMatch = Struct.new(
  :code,
  :name,
  keyword_init: true
)

# CountryOfAsylum entity data model.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
CountryOfAsylum = Struct.new(
  :code,
  :name,
  :region,
  keyword_init: true
)

# Request payload for CountryOfAsylum#list.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
CountryOfAsylumListMatch = Struct.new(
  :code,
  :name,
  :region,
  keyword_init: true
)

# CountryOfOrigin entity data model.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
CountryOfOrigin = Struct.new(
  :code,
  :name,
  :region,
  keyword_init: true
)

# Request payload for CountryOfOrigin#list.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
CountryOfOriginListMatch = Struct.new(
  :code,
  :name,
  :region,
  keyword_init: true
)

# CountryOfResettlement entity data model.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
CountryOfResettlement = Struct.new(
  :code,
  :name,
  :region,
  keyword_init: true
)

# Request payload for CountryOfResettlement#list.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
CountryOfResettlementListMatch = Struct.new(
  :code,
  :name,
  :region,
  keyword_init: true
)

# Demographic entity data model.
#
# @!attribute [rw] destination
#   @return [String, nil]
#
# @!attribute [rw] destination_name
#   @return [String, nil]
#
# @!attribute [rw] females_adult
#   @return [Integer, nil]
#
# @!attribute [rw] females_senior
#   @return [Integer, nil]
#
# @!attribute [rw] females_total
#   @return [Integer, nil]
#
# @!attribute [rw] females_underage
#   @return [Integer, nil]
#
# @!attribute [rw] females_unknown
#   @return [Integer, nil]
#
# @!attribute [rw] males_adult
#   @return [Integer, nil]
#
# @!attribute [rw] males_senior
#   @return [Integer, nil]
#
# @!attribute [rw] males_total
#   @return [Integer, nil]
#
# @!attribute [rw] males_underage
#   @return [Integer, nil]
#
# @!attribute [rw] males_unknown
#   @return [Integer, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] origin_name
#   @return [String, nil]
#
# @!attribute [rw] other
#   @return [Integer, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Demographic = Struct.new(
  :destination,
  :destination_name,
  :females_adult,
  :females_senior,
  :females_total,
  :females_underage,
  :females_unknown,
  :males_adult,
  :males_senior,
  :males_total,
  :males_underage,
  :males_unknown,
  :origin,
  :origin_name,
  :other,
  :total,
  :year,
  keyword_init: true
)

# Request payload for Demographic#list.
#
# @!attribute [rw] destination
#   @return [String, nil]
#
# @!attribute [rw] destination_name
#   @return [String, nil]
#
# @!attribute [rw] females_adult
#   @return [Integer, nil]
#
# @!attribute [rw] females_senior
#   @return [Integer, nil]
#
# @!attribute [rw] females_total
#   @return [Integer, nil]
#
# @!attribute [rw] females_underage
#   @return [Integer, nil]
#
# @!attribute [rw] females_unknown
#   @return [Integer, nil]
#
# @!attribute [rw] males_adult
#   @return [Integer, nil]
#
# @!attribute [rw] males_senior
#   @return [Integer, nil]
#
# @!attribute [rw] males_total
#   @return [Integer, nil]
#
# @!attribute [rw] males_underage
#   @return [Integer, nil]
#
# @!attribute [rw] males_unknown
#   @return [Integer, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] origin_name
#   @return [String, nil]
#
# @!attribute [rw] other
#   @return [Integer, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
DemographicListMatch = Struct.new(
  :destination,
  :destination_name,
  :females_adult,
  :females_senior,
  :females_total,
  :females_underage,
  :females_unknown,
  :males_adult,
  :males_senior,
  :males_total,
  :males_underage,
  :males_unknown,
  :origin,
  :origin_name,
  :other,
  :total,
  :year,
  keyword_init: true
)

# Departure entity data model.
#
# @!attribute [rw] asylum
#   @return [String, nil]
#
# @!attribute [rw] asylum_name
#   @return [String, nil]
#
# @!attribute [rw] destination
#   @return [String, nil]
#
# @!attribute [rw] destination_name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] origin_name
#   @return [String, nil]
#
# @!attribute [rw] person
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Departure = Struct.new(
  :asylum,
  :asylum_name,
  :destination,
  :destination_name,
  :origin,
  :origin_name,
  :person,
  :year,
  keyword_init: true
)

# Request payload for Departure#list.
#
# @!attribute [rw] asylum
#   @return [String, nil]
#
# @!attribute [rw] asylum_name
#   @return [String, nil]
#
# @!attribute [rw] destination
#   @return [String, nil]
#
# @!attribute [rw] destination_name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] origin_name
#   @return [String, nil]
#
# @!attribute [rw] person
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
DepartureListMatch = Struct.new(
  :asylum,
  :asylum_name,
  :destination,
  :destination_name,
  :origin,
  :origin_name,
  :person,
  :year,
  keyword_init: true
)

# Helper entity data model.
class Helper
end

# Request payload for Helper#load.
class HelperLoadMatch
end

# Region entity data model.
#
# @!attribute [rw] name
#   @return [String, nil]
Region = Struct.new(
  :name,
  keyword_init: true
)

# Request payload for Region#list.
#
# @!attribute [rw] name
#   @return [String, nil]
RegionListMatch = Struct.new(
  :name,
  keyword_init: true
)

# Submission entity data model.
#
# @!attribute [rw] asylum
#   @return [String, nil]
#
# @!attribute [rw] asylum_name
#   @return [String, nil]
#
# @!attribute [rw] destination
#   @return [String, nil]
#
# @!attribute [rw] destination_name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] origin_name
#   @return [String, nil]
#
# @!attribute [rw] person
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
Submission = Struct.new(
  :asylum,
  :asylum_name,
  :destination,
  :destination_name,
  :origin,
  :origin_name,
  :person,
  :year,
  keyword_init: true
)

# Request payload for Submission#list.
#
# @!attribute [rw] asylum
#   @return [String, nil]
#
# @!attribute [rw] asylum_name
#   @return [String, nil]
#
# @!attribute [rw] destination
#   @return [String, nil]
#
# @!attribute [rw] destination_name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] origin_name
#   @return [String, nil]
#
# @!attribute [rw] person
#   @return [Integer, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
SubmissionListMatch = Struct.new(
  :asylum,
  :asylum_name,
  :destination,
  :destination_name,
  :origin,
  :origin_name,
  :person,
  :year,
  keyword_init: true
)

# UrlFetch entity data model.
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
UrlFetch = Struct.new(
  :status,
  :url,
  keyword_init: true
)

# Request payload for UrlFetch#list.
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
UrlFetchListMatch = Struct.new(
  :status,
  :url,
  keyword_init: true
)

# Year entity data model.
class Year
end

# Request payload for Year#list.
class YearListMatch
end

