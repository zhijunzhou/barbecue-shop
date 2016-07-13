var config = require('./config');
var output = require('./common/output').output;
var q = require('./controllers/controllers');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	res.render("index");
});

router.get('*', function(req, res, next) {
	res.render('index');
});

module.exports = router;





