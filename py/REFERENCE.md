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
category = client.category
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.category.list({})
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
country_of_asylum = client.country_of_asylum
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.country_of_asylum.list({})
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
country_of_origin = client.country_of_origin
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.country_of_origin.list({})
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
country_of_resettlement = client.country_of_resettlement
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.country_of_resettlement.list({})
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
demographic = client.demographic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | ``$STRING`` | No |  |
| `destination_name` | ``$STRING`` | No |  |
| `females_adult` | ``$INTEGER`` | No |  |
| `females_senior` | ``$INTEGER`` | No |  |
| `females_total` | ``$INTEGER`` | No |  |
| `females_underage` | ``$INTEGER`` | No |  |
| `females_unknown` | ``$INTEGER`` | No |  |
| `males_adult` | ``$INTEGER`` | No |  |
| `males_senior` | ``$INTEGER`` | No |  |
| `males_total` | ``$INTEGER`` | No |  |
| `males_underage` | ``$INTEGER`` | No |  |
| `males_unknown` | ``$INTEGER`` | No |  |
| `origin` | ``$STRING`` | No |  |
| `origin_name` | ``$STRING`` | No |  |
| `other` | ``$INTEGER`` | No |  |
| `total` | ``$INTEGER`` | No |  |
| `year` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.demographic.list({})
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
departure = client.departure
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asylum` | ``$STRING`` | No |  |
| `asylum_name` | ``$STRING`` | No |  |
| `destination` | ``$STRING`` | No |  |
| `destination_name` | ``$STRING`` | No |  |
| `origin` | ``$STRING`` | No |  |
| `origin_name` | ``$STRING`` | No |  |
| `person` | ``$INTEGER`` | No |  |
| `year` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.departure.list({})
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
helper = client.helper
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.helper.load({"id": "helper_id"})
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
region = client.region
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.region.list({})
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
submission = client.submission
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asylum` | ``$STRING`` | No |  |
| `asylum_name` | ``$STRING`` | No |  |
| `destination` | ``$STRING`` | No |  |
| `destination_name` | ``$STRING`` | No |  |
| `origin` | ``$STRING`` | No |  |
| `origin_name` | ``$STRING`` | No |  |
| `person` | ``$INTEGER`` | No |  |
| `year` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.submission.list({})
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
url_fetch = client.url_fetch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.url_fetch.list({})
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
year = client.year
```

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.year.list({})
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

