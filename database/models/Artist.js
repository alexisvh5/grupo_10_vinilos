module.exports = (sequelize, dataTypes) => {
    let alias = "Artist";
    let columnas = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false

        },
        idGenre: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tablename: "artists",
        timestamps: false,
        
    };
    const Artist = sequelize.define(alias, columnas, config);

    Artist.associate = function (models) {
        Artist.hasMany(models.Album, {
            as: "albumArtist", //ver si esta bien ese nombre
            foreingKey: 'idArtist'
        })

    }


    return Artist
}