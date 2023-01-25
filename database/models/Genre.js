module.exports= (sequelize, dataTypes)=> { 
    let alias = "Genres"; 
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

return Genre
}