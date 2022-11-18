let fs = require('fs');
let path = require('path');

let pathJson = path.join(__dirname, "../data/productsData.json");

let vinilos = JSON.parse(fs.readFileSync(pathJson, 'UTF-8')); 


const mainController={
    
    index:(req, res)=>{
      let vinilosRecomendado = vinilos.filter (product => product.recome == true)

        res.render("index", {vinilosRecomendado, vinilos})
        },
    login:(req, res)=> {
        res.render("login")
    },
    contact:(req, res)=>{
        res.render("contact")},
        
    register:(req, res) => {
        res.render("register")
    },

};



module.exports=mainController
