// There is about three ways to write functions in js
// 1: Fn declaration

function greet(name){
    return `Hello, ${name}!`;
}

console.log(greet("justin"));

// 2: Fn expression
const greets = function (name){
    return `Hello, ${name}.`
};

console.log(greets('Papaa'))

// 3: Arrow fn, modern js
const greetss = (name) => {
    return `Hello ${name}!`;
};

console.log(greetss("Morindat"));

// Functions and user inputs
const readline = require('readline-sync');
const names = readline.question("Whatchu your name is?: ");
console.log(greetss(names));

const salute = (name, time) => {
    const Time = time.charAt(0).toUpperCase() + time.slice(1).toLowerCase();
    const Name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${Name}. I hope you are having a great ${Time}`;
};

const name = readline.question("What is your beautiful name?: ");
const time = readline.question("What time of the day is it there? ") || "day"; // day is default
console.log(salute(name, time));


const calc = (operation, a, b) => {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            if (b == 0) {
                return "Error: can not divide by 0!";
            }
            return a / b;
        case 'multiply':
            return a * b;
        default:
            return "Unknown operation";
    }
};

console.log("Welcome to mini calculator!");

let playAgain = 'y';
while (playAgain === 'y'){
    const operation = readline.question("Choose operation (add, subtract, divide, multiply): ").trim().toLowerCase();
    const a = Number(readline.question("Enter the first number: "));
    const b = Number(readline.question("Enter the second number: "));

    // check validity
    if(isNaN(a) || isNaN(b)){
        console.log("Enter valid values!");
        continue; 
    }

    const result = calc(operation, a, b);
    console.log("Result: ",result);
    playAgain = readline.question("Do you wanna do another operation? (y/n): ").trim().toLowerCase();
}

console.log("Thanks for using our calculator!");