# Rsq Ruby SDK



The Ruby SDK for the Rsq API — an entity-oriented client using idiomatic Ruby conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/rsq-sdk/releases](https://github.com/voxgig-sdk/rsq-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Rsq_sdk"

client = RsqSDK.new
```

### 2. List categorys

```ruby
begin
  result = client.category.list
  if result.is_a?(Array)
    result.each do |item|
      d = item.data_get
      puts "#{d["id"]} #{d["name"]}"
    end
  end
rescue => err
  warn "list failed: #{err}"
end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  warn result["err"]
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = RsqSDK.test

result = client.category.load({ "id" => "test01" })
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = RsqSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### RsqSDK

```ruby
require_relative "Rsq_sdk"
client = RsqSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = RsqSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### RsqSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Category` | `(data) -> CategoryEntity` | Create a Category entity instance. |
| `CountryOfAsylum` | `(data) -> CountryOfAsylumEntity` | Create a CountryOfAsylum entity instance. |
| `CountryOfOrigin` | `(data) -> CountryOfOriginEntity` | Create a CountryOfOrigin entity instance. |
| `CountryOfResettlement` | `(data) -> CountryOfResettlementEntity` | Create a CountryOfResettlement entity instance. |
| `Demographic` | `(data) -> DemographicEntity` | Create a Demographic entity instance. |
| `Departure` | `(data) -> DepartureEntity` | Create a Departure entity instance. |
| `Helper` | `(data) -> HelperEntity` | Create a Helper entity instance. |
| `Region` | `(data) -> RegionEntity` | Create a Region entity instance. |
| `Submission` | `(data) -> SubmissionEntity` | Create a Submission entity instance. |
| `UrlFetch` | `(data) -> UrlFetchEntity` | Create a UrlFetch entity instance. |
| `Year` | `(data) -> YearEntity` | Create a Year entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> Array` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `RsqError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Category

| Field | Description |
| --- | --- |
| `code` |  |
| `name` |  |

Operations: List.

API path: `/categories`

#### CountryOfAsylum

| Field | Description |
| --- | --- |
| `code` |  |
| `name` |  |
| `region` |  |

Operations: List.

API path: `/asylums`

#### CountryOfOrigin

| Field | Description |
| --- | --- |
| `code` |  |
| `name` |  |
| `region` |  |

Operations: List.

API path: `/origins/departures`

#### CountryOfResettlement

| Field | Description |
| --- | --- |
| `code` |  |
| `name` |  |
| `region` |  |

Operations: List.

API path: `/destinations`

#### Demographic

| Field | Description |
| --- | --- |
| `destination` |  |
| `destination_name` |  |
| `females_adult` |  |
| `females_senior` |  |
| `females_total` |  |
| `females_underage` |  |
| `females_unknown` |  |
| `males_adult` |  |
| `males_senior` |  |
| `males_total` |  |
| `males_underage` |  |
| `males_unknown` |  |
| `origin` |  |
| `origin_name` |  |
| `other` |  |
| `total` |  |
| `year` |  |

Operations: List.

API path: `/demographics`

#### Departure

| Field | Description |
| --- | --- |
| `asylum` |  |
| `asylum_name` |  |
| `destination` |  |
| `destination_name` |  |
| `origin` |  |
| `origin_name` |  |
| `person` |  |
| `year` |  |

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
| `name` |  |

Operations: List.

API path: `/regions`

#### Submission

| Field | Description |
| --- | --- |
| `asylum` |  |
| `asylum_name` |  |
| `destination` |  |
| `destination_name` |  |
| `origin` |  |
| `origin_name` |  |
| `person` |  |
| `year` |  |

Operations: List.

API path: `/submissions`

#### UrlFetch

| Field | Description |
| --- | --- |
| `status` |  |
| `url` |  |

Operations: List.

API path: `/fetchUrl`

#### Year

| Field | Description |
| --- | --- |

Operations: List.

API path: `/years`



## Entities


### Category

Create an instance: `const category = client.category`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |

#### Example: List

```ts
const categorys = await client.category.list()
```


### CountryOfAsylum

Create an instance: `const country_of_asylum = client.country_of_asylum`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `region` | ``$STRING`` |  |

#### Example: List

```ts
const country_of_asylums = await client.country_of_asylum.list()
```


### CountryOfOrigin

Create an instance: `const country_of_origin = client.country_of_origin`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `region` | ``$STRING`` |  |

#### Example: List

```ts
const country_of_origins = await client.country_of_origin.list()
```


### CountryOfResettlement

Create an instance: `const country_of_resettlement = client.country_of_resettlement`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | ``$STRING`` |  |
| `name` | ``$STRING`` |  |
| `region` | ``$STRING`` |  |

#### Example: List

```ts
const country_of_resettlements = await client.country_of_resettlement.list()
```


### Demographic

Create an instance: `const demographic = client.demographic`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```ts
const demographics = await client.demographic.list()
```


### Departure

Create an instance: `const departure = client.departure`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```ts
const departures = await client.departure.list()
```


### Helper

Create an instance: `const helper = client.helper`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const helper = await client.helper.load({ id: 'helper_id' })
```


### Region

Create an instance: `const region = client.region`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | ``$STRING`` |  |

#### Example: List

```ts
const regions = await client.region.list()
```


### Submission

Create an instance: `const submission = client.submission`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```ts
const submissions = await client.submission.list()
```


### UrlFetch

Create an instance: `const url_fetch = client.url_fetch`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |

#### Example: List

```ts
const url_fetchs = await client.url_fetch.list()
```


### Year

Create an instance: `const year = client.year`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const years = await client.year.list()
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
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Rsq_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Rsq_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
category = client.category
category.load({ "id" => "example_id" })

# category.data_get now returns the loaded category data
# category.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
