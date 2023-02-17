module.exports = (sequelize, dataTypes) => {
    let alias = "Genre";
    let columnas = {
        id: {
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
        tablename: "genres",
        timestamps: false,
        

    };
    const Genre = sequelize.define(alias, columnas, config); // aca cambie el nombre de la variable User por Genre

    Genre.associate = function (models) {
        Genre.hasMany(models.Album, {
            as: "album", //nombre en minuscula y lo uso en include, association en controllers
            foreignKey: 'idGenre'

        })

    }

    return Genre
}