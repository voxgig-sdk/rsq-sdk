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
    public ?string $language = null;
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
    public ?string $language = null;
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
    public ?string $language = null;
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
    public ?string $language = null;
}

/** Demographic entity data model. */
class Demographic
{
    public ?string $destination = null;
    public ?string $destination_name = null;
    public ?int $femalesAdult = null;
    public ?int $femalesSenior = null;
    public ?int $femalesTotal = null;
    public ?int $femalesUnderage = null;
    public ?int $femalesUnknown = null;
    public ?int $malesAdult = null;
    public ?int $malesSenior = null;
    public ?int $malesTotal = null;
    public ?int $malesUnderage = null;
    public ?int $malesUnknown = null;
    public ?string $origin = null;
    public ?string $origin_name = null;
    public ?int $other = null;
    public ?int $total = null;
    public ?int $year = null;
}

/** Request payload for Demographic#list. */
class DemographicListMatch
{
    public ?string $language = null;
    public ?array $origin = null;
    public ?bool $origin_compare = null;
    public ?array $resettlement = null;
    public ?array $year = null;
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
    public ?int $persons = null;
    public ?int $year = null;
}

/** Request payload for Departure#list. */
class DepartureListMatch
{
    public ?array $asylum = null;
    public ?bool $asylum_compare = null;
    public ?string $asylum_sort = null;
    public ?string $language = null;
    public ?array $origin = null;
    public ?bool $origin_compare = null;
    public ?string $origin_sort = null;
    public ?int $page = null;
    public ?string $persons_sort = null;
    public ?array $resettlement = null;
    public ?string $resettlement_sort = null;
    public ?array $year = null;
    public ?string $year_sort = null;
}

/** Helper entity data model. */
class Helper
{
}

/** Request payload for Helper#load. */
class HelperLoadMatch
{
    public ?array $origin = null;
    public ?array $resettlement = null;
    public ?string $type = null;
    public ?array $year = null;
}

/** Region entity data model. */
class Region
{
    public ?string $name = null;
}

/** Request payload for Region#list. */
class RegionListMatch
{
    public ?string $language = null;
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
    public ?int $persons = null;
    public ?int $year = null;
}

/** Request payload for Submission#list. */
class SubmissionListMatch
{
    public ?array $asylum = null;
    public ?bool $asylum_compare = null;
    public ?string $asylum_sort = null;
    public ?string $language = null;
    public ?array $origin = null;
    public ?bool $origin_compare = null;
    public ?string $origin_sort = null;
    public ?int $page = null;
    public ?string $persons_sort = null;
    public ?array $resettlement = null;
    public ?string $resettlement_sort = null;
    public ?array $year = null;
    public ?string $year_sort = null;
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
    public ?string $language = null;
    public string $url_hash;
}

/** Year entity data model. */
class Year
{
}

/** Request payload for Year#list. */
class YearListMatch
{
}

