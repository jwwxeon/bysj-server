// dbConnectionSqlMapping.js
// CRUD SQL语句
var dbconnection = {
	insert:'INSERT INTO dbconnection(description, host,user,password,databasename,port,isdefault) VALUES(?,?,?,?,?,?,?)',
	update:'update dbconnection set description=?, host=?, user=?, password=?, databasename=?, port=?,isdefault=? where id=?',
	delete: 'delete from dbconnection where id=?',
	queryById: 'select * from dbconnection where id=?',
	queryAll: 'select * from dbconnection'
};
 
module.exports = dbconnection;