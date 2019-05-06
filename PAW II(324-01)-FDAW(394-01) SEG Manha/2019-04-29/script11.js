var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

	var args = url.parse(req.url, true).query;
	res.write('Nome: ' + args.nome + '<br>');
	res.write('Sobrenome: ' + args.sobrenome);

	res.end();	
}).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');