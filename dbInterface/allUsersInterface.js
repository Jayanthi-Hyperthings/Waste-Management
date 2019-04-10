(function(AllUsersInterface){

	var AllUsers = require('../models/allUsers');

	AllUsersInterface.findOne = function(query, callback){
		AllUsers.findOne(query, function(err, usersResponse){
			if(err){
				callback(err, null);
			}else{
				callback(null, usersResponse);
			}
		})
	}

	AllUsersInterface.save = function(query, callback){
		var obj = AllUsers(query);
		obj.save(function(err, allUsersResponse){
			if(err){
				callback(err, null);
			}else{
				callback(null, allUsersResponse);
			}
		})
	}

})(module.exports)