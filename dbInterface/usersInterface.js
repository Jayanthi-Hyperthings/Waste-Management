(function(usersInterface){

	var Users = require('../models/usersModel');

	// usersInterface.save(query, callback){
	// 	var obj = new Users(query);
	// 	obj.save(function(err, usersResponse){
	// 		if(err){
	// 			callback(err, null);
	// 		}else{
	// 			callback(null, usersResponse);
	// 		}
	// 	})
	// }

	usersInterface.findOne = function(query, callback){
		Users.find(query, function(err, usersResponse){
			if(err){
				callback(err, null);
			}else{
				callback(null, usersResponse);
			}
		})
	}
	usersInterface.save = function(query, callback){
		var obj = Users(query);
		obj.save(function(err, usersResponse){
			if(err){
				callback(err, null);
			}else{
				callback(null, usersResponse);
			}
		})
	}

})(module.exports)