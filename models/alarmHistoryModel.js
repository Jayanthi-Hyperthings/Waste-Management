var mongoose = require('mongoose');

var alarmHistorySchema = new mongoose.Schema({
	"_id" : String,
    "isAssigned" : Boolean,
    "alarmId" : String,
    "alarmName" : String,
    "severity" : String,
    "description" : String,
    "occuredTime" : Date,
    "clearedTime" : Date,
    "status" : String
})
var alarmHistoryModel = mongoose.model('alarm_histories', alarmHistorySchema);

module.exports = alarmHistoryModel;