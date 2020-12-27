const mysql=require('mysql')
const $conf = require('../conf/db');
const $sql = require('./usertableSqlMapping');
var $util = require('../util/util');
 
// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
 
// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};
 
module.exports = {
	queryTableStruct: function (req, res, next) {
		var tname = req.query.tablename; // 为了拼凑正确的sql语句，这里要转下整数
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryTableStruct, tname, function(err, result) {
				jsonWrite(res, result);
				connection.release();
 
			});
		});
	},
	queryAllTable: function (req, res, next) {
		var id = req.query.databaselinkid; // 为了拼凑正确的sql语句，这里要转下整数
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAllTable, id, function(err, result) {
				jsonWrite(res, result);
				connection.release();
 
			});
		});
	},
};