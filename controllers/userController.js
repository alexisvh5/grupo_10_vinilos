let fs = require('fs');
let path = require('path');
//const bcrypt = require('bcryptjs');

let pathUsersJson = path.join(__dirname, "../data/users.json"); //datos en formato Json

let users = JSON.parse(fs.readFileSync(pathUsersJson, 'UTF-8')); //transformo los Json en Objeto Literal


const { validationResult} = require ('express-validator');
const User = require ('../models/Users');

const userController = {

    register:  (req, res) => {
        return res.render ('register');

    },
  
    
    processRegister: (req, res) => {
      const resultValidation = validationResult(req);
    
      if (resultValidation.errors.length > 0) {
        return res.render ('register'), {
        errors: resultValidation.mapped(),
      }
            
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
      img:imagen, 
    };
    users.push(newUser)
    fs.writeFileSync(pathUsersJson, JSON.stringify(users, null, ' '));
    res.redirect('/'); 
  }
},

  login: (req, res) => {
      return res.render ('login')
  },
/*   profile: (req, res) => {
      return res.render ('userProfile')
  }*/



}

  


module.exports = userController;

