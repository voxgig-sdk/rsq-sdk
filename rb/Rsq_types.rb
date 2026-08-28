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
# @!attribute [rw] language
#   @return [String, nil]
CategoryListMatch = Struct.new(
  :language,
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
# @!attribute [rw] language
#   @return [String, nil]
CountryOfAsylumListMatch = Struct.new(
  :language,
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
# @!attribute [rw] language
#   @return [String, nil]
CountryOfOriginListMatch = Struct.new(
  :language,
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
# @!attribute [rw] language
#   @return [String, nil]
CountryOfResettlementListMatch = Struct.new(
  :language,
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
# @!attribute [rw] femalesAdult
#   @return [Integer, nil]
#
# @!attribute [rw] femalesSenior
#   @return [Integer, nil]
#
# @!attribute [rw] femalesTotal
#   @return [Integer, nil]
#
# @!attribute [rw] femalesUnderage
#   @return [Integer, nil]
#
# @!attribute [rw] femalesUnknown
#   @return [Integer, nil]
#
# @!attribute [rw] malesAdult
#   @return [Integer, nil]
#
# @!attribute [rw] malesSenior
#   @return [Integer, nil]
#
# @!attribute [rw] malesTotal
#   @return [Integer, nil]
#
# @!attribute [rw] malesUnderage
#   @return [Integer, nil]
#
# @!attribute [rw] malesUnknown
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
  :femalesAdult,
  :femalesSenior,
  :femalesTotal,
  :femalesUnderage,
  :femalesUnknown,
  :malesAdult,
  :malesSenior,
  :malesTotal,
  :malesUnderage,
  :malesUnknown,
  :origin,
  :origin_name,
  :other,
  :total,
  :year,
  keyword_init: true
)

# Request payload for Demographic#list.
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [Array, nil]
#
# @!attribute [rw] origin_compare
#   @return [Boolean, nil]
#
# @!attribute [rw] resettlement
#   @return [Array, nil]
#
# @!attribute [rw] year
#   @return [Array, nil]
DemographicListMatch = Struct.new(
  :language,
  :origin,
  :origin_compare,
  :resettlement,
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
# @!attribute [rw] persons
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
  :persons,
  :year,
  keyword_init: true
)

# Request payload for Departure#list.
#
# @!attribute [rw] asylum
#   @return [Array, nil]
#
# @!attribute [rw] asylum_compare
#   @return [Boolean, nil]
#
# @!attribute [rw] asylum_sort
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [Array, nil]
#
# @!attribute [rw] origin_compare
#   @return [Boolean, nil]
#
# @!attribute [rw] origin_sort
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] persons_sort
#   @return [String, nil]
#
# @!attribute [rw] resettlement
#   @return [Array, nil]
#
# @!attribute [rw] resettlement_sort
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Array, nil]
#
# @!attribute [rw] year_sort
#   @return [String, nil]
DepartureListMatch = Struct.new(
  :asylum,
  :asylum_compare,
  :asylum_sort,
  :language,
  :origin,
  :origin_compare,
  :origin_sort,
  :page,
  :persons_sort,
  :resettlement,
  :resettlement_sort,
  :year,
  :year_sort,
  keyword_init: true
)

# Helper entity data model.
class Helper
end

# Request payload for Helper#load.
#
# @!attribute [rw] origin
#   @return [Array, nil]
#
# @!attribute [rw] resettlement
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Array, nil]
HelperLoadMatch = Struct.new(
  :origin,
  :resettlement,
  :type,
  :year,
  keyword_init: true
)

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
# @!attribute [rw] language
#   @return [String, nil]
RegionListMatch = Struct.new(
  :language,
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
# @!attribute [rw] persons
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
  :persons,
  :year,
  keyword_init: true
)

# Request payload for Submission#list.
#
# @!attribute [rw] asylum
#   @return [Array, nil]
#
# @!attribute [rw] asylum_compare
#   @return [Boolean, nil]
#
# @!attribute [rw] asylum_sort
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [Array, nil]
#
# @!attribute [rw] origin_compare
#   @return [Boolean, nil]
#
# @!attribute [rw] origin_sort
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] persons_sort
#   @return [String, nil]
#
# @!attribute [rw] resettlement
#   @return [Array, nil]
#
# @!attribute [rw] resettlement_sort
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Array, nil]
#
# @!attribute [rw] year_sort
#   @return [String, nil]
SubmissionListMatch = Struct.new(
  :asylum,
  :asylum_compare,
  :asylum_sort,
  :language,
  :origin,
  :origin_compare,
  :origin_sort,
  :page,
  :persons_sort,
  :resettlement,
  :resettlement_sort,
  :year,
  :year_sort,
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
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] url_hash
#   @return [String]
UrlFetchListMatch = Struct.new(
  :language,
  :url_hash,
  keyword_init: true
)

# Year entity data model.
class Year
end

# Request payload for Year#list.
class YearListMatch
end

