const express= require("express");
const router=express.Router();
const mainController = require("../controllers/mainController");
//const productController= require("../controllers/productControllers");


const {body} = require ('express-validator');
router.post ('/register', )


router.get("/",mainController.index);
//router.get("/login",mainController.login); //Las comento para ponerla en usersRoutes
//router.get("/register",mainController.register);
router.get("/contact",mainController.contact);







module.exports= router;