//chequea que el usuario no esté logueado (invitado)
function guestMiddleware (req, res, next) {
 if (req.session.usuarioLogueado == undefined) {
    next();
 } else {
    res.send('Esta pagina es para invitados')
 }
}

module.exports = guestMiddleware;
