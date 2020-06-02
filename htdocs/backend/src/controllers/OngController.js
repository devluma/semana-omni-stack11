const crypto = require('crypto');
const connection = require('../../configs/database');

module.exports = {
  async index(request, response) {
    try {
      const ongs = await connection('ongs').select('*');

      return response.json(ongs);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async show(request, response) {
    try {
      const ong = {};

      return response.json(ong);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async store(request, response) {
    try {
      const { name, email, whatsapp, city, uf } = request.body;
      const id = crypto.randomBytes(10).toString('HEX');
      const ong = await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      return response.json({ id });
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async update(request, response) {
    try {
      const ong = {};

      return response.json(ong);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async destroy(request, response) {
    try {
      const { id } = request.params;
      const sessionId = request.headers.authorization;
      const ong = await connection('ongs').where('id', id).select('id').first();

      if (ong.id === sessionId) {
        return response.status(401).json({ erro: 'Operation not permitted' });
      }

      await connection('ongs').where('id', id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json(err);
    }
  },
};
