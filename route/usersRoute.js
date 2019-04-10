var express = require('express');
var router = express.Router();
var usersController = require("../controller/usersController");

router.post('/login', usersController.login);
router.post('/registration', usersController.registration);

module.exports = router;