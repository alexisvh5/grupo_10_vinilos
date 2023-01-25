module.exports= (sequelize, dataTypes)=> { 
    let alias = "Users"; 
    let columnas = {
id_user:{
type: dataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
first_name: {
    type: dataTypes.VARCHAR(20),

},
last_name: {
    type: dataTypes.VARCHAR(20)

},
email:{
    type: dataTypes.VARCHAR(20)

} ,
address: {
    type: dataTypes.VARCHAR(45)

}, 
city: {
    type: dataTypes.VARCHAR(20)

},
zip_code: {
    type: dataTypes.INTEGER(10)

}
    };

    let config = {

        timestamps: false
    };
const User = sequelize.define(alias, columnas, config);

return User 
}