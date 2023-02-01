module.exports= (sequelize, dataTypes)=> { 
    let alias = "Orders"; 
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
    Order.belongsto(models.User, {
        as: "Users", 
        foreingKey: 'id_user'
    })

    Order.hasMany(models.Detail_order, {
        as: "detailOrder",
        foreingKey: "id_order"
    })

}
return Order
}