const http = require('http');
const fs = require('fs');
const routes = require('./router');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	routes.router(req, res);
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));


