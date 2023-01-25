module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";
    let cols = {

        id_album: {
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

return Album;