const readline = require('readline');
const exec = require('child_process').exec;

const rl = readline.createInterface(
    process.stdin,
    process.stdout
);

const questions = ['Enter a number: ', 'Enter another number: '];
const numbers = [];

function setQuestion(question) {
    rl.setPrompt(question);
    rl.prompt();
}

function loadQuestions() {
    rl.question(questions[0], (num) => {
        if (isNaN(num)) {
            numbers = [];
            loadQuestions();
        }
        numbers.push(num);
        setQuestion(questions[1]);
    });
}

function loadExec() {
    let bash = './bash.sh';
    numbers.forEach(num => {
        bash += ` ${num}`;
    });

    exec(bash, (error, stdout) => {
        if (error) {
            throw error;
        }

        console.log('Comando ejecutado');
        console.log('stdout -->', stdout);
        process.exit();
    });
}

rl.on('line', (input) => {
    if (isNaN(input.trim())) {
        setQuestion(questions[1]);
    }

    numbers.push(input.trim());
    loadExec();
});

loadQuestions();