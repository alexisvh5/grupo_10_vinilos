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
      let id = req.params.i;
      let productToEdit = vinilos.find(product => product.id == id)
      res.render('product-edit-form', {productToEdit})

  },
  productDelete:(req,res)=>{ 
		let id = req.params.id;
		let finalProducts = vinilos.filter(product => product.id != id);
		fs.writeFileSync(pathJson, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},
  productCreate:(req,res)=>{
    res.render ("product-create-form")

  },
  productStore: (req, res) => {
    let imagen;
    console.log(req.file)
  if(req.file != undefined) {
    imagen = req.file.filename;
  }else{
    imagen = "13-the-doors.jpg"
  }
  console.log(req.body)
  let newVinilo = {
    id: vinilos[vinilos.length - 1].id + 1,
    ...req.body,
    img:imagen, 
  };
  vinilos.push(newVinilo)
  fs.writeFileSync(pathJson, JSON.stringify(vinilos, null, ' '));
  res.redirect('/');
},

  productUpdate: (req, res) => {
  let id = req.params.id;
  let productToEdit = vinilos.find(product => product.id == id)

  let imagen;
  if(req.file != undefined) {
    imagen = req.file.filename;
  }else{
    imagen = productToEdit.img
  }

  const productNew = {
    id: productToEdit.id,
    ...req.body,
    img: imagen,
  };
 console.log(productNew)
  let newProducts = vinilos.map(product => {
    if (product.id == productNew.id) {
      return product = {...productNew};
    }
    return product;
  })
  fs.writeFileSync(pathJson, JSON.stringify(newProducts, null, ' '));
  res.redirect('/');
},
  }


module.exports = productController;