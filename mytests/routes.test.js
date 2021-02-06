const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)

beforeAll(async (done) => {
    server = app.listen(4000, () => {
      done();
    });
  });



afterAll(async () => {
   server.close();
});

describe('/api/products', () => {

it('gets the test endpoint', async done => {
    const response = await request.get('/api/products')
  
    expect(response.status).toBe(200)
    done()
  })
});

describe('Post Endpoints', () => {
    it('should create a new post', async done => {
      const response = await request.post('/api/products')
        .send({
          name:'bonbon',
          description: 'Chuba chups',
          price: 2,
          inStock: true,
        })
      expect(response.status).toBe(201)
      done()
    })
  })