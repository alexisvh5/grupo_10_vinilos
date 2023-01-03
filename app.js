
const express = require('express');
const path = require('path');   
const indexRouter= require("./routes/index");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require ("./routes/usersRoutes");
const session = require ("express-session");    

const app = express(); 

app.use(session({
secret:"shh",
resave: false,
saveUninitialized:false,
}));


const logMiddleware = require ('./middlewares/logMiddleware');
app.use( '/static', express.static(__dirname + '/public'));

const  methodOverride = require ("method-override");
const { urlencoded } = require('express');
app.use (methodOverride("_method"));



// TEMPLATE VIEWS

app.set("view engine", "ejs");
app.use (express.urlencoded({extended: false})); //esto lo agregué teoria clase 23
                                                 //captura la info enviada en un formulario via post   

// RUTAS MAIN

app.use('/',indexRouter);


// RUTAS PRODUCTOS

app.use('/products', productsRoutes); 

//RUTAS DE USUARIOS

app.use('/users', usersRoutes)

//middlewares
app.use(logMiddleware);




app.listen ('3000', () => {
    console.log ('Servidor funcionando en puerto 3000')
})





/*app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'))
});*/
