# Rsq Golang SDK



The Golang SDK for the Rsq API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Category(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
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

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/rsq-sdk/go"
)

func main() {
    client := sdk.New()

    // List category records — the value is the array of records itself.
    categorys, err := client.Category(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range categorys.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
urlfetchs, err := client.UrlFetch(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = urlfetchs
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
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

urlFetch, err := client.UrlFetch(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(urlFetch) // the returned mock data
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
| `UrlFetch` | `(data map[string]any) RsqEntity` | Create an UrlFetch entity instance. |
| `Year` | `(data map[string]any) RsqEntity` | Create a Year entity instance. |

### Entity interface (RsqEntity)

All entities implement the `RsqEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    category, err := client.Category(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // category is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

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
| `"femalesAdult"` |  |
| `"femalesSenior"` |  |
| `"femalesTotal"` |  |
| `"femalesUnderage"` |  |
| `"femalesUnknown"` |  |
| `"malesAdult"` |  |
| `"malesSenior"` |  |
| `"malesTotal"` |  |
| `"malesUnderage"` |  |
| `"malesUnknown"` |  |
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
| `"persons"` |  |
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
| `"persons"` |  |
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
| `code` | `string` |  |
| `name` | `string` |  |

#### Example: List

```go
categorys, err := client.Category(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(categorys) // the array of records
```


### CountryOfAsylum

Create an instance: `countryOfAsylum := client.CountryOfAsylum(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `name` | `string` |  |
| `region` | `string` |  |

#### Example: List

```go
countryOfAsylums, err := client.CountryOfAsylum(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(countryOfAsylums) // the array of records
```


### CountryOfOrigin

Create an instance: `countryOfOrigin := client.CountryOfOrigin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `name` | `string` |  |
| `region` | `string` |  |

#### Example: List

```go
countryOfOrigins, err := client.CountryOfOrigin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(countryOfOrigins) // the array of records
```


### CountryOfResettlement

Create an instance: `countryOfResettlement := client.CountryOfResettlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `name` | `string` |  |
| `region` | `string` |  |

#### Example: List

```go
countryOfResettlements, err := client.CountryOfResettlement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(countryOfResettlements) // the array of records
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
| `destination` | `string` |  |
| `destination_name` | `string` |  |
| `femalesAdult` | `int` |  |
| `femalesSenior` | `int` |  |
| `femalesTotal` | `int` |  |
| `femalesUnderage` | `int` |  |
| `femalesUnknown` | `int` |  |
| `malesAdult` | `int` |  |
| `malesSenior` | `int` |  |
| `malesTotal` | `int` |  |
| `malesUnderage` | `int` |  |
| `malesUnknown` | `int` |  |
| `origin` | `string` |  |
| `origin_name` | `string` |  |
| `other` | `int` |  |
| `total` | `int` |  |
| `year` | `int` |  |

#### Example: List

```go
demographics, err := client.Demographic(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(demographics) // the array of records
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
| `asylum` | `string` |  |
| `asylum_name` | `string` |  |
| `destination` | `string` |  |
| `destination_name` | `string` |  |
| `origin` | `string` |  |
| `origin_name` | `string` |  |
| `persons` | `int` |  |
| `year` | `int` |  |

#### Example: List

```go
departures, err := client.Departure(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(departures) // the array of records
```


### Helper

Create an instance: `helper := client.Helper(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
helper, err := client.Helper(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(helper) // the loaded record
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
| `name` | `string` |  |

#### Example: List

```go
regions, err := client.Region(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(regions) // the array of records
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
| `asylum` | `string` |  |
| `asylum_name` | `string` |  |
| `destination` | `string` |  |
| `destination_name` | `string` |  |
| `origin` | `string` |  |
| `origin_name` | `string` |  |
| `persons` | `int` |  |
| `year` | `int` |  |

#### Example: List

```go
submissions, err := client.Submission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(submissions) // the array of records
```


### UrlFetch

Create an instance: `urlFetch := client.UrlFetch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` |  |
| `url` | `string` |  |

#### Example: List

```go
urlFetchs, err := client.UrlFetch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(urlFetchs) // the array of records
```


### Year

Create an instance: `year := client.Year(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
years, err := client.Year(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(years) // the array of records
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

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

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
urlfetch := client.UrlFetch(nil)
urlfetch.List(nil, nil)

// urlfetch.Data() now returns the urlfetch data from the last list
// urlfetch.Match() returns the last match criteria
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
