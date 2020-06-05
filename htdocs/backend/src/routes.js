const express = require("express");

const routes = express.Router();

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const AuthController = require("./controllers/AuthController");

// Routers Ongs
routes.get("/ongs", OngController.index);
routes.get("/ongs/:id", OngController.show);
routes.post("/ongs", OngController.store);
routes.put("/ongs/:id", OngController.update);
routes.delete("/ongs/:id", OngController.destroy);

// Routers Incidents
routes.get("/incidents", IncidentController.index);
routes.get("/incidents/:id", IncidentController.show);
routes.post("/incidents", IncidentController.store);
routes.put("/incidents/:id", IncidentController.update);
routes.delete("/incidents/:id", IncidentController.destroy);

// Routers Profiles
routes.get("/profiles", ProfileController.index);

// Routers Sssions
routes.post("/auth", AuthController.login);

module.exports = routes;
