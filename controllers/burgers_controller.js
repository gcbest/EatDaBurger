var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

var burger_list = {

};

router.get('/', function(req, res) {
	console.log(burger.all());
	// res.render("index", {burr: burger.all});
})

router.post('/create', function(req, res) {
	console.log("hey");
})


module.exports = router;