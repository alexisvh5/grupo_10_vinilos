let fs = require('fs');
let path = require('path');
const bcryptjs = require('bcryptjs');

const { validationResult } = require ('express-validator');
const user = require ('../models/Users');


let pathUsersJson = path.join(__dirname, "../data/users.json"); //datos en formato Json

let users = JSON.parse(fs.readFileSync(pathUsersJson, 'UTF-8'));

const userController = {

    register:  (req, res) => {
        return res.render ('register');

             },
             
    processRegister: (req, res) => {
      const resultValidation = validationResult(req);
    
    //  console.log(resultValidation)

      if (resultValidation.errors.length > 0) {
        return res.render ('register', {
          errors: resultValidation.mapped(),
          oldData: req.body,
        }) } 

            
      let userInDB= user.findByField("email", req.body.email);

      res.send(userInDB)

if(userInDB){
return res.render("register",{
  errors:{
    email:{
      msg:"este email ya esta registrado"
    }
  },
  oldData:req.body
})

}
       let imagen; 
    if(req.file != undefined) { 
      imagen = req.file.filename;
    }else{
      imagen = "best-of-cream.jpg"
    }

  },

    login: (req, res) => {
      return res.render ('login')
  },


loginProcess:(req,res)=>{
let userTologin= users.findByField("email",  req.body.email)
},

}



module.exports = userController;

