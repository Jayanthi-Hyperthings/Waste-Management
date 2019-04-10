var express = require('express');
var router = express.Router();
var alarmHistoryController = require("../controller/alarmHistoryController");

router.get('/', alarmHistoryController.notifications); 

router.get('/:solution', alarmHistoryController.getNotificationForSolution);

router.get('/:solution/:zone', alarmHistoryController.getNotificationForZonePerSolution);

router.get('/:solution/:zone/:area', alarmHistoryController.getNotificationForAreasZonePerSolution);

router.get('/:solution/:zone/:area/:deviceId', alarmHistoryController.getNotificationForDeviceById);

module.exports = router;