function ApiModel(connection) {
  this._connection = connection;

  var Schema = require('mongoose').Schema;
  this._schema =  Schema({
    "teste": String
  });

  this._mongo = this._connection.model('contador', this._schema);
}

ApiModel.prototype.connection = function() {
  return this._mongo;
}

/**
 * [novoAcesso description]
 * @author Matheus Fidelis <matheus.scarpato@superlogica.com>
 * @return {[type]} [description]
 */
ApiModel.prototype.novoAcesso = function(callback) {
  var NovaFlag = new this._mongo({
    'teste' : 'lalalala'
  });

  NovaFlag.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(NovaFlag);
    }
  });
}

/**
 * [contador description]
 * @author Matheus Fidelis <matheus.scarpato@superlogica.com>
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
ApiModel.prototype.contador = function(callback) {
  //Insere um registor no mongo
  var NovaFlag = new this._mongo({
    'teste' : 'lalalala'
  });

  //Retorna a quantidade de registros no Mongo
  var Contador = this._mongo;
  var quantidade = Contador.find({});
  console.log(quantidade);
  return quantidade;
}

module.exports = function() {
  return ApiModel;
}
