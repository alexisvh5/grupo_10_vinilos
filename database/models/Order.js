module.exports= (sequelize, dataTypes)=> { 
    let alias = "Orders"; 
    let columnas = {
id:{
type: dataTypes.INTEGER(11),
primaryKey: true,
autoIncrement: true
},
date:{
    type:dataTypes.DATE,
    allowNull: false
},
payment: {
type: dataTypes.STRING,
allowNull: false
},
total: {
    type:dataTypes.INTEGER,
    allowNull: false
},
id_user:{
    type: dataTypes.INTEGER,
    allowNull: false
}
    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return Order
}