import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Votre nom ?", (answer) => {
console.log(answer)
})