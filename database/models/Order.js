module.exports= (sequelize, dataTypes)=> { 
    let alias = "Order"; 
    let columnas = {
id_order:{
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
id_user:{
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
        as: "Users", 
        foreingKey: 'id_user'
    })

    Order.hasMany(models.Detailorder, {
        as: "detailOrder",
        foreingKey: "id_order"
    })

}
return Order
}