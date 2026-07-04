<?php
declare(strict_types=1);

// Typed models for the Rsq SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Category entity data model. */
class Category
{
    public ?string $code = null;
    public ?string $name = null;
}

/** Match filter for Category#list (any subset of Category fields). */
class CategoryListMatch
{
    public ?string $code = null;
    public ?string $name = null;
}

/** CountryOfAsylum entity data model. */
class CountryOfAsylum
{
    public ?string $code = null;
    public ?string $name = null;
    public ?string $region = null;
}

/** Match filter for CountryOfAsylum#list (any subset of CountryOfAsylum fields). */
class CountryOfAsylumListMatch
{
    public ?string $code = null;
    public ?string $name = null;
    public ?string $region = null;
}

/** CountryOfOrigin entity data model. */
class CountryOfOrigin
{
    public ?string $code = null;
    public ?string $name = null;
    public ?string $region = null;
}

/** Match filter for CountryOfOrigin#list (any subset of CountryOfOrigin fields). */
class CountryOfOriginListMatch
{
    public ?string $code = null;
    public ?string $name = null;
    public ?string $region = null;
}

/** CountryOfResettlement entity data model. */
class CountryOfResettlement
{
    public ?string $code = null;
    public ?string $name = null;
    public ?string $region = null;
}

/** Match filter for CountryOfResettlement#list (any subset of CountryOfResettlement fields). */
class CountryOfResettlementListMatch
{
    public ?string $code = null;
    public ?string $name = null;
    public ?string $region = null;
}

/** Demographic entity data model. */
class Demographic
{
    public ?string $destination = null;
    public ?string $destination_name = null;
    public ?int $females_adult = null;
    public ?int $females_senior = null;
    public ?int $females_total = null;
    public ?int $females_underage = null;
    public ?int $females_unknown = null;
    public ?int $males_adult = null;
    public ?int $males_senior = null;
    public ?int $males_total = null;
    public ?int $males_underage = null;
    public ?int $males_unknown = null;
    public ?string $origin = null;
    public ?string $origin_name = null;
    public ?int $other = null;
    public ?int $total = null;
    public ?int $year = null;
}

/** Match filter for Demographic#list (any subset of Demographic fields). */
class DemographicListMatch
{
    public ?string $destination = null;
    public ?string $destination_name = null;
    public ?int $females_adult = null;
    public ?int $females_senior = null;
    public ?int $females_total = null;
    public ?int $females_underage = null;
    public ?int $females_unknown = null;
    public ?int $males_adult = null;
    public ?int $males_senior = null;
    public ?int $males_total = null;
    public ?int $males_underage = null;
    public ?int $males_unknown = null;
    public ?string $origin = null;
    public ?string $origin_name = null;
    public ?int $other = null;
    public ?int $total = null;
    public ?int $year = null;
}

/** Departure entity data model. */
class Departure
{
    public ?string $asylum = null;
    public ?string $asylum_name = null;
    public ?string $destination = null;
    public ?string $destination_name = null;
    public ?string $origin = null;
    public ?string $origin_name = null;
    public ?int $person = null;
    public ?int $year = null;
}

/** Match filter for Departure#list (any subset of Departure fields). */
class DepartureListMatch
{
    public ?string $asylum = null;
    public ?string $asylum_name = null;
    public ?string $destination = null;
    public ?string $destination_name = null;
    public ?string $origin = null;
    public ?string $origin_name = null;
    public ?int $person = null;
    public ?int $year = null;
}

/** Helper entity data model. */
class Helper
{
}

/** Match filter for Helper#load (any subset of Helper fields). */
class HelperLoadMatch
{
}

/** Region entity data model. */
class Region
{
    public ?string $name = null;
}

/** Match filter for Region#list (any subset of Region fields). */
class RegionListMatch
{
    public ?string $name = null;
}

/** Submission entity data model. */
class Submission
{
    public ?string $asylum = null;
    public ?string $asylum_name = null;
    public ?string $destination = null;
    public ?string $destination_name = null;
    public ?string $origin = null;
    public ?string $origin_name = null;
    public ?int $person = null;
    public ?int $year = null;
}

/** Match filter for Submission#list (any subset of Submission fields). */
class SubmissionListMatch
{
    public ?string $asylum = null;
    public ?string $asylum_name = null;
    public ?string $destination = null;
    public ?string $destination_name = null;
    public ?string $origin = null;
    public ?string $origin_name = null;
    public ?int $person = null;
    public ?int $year = null;
}

/** UrlFetch entity data model. */
class UrlFetch
{
    public ?string $status = null;
    public ?string $url = null;
}

/** Match filter for UrlFetch#list (any subset of UrlFetch fields). */
class UrlFetchListMatch
{
    public ?string $status = null;
    public ?string $url = null;
}

/** Year entity data model. */
class Year
{
}

/** Match filter for Year#list (any subset of Year fields). */
class YearListMatch
{
}

