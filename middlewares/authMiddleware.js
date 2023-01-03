//chequea si el usuario está logueado
function authMiddleware (req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
       next();
    } else {
       res.send('Esta pagina es para usuarios')
    }
   }
   
   module.exports = authMiddleware;