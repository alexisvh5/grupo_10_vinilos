module.exports= (sequelize, dataTypes)=> { 
    let alias = "Detal_orders"; 
    let columnas = {
id_detail_order:{
type: dataTypes.INTEGER(11),
primaryKey: true,
autoIncrement: true
},
quantity:{
    type: dataTypes.INTEGER,
    allowNull: false
},
total: {
    type: dataTypes.INTEGER,
    allowNull: false
},
id_order: {
    type: dataTypes.INTEGER,
    allowNull: false
},
id_album: {
    type: dataTypes.INTEGER,
    allowNull: false
}

    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return Detal_order 
}