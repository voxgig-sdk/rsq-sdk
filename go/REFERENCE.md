# Rsq Golang SDK Reference

Complete API reference for the Rsq Golang SDK.


## RsqSDK

### Constructor

```go
func NewRsqSDK(options map[string]any) *RsqSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *RsqSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *RsqSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Category(data map[string]any) RsqEntity`

Create a new `Category` entity instance. Pass `nil` for no initial data.

#### `CountryOfAsylum(data map[string]any) RsqEntity`

Create a new `CountryOfAsylum` entity instance. Pass `nil` for no initial data.

#### `CountryOfOrigin(data map[string]any) RsqEntity`

Create a new `CountryOfOrigin` entity instance. Pass `nil` for no initial data.

#### `CountryOfResettlement(data map[string]any) RsqEntity`

Create a new `CountryOfResettlement` entity instance. Pass `nil` for no initial data.

#### `Demographic(data map[string]any) RsqEntity`

Create a new `Demographic` entity instance. Pass `nil` for no initial data.

#### `Departure(data map[string]any) RsqEntity`

Create a new `Departure` entity instance. Pass `nil` for no initial data.

#### `Helper(data map[string]any) RsqEntity`

Create a new `Helper` entity instance. Pass `nil` for no initial data.

#### `Region(data map[string]any) RsqEntity`

Create a new `Region` entity instance. Pass `nil` for no initial data.

#### `Submission(data map[string]any) RsqEntity`

Create a new `Submission` entity instance. Pass `nil` for no initial data.

#### `UrlFetch(data map[string]any) RsqEntity`

Create a new `UrlFetch` entity instance. Pass `nil` for no initial data.

#### `Year(data map[string]any) RsqEntity`

Create a new `Year` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CategoryEntity

```go
category := client.Category(nil)
fmt.Println(category.GetName()) // "category"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Category(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountryOfAsylumEntity

```go
countryOfAsylum := client.CountryOfAsylum(nil)
fmt.Println(countryOfAsylum.GetName()) // "country_of_asylum"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CountryOfAsylum(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountryOfAsylumEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountryOfOriginEntity

```go
countryOfOrigin := client.CountryOfOrigin(nil)
fmt.Println(countryOfOrigin.GetName()) // "country_of_origin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CountryOfOrigin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountryOfOriginEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CountryOfResettlementEntity

```go
countryOfResettlement := client.CountryOfResettlement(nil)
fmt.Println(countryOfResettlement.GetName()) // "country_of_resettlement"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CountryOfResettlement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CountryOfResettlementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DemographicEntity

```go
demographic := client.Demographic(nil)
fmt.Println(demographic.GetName()) // "demographic"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `destination` | `string` | No |  |
| `destination_name` | `string` | No |  |
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
| `origin` | `string` | No |  |
| `origin_name` | `string` | No |  |
| `other` | `int` | No |  |
| `total` | `int` | No |  |
| `year` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Demographic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DemographicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DepartureEntity

```go
departure := client.Departure(nil)
fmt.Println(departure.GetName()) // "departure"
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
| `persons` | `int` | No |  |
| `year` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Departure(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HelperEntity

```go
helper := client.Helper(nil)
fmt.Println(helper.GetName()) // "helper"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Helper(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HelperEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RegionEntity

```go
region := client.Region(nil)
fmt.Println(region.GetName()) // "region"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Region(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RegionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubmissionEntity

```go
submission := client.Submission(nil)
fmt.Println(submission.GetName()) // "submission"
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
| `persons` | `int` | No |  |
| `year` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Submission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubmissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UrlFetchEntity

```go
urlFetch := client.UrlFetch(nil)
fmt.Println(urlFetch.GetName()) // "url_fetch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UrlFetch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UrlFetchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## YearEntity

```go
year := client.Year(nil)
fmt.Println(year.GetName()) // "year"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Year(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `YearEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewRsqSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

