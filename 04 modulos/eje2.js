const readline = require('readline');
const fs = require('fs');
const path = require('path');

class CreateFile {
    async json(data, name) {
        return await new Promise((resolve, reject) => {
            const file = path.join(__dirname, `${name}.json`);
            fs.writeFileSync(file, JSON.stringify(data, null, 2));
        });
    }
}

const createFile = new CreateFile();

const rl = readline.createInterface(
    process.stdin,
    process.stdout
);

const Person = {
    comments: [],
    name: ''
}

function setComments() {
    rl.setPrompt(`tell me one comment ${Person.name} or type exit to exit: `);
    rl.prompt();
}

rl.question('What is your name? ', (answer) => {
    Person.name = answer;
    setComments();
});

rl.on('line', (input) => {
    if (input.trim().toLowerCase() === 'exit') {
        console.log(JSON.stringify(Person, null, 2));
        createFile.json(Person, 'person')
        process.exit();
    }
    Person.comments.push(input.trim());
    setComments();
});