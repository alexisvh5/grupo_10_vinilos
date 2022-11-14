const express = require('express');

const path = require('path'); 

const app = express(); 

const indexRouter= require("./routes/index");

app.use( '/static', express.static(__dirname + '/public')); 

app.listen("3000", () => console.log("servidor Corriendo"));

app.set("view engine", "ejs");



app.use('/',indexRouter);

app.use('/register', indexRouter);

app.use('/login', indexRouter );

app.use('/contact', indexRouter );


app.get('/productCart', indexRouter);

app.get('/productDetail', indexRouter
)

app.listen ('3003', () => {
    console.log ('Servidor funcionando')
})





/*app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'))
});*/
