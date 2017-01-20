var app = require('../configs/expressConfig')();
var request = require('supertest')(app);

describe('localDatabaseTest', function () {

  /**
  * Espera um erro de Bad Request por Cadastrar sem Titulo
  * @type {String}
  */
  it('Testa contador local', function(done) {
    request.get("/api/contador/local")
    .expect(200, done);
  });

});
