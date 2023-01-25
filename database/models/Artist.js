module.exports= (sequelize, dataTypes)=> { 
    let alias = "Artists"; 
    let columnas = {
id_artist:{
type: dataTypes.INTEGER(11),
primaryKey: true,
autoIncrement: true
},
name:{
    type: dataTypes.VARCHAR(45)

},
id_genre:{
    type: dataTypes.INTEGER(11)
}

    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return Artist 
}