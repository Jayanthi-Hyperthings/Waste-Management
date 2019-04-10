(function(customerController){

	var Customer = require('../dbInterface/customerInterface');
	var AllUsers = require('../dbInterface/allUsersInterface');
	var uid = require('rand-token').uid;
	var moment = require('moment');

	customerController.registration = function(req, res){
		console.log('reqreqreq', req);
		Customer.save({
			_id : uid(16),
			name : req.body.name,
			email : req.body.email,
			mobile : req.body.mobile,
			password : req.body.password,
			created : (moment()._d).toISOString(),
			updated : (moment()._d).toISOString()
		}, function(err, customerResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				AllUsers.save({
					_id : uid(16),
					name : req.body.name,
					email : req.body.email,
					mobile : req.body.mobile,
					password : req.body.password,
					token : uid(16),
					token_expiry : (moment().add(2, 'days')._d).toISOString(), 
					created : (moment()._d).toISOString(),
					updated : (moment()._d).toISOString()
				}, function(err, allUsersResponse){
					if(err){
						return res.status(400).send({
							error : err
						})
					}else{
						return res.status(200).send(customerResponse)
					}
				})
			}
		})
	}

})(module.exports)