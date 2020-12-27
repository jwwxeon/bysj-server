var express = require('express');
var router = express.Router();
var testsqlDao = require('../dao/testsqlDao');

router.post('/query', function(req, res, next) {
	testsqlDao.query(req, res, next);
});
module.exports = router;
