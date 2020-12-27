// datacollectionSqlMapping.js
// CRUD SQL语句
var dimension = {
	insert:'INSERT INTO datacollection(id,name, dbconnectionid) VALUES(?,?,?)',
	update:'update datacollection set name=?,dbconnectionid=? where id=?',
	updatedatasetid:'update datacollection set datasetid=? where id=?',
	delete: 'delete from datacollection where id=?',
	queryByDatasetId: 'select datacollection.*,dbconnection.description from datacollection inner join dbconnection on datacollection.dbconnectionid=dbconnection.id where datacollection.datasetid=?',
	queryById: 'select * from datacollection where id=?',
	queryAll: 'select datacollection.*,dbconnection.description as databaselinkname from datacollection inner join dbconnection on datacollection.dbconnectionid=dbconnection.id order by datacollection.id'
};
 
module.exports = dimension;