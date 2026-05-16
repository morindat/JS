const products = [
    { name : 'computer', price : 45000 },
    { name : 'phone', price : 23000 },
    { name : 'Body-wash', price : 700 },
    { name : 'shampoo', price : 850 }
]

// Find by name
const sumn = products.find(p => p.name === 'shampoo');
console.log(sumn);
console.log(sumn.price);

// find by price
const pri = products.find(p => p.price === 700);
console.log(`Item with price 700 is ${pri.name}`);

// find all expensive shit price 20K and above
// returns only the first match
const expens = products.find(p => p.price >= 20000);
console.log(expens);

const readline = require('readline-sync');

const names = [];
i = 0;
while (i < 5){
    const newName = readline.question("Enter name: ");
    
    if (names.includes(newName.toLowerCase())){
        console.log('Name taken already!, enter a new name');
    } else{
        names.push(newName);
    }

    i++;
}


console.log(names);

// reduce
// find avg age

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const avg = users
    .map(u => u.age)
    .reduce ((acc, a) => acc + a, 0) / users.length;
console.log("Average age:", avg);