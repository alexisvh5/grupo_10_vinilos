module.exports= (sequelize, dataTypes)=> { 
    let alias = "Genres"; 
    let columnas = {
id_genre:{
type: dataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
name: {
    type: dataTypes.VARCHAR(45)
},

    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return Genre
}