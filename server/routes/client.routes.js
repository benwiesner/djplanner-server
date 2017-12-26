//Client Route Configuration
//Push to controller

var express = require('express');
var client = require('../models/client.models');
var mongoose = require('mongoose');

const router = express.Router();


//GET Clients
router.get('/', function(req, res) {
	client.find(function (err, clients){
		if (err) res.send(err);
		res.json(clients);		
	});
});

router.get('/:client_id', function(req, res){
	client.findById(req.params.client_id, function (err, clients){
		if(err) res.send(err);
		res.json(clients);
	});
});

//POST New Client
router.post('/', function(req, res) {
	
	var newClient = new client({
		firstName : req.body.firstName,
		lastName : req.body.lastName,
		telephone: req.body.telephone,
		createdDate : Date.now()
	})
	newClient.save();
	//Send Back
	client.find(function(err, clients) {
		if (err) res.send(err);
		res.json(clients);
	});
});

//POST and Update Client
router.post('/:client_id', function(req, res) {

	client.findByIdAndUpdate(req.params.client_id, 
		{
		firstName : req.body.firstName,
		lastName : req.body.lastName,
		telephone : req.body.telephone
		},
		function(err, client){
			if(err) res.send(err);
			res.send(client);
	});
});

//DELETE Client
router.delete('/:client_id', function(req, res){
	client.findByIdAndRemove(req.params.client_id, req.body, function(err, client){
		if (err) res.send(err);
		res.json(client);
	});
});

module.exports = router;
