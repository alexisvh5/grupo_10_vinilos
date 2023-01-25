module.exports= (sequelize, dataTypes)=> { 
    let alias = "Detal_orders"; 
    let columnas = {
id:{
type: dataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},

    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return Detal_order 
}