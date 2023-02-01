const Order = require("./Order");

module.exports= (sequelize, dataTypes)=> { 
    let alias = "Detail_orders"; 
    let columnas = {
id_detail_order:{
type: dataTypes.INTEGER(11),
primaryKey: true,
autoIncrement: true
},
quantity:{
    type: dataTypes.INTEGER,
    allowNull: false
},
total: {
    type: dataTypes.INTEGER,
    allowNull: false
},
id_order: {
    type: dataTypes.INTEGER,
    allowNull: false
},
id_user: {
    type: dataTypes.INTEGER,
    allowNull: false
}

    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

Detail_order.associate = (models)=>{ 
    Detail_order.belongsTo(models.Order, {
    as: "OrderDetail",
    foreingKey: "id_order"
})
Detail_order.belongsTo(models.User, {
    as: "UserDetail",
    foreingKey: "id_user"
})

}

return Detail_order 
}