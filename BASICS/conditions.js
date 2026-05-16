let age = 13;

if (age >= 18){
    console.log("You can vote!")
}
else{
    console.log("Wait for a few more years and you'll be able to vote");
}

const grade = 35;
if (grade >= 90){
    console.log("Grade: A*");
}
else if (grade >= 80){
    console.log("Grade: A");
}
else if (grade >= 70){
    console.log("Grade: B");
}
else if (grade >= 60){
    console.log("Grade: C");
}
else if (grade >= 50){
    console.log("Grade: D");
}
else{
    console.log("You failed!");
}

let i = 1;
while (i <= 5){
    console.log(i);
    i++;
}

let x = 3;
while (x >= 1){
    console.log(x);
    x--;
}
console.log("Happy New Year!!!");

console.log("Even numbers: ");
for (let i = 0; i <= 10; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    rl.question("Enter your age: ", (age) => {
        console.log (`Hello ${name}, you are ${age} years old!`);
        //rl.close();
    })
})

rl.question("Enter your age: ", (age) => {
    const Age = Numbers(age);
    if (Age < 18){
        console.log("You can not vote!");
    } else {
        console.log("You can vote!");
    }
    rl.close();
})

// since taking user inputs is such a pain in the ass in js
// we got a soln that reduces the pain

const readline = require('readline-sync');