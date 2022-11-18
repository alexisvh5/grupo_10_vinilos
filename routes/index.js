const express= require("express");
const router=express.Router();
const mainController = require("../controllers/mainController");
const productController= require("../controllers/productControllers");


router.get("/",mainController.index);
router.get("/login",mainController.login);
router.get("/register",mainController.register);
router.get("/contact",mainController.contact);


router.get("/productCart",productController.cart);
router.get("/productDetail/:productId",productController.detail)



module.exports= router;