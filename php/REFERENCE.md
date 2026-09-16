# Rsq PHP SDK Reference

Complete API reference for the Rsq PHP SDK.


## RsqSDK

### Constructor

```php
require_once __DIR__ . '/rsq_sdk.php';

$client = new RsqSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RsqSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = RsqSDK::test();
```


### Instance Methods

#### `Category($data = null)`

Create a new `CategoryEntity` instance. Pass `null` for no initial data.

#### `CountryOfAsylum($data = null)`

Create a new `CountryOfAsylumEntity` instance. Pass `null` for no initial data.

#### `CountryOfOrigin($data = null)`

Create a new `CountryOfOriginEntity` instance. Pass `null` for no initial data.

#### `CountryOfResettlement($data = null)`

Create a new `CountryOfResettlementEntity` instance. Pass `null` for no initial data.

#### `Demographic($data = null)`

Create a new `DemographicEntity` instance. Pass `null` for no initial data.

#### `Departure($data = null)`

Create a new `DepartureEntity` instance. Pass `null` for no initial data.

#### `Helper($data = null)`

Create a new `HelperEntity` instance. Pass `null` for no initial data.

#### `Region($data = null)`

Create a new `RegionEntity` instance. Pass `null` for no initial data.

#### `Submission($data = null)`

Create a new `SubmissionEntity` instance. Pass `null` for no initial data.

#### `UrlFetch($data = null)`

Create a new `UrlFetchEntity` instance. Pass `null` for no initial data.

#### `Year($data = null)`

Create a new `YearEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): RsqUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CategoryEntity

```php
$category = $client->Category();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Category()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CategoryEntity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountryOfAsylumEntity

```php
$country_of_asylum = $client->CountryOfAsylum();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CountryOfAsylum()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountryOfAsylumEntity`

Create a new `CountryOfAsylumEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountryOfOriginEntity

```php
$country_of_origin = $client->CountryOfOrigin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CountryOfOrigin()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountryOfOriginEntity`

Create a new `CountryOfOriginEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CountryOfResettlementEntity

```php
$country_of_resettlement = $client->CountryOfResettlement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `name` | `string` | No |  |
| `region` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CountryOfResettlement()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CountryOfResettlementEntity`

Create a new `CountryOfResettlementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DemographicEntity

```php
$demographic = $client->Demographic();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Demographic()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DemographicEntity`

Create a new `DemographicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DepartureEntity

```php
$departure = $client->Departure();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Departure()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DepartureEntity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HelperEntity

```php
$helper = $client->Helper();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Helper()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HelperEntity`

Create a new `HelperEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RegionEntity

```php
$region = $client->Region();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Region()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RegionEntity`

Create a new `RegionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubmissionEntity

```php
$submission = $client->Submission();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Submission()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubmissionEntity`

Create a new `SubmissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UrlFetchEntity

```php
$url_fetch = $client->UrlFetch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UrlFetch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UrlFetchEntity`

Create a new `UrlFetchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## YearEntity

```php
$year = $client->Year();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Year()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): YearEntity`

Create a new `YearEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```php
$client = new RsqSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

