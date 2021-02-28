const events = require('events')
const emitter = new events.EventEmitter();

emitter.on('custom', (message, status) => {
    console.log(`${status}: ${message}`);
});

emitter.emit('custom', 'Esto es un mensaje con el evento emitter', 200);
