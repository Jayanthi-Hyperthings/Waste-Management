(function(liveDataInterface){

	var LiveData = require('../models/liveDataModel');

	liveDataInterface.find = function(query, callback){
		LiveData.find(query, function(err, liveDataResponse){
			if(err){
				callback(err);
			}else{
				callback(null, liveDataResponse);
			}
		})
	}

})(module.exports)