

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


describe('SubmissionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RSQ_TEST_LIVE=TRUE.
  afterEach(liveDelay('RSQ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RsqSDK.test()
    const ent = testsdk.Submission()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RSQ_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'submission.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"asylum":{"a":true,"h":"Asylum","n":"asylum","r":false,"t":"`$STRING`","key$":"asylum","index$":0},"asylum_name":{"a":true,"h":"Asylum Name","n":"asylum_name","r":false,"t":"`$STRING`","key$":"asylum_name","index$":1},"code":{"a":true,"h":"Code","n":"code","r":false,"t":"`$STRING`","key$":"code","index$":2},"destination":{"a":true,"h":"Destination","n":"destination","r":false,"t":"`$STRING`","key$":"destination","index$":3},"destination_name":{"a":true,"h":"Destination Name","n":"destination_name","r":false,"t":"`$STRING`","key$":"destination_name","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"origin":{"a":true,"h":"Origin","n":"origin","r":false,"t":"`$STRING`","key$":"origin","index$":6},"origin_name":{"a":true,"h":"Origin Name","n":"origin_name","r":false,"t":"`$STRING`","key$":"origin_name","index$":7},"persons":{"a":true,"h":"Persons","n":"persons","r":false,"t":"`$INTEGER`","key$":"persons","index$":8},"region":{"a":true,"h":"Region","n":"region","r":false,"t":"`$STRING`","key$":"region","index$":9},"year":{"a":true,"h":"Year","n":"year","r":false,"t":"`$INTEGER`","key$":"year","index$":10}},"name":"submission","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /submissions","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"asylum","or":"asylum","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"asylum_compare","or":"asylum_compare","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"asylum_sort","or":"asylum_sort","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"en","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"origin","or":"origin","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"k":"query","n":"origin_compare","or":"origin_compare","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"k":"query","n":"origin_sort","or":"origin_sort","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"k":"query","n":"persons_sort","or":"persons_sort","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"resettlement","or":"resettlement","r":false,"t":"`$ARRAY`","index$":9},{"a":true,"k":"query","n":"resettlement_sort","or":"resettlement_sort","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"year","or":"year","r":false,"t":"`$ARRAY`","index$":11},{"a":true,"k":"query","n":"year_sort","or":"year_sort","r":false,"t":"`$STRING`","index$":12}]},"k":"http","m":"GET","o":"/submissions","q":{"exist":["asylum","asylum_compare","asylum_sort","language","origin","origin_compare","origin_sort","page","persons_sort","resettlement","resettlement_sort","year","year_sort"]},"r":{},"s":[{"lit":"submissions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /origins/submissions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/origins/submissions","q":{"exist":["language"]},"r":{},"s":[{"lit":"origins"},{"lit":"submissions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"submission","name__orig":"submission","Name":"Submission","name_":"submission","name-":"submission","NAME":"SUBMISSION","index$":7}, {"active":true,"entity":"submission","key$":"BasicSubmissionFlow","kind":"basic","name":"BasicSubmissionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"submission_ref01"}}],"index$":0}]}, 'Submission', {"GET /submissions":{"protocol":"http","operationId":"getSubmissions","responses":{"200":{"description":"Valid request","content":{"application/json":{"schema":{"type":"object","properties":{"results":{"items":{"properties":{"asylum":{"example":"JOR","type":"string","key$":"asylum"},"asylum_name":{"example":"Jordan","type":"string","key$":"asylum_name"},"destination":{"example":"NOR","type":"string","key$":"destination"},"destination_name":{"example":"Norway","type":"string","key$":"destination_name"},"origin":{"example":"SYR","type":"string","key$":"origin"},"origin_name":{"example":"Syrian Arab Rep.","type":"string","key$":"origin_name"},"persons":{"example":14,"type":"integer","key$":"persons"},"year":{"example":2013,"type":"integer","key$":"year"}},"type":"object","x-ref":"#/components/schemas/Submissions","index$":0},"key$":"results","type":"array"},"total":{"example":12345,"key$":"total","type":"integer"},"url":{"example":"#c3X3","key$":"url","type":"string"},"page":{"example":1,"key$":"page","type":"integer"},"totalPages":{"example":10,"key$":"totalPages","type":"integer"},"chartFilterTypes":{"key$":"chartFilterTypes","properties":{"asylum":{"type":"boolean"},"origin":{"type":"boolean"},"resettlement":{"type":"boolean"}},"type":"object","x-ref":"#/components/schemas/ChartFilterTypes"}},"x-ref":"#/components/schemas/SubmissionsResponse"}}}},"default":{"description":"Unexpected error occurred"}},"parameters":[{"name":"language","in":"query","description":"Return results will be translated in requested language. Defaults to english","required":false,"schema":{"type":"string","enum":["en","fr"],"default":"en"},"index$":0},{"name":"page","in":"query","description":"Current page of results","required":false,"schema":{"type":"integer"},"index$":1},{"name":"year","in":"query","description":"One or more available years","required":false,"schema":{"type":"array","items":{"type":"integer"}},"style":"form","explode":false,"index$":2},{"name":"origin","in":"query","description":"One or more country of origin codes","required":false,"schema":{"type":"array","items":{"type":"string"}},"style":"form","explode":false,"index$":3},{"name":"originCompare","in":"query","description":"Used in combination with atleast one origin. Groups all other origins as 'All others' entry in results","required":false,"schema":{"type":"boolean"},"index$":4},{"name":"asylum","in":"query","description":"One or more country of asylum codes","required":false,"schema":{"type":"array","items":{"type":"string"}},"style":"form","explode":false,"index$":5},{"name":"asylumCompare","in":"query","description":"Used in combination with atleast one asylum. Groups all other asylums as 'All others' entry in results","required":false,"schema":{"type":"boolean"},"index$":6},{"name":"resettlement","in":"query","description":"One or more country of resettlement codes","required":false,"schema":{"type":"array","items":{"type":"string"}},"style":"form","explode":false,"index$":7},{"name":"yearSort","in":"query","description":"Sort results by year ascending or descending","required":false,"schema":{"type":"string","enum":["asc","desc"]},"index$":8},{"name":"originSort","in":"query","description":"Sort results by country of origin ascending or descending","required":false,"schema":{"type":"string","enum":["asc","desc"]},"index$":9},{"name":"asylumSort","in":"query","description":"Sort results by country of asylum ascending or descending","required":false,"schema":{"type":"string","enum":["asc","desc"]},"index$":10},{"name":"resettlementSort","in":"query","description":"Sort results by country of resettlement ascending or descending","required":false,"schema":{"type":"string","enum":["asc","desc"]},"index$":11},{"name":"personsSort","in":"query","description":"Sort results by number of persons ascending or descending","required":false,"schema":{"type":"string","enum":["asc","desc"]},"index$":12}],"securitySource":"unspecified"},"GET /origins/submissions":{"protocol":"http","operationId":"getOriginsSubmissions","responses":{"200":{"description":"Valid request","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"code":{"type":"string","example":"HRV","key$":"code"},"name":{"type":"string","example":"Croatia","key$":"name"},"region":{"type":"string","example":"Europe","key$":"region"}},"x-ref":"#/components/schemas/CountryOfOrigin","index$":0}}}}},"default":{"description":"Unexpected error occurred"}},"parameters":[{"name":"language","in":"query","description":"Return results will be translated in requested language. Defaults to english","required":false,"schema":{"type":"string","enum":["en","fr"],"default":"en"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let submission_ref01_data = Object.values(setup.data.existing.submission)[0] as any

    // LIST
    const submission_ref01_ent = client.Submission()
    const submission_ref01_match: any = {}

    const submission_ref01_list = (await submission_ref01_ent.list(submission_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/submission/SubmissionTestData.json')

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
    ['submission01','submission02','submission03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RSQ_TEST_SUBMISSION_ENTID': idmap,
    'RSQ_TEST_LIVE': 'FALSE',
    'RSQ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RSQ_TEST_SUBMISSION_ENTID']

  const live = 'TRUE' === env.RSQ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RSQ_TEST_SUBMISSION_ENTID']
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
  
