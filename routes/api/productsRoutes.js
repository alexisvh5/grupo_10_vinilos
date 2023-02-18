const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productController');

router.get('/', productsAPIController.productList);
router.get('/detail/:id', productsAPIController.productDetail);


module.exports = router;