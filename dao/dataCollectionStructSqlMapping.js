// datacollectionSqlMapping.js
// CRUD SQL语句
var dimension = {
	insert:'INSERT INTO datacollectionStruct(id,name, datacollectionid,type,dimension) VALUES(?,?,?,?,?)',
	update:'update datacollectionStruct set name=?,type=?,dimension=? where id=? and datacollectionid=?',
	delete: 'delete from datacollectionStruct where id=? and datacollectionid=?',
	queryById: 'select * from datacollectionStruct where dataCollectionId=?'
};
 
module.exports = dimension;