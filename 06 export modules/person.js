const eventEmitter = require('events').EventEmitter;

class Person extends eventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

module.exports = Person;