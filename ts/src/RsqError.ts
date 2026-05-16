
import { Context } from './Context'


class RsqError extends Error {

  isRsqError = true

  sdk = 'Rsq'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RsqError
}

