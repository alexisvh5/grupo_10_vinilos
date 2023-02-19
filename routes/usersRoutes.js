const express = require("express");
const router = express.Router();

const guestMiddleware = require("../middlewares/guestmiddleware");
const authMiddleware = require("../middlewares/authmiddleware");
const userController = require("../controllers/userController");
const multer = require('multer');
const fs = require('fs');
let path = require('path');


// Express Validator
const { body } = require('express-validator');

//session
router.get('/pruebaSession', function (req, res) {
    if (req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;

    res.send('Session tiene el numero: ' + req.session.numeroVisitas)
});

router.get('/check', function (req, res) {
    if (req.session.userToLogin == undefined) {
        res.send('No estas logueado');
    } else {
        res.send('El usuario logueado es " + req.session.userToLogin')
    }
})

//Validaciones
const validateCreateForm = [
    body('NombreyApellido').notEmpty().withMessage('Debes completar el campo de Nombre y Apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido').bail(),
    body('domicilio').notEmpty().withMessage('Debes completar el domicilio'),
    body('contrasena').notEmpty().withMessage('Debes completar el campo contraseña').bail(),
    body('confirmacionContrasena').notEmpty().withMessage('Debes repetir la contraseña elegida').bail(),
    body('genre').notEmpty().withMessage('Debes elegir un genero').bail()

];

const validateCreateFormlogin = [
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido').bail(),
    body('contrasena').notEmpty().withMessage('Debes completar el campo contraseña').bail()
];


// **Multer**

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/imagen/users')
    },
    filename: function (req, file, cb) {
        cb(null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})


var upload = multer({ storage: storage });

//LISTADO DE USUARIOS
router.get('/list', userController.userList)

//CREACION DE UN USUARIO - 
router.get('/register', guestMiddleware, userController.register);
router.post('/register', upload.single('imagen'), validateCreateForm, userController.processRegister);

//MODIFICACION PERFIL USUARIO
router.get('/profileEdit/:id', userController.profileEdit);
router.put('/profileEdit/:id', upload.single("imagen"), userController.profileStore);

// LOGEO DE UN USUARIO 
router.get('/login', guestMiddleware, userController.login);
router.post('/login', validateCreateFormlogin, userController.processLogin);

//PERFIL DE USUARIO

router.get("/profile", authMiddleware, userController.profile);

router.get("/logout", userController.logout)



module.exports = router;