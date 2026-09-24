

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


describe('CountryOfResettlementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RSQ_TEST_LIVE=TRUE.
  afterEach(liveDelay('RSQ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RsqSDK.test()
    const ent = testsdk.CountryOfResettlement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RSQ_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'country_of_resettlement.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"code":{"a":true,"h":"Code","n":"code","r":false,"t":"`$STRING`","key$":"code","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":1},"region":{"a":true,"h":"Region","n":"region","r":false,"t":"`$STRING`","key$":"region","index$":2}},"name":"country_of_resettlement","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /destinations","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/destinations","q":{"exist":["language"]},"r":{},"s":[{"lit":"destinations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"country_of_resettlement","name__orig":"country_of_resettlement","Name":"CountryOfResettlement","name_":"country_of_resettlement","name-":"country-of-resettlement","NAME":"COUNTRY_OF_RESETTLEMENT","index$":2}, {"active":true,"entity":"country_of_resettlement","key$":"BasicCountryOfResettlementFlow","kind":"basic","name":"BasicCountryOfResettlementFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"country_of_resettlement_ref01"}}],"index$":0}]}, 'CountryOfResettlement', {"GET /destinations":{"protocol":"http","operationId":"getDestinations","responses":{"200":{"description":"Valid request","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"code":{"type":"string","example":"HRV","key$":"code"},"name":{"type":"string","example":"Croatia","key$":"name"},"region":{"type":"string","example":"Europe","key$":"region"}},"x-ref":"#/components/schemas/CountryOfResettlement","index$":0}}}}},"default":{"description":"Unexpected error occurred"}},"parameters":[{"name":"language","in":"query","description":"Return results will be translated in requested language. Defaults to english","required":false,"schema":{"type":"string","enum":["en","fr"],"default":"en"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let country_of_resettlement_ref01_data = Object.values(setup.data.existing.country_of_resettlement)[0] as any

    // LIST
    const country_of_resettlement_ref01_ent = client.CountryOfResettlement()
    const country_of_resettlement_ref01_match: any = {}

    const country_of_resettlement_ref01_list = (await country_of_resettlement_ref01_ent.list(country_of_resettlement_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/country_of_resettlement/CountryOfResettlementTestData.json')

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
    ['country_of_resettlement01','country_of_resettlement02','country_of_resettlement03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RSQ_TEST_COUNTRY_OF_RESETTLEMENT_ENTID': idmap,
    'RSQ_TEST_LIVE': 'FALSE',
    'RSQ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RSQ_TEST_COUNTRY_OF_RESETTLEMENT_ENTID']

  const live = 'TRUE' === env.RSQ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RSQ_TEST_COUNTRY_OF_RESETTLEMENT_ENTID']
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
  
