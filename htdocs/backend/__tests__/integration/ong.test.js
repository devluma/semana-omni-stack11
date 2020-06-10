/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'ABE',
      email: 'contato@gmail.com',
      whatsapp: '+5551981454597',
      city: 'Porto Alegre',
      uf: 'RS',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(20);
  });
});
