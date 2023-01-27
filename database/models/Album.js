module.exports = (sequelize, dataTypes) => {
    let alias = "Albums";
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
            type: dataTypes.STRING,
            allowNull: false

        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        id_genre: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        id_artist: {
            type: dataTypes.INTEGER,
            allowNull: false

        }
    
    }
    let config = { 
        timestamps: false
    }
}
const Album = sequelize.define(alias, cols, config)

Album.associate = function (models) {
    Album.belongsTo(models.Genres, {
        as: "genres", //ver si esta bien ese nombre. Eso lo uso por ej en controlador con un findAll
        foreingKey: 'id_genre'
    })

    Album.belongsTo(models.Artists, {
        as: "artist", //ver si esta bien ese nombre. Eso lo uso por ej en controlador con un findAll
        foreingKey: 'id_artist'
    })

    return Album;
}


