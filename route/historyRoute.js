var express = require('express');
var router = express.Router();
var historyController = require("../controller/historyController");

router.get('/:solution/zones', historyController.getAllZonesForSolution);

router.get('/:solution/:zone/area', historyController.getAreasForZonePerSolution);

router.get('/:solution/:zone/:area/devices', historyController.getDevicesForAreasZonePerSolution);

router.get('/:solution/:zone/:area/:deviceId/deviceById', historyController.getDeviceById);

router.get('/waste/:adminMail/admin', historyController.getWasteForAdmin);

router.get('/waste/:adminMail/:distributorMail/distributor', historyController.getWasteForDistrbuter);

router.get('/waste/:adminMail/:distributorMail/:customerMail/customer', historyController.getWasteForCustomer);

router.get('/waste/:adminMail/:distributorMail/:customerMail/:userMail/user', historyController.getWasteForUser);

router.get('/energy/:adminMail/admin', historyController.getEnergyForAdmin);

router.get('/energy/:adminMail/:distributorMail/distributor', historyController.getEnergyForDistrbuter);

router.get('/energy/:adminMail/:distributorMail/:customerMail/customer', historyController.getEnergyForCustomer);

router.get('/energy/:adminMail/:distributorMail/:customerMail/:userMail/user', historyController.getEnergyForUser);

module.exports = router;