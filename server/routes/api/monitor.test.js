const request = require('supertest')
const app = require('../../app.js')

describe('test monitor Endpoints', () => {
  it('should return an array of object ', async () => {
    const res = await request(app).get('/')
    const resObject = JSON.parse(res.text)
    expect(res.statusCode).toEqual(200)
    expect(resObject[0]).toHaveProperty('isSafe')
    expect(resObject).toHaveLength(5)
  },30000)
})
