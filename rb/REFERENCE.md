# Rsq Ruby SDK Reference

Complete API reference for the Rsq Ruby SDK.


## RsqSDK

### Constructor

```ruby
require_relative 'Rsq_sdk'

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
| `code` | `String` | No |  |
| `name` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Category.list
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
| `code` | `String` | No |  |
| `name` | `String` | No |  |
| `region` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CountryOfAsylum.list
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
| `code` | `String` | No |  |
| `name` | `String` | No |  |
| `region` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CountryOfOrigin.list
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
| `code` | `String` | No |  |
| `name` | `String` | No |  |
| `region` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CountryOfResettlement.list
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
| `destination` | `String` | No |  |
| `destination_name` | `String` | No |  |
| `femalesAdult` | `Integer` | No |  |
| `femalesSenior` | `Integer` | No |  |
| `femalesTotal` | `Integer` | No |  |
| `femalesUnderage` | `Integer` | No |  |
| `femalesUnknown` | `Integer` | No |  |
| `malesAdult` | `Integer` | No |  |
| `malesSenior` | `Integer` | No |  |
| `malesTotal` | `Integer` | No |  |
| `malesUnderage` | `Integer` | No |  |
| `malesUnknown` | `Integer` | No |  |
| `origin` | `String` | No |  |
| `origin_name` | `String` | No |  |
| `other` | `Integer` | No |  |
| `total` | `Integer` | No |  |
| `year` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Demographic.list
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
| `asylum` | `String` | No |  |
| `asylum_name` | `String` | No |  |
| `destination` | `String` | No |  |
| `destination_name` | `String` | No |  |
| `origin` | `String` | No |  |
| `origin_name` | `String` | No |  |
| `persons` | `Integer` | No |  |
| `year` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Departure.list
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
result = client.Helper.load()
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
| `name` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Region.list
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
| `asylum` | `String` | No |  |
| `asylum_name` | `String` | No |  |
| `destination` | `String` | No |  |
| `destination_name` | `String` | No |  |
| `origin` | `String` | No |  |
| `origin_name` | `String` | No |  |
| `persons` | `Integer` | No |  |
| `year` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Submission.list
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
| `status` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UrlFetch.list
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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Year.list
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

