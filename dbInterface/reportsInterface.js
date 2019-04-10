(function(reportsInterface){

	var Reports = require('../models/reports');

	reportsInterface.find = function(query, callback){
		Reports.find(query, function(err, reportsResponse){
			if(err){
				callback(err);
			}else{
				callback(null, reportsResponse);
			}
		})
	}

})(module.exports)