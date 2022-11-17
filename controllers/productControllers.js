 vinilos = [
  {
    id: 1,
    nombre: "Rolling Stones",
    genero: "Rock and Roll",
    sello: "",
    año: 1994,
    precio: 1212,
    titulo: "England's newest hit makers",
    img: "engl-the-rolling-stones.jpg",
  },
  {
    id: 2,
    nombre: "Eric Clapton",
    genero: "blues",
    sello: "",
    año: 1994,
    precio: 2330,
    titulo: "",
    img: "eric-clapton-for-sale.jpg",
  },
  {
    id: 3,
    nombre: "Pink floyd",
    genero: "Rock",
    sello: "",
    año: 1994,
    precio: 4000,
    titulo: "The Wall",
    img: "the-wall-pink-floyd.jpg",
  },
  {
    id: 4,
    nombre: "Queen",
    genero: "Rock",
    sello: "",
    año: 1994,
    precio: 4500,
    titulo: "The races",
    img: "races-queen.jpg",
  },
  {
    id: 5,
    nombre: "springsteen",
    genero: "",
    sello: "",
    año: 1994,
    precio: 1212,
    titulo: "",
    img: "born-bruce-springsteen.jpg",
  },
  {
    id: 6,
    nombre: "The Doors",
    genero: "blues",
    sello: "",
    año: 1994,
    precio: 5000,
    titulo: "",
    img: "fra-doors.jpeg",
  },
  {
    id: 7,
    nombre: "ACDC",
    genero: "rock",
    sello: "",
    año: 1994,
    precio: 2100,
    titulo: "The razors",
    img: "the-razors-ac-dc.jpg",
  },
  {
    id: 8,
    nombre: "David Bowie",
    genero: "rock",
    sello: "",
    año: 1994,
    precio: 7834,
    titulo: "",
    img: "for-sale-david-bowie.jpg",
  },
 
];
             
 vinilosRecomendado = [
  {
    id: 9,
    nombre: "Roxy music",
    genero: "rock",
    sello: "",
    año: 1994,
    precio: 9000,
    titulo: "",
    img: "for-sale-roxy.jpeg",
  },

  {
    id: 10,
    nombre: "Fleetwood Mac",
    genero: "rock",
    sello: "",
    año: 1994,
    precio: 1000,
    titulo: "",
    img: "for-sale-fleetwood-mac.jpg",
  },

  {
    id: 11,
    nombre: "The Beatles",
    genero: "rock",
    sello: "",
    año: 1994,
    precio: 13000,
    titulo: "",
    img: "for-sale-beatles.jpg",
  }

];

const productController={
    cart:(req,res)=>{res.render("productCart", {vinilos})}, 

    detail: (req,res)=>{
      let vinilo = vinilos.find(vinilo=>vinilo.id == req.params.productId)
      res.render("productDetail",{vinilo})
    },

    cartRecome: function (req, res) {
      res.render
    },

    cartReco: function(req, res){ res.render('productCart', {vinilosRecomendado})},

    detailReco: function (req, res){
      let vinireco = vinilosRecomendado.find(vini=> vini.id ===req.params.productId)
      res.render('productDetail', (vinireco))
    },

    
}

module.exports = productController;
