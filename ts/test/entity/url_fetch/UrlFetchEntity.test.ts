

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


describe('UrlFetchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RSQ_TEST_LIVE=TRUE.
  afterEach(liveDelay('RSQ_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RsqSDK.test()
    const ent = testsdk.UrlFetch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RSQ_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'url_fetch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":1}],"name":"url_fetch","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"en","kind":"query","name":"language","orig":"language","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"url_hash","orig":"url_hash","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /fetchUrl","json":"{\"operationId\":\"fetchUrl\",\"parameters\":[{\"description\":\"# followed by a combination of 4 letters and/or numbers designating a unique query string\",\"in\":\"query\",\"name\":\"urlHash\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Return results will be translated in requested language. Defaults to english\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"default\":\"en\",\"enum\":[\"en\",\"fr\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"status\":{\"enum\":[\"success\",\"invalid\"],\"example\":\"success\",\"type\":\"string\"},\"url\":{\"example\":\"http://api.unhcr.org/rsq/v1/submissions?asylum=&asylumCompare=&asylumRegion=&origin=AFG%2CBTN%2CCOD%2CERI%2CIRN%2CIRQ%2CMMR%2CSOM%2CSDN%2CSYR&originCompare=true&resettlement=&type=submissions&year=2013%2C2014%2C2015%2C2016%2C2017\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Valid request\"},\"default\":{\"description\":\"Unexpected error occurred\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/fetchUrl","segments":[{"lit":"fetchUrl"}],"select":{"exist":["language","url_hash"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"url_fetch","name__orig":"url_fetch","Name":"UrlFetch","name_":"url_fetch","name-":"url-fetch","NAME":"URL_FETCH","index$":9}, {"active":true,"entity":"url_fetch","key$":"BasicUrlFetchFlow","kind":"basic","name":"BasicUrlFetchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"url_fetch_ref01"}}],"index$":0}]}, 'UrlFetch')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let url_fetch_ref01_data = Object.values(setup.data.existing.url_fetch)[0] as any

    // LIST
    const url_fetch_ref01_ent = client.UrlFetch()
    const url_fetch_ref01_match: any = {}

    const url_fetch_ref01_list = (await url_fetch_ref01_ent.list(url_fetch_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/url_fetch/UrlFetchTestData.json')

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
    ['url_fetch01','url_fetch02','url_fetch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RSQ_TEST_URL_FETCH_ENTID': idmap,
    'RSQ_TEST_LIVE': 'FALSE',
    'RSQ_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RSQ_TEST_URL_FETCH_ENTID']

  const live = 'TRUE' === env.RSQ_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RSQ_TEST_URL_FETCH_ENTID']
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
  
