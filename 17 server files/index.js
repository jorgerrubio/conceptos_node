const fs = require('fs')
const http = require('http')
const path = require('path')

http.createServer((req, res) => {
    console.log(`${req.method}, path ${req.url}`);
    if (req.url === '/') {
        fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.end(html);
        });
    } else if (req.url.match(/.css$/)) {
        const reqPath = path.join(__dirname, 'public', req.url);
        const stream = fs.createReadStream(reqPath, 'UTF-8');
        res.writeHead(200, {
            'content-type': 'text/css'
        });
        stream.pipe(res);
    } else if (req.url.match(/.*(png|jpg|gif)$/)) {
        const reqPath = path.join(__dirname, 'public', req.url);
        const ext = req.url.split('.').pop();
        const stream = fs.createReadStream(reqPath);
        res.writeHead(200, {
            'content-type': `image/${ext}`
        });
        stream.pipe(res);
    } else {
        res.writeHead(404, {
            'content-type': 'text/plain'
        });
        res.end('404 Error');
    }
}).listen(3000);
console.log('servidor iniciado en el puerto 3000');