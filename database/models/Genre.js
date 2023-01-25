module.exports= (sequelize, dataTypes)=> { 
    let alias = "Genres"; 
    let columnas = {
id_genre:{
type: dataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
allowNull: false
},
name: {
    type: dataTypes.STRING,
    allowNull: false
},

    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return Genre
}