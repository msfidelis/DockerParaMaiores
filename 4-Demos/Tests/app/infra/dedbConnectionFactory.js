var Datastore = require('nedb')
,dbName = 'db/local.db'
,db;

/**
* Retorna uma conexè´™o com o MongoDb
* @return {[type]} [object]
*/
var connectDB = function(){

  if(!db) {
    db = new Datastore({
      filename: dbName,
      autoload: true
    });
    console.log('Banco ' + dbName + ' pronto para uso')
  }

  return db;
};

module.exports = function(){
  return connectDB;
}
