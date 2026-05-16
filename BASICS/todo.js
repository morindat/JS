const readline = require(`readline-sync`);
const todos = [];

console.log("📝 Welcome to Your To-Do List!\n");

while (true){
    const action = readline.question("Add, View, Done or Exit? ").trim().toLowerCase();

    if (action === 'add'){
        const task = readline.question("Enter a new task: ");
        todos.push(task);
        console.log("✅ Task added!\n");
    }
    else if (action === 'view'){
        if (todos.length === 0){
            console.log("No tasks added yet!");
        } else {
            console.log("Your tasks: ");
            todos.forEach((task, i) => {
                console.log(`${i + 1} : ${task}`)
            })
            console.log("");
        }
    }
    else if (action === 'done'){
        const completed = todos.shift();
        if (completed){
            console.log(`🎉 Completed: ${completed}\n`);
        } else {
            console.log("📭 No tasks to complete!\n");
        }
    }
    else if (action === 'exit') {
        console.log("👋 Goodbye!");
        break;
    }
    else {
    console.log("❌ Unknown command. Use: Add, View, Done, Exit\n");
  }
}