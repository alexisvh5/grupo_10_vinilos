const mainController={
    index:(req, res)=>{
        res.render("index")
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
