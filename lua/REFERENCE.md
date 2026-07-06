# Rsq Lua SDK Reference

Complete API reference for the Rsq Lua SDK.


## RsqSDK

### Constructor

```lua
local sdk = require("rsq_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Category(data)`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `CountryOfAsylum(data)`

Create a new `CountryOfAsylum` entity instance. Pass `nil` for no initial data.

#### `CountryOfOrigin(data)`

Create a new `CountryOfOrigin` entity instance. Pass `nil` for no initial data.

#### `CountryOfResettlement(data)`

Create a new `CountryOfResettlement` entity instance. Pass `nil` for no initial data.

#### `Demographic(data)`

Create a new `Demographic` entity instance. Pass `nil` for no initial data.

#### `Departure(data)`

Create a new `Departure` entity instance. Pass `nil` for no initial data.

#### `Helper(data)`

Create a new `Helper` entity instance. Pass `nil` for no initial data.

#### `Region(data)`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `Submission(data)`

Create a new `Submission` entity instance. Pass `nil` for no initial data.

#### `UrlFetch(data)`

Create a new `UrlFetch` entity instance. Pass `nil` for no initial data.

#### `Year(data)`

Create a new `Year` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CategoryEntity

```lua
local category = client:Category(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Category():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountryOfAsylumEntity

```lua
local country_of_asylum = client:CountryOfAsylum(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CountryOfAsylum():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryOfAsylumEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountryOfOriginEntity

```lua
local country_of_origin = client:CountryOfOrigin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CountryOfOrigin():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryOfOriginEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CountryOfResettlementEntity

```lua
local country_of_resettlement = client:CountryOfResettlement(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CountryOfResettlement():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CountryOfResettlementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DemographicEntity

```lua
local demographic = client:Demographic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `string` | No |  |
| `destination_name` | `string` | No |  |
| `females_adult` | `number` | No |  |
| `females_senior` | `number` | No |  |
| `females_total` | `number` | No |  |
| `females_underage` | `number` | No |  |
| `females_unknown` | `number` | No |  |
| `males_adult` | `number` | No |  |
| `males_senior` | `number` | No |  |
| `males_total` | `number` | No |  |
| `males_underage` | `number` | No |  |
| `males_unknown` | `number` | No |  |
| `origin` | `string` | No |  |
| `origin_name` | `string` | No |  |
| `other` | `number` | No |  |
| `total` | `number` | No |  |
| `year` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Demographic():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DemographicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DepartureEntity

```lua
local departure = client:Departure(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asylum` | `string` | No |  |
| `asylum_name` | `string` | No |  |
| `destination` | `string` | No |  |
| `destination_name` | `string` | No |  |
| `origin` | `string` | No |  |
| `origin_name` | `string` | No |  |
| `person` | `number` | No |  |
| `year` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Departure():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HelperEntity

```lua
local helper = client:Helper(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Helper():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HelperEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RegionEntity

```lua
local region = client:Region(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Region():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubmissionEntity

```lua
local submission = client:Submission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asylum` | `string` | No |  |
| `asylum_name` | `string` | No |  |
| `destination` | `string` | No |  |
| `destination_name` | `string` | No |  |
| `origin` | `string` | No |  |
| `origin_name` | `string` | No |  |
| `person` | `number` | No |  |
| `year` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Submission():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubmissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UrlFetchEntity

```lua
local url_fetch = client:UrlFetch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UrlFetch():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UrlFetchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## YearEntity

```lua
local year = client:Year(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Year():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `YearEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

