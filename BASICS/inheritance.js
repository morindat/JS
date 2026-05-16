class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    greet () {
        return `Hello, I am ${this.name}`;
    }
}

// add a class student that inherits from person

class student extends Person {
    constructor (name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `Hello, I am ${this.name}, I am studying for ${this.grade}`;
    }

    get birthyear() {
        const curryear = new Date().getFullYear();
        return curryear - this.age;
    }

    set age(newAge) {
        if (newAge < 18 || newAge > 25) {
            console.log("Invalid age!");
            return;
        }
        this._age = newAge;
    }

    get age(){
        return this._age;
    }
}

const alice = new Person("alice", 30);
console.log(alice);

const bob = new student("Bob", 21, 'A');
console.log(bob);
console.log(bob.study());

// you can also call the functions in the super class
console.log(bob.greet());

// Setters and Getters: I am including them above coz i do not want to write a new class all over again
const justin = new student("Justin", 32, 'A');
console.log(justin); // Invalid age, skips
console.log(justin.age); // Undefined
console.log(justin.birthyear); // NaN

// now set proper age
const me = new student("Me", 21, "A");
console.log(me);
console.log(me.birthyear);
console.log(me.age);

class users {
    static total = 0;

    constructor(name, status, id){
        this.name = name;
        this.status = status;
        this.id = id;
        users.total++;
    }
    
    static showtot(){
        return `Total users: ${users.total}`;
    }
}

const usr1 = new users ("John", "Online", "102024-1748");
const usr2 = new users ("Jon", "Online", "1024-1748");

console.log(users.showtot());