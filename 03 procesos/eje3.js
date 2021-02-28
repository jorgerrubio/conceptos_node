// leer y escrribir en consola stdin y stdout
const questions = [
    'What is your name?',
    'How old are you?',
    'Favourite programming language?'
];
const answers = [];

function question(i) {
    process.stdout.write(questions[i]);
}

process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        question(answers.length);
    } else {
        process.exit();
    }
});

question(answers.length);
