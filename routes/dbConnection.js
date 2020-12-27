var express = require('express');
var router = express.Router();
var dbConnectionDao = require('../dao/dbConnectionDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 增加数据库连接
router.post('/addDbConnection', function(req, res, next) {
	dbConnectionDao.add(req, res, next);
});
router.get('/queryAll', function(req, res, next) {
	dbConnectionDao.queryAll(req, res, next);
});
router.post('/queryAll', function(req, res, next) {
	dbConnectionDao.queryAll(req, res, next);
});
router.get('/delete', function(req, res, next) {
	dbConnectionDao.delete(req, res, next);
});
router.post('/update', function(req, res, next) {
	dbConnectionDao.update(req, res, next);
});
module.exports = router;
