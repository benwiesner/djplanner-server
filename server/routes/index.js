var express = require('express');
var clientRoutes = require('./client.routes');

const router = express.Router();

//Mount Client Routes at /api/clients

router.use('/clients', clientRoutes);

module.exports = router;
