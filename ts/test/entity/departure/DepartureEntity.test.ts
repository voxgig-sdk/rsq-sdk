

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RsqSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('DepartureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RSQ_TEST_LIVE=TRUE.
  afterEach(liveDelay('RSQ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RsqSDK.test()
    const ent = testsdk.Departure()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RSQ_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'departure.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"asylum","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"asylum_name","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"destination","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"destination_name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"origin","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"origin_name","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"persons","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"year","req":false,"type":"`$INTEGER`","index$":7}],"name":"departure","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"asylum","orig":"asylum","reqd":false,"type":"`$ARRAY`","index$":0},{"active":true,"kind":"query","name":"asylum_compare","orig":"asylum_compare","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"kind":"query","name":"asylum_sort","orig":"asylum_sort","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"en","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"origin","orig":"origin","reqd":false,"type":"`$ARRAY`","index$":4},{"active":true,"kind":"query","name":"origin_compare","orig":"origin_compare","reqd":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"kind":"query","name":"origin_sort","orig":"origin_sort","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":7},{"active":true,"kind":"query","name":"persons_sort","orig":"persons_sort","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"kind":"query","name":"resettlement","orig":"resettlement","reqd":false,"type":"`$ARRAY`","index$":9},{"active":true,"kind":"query","name":"resettlement_sort","orig":"resettlement_sort","reqd":false,"type":"`$STRING`","index$":10},{"active":true,"kind":"query","name":"year","orig":"year","reqd":false,"type":"`$ARRAY`","index$":11},{"active":true,"kind":"query","name":"year_sort","orig":"year_sort","reqd":false,"type":"`$STRING`","index$":12}]},"contract":{"id":"GET /departures","json":"{\"operationId\":\"getDepartures\",\"parameters\":[{\"description\":\"Return results will be translated in requested language. Defaults to english\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en\",\"enum\":[\"en\",\"fr\"],\"type\":\"string\"}},{\"description\":\"Current page of results\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"One or more available years\",\"explode\":false,\"in\":\"query\",\"name\":\"year\",\"required\":false,\"schema\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"One or more country of origin codes\",\"explode\":false,\"in\":\"query\",\"name\":\"origin\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Used in combination with atleast one origin. Groups all other origins as 'All others' entry in results\",\"in\":\"query\",\"name\":\"originCompare\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"One or more country of asylum codes\",\"explode\":false,\"in\":\"query\",\"name\":\"asylum\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Used in combination with atleast one asylum. Groups all other asylums as 'All others' entry in results\",\"in\":\"query\",\"name\":\"asylumCompare\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"One or more country of resettlement codes\",\"explode\":false,\"in\":\"query\",\"name\":\"resettlement\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Sort results by year ascending or descending\",\"in\":\"query\",\"name\":\"yearSort\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}},{\"description\":\"Sort results by country of origin ascending or descending\",\"in\":\"query\",\"name\":\"originSort\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}},{\"description\":\"Sort results by country of asylum ascending or descending\",\"in\":\"query\",\"name\":\"asylumSort\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}},{\"description\":\"Sort results by country of resettlement ascending or descending\",\"in\":\"query\",\"name\":\"resettlementSort\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}},{\"description\":\"Sort results by number of persons ascending or descending\",\"in\":\"query\",\"name\":\"personsSort\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"chartFilterTypes\":{\"properties\":{\"asylum\":{\"type\":\"boolean\"},\"origin\":{\"type\":\"boolean\"},\"resettlement\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"page\":{\"example\":1,\"type\":\"integer\"},\"results\":{\"items\":{\"properties\":{\"asylum\":{\"example\":\"JOR\",\"type\":\"string\"},\"asylum_name\":{\"example\":\"Jordan\",\"type\":\"string\"},\"destination\":{\"example\":\"NOR\",\"type\":\"string\"},\"destination_name\":{\"example\":\"Norway\",\"type\":\"string\"},\"origin\":{\"example\":\"SYR\",\"type\":\"string\"},\"origin_name\":{\"example\":\"Syrian Arab Rep.\",\"type\":\"string\"},\"persons\":{\"example\":14,\"type\":\"integer\"},\"year\":{\"example\":2013,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"example\":12345,\"type\":\"integer\"},\"totalPages\":{\"example\":10,\"type\":\"integer\"},\"url\":{\"example\":\"#c3X3\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Valid request\"},\"default\":{\"description\":\"Unexpected error occurred\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/departures","segments":[{"lit":"departures"}],"select":{"exist":["asylum","asylum_compare","asylum_sort","language","origin","origin_compare","origin_sort","page","persons_sort","resettlement","resettlement_sort","year","year_sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"departure","name__orig":"departure","Name":"Departure","name_":"departure","name-":"departure","NAME":"DEPARTURE","index$":5}, {"active":true,"entity":"departure","key$":"BasicDepartureFlow","kind":"basic","name":"BasicDepartureFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"departure_ref01"}}],"index$":0}]}, 'Departure')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let departure_ref01_data = Object.values(setup.data.existing.departure)[0] as any

    // LIST
    const departure_ref01_ent = client.Departure()
    const departure_ref01_match: any = {}

    const departure_ref01_list = (await departure_ref01_ent.list(departure_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/departure/DepartureTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RsqSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['departure01','departure02','departure03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RSQ_TEST_DEPARTURE_ENTID': idmap,
    'RSQ_TEST_LIVE': 'FALSE',
    'RSQ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RSQ_TEST_DEPARTURE_ENTID']

  const live = 'TRUE' === env.RSQ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RSQ_TEST_DEPARTURE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RsqSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.RSQ_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
