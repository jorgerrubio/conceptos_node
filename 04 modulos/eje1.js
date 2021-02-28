const util = require('util');
const v8 = require('v8');

// Modulos de node
// Documentacion: https://nodejs.org/es/docs/
// version instalada node -v
const name = 'Jorge';
const lastname = 'Rubio';
const age = 47;
const text = util.format('Your name is: %s %s, you are %d years', name, lastname, age);
console.log(text);

console.log(v8.getHeapStatistics());