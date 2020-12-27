var express = require('express');
var router = express.Router();
var dataCollectionStructDao = require('../dao/dataCollectionStructDao');

router.post('/add', function(req, res, next) {
    // console.log(req);
	dataCollectionStructDao.add(req, res, next);
});
router.get('/queryall', function(req, res, next) {
	dataCollectionStructDao.queryAll(req, res, next);
});
router.get('/querybyid', function(req, res, next) {
	dataCollectionStructDao.queryById(req, res, next);
});
router.get('/delete', function(req, res, next) {
	dataCollectionStructDao.delete(req, res, next);
});
router.post('/update', function(req, res, next) {
	dataCollectionStructDao.update(req, res, next);
});
module.exports = router;
