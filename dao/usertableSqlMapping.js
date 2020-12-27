// usertableSqlMapping.js
// CRUD SQL语句
var usertable = {
	queryTableStruct: 'select * from information_schema.columns where table_name = ?',
	queryAllTable: 'select * from  information_schema.tables inner join dbconnection on information_schema.tables.table_schema=dbconnection.databasename where dbconnection.id=?'
};
 
module.exports = usertable;