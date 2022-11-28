const express= require("express");
const router=express.Router();
const mainController = require("../controllers/mainController");
const productController= require("../controllers/productControllers");


router.get("/productCart",productController.cart);
router.get("/productDetail/:productId",productController.detail)
router.get("/productDetailrecome/:productId", productController.detail);


router.get("/products",productController.productList);
router.post("/products",productController.productCreate);
router.delete("/products/:id", productController.productDelete);
router.get("/products/:id",productController.detail);
router.put("/products/:id/edit",productController.productEdit);

module.exports = router; 