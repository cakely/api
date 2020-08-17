import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';

describe('Cakes', () => {
  it('should get all cakes', () =>
    request(Server)
      .get('/api/v1/cakes')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an('array').of.length(2);
      }));

  it('should add a new cake', () =>
    request(Server)
      .post('/api/v1/cakes')
      .send({
        name: 'test',
        recipeUrl: 'https://example.com',
        photoUrl: 'https://example.com',
        rating: 5,
      })
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test');
      }));

  it('should get an cake by id', () =>
    request(Server)
      .get('/api/v1/cakes/2')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('test');
      }));
});
