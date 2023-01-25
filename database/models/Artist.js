module.exports= (sequelize, dataTypes)=> { 
    let alias = "Artists"; 
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

return Artist 
}