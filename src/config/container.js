const { createContainer, asClass } = require('awilix');
const { scopePerRequest } = require('awilix-express');
const express = require('express');
const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');

const container = createContainer();

container.register({
  userService: asClass(UserService).scoped(),
  userController: asClass(UserController).scoped(),
});

const app = express();

app.use(scopePerRequest(container));

module.exports = app;