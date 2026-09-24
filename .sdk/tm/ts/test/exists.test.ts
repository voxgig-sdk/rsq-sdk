
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RsqSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RsqSDK.test()
    equal(testsdk instanceof RsqSDK, true,
      'RsqSDK.test() must return a client synchronously')
  })

})
