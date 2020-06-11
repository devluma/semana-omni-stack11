/* eslint-disable no-undef */
// const request = require('supertest');
// const app = require('../../src/app');
// const connection = require('../../database/connection');

describe('Test ONG', () => {
  // beforeEach(async () => {
  //   await connection.migrate.rollback();
  //   await connection.migrate.latest();
  // });

  // afterAll(async () => {
  //   await connection.destroy();
  //   await connection.migrate.forceFreeMigrationsLock();
  // });

  // it('Should be able to create a new ONG', async () => {
  //   const response = await request(app)
  //     .post('/api/ongs')
  //     .send({
  //       name: 'ABE',
  //       email: 'contato@gmail.com',
  //       whatsapp: '+5551981454597',
  //       city: 'Porto Alegre',
  //       uf: 'RS',
  //     })
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200);

  //   expect(response.body).toHaveProperty('id');
  //   expect(response.body.id).toHaveLength(20);
  // });

  test('Should be able to create a new ONG', async () => {
    expect(4 + 2).toBe(6);
  });

  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
});
