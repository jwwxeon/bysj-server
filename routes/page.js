var express = require('express');
var router = express.Router();
var pageDao = require('../dao/pageDao');

router.post('/addpage', function(req, res, next) {
    // console.log(req);
	pageDao.add(req, res, next);
});
router.get('/queryall', function(req, res, next) {
	pageDao.queryAll(req, res, next);
});
router.get('/querybyid', function(req, res, next) {
	pageDao.queryById(req, res, next);
});
router.get('/delete', function(req, res, next) {
	pageDao.delete(req, res, next);
});
router.post('/update', function(req, res, next) {
	pageDao.update(req, res, next);
});
module.exports = router;
