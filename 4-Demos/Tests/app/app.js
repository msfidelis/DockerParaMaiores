var app = require('./configs/expressConfig')();

app.listen(process.env.PORT || 80, function() {
	console.log("Ta saindo da jaula o Monstro");
});
