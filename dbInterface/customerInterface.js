(function(CustomerInterface){

	var Customer = require('../models/customerModel');

	// CustomerInterface.save(query, callback){
	// 	var obj = new Customer(query);
	// 	obj.save(function(err, CustomerResponse){
	// 		if(err){
	// 			callback(err, null);
	// 		}else{
	// 			callback(null, CustomerResponse);
	// 		}
	// 	})
	// }

	CustomerInterface.findOne = function(query, callback){
		Customer.find(query, function(err, customerResponse){
			if(err){
				callback(err, null);
			}else{
				callback(null, CustomerResponse);
			}
		})
	}

	CustomerInterface.save = function(query, callback){
		var obj = Customer(query);
		obj.save(function(err, CustomerResponse){
			if(err){
				callback(err, null);
			}else{
				callback(null, CustomerResponse);
			}
		})
	}

})(module.exports)