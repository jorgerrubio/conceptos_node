// node eje1 --nombre "Jorge" --apellidos "Rubio"
// console.log(process.argv);

function param(p) {
    const index = process.argv.indexOf(p);
    return index > -1 ? process.argv[index + 1] : null;
}

console.log(`Tu nombre es: ${param('--nombre')} ${param('--apellidos')}`);