const { asClass, createContainer } = require('awilix');
const UserService = require('../services/UserService');

const container = createContainer();

container.register({
  userService: asClass(UserService).singleton()
});

module.exports = container;