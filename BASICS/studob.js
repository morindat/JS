const stud = {
    name: "Justin",
    courses: ['Linear algebra', 'DSA', 'Prob & Stats', 'Programming Lab'],
    grade: 'A',
    login: 0,

    addcourse(course){
        this.courses.push(course);
        console.log(`${this.name} added ${course}`);
    },

    loginCount(){
        this.login++;
        console.log(`${this.name} logged in ${this.login} time(s)`)
    },

    getSummary(){
        return `
        Name: ${this.name}
        Login Times: ${this.login}
        Courses: ${this.courses}
        Total Courses: ${this.courses.length}`
    }
};

stud.loginCount();
stud.addcourse("ODISI");
console.log("Student Summary");
console.log(stud.getSummary());