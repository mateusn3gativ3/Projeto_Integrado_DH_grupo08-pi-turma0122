var express = require('express');
var router = express.Router();
var AdmController = require('../controllers/AdmController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function(req,file,cb) {
        cb(null, "upload_imagem_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get('/login', AdmController.login);
router.get('/produtos', AdmController.produtos);
router.get('/produtos/cadastrar', AdmController.produtosCadastrar);
router.post('/produtos/acaoCadastrar', upload.single('imagemProduto'), AdmController.acaoCadastrarProduto);
router.get('/produtos/excluir/:idProduto', AdmController.produtosExcluir);
router.get('/autores', AdmController.autores);
router.get('/autores/cadastrar', AdmController.autoresCadastrar);
router.post('/autores/acaoCadastrar', upload.single('imagemAutor'), AdmController.acaoCadastrarAutor);
router.get('/autores/excluir/:idAutor', AdmController.autoresExcluir);

module.exports = router;