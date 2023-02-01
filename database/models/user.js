module.exports= (sequelize, dataTypes)=> { 
    let alias = "Users"; 
    let columnas = {
id:{
type: dataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
allowNull: false
},
first_name: {
    type: dataTypes.STRING,
    allowNull: false

},
last_name: {
    type: dataTypes.STRING,
    allowNull: false

},
email:{
    type: dataTypes.STRING,
    allowNull: false

} ,
address: {
    type: dataTypes.STRING,
    allowNull: false

}, 
city: {
    type: dataTypes.STRING,
    allowNull: false

},
zip_code: {
    type: dataTypes.INTEGER,
    allowNull: false

}
    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

User.associate = function (models) {
    User.hasMany(models.Order, {
        as: "Orders", 
        foreingKey: 'id_user'
    })

    User.hasMany(models.Detail_order, {
        as: "DetailUser",
        foreingKey: "id_user"
    })
    

}

return User 
}