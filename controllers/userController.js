
let fs = require('fs');
let path = require('path');
const bcryptjs = require('bcryptjs');


let pathUsersJson = path.join(__dirname, "../data/users.json"); //datos en formato Json

let users = JSON.parse(fs.readFileSync(pathUsersJson, 'UTF-8'));

const user = require ('../models/Users');


const {validationResult} = require ('express-validator');

const userController = {

    register:  (req, res) => {
        return res.render ('register')},
          
    processRegister: (req, res) => {
      const resultValidation = validationResult(req);

      if (resultValidation.errors.length > 0) {
        return res.render ('register',{
        errors: resultValidation.mapped(),
        oldData: req.body,
      })}

      let userInDB = user.findByField("email", req.body.email);

      if (userInDB) {
        return res.render ('register',{
        errors:{email:{msg:"Este email ya se encuentra registrado"}},oldData: req.body}
     )}
      
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
  //  console.log(newUser)
    users.push(newUser)
    fs.writeFileSync(pathUsersJson, JSON.stringify(users, null, ' '));
    res.redirect('/')
  },
  
    login: (req, res) => {
      return res.render ("login")
  },
  processLogin:(req, res)=>{
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
    return res.render ("login",{
      errors: resultValidation.mapped(),
    oldData: req.body,
   })}
   
let userToLogin = user.findByField("email",req.body.email);


if(userToLogin) {

  let isOkThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena)

if(isOkThePassword){

delete  userToLogin.contrasena

 req.session.userLogged= userToLogin;

 if(req.body.remember_user){
  res.cookie("userEmail", req.body.email,{maxAge: (1000*60)*60})
 }
 return res.redirect("/users/profile")

}
} 

return res.render ("login",{
  errors:{email:{msg:"Las credenciales son invalidas"}},oldData:req.body
 })
  },
  profile:(req,res)=>{
    console.log(req.cookies.userEmail)
    res.render ("profile",{
    user:req.session.userLogged
   })},
   logout: (req,res)=>{
    res.clearCookie("userEmail");
    req.session.destroy()
  return res.redirect("/")}
}


//loginProcess:(req,res)=>{
//let userTologin= users.findByField("email",  req.body.email);
//},


 


module.exports = userController;