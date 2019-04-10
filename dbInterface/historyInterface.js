(function(historyInterface){

	var History = require('../models/historyModel');

	historyInterface.find = function(query, callback){
		History.find(query, function(err, historyResponse){
			if(err){
				callback(err);
			}else{
				callback(null, historyResponse);
			}
		})
	}

	historyInterface.aggregate = function(query, callback){
		History.aggregate(query, function(err, historyResponse){
			if(err){
				console.log("error : ", err);
				callback(err, null);
			}else{
				callback(null, historyResponse);
			}
		})
	}

})(module.exports)