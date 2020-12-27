// dataSetSqlMapping.js
// CRUD SQL语句
var dimension = {
	insert:'INSERT INTO dataset(id,name, dbconnectionid) VALUES(?,?,?)',
	update:'update dataset set name=?,dbconnectionid=? where id=?',
	delete: 'delete from dataset where id=?',
	queryById: 'select * from dataset where id=?',
	queryAll: 'select * from dataset order by id'
};
 
module.exports = dimension;