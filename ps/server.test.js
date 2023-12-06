import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './src/App';

const request = require('supertest');
const app = require('./server'); 
const {createDatabaseConnection, closeDatabaseConnection} = require('./database');
let db;
let server;
let currentPort = 4000;

beforeAll(() => {
  currentPort++;
  server = app.listen(0);
});

afterAll(() => {
  server.close();
});

beforeEach(async () => {
  db = await createDatabaseConnection();
});

afterEach(async () => {
  await db.query('DELETE FROM Sessions WHERE username = "testUser"');
  await closeDatabaseConnection(db);
});

test('renders the PrioritySorter component', () => {
  render(<App />);
  const prioritySorterElement = screen.getByText(/rock/i);
  expect(priortySorterElement).toBeInTheDocument();
});

describe('GET /', () => {

    // check server is up and running
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
