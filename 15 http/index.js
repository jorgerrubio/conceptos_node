const { error } = require('console');
const http = require('http')

const options = {
    hostname: 'localhost',
    port: 3300,
    method: 'GET',
    path: '/user'
}

const req = http.request(options, res => {
    console.log(`status code: ${res.statusCode}`);
    console.log('Headers: %j', res.headers);
    let body = '';
    res.on('data', chuck => {
        body += chuck;
    });

    res.on('end', () => {
        console.log('\n\nbody: %j', JSON.parse(body));
    });
});

req.on('error', error => {
    console.error(error);
});
req.end();