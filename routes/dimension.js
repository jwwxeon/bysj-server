var express = require('express');
var router = express.Router();
var dimensionDao = require('../dao/dimensionDao');

router.post('/add', function(req, res, next) {
    // console.log(req);
	dimensionDao.add(req, res, next);
});
router.get('/queryall', function(req, res, next) {
	dimensionDao.queryAll(req, res, next);
});
router.get('/querybyid', function(req, res, next) {
	dimensionDao.queryById(req, res, next);
});
router.get('/delete', function(req, res, next) {
	dimensionDao.delete(req, res, next);
});
router.post('/update', function(req, res, next) {
	dimensionDao.update(req, res, next);
});
module.exports = router;
