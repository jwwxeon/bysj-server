// dimensionSqlMapping.js
// CRUD SQL语句
var dimension = {
	insert:'INSERT INTO dimension(id,name,alias,type,databaselink,dimensiontable,dimensionKeyColumn,dimensionTextColumn,parentDimension,foreignKey) VALUES(?,?,?,?,?,?,?,?,?)',
	update:'update dimension set name=?,alias=?,type=?,databaselink=?, dimensiontable=?, dimensionKeyColumn=?, dimensionTextColumn=?, parentDimension=?, foreignKey=? where id=?',
	delete: 'delete from dimension where id=?',
	queryById: 'select * from dimension where databaselink=?',
	queryAll: 'select dimension.*,dbconnection.description as databaselinkname from dimension inner join dbconnection on dimension.databaselink=dbconnection.id order by dimension.id'
};
 
module.exports = dimension;