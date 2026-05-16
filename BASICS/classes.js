class stud {
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade
    }

    // you can add methods in there too
    greet() {
        return `Hello, my name is ${this.name} and i'm from grade ${(this.grade)}`;
    }

    getSummary() {
        return `Name: ${this.name}, Grade: ${this.grade}, Age: ${this.age}`;
    }
};

const alice = new stud("Alice", 21, "A");
console.log(alice);

// can still use the . method to get specific attributes of the class


console.log(alice.getSummary());
console.log(alice.greet());