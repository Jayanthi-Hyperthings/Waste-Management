var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
	_id : String,
	name : String,
    email : String,
    mobile : String,
    password : String,
    created : Date,
    updated : Date
})

var customerModel = mongoose.model('customer', customerSchema);

module.exports = customerModel;