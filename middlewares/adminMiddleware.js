
   /* function adminMiddleware(req, res, next) {
 console.log('AdminMiddleware')

    // Si esta logueado y es admin, permite continuar
    if (req.session.userLogged) {   
        console.log('Esta logueado: ' + req.session.userLogged)

        if (req.session.userLogged.find(data => data.name == "mariano mendez")) {
            console.log('Es admin')
            next();
            return;
        }  
    }

    // Si no era logueado y admin, se redirecciona al home
   res.redirect("/users/profile");
}*/

//module.exports = adminMiddleware;

function adminMiddleware(req, res, next) {
 
   // console.log('AdminMiddleware')

    // Si esta logueado y es admin, permite continuar
    if (req.session.userLogged && req.session.userLogged.role == 9) { 
        
        next();
      console.log('Esta logueado: ' + req.session.userLogged)
        return;
        
      

      //  if (req.session.userLogged.find(user => user.role == 9)) {
        //    console.log('Es admin')
          //  next();
           // return;
        //}  
    }

    // Si no era logueado y admin, se redirecciona al home
    return res.redirect('/');
    
}

module.exports = adminMiddleware;