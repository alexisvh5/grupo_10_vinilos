vinilos= [
{
id:1,
nombre:"",
genero:"",
sello:"",
año:1994,
precio:1212,
titulo:"",

},
{
    id:2,
    nombre:"",
    genero:"",
    sello:"",
    año:1994,
    precio:1212,
    titulo:"",
    img: ""
    },
 {
        id:3,
        nombre:"",
        genero:"",
        sello:"",
        año:1994,
        precio:1212,
        titulo:"",
        img: ""
        },
 {
            id:4,
            nombre:"",
            genero:"",
            sello:"",
            año:1994,
            precio:1212,
            titulo:"",
            }
            ,
            {
                id:5,
                nombre:"",
                genero:"",
                sello:"",
                año:1994,
                precio:1212,
                titulo:"",
                img: ""
                },
                {
                    id:6,
                    nombre:"",
                    genero:"",
                    sello:"",
                    año:1994,
                    precio:1212,
                    titulo:"",
                    img: ""
                    },
                    {
                        id:7,
                        nombre:"",
                        genero:"",
                        sello:"",
                        año:1994,
                        precio:1212,
                        titulo:"",
                        img: ""
                        },
                        {
                            id:8,
                            nombre:"",
                            genero:"",
                            sello:"",
                            año:1994,
                            precio:1212,
                            titulo:"",
                            img: ""
                            },
                        ]
                          



const productController={
    cart:(req,res)=>{render("productCart", {vinilos})},

    detail: (req,res)=>{
        
        let vinilo = vinilos.find(vinilo=>vinilo.id === req.params.productID)
        
        render("productDetail"),{vinilo}},
};

module.exports = productController;
