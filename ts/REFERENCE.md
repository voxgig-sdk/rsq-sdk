# Rsq TypeScript SDK Reference

Complete API reference for the Rsq TypeScript SDK.


## RsqSDK

### Constructor

```ts
new RsqSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RsqSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = RsqSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `RsqSDK` instance in test mode.


### Instance Methods

#### `Category(data?: object)`

Create a new `Category` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CategoryEntity` instance.

#### `CountryOfAsylum(data?: object)`

Create a new `CountryOfAsylum` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryOfAsylumEntity` instance.

#### `CountryOfOrigin(data?: object)`

Create a new `CountryOfOrigin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryOfOriginEntity` instance.

#### `CountryOfResettlement(data?: object)`

Create a new `CountryOfResettlement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryOfResettlementEntity` instance.

#### `Demographic(data?: object)`

Create a new `Demographic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DemographicEntity` instance.

#### `Departure(data?: object)`

Create a new `Departure` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DepartureEntity` instance.

#### `Helper(data?: object)`

Create a new `Helper` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HelperEntity` instance.

#### `Region(data?: object)`

Create a new `Region` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegionEntity` instance.

#### `Submission(data?: object)`

Create a new `Submission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubmissionEntity` instance.

#### `UrlFetch(data?: object)`

Create a new `UrlFetch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UrlFetchEntity` instance.

#### `Year(data?: object)`

Create a new `Year` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `YearEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `RsqSDK.test()`.

**Returns:** `RsqSDK` instance in test mode.


---

## CategoryEntity

```ts
const category = client.Category()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Category().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CategoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryOfAsylumEntity

```ts
const country_of_asylum = client.CountryOfAsylum()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CountryOfAsylum().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryOfAsylumEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryOfOriginEntity

```ts
const country_of_origin = client.CountryOfOrigin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CountryOfOrigin().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryOfOriginEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryOfResettlementEntity

```ts
const country_of_resettlement = client.CountryOfResettlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `region` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CountryOfResettlement().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryOfResettlementEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DemographicEntity

```ts
const demographic = client.Demographic()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Demographic().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DemographicEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DepartureEntity

```ts
const departure = client.Departure()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Departure().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DepartureEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HelperEntity

```ts
const helper = client.Helper()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Helper().load({ id: 'helper_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HelperEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegionEntity

```ts
const region = client.Region()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Region().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubmissionEntity

```ts
const submission = client.Submission()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Submission().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubmissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UrlFetchEntity

```ts
const url_fetch = client.UrlFetch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UrlFetch().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UrlFetchEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## YearEntity

```ts
const year = client.Year()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Year().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `YearEntity` instance with the same client and
options.

#### `client()`

Return the parent `RsqSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new RsqSDK({
  feature: {
    test: { active: true },
  }
})
```

