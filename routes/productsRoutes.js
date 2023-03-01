const express= require("express");
const router=express.Router();
const mainController = require("../controllers/mainController");
const productController= require("../controllers/productControllers");
const multer= require ('multer');
let path = require('path');

//Express Validator
const {body} = require('express-validator');

//Validaciones
const validateCreateProduct = [
    body('title')
    .notEmpty().withMessage('Debes completar el título del album').bail()
    .isLength({ min:5}).withMessage('El titulo del album debe tener al menos 5 caracteres').bail(),
    body('company')
    .notEmpty().withMessage('Debes completar el la compañia del album').bail()
    .isLength({ min:6}).withMessage('La compañia debe tener al menos 6 caracteres').bail(),
    body('year')
    .notEmpty().withMessage('Debes completar el año del album').bail()
    .isLength({ min:4}).withMessage('El año debe tener al menos 4 caracteres').bail(),
    body('price')
    .notEmpty().withMessage('Debes completar el precio del album').bail()
    .isLength({ min:4}).withMessage('El precio del album debe tener al menos 4 caracteres').bail(),
    body('imagen').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    }),

    


]



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
router.post ('/',upload.single("imagen"),validateCreateProduct, productController.productStore);


//EDITAR UN PRODUCTO
router.get('/edit/:id', productController.productEdit);
router.put('/edit/:id', upload.single("imagen"), productController.productUpdate)
//router.put('/', upload.any(),productController.productUpdate);

//BUSCAR UN PRODUCTO
router.get('/search_results', productController.productSearch);

//ELIMINAR UN PRODUCTO
router.get('/delete/:id', productController.productDelete);
router.delete('/delete/:id', productController.productDelete);



//router.get("/productCart",productController.cart);
router.get("/productDetail/:id", productController.productDetail)
//router.get("/productDetailrecome/:id", productController.detail);


/*

router.get("/products",productController.productList);
router.get("/products/create",productController.productCreate);
router.post("/products/create",upload.any(),productController.productStore);
router.delete("/products/:id", productController.productDelete);
router.get("/products/:id",productController.detail);
router.put("/products/:id/edit",productController.productEdit);
*/
module.exports = router; 