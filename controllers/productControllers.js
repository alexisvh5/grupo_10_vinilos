let fs = require('fs');
let path = require('path');

let pathJson = path.join(__dirname, "../data/productsData.json");

let vinilos = JSON.parse(fs.readFileSync(pathJson, 'UTF-8')); 

const productController={
    cart:(req,res)=>{res.render("productCart", {vinilos})}, 

    detail:(req,res)=>{
      let vinilo = vinilos.find(vinilo=>vinilo.id == req.params.productId)
      res.render("productDetail",{vinilo})
    },
    productList:(req,res)=>{
      res.send("si esta funcionando")
    },
    productEdit:(req,res)=>{

    },
    productDelete:(req,res)=>{

    },
    productCreate:(req,res)=>{

    },
}

module.exports = productController;
