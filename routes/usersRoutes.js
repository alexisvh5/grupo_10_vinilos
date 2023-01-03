const express= require("express");
const router=express.Router();
const mainController = require("../controllers/mainController");
const userController= require("../controllers/userController");
const multer= require ('multer');
const fs = require ('fs');
let path = require('path');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');


// Express Validator
const {body} = require ('express-validator'); 

//session
router.get ('/pruebaSession', function(req, res) {
    if (req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;

    res.send('Session tiene el numero: ' + req.session.numeroVisitas)
});
 
router.get ('/check', function(req, res){
    if (req.session.userToLogin == undefined) {
        res.send ('No estas logueado');
    } else {
        res.send ('El usuario logueado es " + req.session.userToLogin')
    }
})

//Validaciones
const validateCreateForm = [
    body ('NombreyApellido').notEmpty().withMessage('Debes completar el campo de Nombre y Apellido'),    
    body ('email')
        .notEmpty().withMessage ('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage ('Debes escribir un formato de correo válido').bail(),
        body ('contrasena').notEmpty().withMessage('Debes completar el campo contraseña').bail(),
        body ('confirmacionContrasena').notEmpty().withMessage('Debes repetir la contraseña elegida').bail(),
        body ('categoria').notEmpty().withMessage('Debes elegir una categoria').bail()

    ];
     
   const validateCreateFormlogin = [
        body ('email')
            .notEmpty().withMessage ('Tienes que escribir un correo electrónico').bail()
            .isEmail().withMessage ('Debes escribir un formato de correo válido').bail(),
            body ('contrasena').notEmpty().withMessage('Debes completar el campo contraseña').bail()
        ];
    
 
// **Multer**

const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, 'public/imagen/users')
    },
    filename: function (req, file, cb) {
        cb(null, 
           file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
          

var upload = multer({storage: storage});



//CREACION DE UN USUARIO - 
router.get('/register', guestMiddleware, userController.register);
router.post ('/register', upload.single('img'), validateCreateForm, userController.processRegister);


// LOGEO DE UN USUARIO 
router.get('/login', userController.login);
router.post('/login',validateCreateFormlogin, userController.processLogin); 

//PERFIL DE USUARIO

router.get("/profile", userController.profile)



module.exports = router;