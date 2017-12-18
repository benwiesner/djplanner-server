var express = require('express');
var path = require('path');
var appRoot = require('app-root-path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('../routes/index');

const app = express();

//Log Requests In Dev
app.use(morgan('dev'));

//Setup Middleware Parsers
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});

//Main Route
app.get('/', (req, res, next ) =>{
	res.send("DJ Planner REST API")
});

//Backend Route Config
app.use('/api', routes);

//Frontend Route Config
/*app.get('*', (req, res) => {
	res.sendFile(path.join(appRoot.path,'dist/index.html'));
});
*/

//Server Constants
const port = process.env.PORT || 8080;

module.exports = app;
