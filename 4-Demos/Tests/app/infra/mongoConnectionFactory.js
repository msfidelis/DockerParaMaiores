var mongo = require('mongoose');

/**
* Retorna uma conexão com o MongoDb
* @return {[type]} [object]
*/
var connectMongo = function(){

  /**
  * Ambiente de Produção da Aplicação
  */
  var url = 'mongodb://gdg:gdg2016@ds147377.mlab.com:47377/api';
   
  return mongo.createConnection(url)
};

module.exports = function(){
  return connectMongo;
}
