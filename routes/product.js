const express = require('express');

const router = express.Router();
const productCtrl= require('../controllers/product');


router.post('/',productCtrl.createProduct);


  router.get('/',productCtrl.getAllProducts);

  router.get('/:id',productCtrl.getOneProduct);

  router.put('/:id',productCtrl.modifyProduct);

  router.delete('/:id',productCtrl.deleteProduct);

module.exports= router;