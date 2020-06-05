const connection = require('../../configs/database');

module.exports = {
  async index(request, response) {
    try {
      const { page = 1, limit = 10 } = request.query;

      const [count] = await connection('incidents').count();

      const incidents = await connection('incidents')
        .join('ongs', 'ongs_id', '=', 'incidents.ongs_id')
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])
        .limit(limit)
        .offset((page - 1) * limit);

      response.header('X-Total_count', count['count(*)']);

      return response.json(incidents);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async show(request, response) {
    try {
      const { id } = request.params;
      const incident = await connection('incidents').where('id', id).select('*').first();

      return response.json(incident);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async store(request, response) {
    try {
      const { title, description, value } = request.body;
      const ongId = request.headers.authorization;

      const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ongs_id: ongId,
      });

      return response.json({ id });
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async update(request, response) {
    try {
      const incident = {};

      return response.json(incident);
    } catch (err) {
      return response.status(400).json(err);
    }
  },
  async destroy(request, response) {
    try {
      const { id } = request.params;
      const sessionId = request.headers.authorization;

      const incident = await connection('incidents').where('id', id).select('ongs_id').first();

      if (incident.ongs_id !== sessionId) {
        return response.status(401).json({ erro: 'Operation not permitted' });
      }

      await connection('incidents').where('id', id).delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json(err);
    }
  },
};
