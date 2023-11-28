const request = require('supertest');
const app = require('./server'); 
const {createDatabaseConnection, closeDatabaseConnection} = require('./database');
let db;

// beforeAll(async ()=> {
//   db = await createDatabaseConnection();
// });

// afterAll(async () => {
//   await closeDatabaseConnection(db);
//   await closeDatabaseConnection;
// });

beforeEach(async () => {
  db = await createDatabaseConnection();
});

afterEach(async () => {
  await db.query('DELETE FROM Sessions WHERE username = "testUser"');
  await closeDatabaseConnection(db);
  await closeDatabaseConnection;
})



describe('GET /', () => {
    it('responds with status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    }, 10000);
});

describe('POST /submit-data', () => {
  it('creates a new session in the database', async () => {
    
    const testData = {username: 'testUser', ipAddress: '127.0.0.1', subjects: ['apples', 'pears', 'bananas'] };
    await request(app)
      .post('/submit-data')
      .send(testData);

    // query the database to check if the session is created

    const result = await db.query('SELECT * FROM Sessions WHERE username = ? AND ip_address = ?', [testData.username, testData.ipAddress]);

    await expect(result.length).toBe(2);
    await expect(result[0].username).toBe(testData.username);
    await expect(result[0].ip_address).toBe(testData.ipAddress);
  }, 15000);
});
