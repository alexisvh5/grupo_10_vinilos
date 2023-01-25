module.exports= (sequelize, dataTypes)=> { 
    let alias = "Orders"; 
    let columnas = {
id:{
type: dataTypes.INTEGER(11),
primaryKey: true,
autoIncrement: true
},
date:{
    type:dataTypes.date
},
payment: {
type: dataTypes.VARCHAR(20)
},
total: {
    type:dataTypes.INTEGER(10)
},
id_user:{
    type: dataTypes.INTEGER(11)
}
    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return Order
}