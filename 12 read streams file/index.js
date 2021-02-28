const fs = require('fs')

/* const logs = fs.readFileSync('./logs.log');
console.log(`size: ${logs.length}`); */

const stream = fs.createReadStream('./logs.log', 'UTF-8');
let data = '';

stream.once('data', () => {
    console.log('starting the stream...');
});

stream.on('data', (chunk) => {
    console.log(`${chunk.length} | `);
    data += chunk;
});

stream.on('end', () => {
    console.log('end of stream...');
    console.log(`size: ${data.length}`);
});