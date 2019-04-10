(function(usersController){

	var Users = require('../dbInterface/usersInterface');
	var AllUsers = require('../dbInterface/allUsersInterface');
	var uid = require('rand-token').uid;
	var moment = require('moment');

	usersController.login = function(req, res){
		var email = req.body.email;
		var password = req.body.password;
		console.log(email+' data :'+password);
		AllUsers.findOne({
			userName : email,
			password : password
		}, function(err, usersResponse){
			console.log("usersResponse : ", usersResponse);
			if(err){
				return res.status(400).send({
					error : err
				});
			}else if(!usersResponse){
				return res.status(400).send({
					error : "Invalid login details!"
				});
			}else{
				return res.status(200).send(usersResponse);
			}
		})
	}

	usersController.registration = function(req, res){
		Users.save({
			_id : uid(16),
			name : req.body.name,
			email : req.body.email,
			mobile : req.body.mobile,
			password : req.body.password,
			created : (moment()._d).toISOString(),
			updated : (moment()._d).toISOString()
		}, function(err, usersResponse){
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
						return res.status(200).send({
							message : "user added"
						})
					}
				})
			}
		})
	}

})(module.exports)