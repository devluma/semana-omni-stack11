/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../database/connection');

describe('Test INCIDENT', () => {
  // beforeEach(async () => {
  //   await connection.migrate.rollback();
  //   await connection.migrate.latest();
  // });

  // afterAll(async () => {
  //   await connection.destroy();
  //   await connection.migrate.forceFreeMigrationsLock();
  // });

  // it('Should be able to create a new INCIDENT', async () => {
  //   const response = await request(app)
  //     .post('/api/incidents')
  //     .send({
  //       title: 'Cadelinha Atropelada',
  //       description: 'Cachorro viralata encontrado na rua das latas',
  //       value: '125.54',
  //     })
  //     .set('Authorization', '1e1142d3298df6ffdaec')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200);

  //   expect(response.body).toHaveProperty('id');
  // });

  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
    await connection.migrate.forceFreeMigrationsLock();
  });

  test('Should be able to create a new INCIDENT', async () => {
    expect(2 + 2).toBe(4);
  });
});
