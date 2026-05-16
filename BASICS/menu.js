// Select by id

const cart = document.getElementById("cart");
console.log(cart)

// select by class
const classes = document.getElementsByClassName("menu-item");
console.log(classes);

// change the first name in the menu

//classes[0].textContent = "Black Tea";

// style all drinks

const drinks = document.querySelectorAll(".drinks .menu-items");
drinks.forEach(d => d.style.color = "blue");

// grab/get the toggle button
const toggleBtn = document.querySelector("#toggle");
//console.log(toggleBtn);


// Dark and Light mode

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")){
        toggleBtn.textContent = "Dark Mode";
    } else {
        toggleBtn.textContent = "Light Mode";
    }
});

// Fetch users from JSONPlaceholder
// Fetch -> API;
// Convert to json()
// Manipulate the data
// Catch errors if any

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())   
  .then(users => {
    console.log("Fetched Users:", users);
  })
  .catch(error => console.error("Error fetching users:", error));


// adding more items by function
function addDrink(name, price){
    // Find the drinks menu container
    const menuContainer = document.querySelector("#drinks .menu-grid");

    // create the div for the drink
    const drinkDiv = document.createElement("div");
    drinkDiv.classList.add("menu-item");

    // add content
    drinkDiv.innerHTML = `
        <h3>${name}</h3>
        <p>Rs. ${price}</p>
    `;

    // append to the menu
    menuContainer.appendChild(drinkDiv);
}

// Test
addDrink("Latte", 4.5);
addDrink("Cappuccino", 3.75);
addDrink("Espresso", 2.5);


const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const menuItems = document.querySelectorAll(".menu-item");

// Function to search menu
function searchMenu(query) {
    let found = false;

    menuItems.forEach(item => {
        const name = item.querySelector("h3").textContent.toLowerCase();

        if (name.includes(query.toLowerCase())) {
            item.style.display = "block";  // show matching items
            found = true;
        } else {
            item.style.display = "none";   // hide non-matching items
        }
    });

    // If nothing found, show message
    if (!found) {
        alert("No drinks found in the menu!");
    }
}

// Button click event
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        searchMenu(query);
    }
});

// Enter key event
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
            searchMenu(query);
        }
    }
});

// Promises
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok){
            throw new Error ("Network response was not ok");
        }
        return response.json();
    })
    .then(users => {
        users.forEach (users =>{
            console.log(users.username);
        });
    })
    .catch(error => {
    console.error("Error fetching users:", error);
    });