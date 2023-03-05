
const express = require ('express');
const cors = require('cors');
const path = require('path');   
const indexRouter= require("./routes/index");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require ("./routes/usersRoutes");
const session = require ("express-session");    
const productsAPIRouter = require('./routes/api/productsRoutes');
const usersAPIRouter = require('./routes/api/usersRoutes');


const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const cookies = require("cookie-parser");

const app = express(); 

app.use(session({
secret:"shh",
resave: false,
saveUninitialized:false,
}));


app.use(cookies());
app.use(userLoggedMiddleware);
app.use(cors());



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

//Rutas de ls APIs
app.use('/api/products', productsAPIRouter);
app.use('/api/users', usersAPIRouter)


//middlewares
//app.use(logMiddleware); Comentado para no interferir subir al git




app.listen ('3003', () => {
    console.log ('Servidor funcionando en puerto 3003')
})




/*app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'))
});*/
