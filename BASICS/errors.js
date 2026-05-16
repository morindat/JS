const readline = require('readline-sync');

function createUsr (name, age){
    if (age < 0 || age > 150) {
        throw new Error("Age must be between 0 and 150");
    }
    return { name, age };
}

let newUsr;

try {
    newUsr = createUsr("alice", 19);
} catch (error) {
    console.log("Invalid age:", error.message);
} finally {
    console.log("After clean-up: ", newUsr);
}


class Student {
    static passingGrade = ['A', 'B', 'C'];
    
    static isPassingGrade(grade){
        return this.passingGrade.includes(grade);
    }

    constructor(name, age, grade){
        if (!name || typeof name !== 'string'){
            throw new Error("Name should a non empty string");
        }
        if (age < 0 || age > 25){
            throw new Error("Invalid age");
        }
        if (!['A', 'B', 'C', 'D', 'F'].includes(grade)) {
            throw new Error("Grade must be either A, B, C, D or F");
        }

        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    isPassing(){
        return Student.isPassingGrade(this.grade);
    }
}

try {
  const name = readline.question("Name: ");
  const age = Number(readline.question("Age: "));
  const grade = readline.question("Grade (A/B/C/D/F): ").toUpperCase();

  const student = new Student(name, age, grade);
  console.log("✅ Student created:", student);
  console.log("Passing?", student.isPassing() ? "Yes 🎉" : "No");

} catch (error) {
  console.log("❌ Failed to create student:", error.message);
} finally {
  console.log("✅ Student registration process complete.");
}