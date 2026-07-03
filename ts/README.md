# Rsq TypeScript SDK



The TypeScript SDK for the Rsq API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
npm install rsq
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { RsqSDK } from 'rsq'

const client = new RsqSDK({
  apikey: process.env.RSQ_APIKEY,
})
```

### 2. List categorys

```ts
const result = await client.Category().list()

if (result.ok) {
  for (const item of result.data) {
    console.log(item.id, item.name)
  }
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = RsqSDK.test()

const result = await client.Planet().load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new RsqSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Planet()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new RsqSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
RSQ_TEST_LIVE=TRUE
RSQ_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### RsqSDK

#### Constructor

```ts
new RsqSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Category(data?)` | `CategoryEntity` | Create a Category entity instance. |
| `CountryOfAsylum(data?)` | `CountryOfAsylumEntity` | Create a CountryOfAsylum entity instance. |
| `CountryOfOrigin(data?)` | `CountryOfOriginEntity` | Create a CountryOfOrigin entity instance. |
| `CountryOfResettlement(data?)` | `CountryOfResettlementEntity` | Create a CountryOfResettlement entity instance. |
| `Demographic(data?)` | `DemographicEntity` | Create a Demographic entity instance. |
| `Departure(data?)` | `DepartureEntity` | Create a Departure entity instance. |
| `Helper(data?)` | `HelperEntity` | Create a Helper entity instance. |
| `Region(data?)` | `RegionEntity` | Create a Region entity instance. |
| `Submission(data?)` | `SubmissionEntity` | Create a Submission entity instance. |
| `UrlFetch(data?)` | `UrlFetchEntity` | Create a UrlFetch entity instance. |
| `Year(data?)` | `YearEntity` | Create a Year entity instance. |
| `tester(testopts?, sdkopts?)` | `RsqSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `RsqSDK.test(testopts?, sdkopts?)` | `RsqSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): RsqSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Category

| Field | Description |
| --- | --- |
| `code` |  |
| `name` |  |

Operations: list.

API path: `/categories`

#### CountryOfAsylum

| Field | Description |
| --- | --- |
| `code` |  |
| `name` |  |
| `region` |  |

Operations: list.

API path: `/asylums`

#### CountryOfOrigin

| Field | Description |
| --- | --- |
| `code` |  |
| `name` |  |
| `region` |  |

Operations: list.

API path: `/origins/departures`

#### CountryOfResettlement

| Field | Description |
| --- | --- |
| `code` |  |
| `name` |  |
| `region` |  |

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/departures`

#### Helper

| Field | Description |
| --- | --- |

Operations: load.

API path: `/export/csv`

#### Region

| Field | Description |
| --- | --- |
| `name` |  |

Operations: list.

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

Operations: list.

API path: `/submissions`

#### UrlFetch

| Field | Description |
| --- | --- |
| `status` |  |
| `url` |  |

Operations: list.

API path: `/fetchUrl`

#### Year

| Field | Description |
| --- | --- |

Operations: list.

API path: `/years`



## Entities


### Category

Create an instance: `const category = client.Category()`

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
const categorys = await client.Category().list()
```


### CountryOfAsylum

Create an instance: `const country_of_asylum = client.CountryOfAsylum()`

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
const country_of_asylums = await client.CountryOfAsylum().list()
```


### CountryOfOrigin

Create an instance: `const country_of_origin = client.CountryOfOrigin()`

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
const country_of_origins = await client.CountryOfOrigin().list()
```


### CountryOfResettlement

Create an instance: `const country_of_resettlement = client.CountryOfResettlement()`

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
const country_of_resettlements = await client.CountryOfResettlement().list()
```


### Demographic

Create an instance: `const demographic = client.Demographic()`

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
const demographics = await client.Demographic().list()
```


### Departure

Create an instance: `const departure = client.Departure()`

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
const departures = await client.Departure().list()
```


### Helper

Create an instance: `const helper = client.Helper()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const helper = await client.Helper().load({ id: 'helper_id' })
```


### Region

Create an instance: `const region = client.Region()`

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
const regions = await client.Region().list()
```


### Submission

Create an instance: `const submission = client.Submission()`

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
const submissions = await client.Submission().list()
```


### UrlFetch

Create an instance: `const url_fetch = client.UrlFetch()`

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
const url_fetchs = await client.UrlFetch().list()
```


### Year

Create an instance: `const year = client.Year()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const years = await client.Year().list()
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
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
rsq/
├── src/
│   ├── RsqSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { RsqSDK } from 'rsq'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const moon = client.Moon()
await moon.load({ planet_id: 'earth', id: 'luna' })

// moon.data() now returns the loaded moon data
// moon.match() returns { planet_id: 'earth', id: 'luna' }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
