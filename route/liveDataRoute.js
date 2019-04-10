var express = require('express');
var router = express.Router();
var liveDataController = require("../controller/liveDataController");

router.get('/:solution/zones', liveDataController.getAllZonesForSolution);

router.get('/:solution/:zone/area', liveDataController.getAreasForZonePerSolution);

router.get('/:solution/:zone/:area/devices', liveDataController.getDevicesForAreasZonePerSolution);

router.get('/:solution/:zone/:area/:deviceId/deviceById', liveDataController.getDeviceById);

module.exports = router;