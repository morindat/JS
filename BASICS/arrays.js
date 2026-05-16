const hobbies = ['coding', 'music', 'football', 'basketball'];
console.log("Hobbies: ", hobbies);

for (const hobby of hobbies){
    console.log(hobby);
}

// same as the above
// less cleaner tho

for (let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i]);
}

// methods
hobbies.push('running');
hobbies.shift();
hobbies.pop();
hobbies.unshift('coding');
hobbies[1] = 'eating';
console.log("Hobbies: ", hobbies);

// even funner

const users = [
    {name : "Justin", age : 21},
    {name : "Papaa", age : 22}
]

for (const user of users){
    console.log(user.name + " : " + user.age);
}

console.log("welcome to my world!\n");
console.log(`You have ${hobbies.length} to explore\n`);

hobbies.forEach((hobby, index) => {
    console.log(`${index + 1}: ${hobby}`);
});

const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
console.log(`\n✨ Try this today: ${randomHobby}`);