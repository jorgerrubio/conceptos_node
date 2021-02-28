const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <h1>Hola Mundo!</h1>
            <p>Creando un servidor nodejs</p>
        </body>
        </html>
    `);
}).listen('3000');

console.log('servidor iniciado en el puerto 3000');