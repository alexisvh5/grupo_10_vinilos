module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";
    let cols = {

        id_album: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true

        },
        title: {
            type: dataTypes.VARCHAR(45)

        },
        company: {
            type: dataTypes.VARCHAR(20)

        },
        year: {
            type: dataTypes.SMALLINT(4)

        },
        price: {
            type: dataTypes.INTEGER(10)

        },
        id_genre: {
            type: dataTypes.INTEGER(11)

        },
        id_artist: {
            type: dataTypes.INTEGER(11)

        }
    
    }
    let config = {
        timestamps: false
    }
}
const Album = sequelize.define(alias, cols, config)

return Album;