const express = require('express');
const { makeInvoker } = require('awilix-express');
const EspacoController = require('../controllers/espacoController');

const router = express.Router();
const api = makeInvoker(EspacoController);

router.get('/', api('getEspacos'));
router.get('/:id', api('getEspacoById')); // Nova rota para buscar espaço por ID
router.post('/', api('createEspaco'));
router.put('/:id/desativar', api('desativarEspaco'));
router.put('/:id/reativar', api('reativarEspaco'));
router.put('/:id', api('updateEspaco')); // Atualiza os dados do espaço com o ID


module.exports = router;
