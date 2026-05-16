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
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## CategoryEntity

```php
$category = $client->Category();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Category()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CategoryEntity`

Create a new `CategoryEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CountryOfAsylumEntity

```php
$country_of_asylum = $client->CountryOfAsylum();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->CountryOfAsylum()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CountryOfAsylumEntity`

Create a new `CountryOfAsylumEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CountryOfOriginEntity

```php
$country_of_origin = $client->CountryOfOrigin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->CountryOfOrigin()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CountryOfOriginEntity`

Create a new `CountryOfOriginEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CountryOfResettlementEntity

```php
$country_of_resettlement = $client->CountryOfResettlement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->CountryOfResettlement()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CountryOfResettlementEntity`

Create a new `CountryOfResettlementEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## DemographicEntity

```php
$demographic = $client->Demographic();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Demographic()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DemographicEntity`

Create a new `DemographicEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## DepartureEntity

```php
$departure = $client->Departure();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Departure()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DepartureEntity`

Create a new `DepartureEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## HelperEntity

```php
$helper = $client->Helper();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Helper()->load(["id" => "helper_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): HelperEntity`

Create a new `HelperEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RegionEntity

```php
$region = $client->Region();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Region()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RegionEntity`

Create a new `RegionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SubmissionEntity

```php
$submission = $client->Submission();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Submission()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SubmissionEntity`

Create a new `SubmissionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## UrlFetchEntity

```php
$url_fetch = $client->UrlFetch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->UrlFetch()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): UrlFetchEntity`

Create a new `UrlFetchEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## YearEntity

```php
$year = $client->Year();
```

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Year()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): YearEntity`

Create a new `YearEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new RsqSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

