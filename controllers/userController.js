let fs = require('fs');
let path = require('path');
const bcryptjs = require('bcryptjs');

let pathUsersJson = path.join(__dirname, "../data/users.json"); //datos en formato Json

let users = JSON.parse(fs.readFileSync(pathUsersJson, 'UTF-8'));


const { validationResult } = require ('express-validator');
const User = require ('../models/Users');

const userController = {

    register:  (req, res) => {
        return res.render ('register');

             },
          
    processRegister: (req, res) => {
      const resultValidation = validationResult(req);
<<<<<<< HEAD
    
      console.log(resultValidation)

      if (resultValidation.errors.length > 0) {
        return res.render ('register', {
          errors: resultValidation.mapped(),
          oldData: req.body,
        }) } 
=======
    console.log(resultValidation)
      if (resultValidation.errors.length > 0) {
        return res.render ('register',{
        errors: resultValidation.mapped(),
        oldData: req.body,
      })}
>>>>>>> 56a6cf30ca88233ed77732b7d87a8605a799e5db
      
       let imagen;
     // console.log(req.file)
    if(req.file != undefined) { 
      imagen = req.file.filename;
    }else{
      imagen = "best-of-cream.jpg"
    }
    //console.log(req.body)
    let newUser = {
      id: users[users.length - 1].id + 1,
      ...req.body,
      contrasena:bcryptjs.hashSync(req.body.contrasena,10),
      confirmacionContrasena:bcryptjs.hashSync(req.body.confirmacionContrasena,10),
      img:imagen, 
    };
    console.log(newUser)
    users.push(newUser)
    fs.writeFileSync(pathUsersJson, JSON.stringify(users, null, ' '));
    res.redirect('/')
  },

  

    login: (req, res) => {
      return res.render ('login')
  }

}


  


module.exports = userController;

