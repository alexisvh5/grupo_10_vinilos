const express= require("express");
const router=express.Router();
const mainController = require("../controllers/mainController");
const productController= require("../controllers/productControllers");
const multer= require ('multer');
let path = require('path');




// ***Multer***

const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, 'public/imagen')
    },
    filename: function (req, file, cb) {
        cb(null, 
           file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
          

var upload = multer({storage: storage});

// LISTADO DE TODOS LOS PRODUCTOS
router.get ('/', productController.productList); //si funciona, es la ruta /products

//CREACION DE UN PRODUCTO
router.get('/create', productController.productCreate);
router.post ('/',upload.single("imagen"),productController.productStore);

//EDITAR UN PRODUCTO
router.get('/:id/edit', productController.productEdit);
router.put('/:id/edit', upload.any(), productController.productUpdate)
//router.put('/', upload.any(),productController.productUpdate);

//ELIMINAR UN PRODUCTO
router.delete('/delete/:id', productController.productDelete);


router.get("/productCart",productController.cart);
router.get("/productDetail/:id",productController.detail)
router.get("/productDetailrecome/:id", productController.detail);


/*

router.get("/products",productController.productList);
router.get("/products/create",productController.productCreate);
router.post("/products/create",upload.any(),productController.productStore);
router.delete("/products/:id", productController.productDelete);
router.get("/products/:id",productController.detail);
router.put("/products/:id/edit",productController.productEdit);
*/
module.exports = router; 