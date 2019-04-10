(function(alarmHistoryInterface){

	var AlarmHistory = require('../models/alarmHistoryModel');

	alarmHistoryInterface.findSort = function(query/*, cond*/, callback){
		AlarmHistory.find({}).sort('-occuredTime').exec(function(err, alarmHistoryResponse){
			if(err){
				console.log("err : ", err);
				callback(err);
			}else{
				callback(null, alarmHistoryResponse);
			}
		})
	}

	alarmHistoryInterface.find = function(query, callback){
		AlarmHistory.find(query, function(err, alarmHistoryResponse){
			if(err){
				console.log("err : ", err);
				callback(err);
			}else{
				callback(null, alarmHistoryResponse);
			}
		})
	}

})(module.exports)