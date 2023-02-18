const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userController');

router.get('/', userAPIController.userList);
router.get('/detail/:id', userAPIController.userDetail);


module.exports = router;

//cambiar products por usuarios