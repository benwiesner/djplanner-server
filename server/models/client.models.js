//Client Model Configuration

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Model Configuration -- Move to Separate Folder
var schema = new mongoose.Schema({
	firstName: 'string',
	lastName: 'string',
	telephone: 'string',
	createdDate: {type : Date, default: Date.now()}
});

var client = mongoose.model('client', schema);

module.exports = client;
