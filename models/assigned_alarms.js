var mongoose = require('mongoose');

var assignedAlarmSchema = new mongoose.Schema({
    "_id" : String,
    "alarmId" : String,
    "alarmName" : String,
    "clearedTime" : String,
    "description" : String,
    "inchargeId" : String,
    "inchargeMail" : String,
    "inchargeName" : String,
    "inchargePhNumber" : Number,
    "occuredTime" : String,
    "severity" : String,
    "status" : String,
    "isAssigned" : Boolean,
    "solution" : String,
    "zone" : String,
    "area" : String,
    "deviceId" : Number
})
var assignedAlarmModel = mongoose.model('assigned_alarms', assignedAlarmSchema);

module.exports = assignedAlarmModel;