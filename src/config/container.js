const { createContainer, asClass } = require('awilix');
const { scopePerRequest } = require('awilix-express');
const express = require('express');

const UserService = require('../services/userService');
const UserController = require('../controllers/userController');

const EspacoService = require('../services/espacoService');
const EspacoController = require('../controllers/espacoController');

const ReservaService = require('../services/reservaService');
const ReservaController = require('../controllers/reservaController');

const container = createContainer();

container.register({
  userService: asClass(UserService).scoped(),
  userController: asClass(UserController).scoped(),
  
  espacoService: asClass(EspacoService).scoped(),
  espacoController: asClass(EspacoController).scoped(),
  
  reservaService: asClass(ReservaService).scoped(),
  reservaController: asClass(ReservaController).scoped(),
});

const app = express();

app.use(scopePerRequest(container));

module.exports = app;