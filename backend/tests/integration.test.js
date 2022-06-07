const request = require('supertest');
const app = require('../app.js');

describe('Integration app test', () => {
  it('should return provided by company JSON', async () => {
    await request(app).get('')
      .expect(200)
      .expect(({ body }) => expect(body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            "id": "KS",
            "name": "Kansas"
          })
        ])
      ))
  })
})
