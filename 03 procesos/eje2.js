process.stdout.write('Dime tu nombre: ');

process.stdin.on('data', (data) => {
    process.stdout.write(`Hola ${data.toString()}`);
    process.exit();
});