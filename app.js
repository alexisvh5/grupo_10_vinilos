const express = require('express');

const path = require('path'); 

const app = express(); 

const indexRouter= require("./routes/index");

app.use( '/static', express.static(__dirname + '/public')); 

app.set("view engine", "ejs");



app.use('/',indexRouter);

app.use('/register', indexRouter);

app.use('/login', indexRouter );

app.use('/contact', indexRouter );


app.get('/productDetail1', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetailFolder/productDetail1.html'))
});
app.get('/productDetail2', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetailFolder/productDetail2.html'))
});
app.get('/productDetail3', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetailFolder/productDetail3.html'))
});
app.get('/productDetail4', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetailFolder/productDetail4.html'))
});
app.get('/productDetail5', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetailFolder/productDetail5.html'))
});
app.get('/productDetail6', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetailFolder/productDetail6.html'))
});
app.get('/productDetail7', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetailFolder/productDetail7.html'))
});
app.get('/productDetail8', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetailFolder/productDetail8.html'))
});


app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});




/*app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'))
});*/
