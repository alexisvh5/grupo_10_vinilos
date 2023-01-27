module.exports= (sequelize, dataTypes)=> { 
    let alias = "Artists"; 
    let columnas = {
id:{
type: dataTypes.INTEGER(11),
primaryKey: true,
autoIncrement: true,
allowNull: false
},
name:{
    type: dataTypes.STRING,
    allowNull: false

},
id_genre:{
    type: dataTypes.INTEGER,
    allowNull: false
}

    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);



return Artist 
}