module.exports= (sequelize, dataTypes)=> { 
    let alias = "Detal_orders"; 
    let columnas = {
id_detail_order:{
type: dataTypes.INTEGER(11),
primaryKey: true,
autoIncrement: true
},
quantity:{
    type: dataTypes.INTEGER(10)
},
total: {
    type: dataTypes.INTEGER(11)
},
id_order: {
    type: dataTypes.INTEGER(11)
},
id_album: {
    type: dataTypes.INTEGER(11)
}

    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return Detal_order 
}