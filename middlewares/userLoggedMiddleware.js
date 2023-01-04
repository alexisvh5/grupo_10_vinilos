const  user = require("../models/Users")


function userLoggedMiddleware(req,res,next){
 res.locals.isLogged = false;


 let emailInCokkie = req.cookies.userEmail;
 let userFromCookie = user.findByField("email",emailInCokkie);

 if(userFromCookie){
req.session.userLogged = userFromCookie
 }
 
if(req.session.userLogged){
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged
}


next();

}
module.exports=userLoggedMiddleware;