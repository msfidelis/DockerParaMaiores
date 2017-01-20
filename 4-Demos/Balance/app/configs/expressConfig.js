module.exports = function() {
  var express = require('express');
  var app = express();
  var load = require('express-load');
  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  //Autoloader
  load('routes')
  .then('models')
  .then('infra')
  .into(app);

  return app;
}
