const mysql=require('mysql')
const $conf = require('../conf/db');
const $sql = require('./dataCollectionStructSqlMapping');
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
	add: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			// 获取前台页面传过来的参数
			var param = req.query || req.params;
			// 建立连接，向表中插入值
			connection.query($sql.insert, [param.id,param.name,param.datacollectionid,param.type,param.dimension], function(err, result) {
				if(result) {
					result = {
						code: 200,
						msg:'增加成功',
						id:result.insertId
					};    
				}
 
				// 以json形式，把操作结果返回给前台页面
				jsonWrite(res, result);
 
				// 释放连接 
				connection.release();
			});
		});
	},
	delete: function (req, res, next) {
		// delete by Id
		pool.getConnection(function(err, connection) {
			var param = req.query || req.params;
			connection.query($sql.delete, [param.id,param.datacollectionid], function(err, result) {
				if(result.affectedRows > 0) {
					result = {
						code: 200,
						msg:'删除成功'
					};
				} else {
					result = void 0;
				}
				jsonWrite(res, result);
				connection.release();
			});
		});
	},
	update: function (req, res, next) {
		// 获取前台页面传过来的参数
		var param = req.query || req.params;
		if(param.id == null) {
			jsonWrite(res, undefined);
			return;
		}
		pool.getConnection(function(err, connection) {
			connection.query($sql.update, [param.name,param.type,param.dimension,param.id,param.datacollectionid], function(err, result) {
				if(result.affectedRows > 0) {
					result = {
						code: 200,
						msg:'更新成功'
					};
				} else {
					result = void 0;
				}
				jsonWrite(res, result);
				connection.release();
			});
		});
 
	},
	queryById: function (req, res, next) {
		var param = req.query || req.params;
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryById, [param.datacollectionid], function(err, result) {
				jsonWrite(res, result);
				connection.release();
 
			});
		});
	}
};