# Rsq Ruby SDK Reference

Complete API reference for the Rsq Ruby SDK.


## RsqSDK

### Constructor

```ruby
require_relative 'rsq_sdk'

client = RsqSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RsqSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = RsqSDK.test
```


### Instance Methods

#### `Category(data = nil)`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `CountryOfAsylum(data = nil)`

Create a new `CountryOfAsylum` entity instance. Pass `nil` for no initial data.

#### `CountryOfOrigin(data = nil)`

Create a new `CountryOfOrigin` entity instance. Pass `nil` for no initial data.

#### `CountryOfResettlement(data = nil)`

Create a new `CountryOfResettlement` entity instance. Pass `nil` for no initial data.

#### `Demographic(data = nil)`

Create a new `Demographic` entity instance. Pass `nil` for no initial data.

#### `Departure(data = nil)`

Create a new `Departure` entity instance. Pass `nil` for no initial data.

#### `Helper(data = nil)`

Create a new `Helper` entity instance. Pass `nil` for no initial data.

#### `Region(data = nil)`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `Submission(data = nil)`

Create a new `Submission` entity instance. Pass `nil` for no initial data.

#### `UrlFetch(data = nil)`

Create a new `UrlFetch` entity instance. Pass `nil` for no initial data.

#### `Year(data = nil)`

Create a new `Year` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CategoryEntity

```ruby
category = client.Category
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Category.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CountryOfAsylumEntity

```ruby
country_of_asylum = client.CountryOfAsylum
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.CountryOfAsylum.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CountryOfAsylumEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CountryOfOriginEntity

```ruby
country_of_origin = client.CountryOfOrigin
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.CountryOfOrigin.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CountryOfOriginEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CountryOfResettlementEntity

```ruby
country_of_resettlement = client.CountryOfResettlement
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.CountryOfResettlement.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CountryOfResettlementEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DemographicEntity

```ruby
demographic = client.Demographic
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Demographic.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DemographicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DepartureEntity

```ruby
departure = client.Departure
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Departure.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HelperEntity

```ruby
helper = client.Helper
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Helper.load({ "id" => "helper_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HelperEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RegionEntity

```ruby
region = client.Region
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Region.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubmissionEntity

```ruby
submission = client.Submission
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Submission.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubmissionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UrlFetchEntity

```ruby
url_fetch = client.UrlFetch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.UrlFetch.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UrlFetchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## YearEntity

```ruby
year = client.Year
```

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Year.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `YearEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = RsqSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

