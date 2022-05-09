var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);
router.get('/login', indexController.login);
router.get('/lista', indexController.lista);
router.get('/finalizarCompra', indexController.finalizarCompra);
router.get('/produtoInterno', indexController.produtoInterno);
router.get('/cadastro', indexController.cadastrar);
router.post('/cadastro', indexController.acaoCadastrar);

module.exports = router;
