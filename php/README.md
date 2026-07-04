# Rsq PHP SDK



The PHP SDK for the Rsq API — an entity-oriented client using PHP conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/rsq-sdk/releases](https://github.com/voxgig-sdk/rsq-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'rsq_sdk.php';

$client = new RsqSDK();
```

### 2. List category records

```php
try {
    // list() returns an array of Category records — iterate directly.
    $categorys = $client->Category()->list();
    foreach ($categorys as $item) {
        echo $item["id"] . " " . $item["name"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    echo "Error: " . $result["err"]->getMessage();
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = RsqSDK::test([
    "entity" => ["category" => ["test01" => ["id" => "test01"]]],
]);

// load() returns the bare mock record (throws on error).
$category = $client->Category()->load(["id" => "test01"]);
print_r($category);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new RsqSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
RSQ_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### RsqSDK

```php
require_once 'rsq_sdk.php';
$client = new RsqSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = RsqSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### RsqSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Category` | `($data): CategoryEntity` | Create a Category entity instance. |
| `CountryOfAsylum` | `($data): CountryOfAsylumEntity` | Create a CountryOfAsylum entity instance. |
| `CountryOfOrigin` | `($data): CountryOfOriginEntity` | Create a CountryOfOrigin entity instance. |
| `CountryOfResettlement` | `($data): CountryOfResettlementEntity` | Create a CountryOfResettlement entity instance. |
| `Demographic` | `($data): DemographicEntity` | Create a Demographic entity instance. |
| `Departure` | `($data): DepartureEntity` | Create a Departure entity instance. |
| `Helper` | `($data): HelperEntity` | Create a Helper entity instance. |
| `Region` | `($data): RegionEntity` | Create a Region entity instance. |
| `Submission` | `($data): SubmissionEntity` | Create a Submission entity instance. |
| `UrlFetch` | `($data): UrlFetchEntity` | Create an UrlFetch entity instance. |
| `Year` | `($data): YearEntity` | Create a Year entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$category = $client->Category();`

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

```php
// list() returns an array of Category records (throws on error).
$categorys = $client->Category()->list();
```


### CountryOfAsylum

Create an instance: `$country_of_asylum = $client->CountryOfAsylum();`

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

```php
// list() returns an array of CountryOfAsylum records (throws on error).
$country_of_asylums = $client->CountryOfAsylum()->list();
```


### CountryOfOrigin

Create an instance: `$country_of_origin = $client->CountryOfOrigin();`

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

```php
// list() returns an array of CountryOfOrigin records (throws on error).
$country_of_origins = $client->CountryOfOrigin()->list();
```


### CountryOfResettlement

Create an instance: `$country_of_resettlement = $client->CountryOfResettlement();`

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

```php
// list() returns an array of CountryOfResettlement records (throws on error).
$country_of_resettlements = $client->CountryOfResettlement()->list();
```


### Demographic

Create an instance: `$demographic = $client->Demographic();`

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

```php
// list() returns an array of Demographic records (throws on error).
$demographics = $client->Demographic()->list();
```


### Departure

Create an instance: `$departure = $client->Departure();`

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

```php
// list() returns an array of Departure records (throws on error).
$departures = $client->Departure()->list();
```


### Helper

Create an instance: `$helper = $client->Helper();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare Helper record (throws on error).
$helper = $client->Helper()->load(["id" => "helper_id"]);
```


### Region

Create an instance: `$region = $client->Region();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | ``$STRING`` |  |

#### Example: List

```php
// list() returns an array of Region records (throws on error).
$regions = $client->Region()->list();
```


### Submission

Create an instance: `$submission = $client->Submission();`

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

```php
// list() returns an array of Submission records (throws on error).
$submissions = $client->Submission()->list();
```


### UrlFetch

Create an instance: `$url_fetch = $client->UrlFetch();`

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

```php
// list() returns an array of UrlFetch records (throws on error).
$url_fetchs = $client->UrlFetch()->list();
```


### Year

Create an instance: `$year = $client->Year();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of Year records (throws on error).
$years = $client->Year()->list();
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
error is returned to the caller as the second element in the return array.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── rsq_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`rsq_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$category = $client->Category();
$category->load(["id" => "example_id"]);

// $category->dataGet() now returns the loaded category data
// $category->matchGet() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
