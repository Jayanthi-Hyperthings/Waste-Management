var express = require('express');
var router = express.Router();
var customerController = require("../controller/customerController");

router.post('/registration', customerController.registration);


module.exports = router;