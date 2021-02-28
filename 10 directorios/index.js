const fs = require('fs');

// mkdir
/* fs.mkdirSync('img');
console.log('folder created...');

fs.mkdir('css', (error) => {
    if (error) {
        throw error;
    }
    console.log('folder created...');
}); */

// comprobar si existe una carpeta
if (!fs.existsSync('img')) {
    fs.mkdir('img', (error) => {
        if (error) {
            throw error;
        }
        console.log('folder created...');
    });
} else {
    console.log('folder already exists');
}