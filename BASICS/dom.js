// Displaying user names in my html

const userList = document.getElementById("user-list");

fetch("https://jsonplaceholder.typicode.com/users")
    .then (response => {
        if (!response.ok){
            throw new error ("Network Error");
        }
        return response.json();
    })
    .then (users => {
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.username;
            userList.appendChild(li);
        });
    })
    .catch(error => {
    console.error("Error fetching users:", error);
    userList.innerHTML = "<li>Failed to load users</li>"; // show error in UI
    });

// same code using asynch

const userData = document.getElementById("user-data");

async function fetchUsers() {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.username;
            userData.appendChild(li);
        });

    } catch (error) {
        console.log("Error fetching users: ", error);
        userData.innerHTML = "<li>Failed to load users</li>";
    }
}

fetchUsers();

// A user object
const user = {
  name: "Papaa",
  age: 21,
  isStudent: true
};

// Convert object → JSON string
const jsonUser = JSON.stringify(user);
console.log(jsonUser); // {"name":"Papaa","age":21,"isStudent":true}

// Store in localStorage
localStorage.setItem("user", jsonUser);

// Get from localStorage
const storedUser = localStorage.getItem("user");

// Convert JSON string → object
const parsedUser = JSON.parse(storedUser);
console.log(parsedUser.name); // Papaa
