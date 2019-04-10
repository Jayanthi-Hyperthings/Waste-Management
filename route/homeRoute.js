var express = require('express');
var router = express.Router();
var homeController = require("../controller/homeController");

router.get('/:solution/batteryLevel', homeController.getBatteryLevelForSolution);

router.get('/:solution/:zone/batteryLevel', homeController.getBatteryLevelForZone);

router.get('/:solution/:zone/:area/batteryLevel', homeController.getBatteryLevelForArea);

// router.get('/:solution/:siteName/:gatewayName/:deviceId/deviceById', homeController.getDeviceById);

module.exports = router;