//server.js

//Define Includes
var mongoose = require('mongoose');

//Define Constants
var port = 8080;

//Server Config
var app = require('./server/config/express.config');

//Database Connection
const mongoURI = 'localhost:27017';
mongoose.connect(mongoURI);

//Start application
app.listen(port);
console.log("App listening on port " + port);



