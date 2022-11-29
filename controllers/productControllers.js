let fs = require('fs');
let path = require('path');

let pathJson = path.join(__dirname, "../data/productsData.json");

let vinilos = JSON.parse(fs.readFileSync(pathJson, 'UTF-8')); 

const productController={
  cart:(req,res)=>{res.render("productCart", {vinilos})}, 

  detail:(req,res)=>{
    let vinilo = vinilos.find(vinilo=>vinilo.id == req.params.id)
    res.render("productDetail",{vinilo})
  },
  productList:(req,res)=>{
    res.render('products', {vinilos})
  },
  productEdit:(req, res) => {
      let id = req.params.id
      let productToEdit = vinilos.find(product => product.id == id)
      res.render('product-edit-form', {productToEdit})

  },
  productDelete:(req,res)=>{
    res.render ('product-delete-form');

  },
  productCreate:(req,res)=>{
    res.render ("product-create-form")

  },
  productStore: (req, res) => {
    let image;
  if(req.file != undefined) {
    image = req.file.filename;
  }else{
    image = "13-the-doors.jpg"
  }
  let newVinilo = {
    id: vinilos[vinilos.length - 1].id + 1,
    ...req.body,
    image, 
  };
  vinilos.push(newVinilo)
  fs.writeFileSync(pathJson, JSON.stringify(vinilos, null, ' '));
  res.redirect('/');
},

  productUpdate: (req, res) => {
  let id = req.params.id;
  let productToEdit = vinilos.find(product => product.id == id)

  productToEdit = {
    id: productToEdit.id,
    ...req.body,
    image: productToEdit.image,
  };
  
  let newProducts = vinilos.map(product => {
    if (product.id == productToEdit.id) {
      return product = {...productToEdit};
    }
    return product;
  })
  fs.writeFileSync(pathJson, JSON.stringify(newProducts, null, ' '));
  res.redirect('/');
},
  }


module.exports = productController;