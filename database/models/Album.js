module.exports = (sequelize, dataTypes) => {
    let alias = "Album";
    let cols = {

        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        title: {
            type: dataTypes.STRING,
            allowNull: false

        },
        company: {
            type: dataTypes.STRING,
            allowNull: false

        },
        year: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false

        },
        id_genre: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        id_artist: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        image: {
            type: dataTypes.STRING,
            allowNull: true
        }
    
    }
    let config = { 
        timestamps: false
    }

const Album = sequelize.define(alias, cols, config);

Album.associate = function (models) {
    Album.belongsTo(models.Genre, {
        as: "genre", //ver si esta bien ese nombre. Eso lo uso por ej en controlador con un findAll
        foreingKey: 'id_genre'
    })

    Album.belongsTo(models.Artist, {
        as: "artist", //ver si esta bien ese nombre. Eso lo uso por ej en controlador con un findAll
        foreingKey: 'id_artist'
    })

    Album.hasMany(models.Detailorder, {
        as: "AlbumDetail",
        foreingKey: "id_album"
    })
}
    return Album;

 }

