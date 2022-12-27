//1 - Guardar al usuario en la DB
//2 - Buscar al usuario que  se quiere loguear por su email
//3 - Buscar a un usuario por su ID
//4 - Editar la informacion de un usuario
//5 - Eliminar a un usuario de la BD
// Este objeto literal va a hacer todo eso:
const fs = require ('fs');

const User = {
    fileName: './data/users.json',

    getData: function () {
        return JSON.parse (fs.readFileSync(this.fileName, 'utf-8')); 

    },
 findAll: function () {
        return this.getData();

    },
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
        return lastUser.id + 1;
    }
    return 1;
    },

   

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
 
    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound
    }
         ,
  
    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...req.body //este es el express operator que agrega al OL todo lo que escribió el usuario
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
       //console.log (newUser)
        return newUser;

    },


    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter (oneUser => oneUser.id !== id)
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return finalUsers
;
    }

};

module.exports = User;


//console.log (User.generateId());
//console.log (User.delete(6));