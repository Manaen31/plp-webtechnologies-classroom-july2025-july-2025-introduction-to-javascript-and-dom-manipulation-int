// ================= Part 1: Basics =================
// Variable declarations and conditionals
let userName = prompt("Enter your name:", "Guest");
let hour = new Date().getHours();
let greetingMessage = "";

if (hour < 12) {
  greetingMessage = `Good morning, ${userName}!`;
} else if (hour < 18) {
  greetingMessage = `Good afternoon, ${userName}!`;
} else {
  greetingMessage = `Good evening, ${userName}!`;
}

document.getElementById("greeting").textContent = greetingMessage;

// ================= Part 2: Functions =================
// Function to calculate total with tax
function calculateTotal(price, quantity, taxRate = 0.07) {
  return (price * quantity) * (1 + taxRate);
}

// Function to format a string
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

document.getElementById("calcBtn").addEventListener("click", () => {
  let total = calculateTotal(20, 3); // Example: 3 items at $20 each
  document.getElementById("calcResult").textContent =
    "Total with tax: " + formatCurrency(total);
});

// ================= Part 3: Loops =================
// For loop example: populate a list
let numbers = [1, 2, 3, 4, 5];
let loopList = document.getElementById("loopList");
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = `Number: ${numbers[i]}`;
  loopList.appendChild(li);
}

// While loop example: countdown
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// ================= Part 4: DOM Manipulation =================
// Toggle class on text
const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");
toggleBtn.addEventListener("click", () => {
  toggleText.classList.toggle("highlight");
});

// Add items dynamically to a list
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");
let itemCount = 0;

addItemBtn.addEventListener("click", () => {
  itemCount++;
  let li = document.createElement("li");
  li.textContent = `Dynamic Item ${itemCount}`;
  dynamicList.appendChild(li);
});

// Event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  console.log("Page fully loaded and DOM ready!");
});
