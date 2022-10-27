const express = require('express');

const path = require('path'); 

const app = express(); 

app.listen(3001, ()=>{
    console.log("ya funciona")
}); 

app.use( '/static', express.static(__dirname + '/public')); 

app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'))
});
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
});
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});


