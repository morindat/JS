// since taking user inputs is such a pain in the ass in js
// we got a soln that reduces the pain

const readline = require('readline-sync');

const name = readline.question("Enter your name: ");
const age = Number(readline.question("Enter your age: "));

console.log(`Hello ${name}`);
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Not old enough to vote.");
}
