const Person = require('./person');

const jorge = new Person('Jorge');

jorge.on('speak', (message) => {
    console.log(`${jorge.name}: ${message}`);
});

jorge.emit('speak', 'Aprendiendo Nodejs');