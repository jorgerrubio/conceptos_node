const fs = require('fs');

const file = 'file.txt';
const fileRename = 'rename.txt';

// crear archivo
fs.writeFile(file, 'contenido de prueba', (error) => {
    if (error) {
        throw error;
    }
    console.log('A file has been created');
    renameFile();
});

// renombrar archivo
function renameFile() {
    /* fs.renameSync(file, fileRename);
    console.log('the file has been renamed'); */

    fs.rename(file, fileRename, (error) => {
        if (error) {
            throw error;
        }

        console.log('the file has been renamed');
        moveFile();
    });
}

// mover archivo
function moveFile() {
    const dir = 'src';
    createDir(dir).then(() => {
        fs.rename(fileRename, `${dir}/${fileRename}`, (error) => {
            if (error) {
                throw error;
            }

            console.log('the file has been moved');
            deleteFile(`${dir}/${fileRename}`);
        });
    });
}

// eliminar archivo
function deleteFile(file) {
    /* fs.unlinkSync(`./src/${fileRename}`);
    console.log('The archive has been deleted'); */

    fs.unlink(file, (error) => {
        if (error) {
            throw error;
        }

        console.log('he file has been deleted');
    });
}

function createDir(dir) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dir)) {
            resolve({
                error: false,
                message: ''
            });
        } else {
            fs.mkdir(dir, (error) => {
                if (error) {
                    reject({
                        error: true,
                        message: 'directory could not be created'
                    });
                }
                resolve({
                    error: false,
                    message: ''
                });
            });
        }
    });
}