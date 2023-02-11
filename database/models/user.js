module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let columnas = {

        id_user: {
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
        
        id_genre: {
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
    /*
    User.associate = function (models) {
        User.hasMany(models.Order, {
            as: "Orders", 
            foreingKey: 'id_user'
        })
    
    
    
    }
    */
    return User
}