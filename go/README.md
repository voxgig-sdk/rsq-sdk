# Rsq Golang SDK



The Golang SDK for the Rsq API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/rsq-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/rsq-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/rsq-sdk/go=../rsq-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```go
package main

import (
    "fmt"

    sdk "github.com/voxgig-sdk/rsq-sdk/go"
    "github.com/voxgig-sdk/rsq-sdk/go/core"
)

func main() {
    client := sdk.New()
```

### 2. List categorys

```go
    result, err := client.Category(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }

    rm := core.ToMapAny(result)
    if rm["ok"] == true {
        for _, item := range rm["data"].([]any) {
            p := core.ToMapAny(item)
            fmt.Println(p["id"], p["name"])
        }
    }
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

result, err := client.Category(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
// result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewRsqSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
RSQ_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewRsqSDK

```go
func NewRsqSDK(options map[string]any) *RsqSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *RsqSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### RsqSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Category` | `(data map[string]any) RsqEntity` | Create a Category entity instance. |
| `CountryOfAsylum` | `(data map[string]any) RsqEntity` | Create a CountryOfAsylum entity instance. |
| `CountryOfOrigin` | `(data map[string]any) RsqEntity` | Create a CountryOfOrigin entity instance. |
| `CountryOfResettlement` | `(data map[string]any) RsqEntity` | Create a CountryOfResettlement entity instance. |
| `Demographic` | `(data map[string]any) RsqEntity` | Create a Demographic entity instance. |
| `Departure` | `(data map[string]any) RsqEntity` | Create a Departure entity instance. |
| `Helper` | `(data map[string]any) RsqEntity` | Create a Helper entity instance. |
| `Region` | `(data map[string]any) RsqEntity` | Create a Region entity instance. |
| `Submission` | `(data map[string]any) RsqEntity` | Create a Submission entity instance. |
| `UrlFetch` | `(data map[string]any) RsqEntity` | Create a UrlFetch entity instance. |
| `Year` | `(data map[string]any) RsqEntity` | Create a Year entity instance. |

### Entity interface (RsqEntity)

All entities implement the `RsqEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(any, error)`. The `any` value is a
`map[string]any` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `"ok"` | `bool` | `true` if the HTTP status is 2xx. |
| `"status"` | `int` | HTTP status code. |
| `"headers"` | `map[string]any` | Response headers. |
| `"data"` | `any` | Parsed JSON response body. |

On error, `"ok"` is `false` and `"err"` contains the error value.

### Entities

#### Category

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"name"` |  |

Operations: List.

API path: `/categories`

#### CountryOfAsylum

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"name"` |  |
| `"region"` |  |

Operations: List.

API path: `/asylums`

#### CountryOfOrigin

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"name"` |  |
| `"region"` |  |

Operations: List.

API path: `/origins/departures`

#### CountryOfResettlement

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"name"` |  |
| `"region"` |  |

Operations: List.

API path: `/destinations`

#### Demographic

| Field | Description |
| --- | --- |
| `"destination"` |  |
| `"destination_name"` |  |
| `"females_adult"` |  |
| `"females_senior"` |  |
| `"females_total"` |  |
| `"females_underage"` |  |
| `"females_unknown"` |  |
| `"males_adult"` |  |
| `"males_senior"` |  |
| `"males_total"` |  |
| `"males_underage"` |  |
| `"males_unknown"` |  |
| `"origin"` |  |
| `"origin_name"` |  |
| `"other"` |  |
| `"total"` |  |
| `"year"` |  |

Operations: List.

API path: `/demographics`

#### Departure

| Field | Description |
| --- | --- |
| `"asylum"` |  |
| `"asylum_name"` |  |
| `"destination"` |  |
| `"destination_name"` |  |
| `"origin"` |  |
| `"origin_name"` |  |
| `"person"` |  |
| `"year"` |  |

Operations: List.

API path: `/departures`

#### Helper

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/export/csv`

#### Region

| Field | Description |
| --- | --- |
| `"name"` |  |

Operations: List.

API path: `/regions`

#### Submission

| Field | Description |
| --- | --- |
| `"asylum"` |  |
| `"asylum_name"` |  |
| `"destination"` |  |
| `"destination_name"` |  |
| `"origin"` |  |
| `"origin_name"` |  |
| `"person"` |  |
| `"year"` |  |

Operations: List.

API path: `/submissions`

#### UrlFetch

| Field | Description |
| --- | --- |
| `"status"` |  |
| `"url"` |  |

Operations: List.

API path: `/fetchUrl`

#### Year

| Field | Description |
| --- | --- |

Operations: List.

API path: `/years`



## Entities


### Category

Create an instance: `category := client.Category(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.Category(nil).List(nil, nil)
```


### CountryOfAsylum

Create an instance: `country_of_asylum := client.CountryOfAsylum(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `region` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.CountryOfAsylum(nil).List(nil, nil)
```


### CountryOfOrigin

Create an instance: `country_of_origin := client.CountryOfOrigin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `region` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.CountryOfOrigin(nil).List(nil, nil)
```


### CountryOfResettlement

Create an instance: `country_of_resettlement := client.CountryOfResettlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `region` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.CountryOfResettlement(nil).List(nil, nil)
```


### Demographic

Create an instance: `demographic := client.Demographic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `destination` | ``$STRING`` |  |
| `destination_name` | ``$STRING`` |  |
| `females_adult` | ``$INTEGER`` |  |
| `females_senior` | ``$INTEGER`` |  |
| `females_total` | ``$INTEGER`` |  |
| `females_underage` | ``$INTEGER`` |  |
| `females_unknown` | ``$INTEGER`` |  |
| `males_adult` | ``$INTEGER`` |  |
| `males_senior` | ``$INTEGER`` |  |
| `males_total` | ``$INTEGER`` |  |
| `males_underage` | ``$INTEGER`` |  |
| `males_unknown` | ``$INTEGER`` |  |
| `origin` | ``$STRING`` |  |
| `origin_name` | ``$STRING`` |  |
| `other` | ``$INTEGER`` |  |
| `total` | ``$INTEGER`` |  |
| `year` | ``$INTEGER`` |  |

#### Example: List

```go
results, err := client.Demographic(nil).List(nil, nil)
```


### Departure

Create an instance: `departure := client.Departure(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asylum` | ``$STRING`` |  |
| `asylum_name` | ``$STRING`` |  |
| `destination` | ``$STRING`` |  |
| `destination_name` | ``$STRING`` |  |
| `origin` | ``$STRING`` |  |
| `origin_name` | ``$STRING`` |  |
| `person` | ``$INTEGER`` |  |
| `year` | ``$INTEGER`` |  |

#### Example: List

```go
results, err := client.Departure(nil).List(nil, nil)
```


### Helper

Create an instance: `helper := client.Helper(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
result, err := client.Helper(nil).Load(map[string]any{"id": "helper_id"}, nil)
```


### Region

Create an instance: `region := client.Region(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.Region(nil).List(nil, nil)
```


### Submission

Create an instance: `submission := client.Submission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asylum` | ``$STRING`` |  |
| `asylum_name` | ``$STRING`` |  |
| `destination` | ``$STRING`` |  |
| `destination_name` | ``$STRING`` |  |
| `origin` | ``$STRING`` |  |
| `origin_name` | ``$STRING`` |  |
| `person` | ``$INTEGER`` |  |
| `year` | ``$INTEGER`` |  |

#### Example: List

```go
results, err := client.Submission(nil).List(nil, nil)
```


### UrlFetch

Create an instance: `url_fetch := client.UrlFetch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.UrlFetch(nil).List(nil, nil)
```


### Year

Create an instance: `year := client.Year(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
results, err := client.Year(nil).List(nil, nil)
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/rsq-sdk/go/
├── rsq.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/rsq-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
category := client.Category(nil)
category.Load(map[string]any{"id": "example_id"}, nil)

// category.Data() now returns the loaded category data
// category.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
