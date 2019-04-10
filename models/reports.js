var mongoose = require('mongoose');

var reportsSchema = new mongoose.Schema({
	"_id" : Object,
    "ts" : Date,
    "zone" : String,
    "area" : String,
    "gatewayName" : String,
    "solution" : String,
    "deviceName" : String,
    "deviceMacAddress" : String,
    "latitude" : Number,
    "longitude" : Number,
    "address" : String,
    "SN" : Number,
    "LED" : Number,
    "Diag" : Number,
    "Solution" : Number,
    "DDT" : String,
    "AppId" : String,
    "SV" : Number,
    "SC" : Number,
    "BV" : Number,
    "BC" : Number,
    "SCStatus" : String,
    "SolarHealth" : String,
    "BatteryHealth" : String,
    "DeviceTamper" : String,
    "LDRHealth" : String,
    "EGeneration" : Number,
    "EConsumption" : Number,
    "gatewayId" : String,
    "wasteCollected" : Number,
    "batteryLevel" : Number,
    "dryWaste" : Number,
    "wetWaste" : Number
})

var reportsModel = mongoose.model('reports', reportsSchema);

module.exports = reportsModel;