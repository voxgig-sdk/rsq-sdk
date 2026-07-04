// Rsq Ts SDK

import { CategoryEntity } from './entity/CategoryEntity'
import { CountryOfAsylumEntity } from './entity/CountryOfAsylumEntity'
import { CountryOfOriginEntity } from './entity/CountryOfOriginEntity'
import { CountryOfResettlementEntity } from './entity/CountryOfResettlementEntity'
import { DemographicEntity } from './entity/DemographicEntity'
import { DepartureEntity } from './entity/DepartureEntity'
import { HelperEntity } from './entity/HelperEntity'
import { RegionEntity } from './entity/RegionEntity'
import { SubmissionEntity } from './entity/SubmissionEntity'
import { UrlFetchEntity } from './entity/UrlFetchEntity'
import { YearEntity } from './entity/YearEntity'

export type * from './RsqTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { RsqEntityBase } from './RsqEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class RsqSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  _category?: CategoryEntity

  // Idiomatic facade: `client.category.list()` / `client.category.load({ id })`.
  get category(): CategoryEntity {
    return (this._category ??= new CategoryEntity(this, undefined))
  }

  /** @deprecated Use `client.category` instead. */
  Category(data?: any) {
    const self = this
    return new CategoryEntity(self,data)
  }


  _country_of_asylum?: CountryOfAsylumEntity

  // Idiomatic facade: `client.country_of_asylum.list()` / `client.country_of_asylum.load({ id })`.
  get country_of_asylum(): CountryOfAsylumEntity {
    return (this._country_of_asylum ??= new CountryOfAsylumEntity(this, undefined))
  }

  /** @deprecated Use `client.country_of_asylum` instead. */
  CountryOfAsylum(data?: any) {
    const self = this
    return new CountryOfAsylumEntity(self,data)
  }


  _country_of_origin?: CountryOfOriginEntity

  // Idiomatic facade: `client.country_of_origin.list()` / `client.country_of_origin.load({ id })`.
  get country_of_origin(): CountryOfOriginEntity {
    return (this._country_of_origin ??= new CountryOfOriginEntity(this, undefined))
  }

  /** @deprecated Use `client.country_of_origin` instead. */
  CountryOfOrigin(data?: any) {
    const self = this
    return new CountryOfOriginEntity(self,data)
  }


  _country_of_resettlement?: CountryOfResettlementEntity

  // Idiomatic facade: `client.country_of_resettlement.list()` / `client.country_of_resettlement.load({ id })`.
  get country_of_resettlement(): CountryOfResettlementEntity {
    return (this._country_of_resettlement ??= new CountryOfResettlementEntity(this, undefined))
  }

  /** @deprecated Use `client.country_of_resettlement` instead. */
  CountryOfResettlement(data?: any) {
    const self = this
    return new CountryOfResettlementEntity(self,data)
  }


  _demographic?: DemographicEntity

  // Idiomatic facade: `client.demographic.list()` / `client.demographic.load({ id })`.
  get demographic(): DemographicEntity {
    return (this._demographic ??= new DemographicEntity(this, undefined))
  }

  /** @deprecated Use `client.demographic` instead. */
  Demographic(data?: any) {
    const self = this
    return new DemographicEntity(self,data)
  }


  _departure?: DepartureEntity

  // Idiomatic facade: `client.departure.list()` / `client.departure.load({ id })`.
  get departure(): DepartureEntity {
    return (this._departure ??= new DepartureEntity(this, undefined))
  }

  /** @deprecated Use `client.departure` instead. */
  Departure(data?: any) {
    const self = this
    return new DepartureEntity(self,data)
  }


  _helper?: HelperEntity

  // Idiomatic facade: `client.helper.list()` / `client.helper.load({ id })`.
  get helper(): HelperEntity {
    return (this._helper ??= new HelperEntity(this, undefined))
  }

  /** @deprecated Use `client.helper` instead. */
  Helper(data?: any) {
    const self = this
    return new HelperEntity(self,data)
  }


  _region?: RegionEntity

  // Idiomatic facade: `client.region.list()` / `client.region.load({ id })`.
  get region(): RegionEntity {
    return (this._region ??= new RegionEntity(this, undefined))
  }

  /** @deprecated Use `client.region` instead. */
  Region(data?: any) {
    const self = this
    return new RegionEntity(self,data)
  }


  _submission?: SubmissionEntity

  // Idiomatic facade: `client.submission.list()` / `client.submission.load({ id })`.
  get submission(): SubmissionEntity {
    return (this._submission ??= new SubmissionEntity(this, undefined))
  }

  /** @deprecated Use `client.submission` instead. */
  Submission(data?: any) {
    const self = this
    return new SubmissionEntity(self,data)
  }


  _url_fetch?: UrlFetchEntity

  // Idiomatic facade: `client.url_fetch.list()` / `client.url_fetch.load({ id })`.
  get url_fetch(): UrlFetchEntity {
    return (this._url_fetch ??= new UrlFetchEntity(this, undefined))
  }

  /** @deprecated Use `client.url_fetch` instead. */
  UrlFetch(data?: any) {
    const self = this
    return new UrlFetchEntity(self,data)
  }


  _year?: YearEntity

  // Idiomatic facade: `client.year.list()` / `client.year.load({ id })`.
  get year(): YearEntity {
    return (this._year ??= new YearEntity(this, undefined))
  }

  /** @deprecated Use `client.year` instead. */
  Year(data?: any) {
    const self = this
    return new YearEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new RsqSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return RsqSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Rsq' }
  }

  toString() {
    return 'Rsq ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = RsqSDK


export {
  stdutil,

  BaseFeature,
  RsqEntityBase,

  RsqSDK,
  SDK,
}


