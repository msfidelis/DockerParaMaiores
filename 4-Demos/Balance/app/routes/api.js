module.exports = function(app) {

  /**
  * Retorna o hostname da máquina
  * @type {[type]}
  */
  app.get('/api/hostname', function (req, res) {
    var os = require('os');
    return res.json(os.hostname());
  });

  /**
  * Conta a quantidadede acessos localmente
  * @type {[type]}
  */
  app.get('/api/contador/local', function (req, res) {
    var connectionLocal = app.infra.dedbConnectionFactory();
    connectionLocal.insert({'teste':'legal'}, function(err, novo) {
      console.log(novo);
    });

    connectionLocal.count({}, function(err, qtd) {
      res.json(qtd);
    });
  });

  /**
  * Conta a quantidade de acessos do servidor
  * @type {[type]}
  */
  app.get('/api/contador/server', function (req, res) {
    var connection = app.infra.mongoConnectionFactory();
    var model = new app.models.contadorServerModel(connection);

    var novoAcesso = model.novoAcesso(function(err, qtd) {
      console.log(qtd);
    });

    var db = model.connection();
    db.find({}).count(function (err, result) {
      res.json(result);
    });

  });

}
