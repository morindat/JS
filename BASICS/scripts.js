// app.js

// 1. Select elements
let addButtons = document.querySelectorAll(".add-btn");
let cart = document.getElementById("cart");
let darkModeBtn = document.getElementById("darkModeBtn");

// 2. Add items to cart
addButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let itemName = e.target.parentElement.querySelector("h3").textContent;
    let price = e.target.parentElement.querySelector("p").textContent;

    let li = document.createElement("li");
    li.textContent = `${itemName} - ${price}`;
    cart.appendChild(li);
  });
});

// 3. Toggle dark mode
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
