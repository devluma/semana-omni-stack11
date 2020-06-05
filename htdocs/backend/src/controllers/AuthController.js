const connection = require('../../configs/database');

module.exports = {
  async login(request, response) {
    try {
      const { id } = request.body;
      const ong = await connection('ongs').where('id', id).select('name').first();

      if (!ong) {
        throw 'Auth error!';
      }

      return response.json(ong);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
};
