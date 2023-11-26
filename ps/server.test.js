const request = require('supertest');
const app = require('./server'); 
const createDatabaseConnection = require('./database');

// describe('POST /submit-data', () => {
//   it('responds with a success message for valid data', async () => {
//     const response = await request(app)
//       .post('/submit-data')
//       .send({ username: 'test', ipAddress: '127.0.0.1', subjects: ['Math', 'Science'] });
//     expect(response.statusCode).toBe(200);
//     expect(response.text).toContain('Data inserted successfully');
//   });
// });

describe('POST /submit-data', () => {
  it('creates a new session in the database', async () => {
    const testData = {
      username: 'testUser',
      ipAddress: '127.0.0.1',
      subjects: ['apples', 'pears', 'bananas'] 
    };
    await request(app)
      .post('/submit-data')
      .send(testData);

    // query the database to check if the session is created

    const db = await createDatabaseConnection();

    const result = await db.query('SELECT * FROM Sessions WHERE username = ? AND ip_address = ?', [testData.username, testData.ipAddress]);

    expect(result.length).toBe(1);
    expect(result[0].username).toBe(testData.username);
    expect(result[0].ip_address).toBe(testData.ipAddress);
  });
}, 10000);

describe('GET /', () => {
    it('responds with status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});
