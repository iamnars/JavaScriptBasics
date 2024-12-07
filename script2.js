// Change heading text
const heading = document.getElementById("main-heading");
heading.textContent = "Welcome to Day 5!";

// Button click event
const button = document.querySelector("#my-button");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
    output.textContent = "You clicked the button!";
    output.style.color = "green";
});

// Hover event
const box = document.querySelector(".box");

box.addEventListener("mouseover", () => {
    box.classList.add("highlight");
});

box.addEventListener("mouseout", () => {
    box.classList.remove("highlight");
});

const changeColorButton = document.createElement("button");
changeColorButton.textContent = "Change Background Color";
document.body.appendChild(changeColorButton);

changeColorButton.addEventListener("click", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

let count = 0;

const counterDisplay = document.createElement("h2");
counterDisplay.textContent = `Count: ${count}`;
document.body.appendChild(counterDisplay);

const incrementButton = document.createElement("button");
incrementButton.textContent = "Increment";
document.body.appendChild(incrementButton);

const decrementButton = document.createElement("button");
decrementButton.textContent = "Decrement";
document.body.appendChild(decrementButton);

incrementButton.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `Count: ${count}`;
});

decrementButton.addEventListener("click", () => {
    count--;
    counterDisplay.textContent = `Count: ${count}`;
});