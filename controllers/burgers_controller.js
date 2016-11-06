var express = require('express');
var burger = require('../models/burgers');

var app = express();

var router = {
	homepage : app.get('/', function(req, res) {
		res.render("hey");
	}),

	nextpage : app.get('/next', function(req, res) {
		res.render("yo");
	})
}


module.exports = router;