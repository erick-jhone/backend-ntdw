const express = require('express');
const { makeInvoker } = require('awilix-express');
const UserController = require('../controllers/UserController');

const router = express.Router();

const api = makeInvoker(UserController);

router.get('/', api('getUsers'));
router.post('/', api('createUser'));

module.exports = router;