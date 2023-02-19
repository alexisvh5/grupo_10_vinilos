module.exports = (sequelize, dataTypes) => {
    let alias = "User";
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
        email: {
            type: dataTypes.STRING,
            allowNull: false

        },
        contrasena: {
            type: dataTypes.STRING,
            allowNull: false

        },
        confContr: {
            type: dataTypes.STRING,
            allowNull: false

        },
        address: {
            type: dataTypes.STRING,
            allowNull: false

        },

        idGenre: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        }

    }


    let config = {

        timestamps: false
    };
    const User = sequelize.define(alias, columnas, config);

    User.associate = function (models) {
        User.hasMany(models.Order, {
            as: "orders",
            foreingKey: 'idUser'
        })
        User.belongsTo(models.Genre, {
            as: "genre", //nombre en minuscula y lo uso en include, association en controllers
            foreignKey: 'idGenre'
        })



    }

    return User
}