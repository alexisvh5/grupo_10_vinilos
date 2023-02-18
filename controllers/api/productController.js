const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    productList: (req, res) => {
        db.Album
            .findAll()
            .then(albums => {
                let response = {
                    meta: {
                        status: 200,
                        total: albums.length,
                        url: "api/products",
                    },
                    data: albums,
                };
                res.json(response)

            });

    },
    productDetail: (req, res) => {
        db.Album.findByPk(req.params.id)
            .then(album => {
                let response = {
                    meta: {
                        status: 200,
                        total: 1,
                        url: "api/detail/{id}" 
                    },
                    data: album,
                };
                res.json(response)
            })

    }




}



