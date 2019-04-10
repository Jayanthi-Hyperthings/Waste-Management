var express = require('express');
var router = express.Router();
var alarmHistoryController = require("../controller/alarmHistoryController");

router.get('/', alarmHistoryController.getAssignedAlarms); 

module.exports = router;