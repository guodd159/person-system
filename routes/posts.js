var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

router.get('/', function(req, res, next) {
    res.render('posts');
});

module.exports = router;