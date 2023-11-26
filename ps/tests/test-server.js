const request = require('supertest');
const app = require('./server'); // Adjust the path as needed

describe('POST /submit-data', () => {
  it('responds with a success message for valid data', async () => {
    const response = await request(app)
      .post('/submit-data')
      .send({ username: 'test', ipAddress: '127.0.0.1', subjects: ['Math', 'Science'] });
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Data inserted successfully');
  });
});

describe('GET /', () => {
    if('responds with status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});
