const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    userList: (req, res) => {
        db.User
            .findAll()
            .then(users => {
                let response = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: "api/users",
                    },
                    data: users,
                };
                res.json(response)

            });

    },

    userDetail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let response = {
                    meta: {
                        status: 200,
                        total: 1,
                        url: "api/detail/{id}"
                    },
                    data: user,
                };
                res.json(response)
            })

    }




}