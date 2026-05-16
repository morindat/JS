const student = {
    name: "Alice",
    age: 21, 
    grade: 'A',
    isEnrolled: true
};

console.log(student); // outputs the whole object
console.log(student.name); // .sumn prints that thing

// adding a field

student.present = true;
console.log(student);

// deleting a field
delete student.present;
console.log(student);

// Checking if a field/property exists
console.log(student.hasOwnProperty("name"));
console.log("age" in student);

// Values can be anything
student.hobbies = ['coding', 'basketball', 'volleyball', 'music'];
console.log(student);
student.address = {
    town: "monduli",
    city: 'arusha',
    zip: "1000-13"
}
console.log(student);

console.log(student.address.city);
console.log(student.hobbies);
console.log(student.hobbies[0]);
console.log(student.address);
console.log("\n");

// make it more reusable

const studTemplate = (name, age, address, grade, hobbies) => ({
    name,
    age, 
    address,
    grade,
    hobbies
});

const stud1 = studTemplate('alice', 21, '{city: "monduli", zip: "101010"}', 'A', ['coding', 'eating', 'sleeping']);
console.log(stud1);

// wait we can do better
// yes, but i do not wanna bother me now

//Functions inside an obj

const user = {
    name: "Alice",
    age: 21, 
    grade: 'A',
    isEnrolled: true,
    rollcall : function(){
        console.log(`${this.name} is ${this.age}`);
    }
};

console.log(user.rollcall);
user.rollcall();