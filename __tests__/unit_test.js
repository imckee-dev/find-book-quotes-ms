
const request = require('supertest')
const app = require('../app')

describe('get endpoints verify', () => {
  it('should create a get and assert equal', async () => {
    const res = await request(app)
      .get('/data')
      .query({
        author: 'twain',
        quote: '',
        tag: 'humor'
      })
    expect(res.statusCode).toEqual(200)
    expect(Array.isArray(res.body)).toBe(true) // expect the response body to be an array json
  })
})