# Typed models for the Rsq SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Category:
    code: Optional[str] = None
    name: Optional[str] = None


@dataclass
class CategoryListMatch:
    code: Optional[str] = None
    name: Optional[str] = None


@dataclass
class CountryOfAsylum:
    code: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None


@dataclass
class CountryOfAsylumListMatch:
    code: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None


@dataclass
class CountryOfOrigin:
    code: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None


@dataclass
class CountryOfOriginListMatch:
    code: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None


@dataclass
class CountryOfResettlement:
    code: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None


@dataclass
class CountryOfResettlementListMatch:
    code: Optional[str] = None
    name: Optional[str] = None
    region: Optional[str] = None


@dataclass
class Demographic:
    destination: Optional[str] = None
    destination_name: Optional[str] = None
    females_adult: Optional[int] = None
    females_senior: Optional[int] = None
    females_total: Optional[int] = None
    females_underage: Optional[int] = None
    females_unknown: Optional[int] = None
    males_adult: Optional[int] = None
    males_senior: Optional[int] = None
    males_total: Optional[int] = None
    males_underage: Optional[int] = None
    males_unknown: Optional[int] = None
    origin: Optional[str] = None
    origin_name: Optional[str] = None
    other: Optional[int] = None
    total: Optional[int] = None
    year: Optional[int] = None


@dataclass
class DemographicListMatch:
    destination: Optional[str] = None
    destination_name: Optional[str] = None
    females_adult: Optional[int] = None
    females_senior: Optional[int] = None
    females_total: Optional[int] = None
    females_underage: Optional[int] = None
    females_unknown: Optional[int] = None
    males_adult: Optional[int] = None
    males_senior: Optional[int] = None
    males_total: Optional[int] = None
    males_underage: Optional[int] = None
    males_unknown: Optional[int] = None
    origin: Optional[str] = None
    origin_name: Optional[str] = None
    other: Optional[int] = None
    total: Optional[int] = None
    year: Optional[int] = None


@dataclass
class Departure:
    asylum: Optional[str] = None
    asylum_name: Optional[str] = None
    destination: Optional[str] = None
    destination_name: Optional[str] = None
    origin: Optional[str] = None
    origin_name: Optional[str] = None
    person: Optional[int] = None
    year: Optional[int] = None


@dataclass
class DepartureListMatch:
    asylum: Optional[str] = None
    asylum_name: Optional[str] = None
    destination: Optional[str] = None
    destination_name: Optional[str] = None
    origin: Optional[str] = None
    origin_name: Optional[str] = None
    person: Optional[int] = None
    year: Optional[int] = None


@dataclass
class Helper:
    pass


@dataclass
class HelperLoadMatch:
    pass


@dataclass
class Region:
    name: Optional[str] = None


@dataclass
class RegionListMatch:
    name: Optional[str] = None


@dataclass
class Submission:
    asylum: Optional[str] = None
    asylum_name: Optional[str] = None
    destination: Optional[str] = None
    destination_name: Optional[str] = None
    origin: Optional[str] = None
    origin_name: Optional[str] = None
    person: Optional[int] = None
    year: Optional[int] = None


@dataclass
class SubmissionListMatch:
    asylum: Optional[str] = None
    asylum_name: Optional[str] = None
    destination: Optional[str] = None
    destination_name: Optional[str] = None
    origin: Optional[str] = None
    origin_name: Optional[str] = None
    person: Optional[int] = None
    year: Optional[int] = None


@dataclass
class UrlFetch:
    status: Optional[str] = None
    url: Optional[str] = None


@dataclass
class UrlFetchListMatch:
    status: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Year:
    pass


@dataclass
class YearListMatch:
    pass

