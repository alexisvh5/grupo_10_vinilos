const fs = require ('fs');

function logMiddleware (req, res, next) {
    fs.appendFileSync ('log.txt', 'Se ingresó en la página ' + req.url + '\n', 'utf-8') 
    next();       
}   

module.exports = logMiddleware;
