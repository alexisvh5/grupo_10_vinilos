const express= require("express");
const router=express.Router();
const mainController = require("../controllers/mainController");
const productController= require("../controllers/productControllers");
const multer= require ('multer');




// ***Multer***

const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, 'public/imagen')
    },
    filename: function (req, file, cb) {
        cb(null, 
           file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
})
          

var upload = multer({storage: storage});



router.get("/productCart",productController.cart);
router.get("/productDetail/:productId",productController.detail)
router.get("/productDetailrecome/:productId", productController.detail);


router.get("/products",productController.productList);
router.get("/products/create",productController.productCreate);
router.post("/products/create",upload.any(),productController.productStore);
router.delete("/products/:id", productController.productDelete);
router.get("/products/:id",productController.detail);
router.put("/products/:id/edit",productController.productEdit);

module.exports = router; 