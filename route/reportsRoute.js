var express = require('express');
var router = express.Router();
var reportsController = require("../controller/reportsController");

router.get('/:solution', reportsController.getReportForSolution);

router.get('/:solution/:zone', reportsController.getReportForZonePerSolution);

router.get('/:solution/:zone/:area', reportsController.getReportForAreasZonePerSolution);

router.get('/:solution/:zone/:area/:deviceId', reportsController.getReportForDeviceById);


module.exports = router;