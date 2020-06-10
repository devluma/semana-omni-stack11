const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

// Routers Ongs
routes.get('/ongs', OngController.index);
routes.get('/ongs/:id', OngController.show);
routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(14),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngController.store
);
routes.put('/ongs/:id', OngController.update);
routes.delete('/ongs/:id', OngController.destroy);

// Routers Incidents
routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  IncidentController.index
);
routes.get('/incidents/:id', IncidentController.show);
routes.post(
  '/incidents',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    }),
  }),
  IncidentController.store
);
routes.put('/incidents/:id', IncidentController.update);
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.destroy
);

// Routers Profiles
routes.get(
  '/profiles',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

// Routers Sssions
routes.post('/auth', AuthController.login);

module.exports = routes;
