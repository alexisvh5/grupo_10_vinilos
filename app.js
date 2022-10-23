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

app.get('/forms', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'))
});