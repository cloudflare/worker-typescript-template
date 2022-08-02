import { handleRequest } from '../src/handler'

describe('handle', () => {
  test('handle GET', async () => {
    const result = await handleRequest(new Request('/', { method: 'GET' }))
    expect(result.status).toEqual(200)
    const text = await result.text()
    expect(text).toEqual('request method: GET')
  })
})
