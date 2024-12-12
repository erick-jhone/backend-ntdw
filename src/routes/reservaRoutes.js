const express = require('express');
const { makeInvoker } = require('awilix-express');
const ReservaController = require('../controllers/reservaController');

const router = express.Router();
const api = makeInvoker(ReservaController);

router.get('/', api('getReservas'));
router.post('/', api('createReserva'));
router.put('/:id/cancelar', api('cancelarReserva'));

module.exports = router;