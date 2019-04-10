(function(assignedAlarmsInterface){

	var AssignedAlarms = require('../models/assigned_alarms');

	assignedAlarmsInterface.find = function(query, callback){
		AssignedAlarms.find(query, function(err, assignedAlarmsResponse){
			if(err){
				console.log("err : ", err);
				callback(err);
			}else{
				callback(null, assignedAlarmsResponse);
			}
		})
	}

})(module.exports)