var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var userSchema = new Schema({
	username: String,
	pwHash  : String,
	salt    : String
});
module.exports = mongoose.model('User', userSchema);