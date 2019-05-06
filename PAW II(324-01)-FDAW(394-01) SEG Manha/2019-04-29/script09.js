var http = require('http');
var d = require('./moduloData');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain; charset=UTF-8'});

	res.write('Hoje é ' + d.retornarDia() + '/' + d.retornarMes() + '/' + d.retornarAno() + ' e no momento são ' + d.retornarHora() + ':' + d.retornarMinutos());

	res.end();
}).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');