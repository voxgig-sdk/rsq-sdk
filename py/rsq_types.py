# Typed models for the Rsq SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Category(TypedDict, total=False):
    code: str
    name: str


class CategoryListMatch(TypedDict, total=False):
    code: str
    name: str


class CountryOfAsylum(TypedDict, total=False):
    code: str
    name: str
    region: str


class CountryOfAsylumListMatch(TypedDict, total=False):
    code: str
    name: str
    region: str


class CountryOfOrigin(TypedDict, total=False):
    code: str
    name: str
    region: str


class CountryOfOriginListMatch(TypedDict, total=False):
    code: str
    name: str
    region: str


class CountryOfResettlement(TypedDict, total=False):
    code: str
    name: str
    region: str


class CountryOfResettlementListMatch(TypedDict, total=False):
    code: str
    name: str
    region: str


class Demographic(TypedDict, total=False):
    destination: str
    destination_name: str
    females_adult: int
    females_senior: int
    females_total: int
    females_underage: int
    females_unknown: int
    males_adult: int
    males_senior: int
    males_total: int
    males_underage: int
    males_unknown: int
    origin: str
    origin_name: str
    other: int
    total: int
    year: int


class DemographicListMatch(TypedDict, total=False):
    destination: str
    destination_name: str
    females_adult: int
    females_senior: int
    females_total: int
    females_underage: int
    females_unknown: int
    males_adult: int
    males_senior: int
    males_total: int
    males_underage: int
    males_unknown: int
    origin: str
    origin_name: str
    other: int
    total: int
    year: int


class Departure(TypedDict, total=False):
    asylum: str
    asylum_name: str
    destination: str
    destination_name: str
    origin: str
    origin_name: str
    person: int
    year: int


class DepartureListMatch(TypedDict, total=False):
    asylum: str
    asylum_name: str
    destination: str
    destination_name: str
    origin: str
    origin_name: str
    person: int
    year: int


class Helper(TypedDict):
    pass


class HelperLoadMatch(TypedDict):
    pass


class Region(TypedDict, total=False):
    name: str


class RegionListMatch(TypedDict, total=False):
    name: str


class Submission(TypedDict, total=False):
    asylum: str
    asylum_name: str
    destination: str
    destination_name: str
    origin: str
    origin_name: str
    person: int
    year: int


class SubmissionListMatch(TypedDict, total=False):
    asylum: str
    asylum_name: str
    destination: str
    destination_name: str
    origin: str
    origin_name: str
    person: int
    year: int


class UrlFetch(TypedDict, total=False):
    status: str
    url: str


class UrlFetchListMatch(TypedDict, total=False):
    status: str
    url: str


class Year(TypedDict):
    pass


class YearListMatch(TypedDict):
    pass
