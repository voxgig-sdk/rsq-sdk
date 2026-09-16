

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


describe('DemographicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RSQ_TEST_LIVE=TRUE.
  afterEach(liveDelay('RSQ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RsqSDK.test()
    const ent = testsdk.Demographic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RSQ_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'demographic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"destination","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"destination_name","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"femalesAdult","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"femalesSenior","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"femalesTotal","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"femalesUnderage","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"femalesUnknown","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"malesAdult","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"name":"malesSenior","req":false,"type":"`$INTEGER`","index$":8},{"active":true,"name":"malesTotal","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"name":"malesUnderage","req":false,"type":"`$INTEGER`","index$":10},{"active":true,"name":"malesUnknown","req":false,"type":"`$INTEGER`","index$":11},{"active":true,"name":"origin","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"origin_name","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"other","req":false,"type":"`$INTEGER`","index$":14},{"active":true,"name":"total","req":false,"type":"`$INTEGER`","index$":15},{"active":true,"name":"year","req":false,"type":"`$INTEGER`","index$":16}],"name":"demographic","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"en","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"origin","orig":"origin","reqd":false,"type":"`$ARRAY`","index$":1},{"active":true,"kind":"query","name":"origin_compare","orig":"origin_compare","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"kind":"query","name":"resettlement","orig":"resettlement","reqd":false,"type":"`$ARRAY`","index$":3},{"active":true,"kind":"query","name":"year","orig":"year","reqd":false,"type":"`$ARRAY`","index$":4}]},"contract":{"id":"GET /demographics","json":"{\"operationId\":\"getDemographics\",\"parameters\":[{\"description\":\"Return results will be translated in requested language. Defaults to english\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en\",\"enum\":[\"en\",\"fr\"],\"type\":\"string\"}},{\"description\":\"One or more available years\",\"explode\":false,\"in\":\"query\",\"name\":\"year\",\"required\":false,\"schema\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"One or more country of origin codes\",\"explode\":false,\"in\":\"query\",\"name\":\"origin\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Used in combination with atleast one origin. Groups all other origins as 'All others' entry in results\",\"in\":\"query\",\"name\":\"originCompare\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"One or more country of resettlement codes\",\"explode\":false,\"in\":\"query\",\"name\":\"resettlement\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"results\":{\"items\":{\"properties\":{\"destination\":{\"example\":\"NOR\",\"type\":\"string\"},\"destination_name\":{\"example\":\"Norway\",\"type\":\"string\"},\"femalesAdult\":{\"example\":300,\"type\":\"integer\"},\"femalesSenior\":{\"example\":45,\"type\":\"integer\"},\"femalesTotal\":{\"example\":375,\"type\":\"integer\"},\"femalesUnderage\":{\"example\":25,\"type\":\"integer\"},\"femalesUnknown\":{\"example\":5,\"type\":\"integer\"},\"malesAdult\":{\"example\":300,\"type\":\"integer\"},\"malesSenior\":{\"example\":45,\"type\":\"integer\"},\"malesTotal\":{\"example\":375,\"type\":\"integer\"},\"malesUnderage\":{\"example\":25,\"type\":\"integer\"},\"malesUnknown\":{\"example\":5,\"type\":\"integer\"},\"origin\":{\"example\":\"SYR\",\"type\":\"string\"},\"origin_name\":{\"example\":\"Syrian Arab Rep.\",\"type\":\"string\"},\"other\":{\"example\":5,\"type\":\"integer\"},\"total\":{\"example\":755,\"type\":\"integer\"},\"year\":{\"example\":2013,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"example\":\"#c3X3\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Valid request\"},\"default\":{\"description\":\"Unexpected error occurred\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/demographics","segments":[{"lit":"demographics"}],"select":{"exist":["language","origin","origin_compare","resettlement","year"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"demographic","name__orig":"demographic","Name":"Demographic","name_":"demographic","name-":"demographic","NAME":"DEMOGRAPHIC","index$":4}, {"active":true,"entity":"demographic","key$":"BasicDemographicFlow","kind":"basic","name":"BasicDemographicFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"demographic_ref01"}}],"index$":0}]}, 'Demographic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let demographic_ref01_data = Object.values(setup.data.existing.demographic)[0] as any

    // LIST
    const demographic_ref01_ent = client.Demographic()
    const demographic_ref01_match: any = {}

    const demographic_ref01_list = (await demographic_ref01_ent.list(demographic_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/demographic/DemographicTestData.json')

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
    ['demographic01','demographic02','demographic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RSQ_TEST_DEMOGRAPHIC_ENTID': idmap,
    'RSQ_TEST_LIVE': 'FALSE',
    'RSQ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RSQ_TEST_DEMOGRAPHIC_ENTID']

  const live = 'TRUE' === env.RSQ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RSQ_TEST_DEMOGRAPHIC_ENTID']
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
  
