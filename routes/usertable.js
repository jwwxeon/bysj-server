var express = require('express');
var router = express.Router();
var usertableDao = require('../dao/usertableDao');

router.get('/queryTableStruct', function(req, res, next) {
	usertableDao.queryTableStruct(req, res, next);
});
router.get('/queryAllTable', function(req, res, next) {
	usertableDao.queryAllTable(req, res, next);
});
module.exports = router;
