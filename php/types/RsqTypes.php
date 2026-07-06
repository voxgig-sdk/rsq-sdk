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

/** Request payload for Category#list. */
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

/** Request payload for CountryOfAsylum#list. */
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

/** Request payload for CountryOfOrigin#list. */
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

/** Request payload for CountryOfResettlement#list. */
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

/** Request payload for Demographic#list. */
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

/** Request payload for Departure#list. */
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

/** Request payload for Helper#load. */
class HelperLoadMatch
{
}

/** Region entity data model. */
class Region
{
    public ?string $name = null;
}

/** Request payload for Region#list. */
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

/** Request payload for Submission#list. */
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

/** Request payload for UrlFetch#list. */
class UrlFetchListMatch
{
    public ?string $status = null;
    public ?string $url = null;
}

/** Year entity data model. */
class Year
{
}

/** Request payload for Year#list. */
class YearListMatch
{
}

