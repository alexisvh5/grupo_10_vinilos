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
        idGenre: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        idArtist: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        }
    
    }
    let config = { 
        tablename: "albums",
        timestamps: false,
        

    }

const Album = sequelize.define(alias, cols, config);

Album.associate = function (models) {
    Album.belongsTo(models.Genre, {
        as: "genre", //nombre en minuscula y lo uso en include, association en controllers
        foreignKey: 'idGenre'
    })


    Album.belongsTo(models.Artist, {
        as: "artist", //nombre en minuscula y lo uso en include, association en controllers
        foreignKey: 'idArtist'
    })


    Album.hasMany(models.Detailorder, {
        as: "album",
        foreingKey: "idAlbum"
    })
}

    return Album;

 }

