const readline = require('readline');
// const fs = require('fs').promises;
const fs = require('fs');

const rl = readline.createInterface(
    process.stdin,
    process.stdout
);

const file = 'data.txt';
let flag = false;
let stream = fs.createWriteStream(file);

function setComments() {
    rl.setPrompt(`You have something to say: (exit) `);
    rl.prompt();
}

rl.question('What is your name? ', (answer) => {
    // createFile(file, `What is your name? ${answer}\n`);
    stream.write(`What is your name? ${answer}\n`);
    setComments();
});

rl.on('line', (input) => {
    if (input.trim().toLowerCase() === 'exit') {
        stream.close();
        rl.close();
    } else {
        const question = flag ? '' : 'a commented: \n'
        if (!flag) {
            flag = true;
        }
        // appendDataToFile(file, `${question}${input.trim()}\n`);
        stream.write(`${question}${input.trim()}\n`);
        setComments();
    }
});

async function createFile(file, content) {
    await fs.writeFile(file, content);
}

async function appendDataToFile(file, content) {
    await fs.appendFile(file, content);
}