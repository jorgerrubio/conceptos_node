const http = require('http');

const users = [{
    "id": 1,
    "name": "Bob",
    "lastname": "Doe"
}, {
    "id": 2,
    "name": "John",
    "lastname": "Doe"
}, {
    "id": 3,
    "name": "brad",
    "lastname": "gibson"
}];

http.createServer((req, res) => {
    console.log(`${req.method}, path ${req.url}`);
    if (req.url === '/') {
        res.writeHead(200, {
            'content-type': 'text/json'
        });
        res.end(JSON.stringify(users));
    } else if (req.url.match(/\/(name|lastname|id)\/[a-z0-9]*$/)) {
        splitParams(req.url, res);
    } else {
        res.writeHead(404, {
            'content-type': 'text/plain'
        });
        res.end('404 Error');
    }
}).listen(3000);
console.log('servidor iniciado en el puerto 3000');

const filterUsers = function (key, value, res) {
    console.log('key', key, 'value', value);
    const result = users.filter(user => {
        const keyValue = (key === 'id') ? user[key] : user[key].toLowerCase();
        return keyValue === value;
    });
    res.writeHead(200, {
        'content-type': 'text/json'
    });

    res.end(JSON.stringify(result));
}

const splitParams = function (url, res) {
    const params = url.split('/').filter(param => param !== '');
    const value = (params[0].toLowerCase() === 'id') ? parseInt(params[1]) : params[1].toLowerCase();
    filterUsers(params[0].toLowerCase(), value, res);
}