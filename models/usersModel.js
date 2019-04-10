var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
	_id : String,
	name : String,
    email : String,
    mobile : String,
    password : String,
    created : Date,
    updated : Date
})

var usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;