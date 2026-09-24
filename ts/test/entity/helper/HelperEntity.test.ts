

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('HelperEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RSQ_TEST_LIVE=TRUE.
  afterEach(liveDelay('RSQ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RsqSDK.test()
    const ent = testsdk.Helper()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RSQ_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'helper.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"helper","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /export/csv","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"origin","or":"origin","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"resettlement","or":"resettlement","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"year","or":"year","r":false,"t":"`$ARRAY`","index$":3}]},"k":"http","m":"GET","o":"/export/csv","q":{"exist":["origin","resettlement","type","year"]},"r":{},"s":[{"lit":"export"},{"lit":"csv"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"helper","name__orig":"helper","Name":"Helper","name_":"helper","name-":"helper","NAME":"HELPER","index$":5}, {"active":true,"entity":"helper","key$":"BasicHelperFlow","kind":"basic","name":"BasicHelperFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"helper_ref01","srcdatavar":"helper_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-helper_ref01"}}],"index$":0}]}, 'Helper', {"GET /export/csv":{"protocol":"http","operationId":"exportCsv","responses":{"200":{"description":"Valid request","content":{"text/csv":{"schema":{"type":"string"}}}},"default":{"description":"Unexpected error occurred"}},"parameters":[{"name":"type","in":"query","description":"Type of data to export","required":false,"schema":{"type":"string"},"index$":0},{"name":"year","in":"query","description":"One or more available years","required":false,"schema":{"type":"array","items":{"type":"integer"}},"style":"form","explode":false,"index$":1},{"name":"origin","in":"query","description":"One or more country of origin codes","required":false,"schema":{"type":"array","items":{"type":"string"}},"style":"form","explode":false,"index$":2},{"name":"resettlement","in":"query","description":"One or more country of resettlement codes","required":false,"schema":{"type":"array","items":{"type":"string"}},"style":"form","explode":false,"index$":3}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let helper_ref01_data = Object.values(setup.data.existing.helper)[0] as any

    // LOAD
    const helper_ref01_ent = client.Helper()
    const helper_ref01_match_dt0: any = {}
    const helper_ref01_data_dt0 = (await helper_ref01_ent.load(helper_ref01_match_dt0)).data()
    assert(null != helper_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/helper/HelperTestData.json')

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
    ['helper01','helper02','helper03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RSQ_TEST_HELPER_ENTID': idmap,
    'RSQ_TEST_LIVE': 'FALSE',
    'RSQ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RSQ_TEST_HELPER_ENTID']

  const live = 'TRUE' === env.RSQ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RSQ_TEST_HELPER_ENTID']
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
  
