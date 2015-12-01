var express = require('express');
var router = express.Router();

var indexController = require('../app/controllers/indexController');
var usersController = require('../app/controllers/usersController');

router.get('/', indexController.show);
router.get('/users', usersController.show);

module.exports = router;