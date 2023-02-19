module.exports= (sequelize, dataTypes)=> { 
    let alias = "Order"; 
    let columnas = {
id:{
type: dataTypes.INTEGER(11),
primaryKey: true,
autoIncrement: true
},
date:{
    type:dataTypes.DATE,
    allowNull: false
},
payment: {
type: dataTypes.STRING,
allowNull: false
},
total: {
    type:dataTypes.INTEGER,
    allowNull: false
},
idUser:{
    type: dataTypes.INTEGER,
    allowNull: false
}
    };

    let config = {

        timestamps: false
    };
const Order = sequelize.define(alias, columnas, config);

Order.associate = function (models) {
    Order.belongsTo(models.User, {
        as: "users", 
        foreingKey: 'idUser'
    })


    Order.hasMany(models.Detailorder, {
        as: "detailOrder",
        foreingKey: "idOrder"
    })

}

return Order
}