# Rsq SDK

Query UNHCR resettlement submissions, departures, and demographics by year, origin, asylum, and destination country

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About RSQ API

The RSQ API (Resettlement Statistics Query) is a public REST API run by [UNHCR](https://www.unhcr.org/), the United Nations High Commissioner for Refugees. It exposes the statistics that underpin UNHCR's resettlement reporting, covering submissions made on behalf of refugees, actual departures to resettlement countries, and demographic breakdowns of the people involved.

What you get from the API:

- Reference lists: resettlement submission `categories`, UNHCR `regions`, and the available `years` for each dataset
- Country lookups for countries of `asylum`, `origin` (submissions/departures/demographics), and resettlement `destinations`
- Paginated query endpoints for `submissions`, `departures`, and `demographics`, filterable by year, origin, asylum, and destination
- Helper endpoints to resolve hashed URLs (`fetchUrl`) and to export query results as CSV (`export/csv`)

The API is served at `http://api.unhcr.org/rsq/v1`, returns JSON, requires no authentication, and has CORS enabled. Submission and departure queries are paginated at 20 results per page.

## Try it

**TypeScript**
```bash
npm install rsq
```

**Python**
```bash
pip install rsq-sdk
```

**PHP**
```bash
composer require voxgig/rsq-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/rsq-sdk/go
```

**Ruby**
```bash
gem install rsq-sdk
```

**Lua**
```bash
luarocks install rsq-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { RsqSDK } from 'rsq'

const client = new RsqSDK({})

// List all categorys
const categorys = await client.Category().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o rsq-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "rsq": {
      "command": "/abs/path/to/rsq-mcp"
    }
  }
}
```

## Entities

The API exposes 11 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Category** | Resettlement submission categories (code and name) used to classify why a case was submitted; served from `GET /categories`. | `/categories` |
| **CountryOfAsylum** | Countries currently hosting refugees who are candidates for resettlement; listed via `GET /asylums`. | `/asylums` |
| **CountryOfOrigin** | Origin countries of refugees, available per dataset via `GET /origins/submissions`, `GET /origins/departures`, and `GET /origins/demographics`. | `/origins/departures` |
| **CountryOfResettlement** | Destination countries that receive resettled refugees; listed via `GET /destinations`. | `/destinations` |
| **Demographic** | Demographic breakdowns of resettled persons by gender and age band (underage, adult, senior, unknown), queryable via `GET /demographics`. | `/demographics` |
| **Departure** | Records of actual resettlement departures, paginated and filterable by year, origin, asylum, and destination; served from `GET /departures`. | `/departures` |
| **Helper** | Utility endpoints such as `GET /fetchUrl` (resolve a hashed query URL) and `GET /export/csv` (export query results as CSV). | `/export/csv` |
| **Region** | UNHCR regional groupings used to aggregate countries of asylum; served from `GET /regions`. | `/regions` |
| **Submission** | Resettlement submission records (cases referred for resettlement consideration), paginated 20 per page via `GET /submissions`. | `/submissions` |
| **UrlFetch** | Helper to expand a short hash code back into a full query URL via `GET /fetchUrl`. | `/fetchUrl` |
| **Year** | Available reporting years for the various datasets, exposed via `GET /years` and `GET /years/demographics`. | `/years` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from rsq_sdk import RsqSDK

client = RsqSDK({})

# List all categorys
categorys, err = client.Category(None).list(None, None)
```

### PHP

```php
<?php
require_once 'rsq_sdk.php';

$client = new RsqSDK([]);

// List all categorys
[$categorys, $err] = $client->Category(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/rsq-sdk/go"

client := sdk.NewRsqSDK(map[string]any{})

// List all categorys
categorys, err := client.Category(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Rsq_sdk"

client = RsqSDK.new({})

# List all categorys
categorys, err = client.Category(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("rsq_sdk")

local client = sdk.new({})

-- List all categorys
local categorys, err = client:Category(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = RsqSDK.test()
const result = await client.Category().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = RsqSDK.test(None, None)
result, err = client.Category(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = RsqSDK::test(null, null);
[$result, $err] = $client->Category(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Category(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = RsqSDK.test(nil, nil)
result, err = client.Category(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Category(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the RSQ API

- Upstream: [https://api.unhcr.org/docs/index.html](https://api.unhcr.org/docs/index.html)

- Public API operated by [UNHCR](https://www.unhcr.org/), the UN Refugee Agency
- No authentication, API key, or registration required
- No explicit licence is published with the API; data is sourced from UNHCR statistics and standard UNHCR terms of use apply
- Attribution to UNHCR is expected when redistributing or visualising the data

---

Generated from the RSQ API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
