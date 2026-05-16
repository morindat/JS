// Map: Transforms

const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
console.log(doubled);

const names = ['Alice', 'Bob', 'Charlie'];
const upper = names.map(name => name.toUpperCase());
console.log(upper);

const greetings = names.map(name => `Hello ${name}!`);
for (const greet of greetings){
    console.log(greet);
}

// Filter: Filters as name suggests
const even = nums.filter(n => n % 2 === 0);
console.log(even);

// find active users
const users = [
    {name : "Alice", active: true},
    {name : "Bob", active: false},
    {name : "Charlie", active: true}
];
console.log("\n");
const activeusers = users.filter(user => user.active);
console.log("Active users: ");
for (au of activeusers){
    console.log(au);
}
console.log("\n");
const namii = users.map(user => user.name);
console.log(namii);

// Reduce: Like folding
// accumulator, parameter, what to do, initial value

const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(`Sum: ${sum}`);
console.log("\n");

const actusers = users.reduce((count, user) => {
    return user.active ? count + 1 : count;
}, 0);
console.log(`No of active users right now: ${actusers}`);
console.log("\n");

