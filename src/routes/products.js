const express = require('express');
const router = express.Router();

//Middlewares
const uploadFile = require("../middlewares/uploadFile");

//Controllers
const controller = require('../controllers/productsController');

router.get('/detail/:id', controller.detail);
router.get('/edit/:id', controller.edit);
router.get('/create', controller.create);   //se ejecuta el controlador create en productscontroller
router.post('/create', uploadFile.single("productImage"), controller.store);  //utlizo la const upload como middleware, se ejecuta cuando se manda el form, se pone el mismo valor del name del input
router.post('/delete/:id', controller.delete);
router.post('/edit/:id', uploadFile.single("productImage"), controller.update);

module.exports = router;