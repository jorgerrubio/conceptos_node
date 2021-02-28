const eventEmitter = require('events').EventEmitter;
const util = require('util');

class Person extends eventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}
// util.inherits(Person, eventEmitter);
const person = new Person('Jorge');
person.on('speak', (message) => {
    console.log(`${person.name}: ${message}`);
});

person.emit('speak', 'Aprendiendo Nodejs');