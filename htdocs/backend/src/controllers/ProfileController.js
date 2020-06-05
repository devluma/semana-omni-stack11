const connection = require('../../configs/database');

module.exports = {
  async index(request, response) {
    try {
      const ongId = request.headers.authorization;

      const incidents = await connection('incidents').where('ongs_id', ongId).select('*');

      return response.json(incidents);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
};
