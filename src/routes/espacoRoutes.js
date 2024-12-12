const express = require('express');
const { makeInvoker } = require('awilix-express');
const EspacoController = require('../controllers/espacoController');

const router = express.Router();
const api = makeInvoker(EspacoController);

router.get('/', api('getEspacos'));
router.post('/', api('createEspaco'));
router.put('/:id/desativar', api('desativarEspaco'));
router.put('/:id/reativar', api('reativarEspaco'));

module.exports = router;