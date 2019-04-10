var mongoose = require('mongoose');

var allUsersSchema = new mongoose.Schema({
	_id : String,
	name : String,
    email : String,
    mobile : String,
    password : String,
    token : String,
    token_expiry : Date,
    created : Date,
    updated : Date
})

var allUsersModel = mongoose.model('allUsers', allUsersSchema);

module.exports = allUsersModel;