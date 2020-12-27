var express = require('express');
var router = express.Router();
var dataCollectionDao = require('../dao/dataCollectionDao');

router.post('/add', function(req, res, next) {
    // console.log(req);
	dataCollectionDao.add(req, res, next);
});
router.get('/queryall', function(req, res, next) {
	dataCollectionDao.queryAll(req, res, next);
});
router.get('/querybyid', function(req, res, next) {
	dataCollectionDao.queryById(req, res, next);
});
router.get('/querybydatasetid', function(req, res, next) {
	dataCollectionDao.queryByDatasetId(req, res, next);
});
router.get('/delete', function(req, res, next) {
	dataCollectionDao.delete(req, res, next);
});
router.post('/update', function(req, res, next) {
	dataCollectionDao.update(req, res, next);
});
router.post('/updatedatasetid', function(req, res, next) {
	dataCollectionDao.updatedatasetid(req, res, next);
});
module.exports = router;
