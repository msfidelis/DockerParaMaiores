var app = require('../configs/expressConfig')();
var request = require('supertest')(app);

describe('remoteDatabaseTest', function () {

  /**
  * Espera um erro de Bad Request por Cadastrar sem Titulo
  * @type {String}
  */
  it('Testa contador remoto', function(done) {
    request.get("/api/contador/server")
    .expect(200, done);
  });

});
