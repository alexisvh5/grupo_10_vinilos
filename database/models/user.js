module.exports= (sequelize, dataTypes)=> { 
    let alias = "Users"; 
    let columnas = {
id_user:{
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

return User 
}