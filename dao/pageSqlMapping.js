// dbConnectionSqlMapping.js
// CRUD SQL语句
var dbconnection = {
	insert:'INSERT INTO page(title,description, content) VALUES(?,?,?)',
	update:'update page set title=?,description=?, content=? where id=?',
	delete: 'delete from page where id=?',
	queryById: 'select * from page where id=?',
	queryAll: 'select * from page order by id'
};
 
module.exports = dbconnection;