
const express = require('express');
const path = require('path'); 
const app = express(); 
const indexRouter= require("./routes/index");
const productsRoutes = require("./routes/productsRoutes");
app.use( '/static', express.static(__dirname + '/public'));

const  methodOverride = require ("method-override");
app.use (methodOverride("_method"));



// TEMPLATE VIEWS

app.set("view engine", "ejs");

// RUTAS MAIN

app.use('/',indexRouter);


// RUTAS PRODUCTOS

app.use('/products', productsRoutes); 




app.listen ('3003', () => {
    console.log ('Servidor funcionando en puerto 3003')
})





/*app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'))
});*/
