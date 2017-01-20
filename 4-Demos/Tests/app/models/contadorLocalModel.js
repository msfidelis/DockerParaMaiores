function localModel(connection) {
  this._connection = connection;
}

localModel.prototype.connection = function() {
  return this._mongo;
}

localModel.prototype.novoAcesso = function() {
  
}
