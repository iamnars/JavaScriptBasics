//Day 1
console.log("Hello, Javascript!");

//Declare a few variables
let name = "Alice"; //String
const age = 30; //Number
let isStudent = true; //Boolean

//Log them to the console
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is student: ", isStudent);

let favoriteColor = "blue";
let favoriteNumber = 7;

console.log("Favorite Color: ", favoriteColor);
console.log("Favorite Number: ", favoriteNumber);

//Day 2
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); //15
console.log(num1 - num2); //5
console.log(num1 * num2); //50
console.log(num1 / num2); //2
console.log(num1 % num2); // 0

let greeting = "Hello, " + name + "!";
console.log(greeting); 

let score = 10;
score++;
console.log(score);

let a = 5;
let b = '5';

console.log(a == b); //true ( type coercion)
console.log(a === b); // false (strict comparison)

//Arithmetic Operations
let number1 = 20;
let number2 = 4;

console.log("Addition: ", number1 + number1); //24
console.log("Subtraction: ", number1 - number2); //16
console.log("Multiplication: ", number1 * number2); //80
console.log("Division: ", number1 / number2); //5
console.log("Remainder: ", number1 % number2); //0

//String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name: ", fullName); //John Doe

//Comparison
console.log("Is number1 greater than number 2?", number1 > number2); //true

//Exer
let faveNum = 7;
let faveColor = "green";

console.log("Favorite Number: ", faveNum);
console.log("Favorite Color: ", faveColor);

let newNumber = faveNum + 5; //Adding 5
console.log("New number: ", newNumber);
console.log("Is Favorite Number greater than 10?", faveNum > 10);

//Day3
//Conditional Statement
score = 85;

if(score >=90) {
    console.log("Grade: A");
} else if (score>=80){
    console.log("Grade: B");
} else if (score>=70){
    console.log("Grade: C");
} else{
    console.log("Grade: F");
}

//For loop
console.log("For loop: ");
for(let i = 1; i <=5;i++){
    console.log("Count:",i);
}

//While loop
console.log("While loop:");
let num = 1;
while (num <=5){
    console.log("Num: ", num);
    num++;
}

//Do...While loop
console.log("Do...While Loop:");
let n = 1;
do{
    console.log("N:", n);
    n++;
} while (n <= 5);


//Exer: Simple Number Guessing Game
const randomNumber = Math.floor(Math.random() * 10) + 1; //Random number between 1 and 10
let guess;
let attempts = 0;

// do{
//     guess = prompt("Guess a number between 1 and 10: ");
//     attempts++;
//     if(guess < randomNumber){
//         console.log("Too low! Try again!");
//     } else if (guess > randomNumber){
//         console.log("Too high! Try again!");
//     }
//     else{
//         console.log(`Correct! It took you ${attempts} attempts.`);
//     }

// } while(guess != randomNumber);  

//countdown
for(let x=5;x>0;x--){
    console.log(x);
}

console.log("Blast off!")

//FUNCTIONS AND SCOPE
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!

function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result); // Output: 8

const multiply = function (x, y) {
    return x * y;
};



console.log(multiply(4, 5)); // Output: 20

// A shorter syntax for writing functions. Arrow functions are great 
// for simple functions and don’t have their own this binding.

const subtract = (x, y) => x - y;

console.log(subtract(10, 3)); // Output: 7

let globalVar = "I am global";

function showScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}

showScope();
console.log(globalVar); // Accessible
console.log(localVar); // Error: localVar is not defined


if (true) {
    let blockScoped = "Inside block";
    console.log(blockScoped); // Accessible
}

console.log(blockScoped); // Error: blockScoped is not defined

// Function to calculate area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(5, 3);
console.log("Area:", area); // Output: 15

// Arrow function to greet
const greetUser = (userName) => {
    return `Hello, ${userName}!`;
};

console.log(greetUser("Alice")); // Output: Hello, Alice!

// Scope example
let outsideVar = "I'm outside!";

function showVariables() {
    let insideVar = "I'm inside!";
    console.log(outsideVar); // Accessible
    console.log(insideVar);  // Accessible
}

showVariables();
console.log(outsideVar); // Accessible
console.log(insideVar); // Error: insideVar is not defined

function toFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

console.log(toFahrenheit(30)); // Output: 86

function calculateTotal(prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}

console.log(calculateTotal([10, 20, 5])); // Output: 35