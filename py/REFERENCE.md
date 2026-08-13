# Rsq Python SDK Reference

Complete API reference for the Rsq Python SDK.


## RsqSDK

### Constructor

```python
from rsq_sdk import RsqSDK

client = RsqSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RsqSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = RsqSDK.test()
```


### Instance Methods

#### `Category(data=None)`

Create a new `CategoryEntity` instance. Pass `None` for no initial data.

#### `CountryOfAsylum(data=None)`

Create a new `CountryOfAsylumEntity` instance. Pass `None` for no initial data.

#### `CountryOfOrigin(data=None)`

Create a new `CountryOfOriginEntity` instance. Pass `None` for no initial data.

#### `CountryOfResettlement(data=None)`

Create a new `CountryOfResettlementEntity` instance. Pass `None` for no initial data.

#### `Demographic(data=None)`

Create a new `DemographicEntity` instance. Pass `None` for no initial data.

#### `Departure(data=None)`

Create a new `DepartureEntity` instance. Pass `None` for no initial data.

#### `Helper(data=None)`

Create a new `HelperEntity` instance. Pass `None` for no initial data.

#### `Region(data=None)`

Create a new `RegionEntity` instance. Pass `None` for no initial data.

#### `Submission(data=None)`

Create a new `SubmissionEntity` instance. Pass `None` for no initial data.

#### `UrlFetch(data=None)`

Create a new `UrlFetchEntity` instance. Pass `None` for no initial data.

#### `Year(data=None)`

Create a new `YearEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CategoryEntity

```python
category = client.Category()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | No |  |
| `name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Category().list()
for category in results:
    print(category)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CategoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountryOfAsylumEntity

```python
country_of_asylum = client.CountryOfAsylum()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | No |  |
| `name` | `str` | No |  |
| `region` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CountryOfAsylum().list()
for country_of_asylum in results:
    print(country_of_asylum)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryOfAsylumEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountryOfOriginEntity

```python
country_of_origin = client.CountryOfOrigin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | No |  |
| `name` | `str` | No |  |
| `region` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CountryOfOrigin().list()
for country_of_origin in results:
    print(country_of_origin)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryOfOriginEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CountryOfResettlementEntity

```python
country_of_resettlement = client.CountryOfResettlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | No |  |
| `name` | `str` | No |  |
| `region` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CountryOfResettlement().list()
for country_of_resettlement in results:
    print(country_of_resettlement)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryOfResettlementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DemographicEntity

```python
demographic = client.Demographic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `str` | No |  |
| `destination_name` | `str` | No |  |
| `femalesAdult` | `int` | No |  |
| `femalesSenior` | `int` | No |  |
| `femalesTotal` | `int` | No |  |
| `femalesUnderage` | `int` | No |  |
| `femalesUnknown` | `int` | No |  |
| `malesAdult` | `int` | No |  |
| `malesSenior` | `int` | No |  |
| `malesTotal` | `int` | No |  |
| `malesUnderage` | `int` | No |  |
| `malesUnknown` | `int` | No |  |
| `origin` | `str` | No |  |
| `origin_name` | `str` | No |  |
| `other` | `int` | No |  |
| `total` | `int` | No |  |
| `year` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Demographic().list()
for demographic in results:
    print(demographic)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DemographicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DepartureEntity

```python
departure = client.Departure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asylum` | `str` | No |  |
| `asylum_name` | `str` | No |  |
| `destination` | `str` | No |  |
| `destination_name` | `str` | No |  |
| `origin` | `str` | No |  |
| `origin_name` | `str` | No |  |
| `persons` | `int` | No |  |
| `year` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Departure().list()
for departure in results:
    print(departure)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DepartureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HelperEntity

```python
helper = client.Helper()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Helper().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HelperEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RegionEntity

```python
region = client.Region()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Region().list()
for region in results:
    print(region)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubmissionEntity

```python
submission = client.Submission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asylum` | `str` | No |  |
| `asylum_name` | `str` | No |  |
| `destination` | `str` | No |  |
| `destination_name` | `str` | No |  |
| `origin` | `str` | No |  |
| `origin_name` | `str` | No |  |
| `persons` | `int` | No |  |
| `year` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Submission().list()
for submission in results:
    print(submission)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubmissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UrlFetchEntity

```python
url_fetch = client.UrlFetch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UrlFetch().list()
for url_fetch in results:
    print(url_fetch)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UrlFetchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## YearEntity

```python
year = client.Year()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Year().list()
for year in results:
    print(year)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `YearEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = RsqSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

