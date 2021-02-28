const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hola mundo!');
}).listen('3000');

console.log('servidor iniciado en el puerto 3000');