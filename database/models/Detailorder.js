//const Order = require("./Order");

module.exports = (sequelize, dataTypes) => {
    let alias = "Detailorder";
    let columnas = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        idOrder: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        idAlbum: {
            type: dataTypes.INTEGER,
            allowNull: false
        }


    };

    let config = {

        timestamps: false
    };
    const Detailorder = sequelize.define(alias, columnas, config);
    /*
    Detailorder.associate = (models)=>{ 
        Detailorder.belongsTo(models.Order, {
        as: "OrderDetail",
        foreingKey: "id_order"
    })
    
    Detailorder.belongsTo(models.Album, {
        as: "DetailAlbum",
        foreingKey: "id_album"
    })
    
    
    }
    */
    return Detailorder
}