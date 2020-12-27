var express = require('express');
var router = express.Router();
var dataSetDao = require('../dao/dataSetDao');

router.post('/add', function(req, res, next) {
    // console.log(req);
	dataSetDao.add(req, res, next);
});
router.get('/queryall', function(req, res, next) {
	dataSetDao.queryAll(req, res, next);
});
router.get('/querybyid', function(req, res, next) {
	dataSetDao.queryById(req, res, next);
});
router.get('/delete', function(req, res, next) {
	dataSetDao.delete(req, res, next);
});
router.post('/update', function(req, res, next) {
	dataSetDao.update(req, res, next);
});
module.exports = router;
