const mysql=require('mysql')
const $conf = require('../conf/db');
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
	query: function (req, res, next) {
		var sqlstring = req.query.sqlstring;
		console.log(unescape(sqlstring));
		pool.getConnection(function(err, connection) {
			connection.query("?", unescape(sqlstring), function(err, result) {
				jsonWrite(res, result);
				
				console.log(result);
				connection.release();
 
			});
		});
	},
};