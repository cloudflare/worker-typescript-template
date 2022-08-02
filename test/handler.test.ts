import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import { handleRequest } from '../src/handler'
import makeServiceWorkerEnv from 'service-worker-mock'

declare var global: any

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv())
    jest.resetModules()
  })

  test('example mock fetch', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      text: () => Promise.resolve("some body")
    }))
    const result = await fetch("http://foo.com").then(r => r.text())
    expect(result).toEqual("some body")
  })

  test('handle GET', async () => {
    const result = await handleRequest(new Request('/', { method: 'GET' }))
    expect(result.status).toEqual(200)
    const text = await result.text()
    expect(text).toEqual('request method: GET')
  })
})
