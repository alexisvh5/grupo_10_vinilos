const express= require("express");
const router=express.Router();
const mainController = require("../controllers/mainController");
const userController= require("../controllers/userController");
const multer= require ('multer');
const fs = require ('fs');
let path = require('path');

// Express Validator
const {body} = require ('express-validator'); 


//Validaciones
const validateCreateForm = [
    body ('NombreyApellido').notEmpty().withMessage('Debes completar el campo de Nombre y Apellido'),    
    body ('email')
        .notEmpty().withMessage ('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage ('Debes escribir un formato de correo válido'),
        body ('contrasena').notEmpty().withMessage('Debes completar el campo contraseña'),
        body ('confirmacionContrasena').notEmpty().withMessage('Debes repetir la contraseña elegida'),
        body ('categoria').notEmpty().withMessage('Debes elegir una categoria'),
        body ('img').custom((value, { req }) => {
            let file = req.file; 
            let acceptedExtensions = ['.jpg', '.png', '.gif'];
            
            if (!file) {
                throw new Error('Tienes que subir una imagen');
            } else {
                let fileExtension = path.extname (file.originalname)
                if (acceptedExtensions.includes(fileExtension)) {
                    throw new Error('Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}');
    
               }
            
            }
            
            return true;

        }),
    ];
     
    
 
// ***Multer***

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
router.get('/register', userController.register);
router.post ('/register', upload.single('img'), validateCreateForm, userController.processRegister);


// LOGEO DE UN USUARIO 
router.get('/login', userController.login);
//router.post ('/',userController.proccesLogin); //no esta creado este metodo



module.exports = router; 