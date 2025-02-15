const { createContainer, asClass } = require('awilix');
const { scopePerRequest } = require('awilix-express');
const express = require('express');

const EspacoService = require('../services/espacoService');
const EspacoController = require('../controllers/espacoController');

const ReservaService = require('../services/reservaService');
const ReservaController = require('../controllers/reservaController');

const container = createContainer();

container.register({
 
  espacoService: asClass(EspacoService).scoped(),
  espacoController: asClass(EspacoController).scoped(),
  
  reservaService: asClass(ReservaService).scoped(),
  reservaController: asClass(ReservaController).scoped(),
});

const app = express();

app.use(scopePerRequest(container));

module.exports = app;