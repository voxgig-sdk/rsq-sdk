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
    language: str


class CountryOfAsylum(TypedDict, total=False):
    code: str
    name: str
    region: str


class CountryOfAsylumListMatch(TypedDict, total=False):
    language: str


class CountryOfOrigin(TypedDict, total=False):
    code: str
    name: str
    region: str


class CountryOfOriginListMatch(TypedDict, total=False):
    language: str


class CountryOfResettlement(TypedDict, total=False):
    code: str
    name: str
    region: str


class CountryOfResettlementListMatch(TypedDict, total=False):
    language: str


class Demographic(TypedDict, total=False):
    destination: str
    destination_name: str
    femalesAdult: int
    femalesSenior: int
    femalesTotal: int
    femalesUnderage: int
    femalesUnknown: int
    malesAdult: int
    malesSenior: int
    malesTotal: int
    malesUnderage: int
    malesUnknown: int
    origin: str
    origin_name: str
    other: int
    total: int
    year: int


class DemographicListMatch(TypedDict, total=False):
    language: str
    origin: list
    origin_compare: bool
    resettlement: list
    year: list


class Departure(TypedDict, total=False):
    asylum: str
    asylum_name: str
    destination: str
    destination_name: str
    origin: str
    origin_name: str
    persons: int
    year: int


class DepartureListMatch(TypedDict, total=False):
    asylum: list
    asylum_compare: bool
    asylum_sort: str
    language: str
    origin: list
    origin_compare: bool
    origin_sort: str
    page: int
    persons_sort: str
    resettlement: list
    resettlement_sort: str
    year: list
    year_sort: str


class Helper(TypedDict):
    pass


class HelperLoadMatch(TypedDict, total=False):
    origin: list
    resettlement: list
    type: str
    year: list


class Region(TypedDict, total=False):
    name: str


class RegionListMatch(TypedDict, total=False):
    language: str


class Submission(TypedDict, total=False):
    asylum: str
    asylum_name: str
    destination: str
    destination_name: str
    origin: str
    origin_name: str
    persons: int
    year: int


class SubmissionListMatch(TypedDict, total=False):
    asylum: list
    asylum_compare: bool
    asylum_sort: str
    language: str
    origin: list
    origin_compare: bool
    origin_sort: str
    page: int
    persons_sort: str
    resettlement: list
    resettlement_sort: str
    year: list
    year_sort: str


class UrlFetch(TypedDict, total=False):
    status: str
    url: str


class UrlFetchListMatchRequired(TypedDict):
    url_hash: str


class UrlFetchListMatch(UrlFetchListMatchRequired, total=False):
    language: str


class Year(TypedDict):
    pass


class YearListMatch(TypedDict):
    pass
