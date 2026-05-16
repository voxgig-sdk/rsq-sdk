
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RsqSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RsqSDK.test()
    equal(null !== testsdk, true)
  })

})
