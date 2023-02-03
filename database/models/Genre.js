module.exports= (sequelize, dataTypes)=> { 
    let alias = "Genre"; 
    let columnas = {
id:{
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
const Genre = sequelize.define(alias, columnas, config); // aca cambie el nombre de la variable User por Genre

Genre.associate = function (models) {
    Genre.hasMany(models.Album, {
        as: "albums", //ver si esta bien ese nombre
        foreingKey: 'id_genre'
    })

}
return Genre
}