const fs = require('fs');

const file = 'file.txt';
// validar si existe un archivo
/* if (fs.existsSync(file)) {
    console.log('the file exists');
} else{
    console.log('the file does not exist');
} */

/* fs.access(file, fs.constants.F_OK, (error) => {
    if (error) {
        console.log('the file does not exist');
    } else {
        console.log('the file exists');
    }
}); */

// escribir en un archivo
const content = 'Writing to a txt file.';
/* fs.writeFileSync(file, content);
console.log('It has been written in the file'); */

// asincrona

fs.writeFile(file, content, (error) => {
    if (error) {
        throw error;
    }
    console.log('It has been written in the file');
});

const line = '\nAdding another line in the file';
fs.appendFile(file, line, (error) => {
    if (error) {
        throw error;
    }
    console.log('Another line has been added to the file');
});