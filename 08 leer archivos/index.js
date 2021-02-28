const fs = require('fs');

/* const files = fs.readdirSync(__dirname);
console.log('Contenido del directorio');
console.log(files); */
fs.readdir(__dirname, (error, files) => {
    if (error) {
        throw error;
    }
    console.log('Contenido del directorio: ', __dirname);
    console.log(files);
    files.forEach(file => {
        if (file !== 'index.js') {
            /* const archivo = fs.readFileSync(file, 'UTF-8');
            console.log('Contenido del archivo: ', file);
            console.log(archivo); */

            fs.readFile(file, 'UTF-8', (error, archivo) => {
                if (error) {
                    throw error;
                }
                console.log(archivo);
            });

            console.log('Contenido del archivo: ', file);
        }
    });
});