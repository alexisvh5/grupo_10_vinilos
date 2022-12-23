let fs = require('fs');
let path = require('path');
const bcryptjs = require('bcryptjs');

let pathUsersJson = path.join(__dirname, "../data/users.json"); //datos en formato Json

let users = JSON.parse(fs.readFileSync(pathUsersJson, 'UTF-8'));


const { validationResult } = require ('express-validator');
const User = require ('../models/Users');

const userController = {
  findAll: function(){
    return users
  },

    register:  (req, res) => {
        return res.render ('register');

             },
             
findByField:function(field,text){
  let todos=this.findAll
  let userFound = todos.find(oneUser => oneUser[field] === text);
  return userFound;
  
}
          ,
    processRegister: (req, res) => {
      const resultValidation = validationResult(req);
    console.log(resultValidation)
      if (resultValidation.errors.length > 0) {
        return res.render ('register',{
        errors: resultValidation.mapped(),
        oldData: req.body,
      })}
            
      let userInDB= users.findByField("e-mail", req.body.email);
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
  },
  loginProcess:(req,res)=>{
let userTologin= userController.findByField("name",  req.body.q)

res.send(userTologin)
  },

}

console.log(userController.findByField("NombreyApellido","Alexis Heredia"))

module.exports = userController;

