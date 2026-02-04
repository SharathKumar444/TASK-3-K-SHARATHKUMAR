//TASK – 3 (Based on Today’s Session)

//Part 1 – Logical & Ternary Operator

// Q1: Check whether a number is between 10 and 50 using logical AND.
// Input: let num = 25
// Output: "Valid Number" or "Invalid Number"

//Code:
let num = 25;
if (num >= 10 && num <= 50) {
  console.log("Valid Number");
} else {
  console.log("Invalid Number");
}

//Explanation:Logical AND (&&) checks both conditions. Since 25 lies between 10 and 50, output is Valid Number.


// Q2: Check if a user is eligible to log in.
// Condition:
// username must be "admin"
// password must be "1234"
// Use logical AND.

//Code:
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
  console.log("Login Allowed");
} else {
  console.log("Access Denied");
}

//Explanation:Both username and password must match. If one fails, login is denied.


// Q3: Using ternary operator:
// Check if a number is even or odd.

// Code:
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);

//Explanation:If remainder is 0, number is even; otherwise odd.


// Q4: What is the output?
// console.log((10 === "10") || (5 > 2) && !(3 < 1));
// Explain step by step.

//Code:
console.log((10 === "10") || (5 > 2) && !(3 < 1));

// Step-by-step:

// 10 === "10" → false (strict comparison)

// 5 > 2 → true

// 3 < 1 → false

// !(false) → true

// (true && true) → true

// (false || true) → true

//Final Output: true

// Part 2 – Type Conversion

// Q5: Find the output and explain:
// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);


// Explanation:

// + → String concatenation

// - * / → JS converts string to number automatically


// Q6: Convert the following using explicit conversion:
// let value = "100";
// - Convert to Number
// - Convert to Boolean

// Code:
let value = "100";
console.log(Number(value));   // 100
console.log(Boolean(value));  // true

// Explanation:

// "100" → Number = 100

// Non-empty string → true

// Q7: What will be the output?
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(0));
// console.log(Boolean([]));
// Explain why.

// Explanation:

// Empty string → false

// Space is still a value → true

// 0 → false

// Empty array is an object → true


// Part 3 – Conditional Statements

// Q8: Write a program:
// If marks >= 90 → Grade A
// If marks >= 75 → Grade B
// If marks >= 50 → Grade C
// Else → Fail
// Use if else if.

// Code:
let marks = 78;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Q9: Traffic Signal Program using switch case:
// "red" → Stop
// "yellow" → Ready
// "green" → Go
// Default → Invalid Signal

// Code:
let signal = "green";
switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

// 
// Code:
let age = 20;
let height = 165;
let weight = 55;
if (age >= 18) {
  if (height >= 160) {
    if (weight >= 50) {
      console.log("Selected");
    } else {
      console.log("Weight condition failed");
    }
  } else {
    console.log("Height condition failed");
  }
} else {
  console.log("Age condition failed");
}

//Part 4 – Loops

// Q11: Print numbers from 1 to 20 using for loop.

// Code:
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//Q12: Print only odd numbers from 1 to 20.

// Code:
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Q13: Using while loop:
// Print numbers from 10 to 1.

// Code:
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

//Q14: Using do-while loop:
//Print numbers from 1 to 5.

// Code:
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// Q15: Using for-of loop:
// Print each character from:
// let word = "STACKLY"

//Code:
let word = "STACKLY";
for (let char of word) {
  console.log(char);
}

// Q16: Using for-in loop:
// Print both key and value from:
// let student = {
// name: "Arun",
// course: "MERN",
// duration: "6 months"
// }

//Code:
let student = {
  name: "Arun",
  course: "MERN",
  duration: "6 months"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}

//Real-Time Questions

// RT-1: Login System
// If username = "admin" AND password = "1234" → "Login Success"
// Else → "Invalid Credentials"
// Use logical operator + ternary.

//Code:
let user = "admin";
let pass = "1234";
let message = (user === "admin" && pass === "1234")
  ? "Login Success"
  : "Invalid Credentials";

console.log(message);

// RT-2: Salary Bonus System
// If employee salary > 50000 AND experience > 3 years
// → Eligible for bonus
// Else → Not eligible

// Code:
let salary = 60000;
let experience = 4;

if (salary > 50000 && experience > 3) {
  console.log("Eligible for bonus");
} else {
  console.log("Not eligible");
}

// RT-3: Shopping Discount
// If cart amount:
// >= 5000 → 20% discount
// >= 2000 → 10% discount
// < 2000 → No discount
// Use if-else if.

//Code:
let amount = 3500;

if (amount >= 5000) {
  console.log("20% Discount");
} else if (amount >= 2000) {
  console.log("10% Discount");
} else {
  console.log("No Discount");
}

// RT-4: Even/Odd Counter
// Count how many even numbers between 1 to 50.

// Code:
let count = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    count++;
  }
}

console.log("Even numbers count:", count);

// RT-5: Dynamic Greeting System
// If hour between:
// 1–6 → Good Morning
// 7–12 → Morning
// 13–16 → Good Afternoon
// 17–19 → Good Evening
// Else → Good Night

// Code:
let hour = 18;

if (hour >= 1 && hour <= 6) {
  console.log("Good Morning");
} else if (hour <= 12) {
  console.log("Morning");
} else if (hour <= 16) {
  console.log("Good Afternoon");
} else if (hour <= 19) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
