// const request = require('supertest');
// const expect = require('chai').expect;
// const app = require('../../../server'); // Update the path to your server file
import request from 'supertest';
import { expect } from 'chai';
import app from '../../../server';

describe('Bug Report API', () => {
  it('should respond with success message for valid bug report submission', (done) => {
    request(app)
      .post('/api/bug-report')
      .send({
        description: "Test bug report",
        stepsToReproduce: "Test steps",
        contactEmail: "test@example.com"
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('Bug report submitted successfully');
        done();
      });
  });

  it('should respond with 404 for GET /test', (done) => {
    request(app)
      .get('/test')
      .expect(404, done);
  });
});
