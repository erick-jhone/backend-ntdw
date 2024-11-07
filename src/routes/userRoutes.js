const express = require('express');
const { createController } = require('awilix-express');

// Certifique-se de que o caminho do controlador está correto
const UserController = require('../controllers/UserController');

const router = express.Router();

// Use createController para configurar o controlador
router.use(createController(UserController)
  .prefix('/')
  .get('/', 'getUsers')       // Exemplo de rota GET
  .post('/', 'createUser')    // Rota POST para criar um usuário
  .router()                   // Chame o método `.router()` no final para obter o middleware
);

module.exports = router;