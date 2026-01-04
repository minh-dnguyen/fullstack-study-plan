# Day 3: JavaScript Fundamentals Part 1 - Complete Study Guide

## Overview

**Duration**: 3-4 hours  
**Goal**: Learn JavaScript fundamentals - variables, data types, operators, arrays, objects, functions, and control flow  
**Prerequisites**: Completed Day 1 (HTML) and Day 2 (CSS)  
**Outcome**: Write JavaScript code to manipulate data, control program flow, and create functions

---

## What You'll Need

### Tools Required

1. **Text Editor**: VS Code (recommended) with JavaScript support
2. **Web Browser**: Chrome, Firefox, Edge, or Safari (latest version)
3. **Browser Console**:
   - Press F12 or Right-click → Inspect
   - Go to Console tab
   - This is where you'll run JavaScript code
4. **HTML File**: Create `index.html` for testing JavaScript

### File Organization

- Create folder: `day3-javascript-fundamentals`
- Create files: `index.html`, `script.js`
- Create folder: `exercises/` for practice files

### Resources for Learning

- **MDN JavaScript Reference**: [developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **JavaScript.info**: [javascript.info](https://javascript.info/)
- **CodePen**: [codepen.io](https://codepen.io) (for quick testing)
- **JSFiddle**: [jsfiddle.net](https://jsfiddle.net/) (for testing)

---

## Step-by-Step Learning Plan

### Hour 1: JavaScript Basics, Variables, and Operators (60 minutes)

#### Step 1: JavaScript Basics (15 minutes)

**What is JavaScript?**
JavaScript is a programming language that adds interactivity to web pages. It runs in the browser and can manipulate HTML, CSS, and handle user interactions.

**Adding JavaScript to HTML:**

1. **Inline JavaScript** (in HTML):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Test</title>
  </head>
  <body>
    <h1>Hello World</h1>

    <script>
      console.log("Hello from inline JavaScript!");
    </script>
  </body>
</html>
```

2. **External JavaScript** (recommended):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Test</title>
  </head>
  <body>
    <h1>Hello World</h1>

    <script src="script.js"></script>
  </body>
</html>
```

Create `script.js`:

```javascript
console.log("Hello from external JavaScript!");
```

**Console.log() - Your Best Friend:**

```javascript
// Output to browser console
console.log("Hello World");
console.log(42);
console.log(true);

// Multiple values
console.log("Name:", "John", "Age:", 30);

// Objects and arrays
console.log({ name: "John", age: 30 });
console.log([1, 2, 3]);
```

**Comments:**

```javascript
// Single-line comment

/* Multi-line
   comment */

// Comments explain code, don't execute
```

**Statements and Semicolons:**

```javascript
// JavaScript statements end with semicolons (optional but recommended)
let name = "John";
console.log(name);

// Multiple statements on one line (not recommended)
let x = 5;
let y = 10;
```

**Case Sensitivity:**

```javascript
// JavaScript is case-sensitive
let name = "John";
let Name = "Jane"; // Different variable
let NAME = "Bob"; // Different variable

// Function names are case-sensitive too
function sayHello() {}
function SayHello() {} // Different function
```

**Practice Task 1**:

1. Create `index.html` and `script.js`
2. Link the JavaScript file
3. Use `console.log()` to output "Hello, JavaScript!"
4. Open the page in browser and check the console (F12)

---

#### Step 2: Variables and Data Types (25 minutes)

**Variable Declaration:**

```javascript
// var (old way, avoid in modern JavaScript)
var oldVariable = "old";

// let (block-scoped, can be reassigned)
let name = "John";
name = "Jane"; // Can change

// const (block-scoped, cannot be reassigned)
const age = 30;
// age = 31;  // Error! Cannot reassign const

// When to use:
// - const: Default choice (use for values that won't change)
// - let: Use when value needs to change
// - var: Avoid (use let/const instead)
```

**Naming Conventions:**

```javascript
// camelCase (recommended)
let firstName = "John";
let myAge = 30;
let isActive = true;

// Allowed characters: letters, numbers, $, _
let user_name = "John"; // Valid but use camelCase
let $price = 100; // Valid
let _private = "secret"; // Valid (often used for private)

// Cannot start with number
// let 2name = "John";  // Error!

// Cannot use reserved words
// let let = "value";  // Error!
// let function = "value";  // Error!

// Descriptive names
let n = "John"; // Bad
let userName = "John"; // Good
let isUserLoggedIn = true; // Good
```

**Primitive Data Types:**

1. **Number:**

```javascript
let integer = 42;
let float = 3.14;
let negative = -10;
let scientific = 1e6; // 1000000

// Special numbers
let notANumber = NaN; // Not a Number
let infinity = Infinity; // Infinity
let negativeInfinity = -Infinity;

// Check if number
typeof 42; // "number"
typeof NaN; // "number" (weird but true)
```

2. **String:**

```javascript
let singleQuotes = "Hello";
let doubleQuotes = "World";
let templateLiteral = `Template`;

// All are strings, use consistently
let message = "Hello 'World'"; // Can use quotes inside
let message2 = 'He said "Hello"';

// String length
let text = "Hello";
text.length; // 5

// Template literals (backticks)
let name = "John";
let greeting = `Hello, ${name}!`; // "Hello, John!"
let multiLine = `This is
a multi-line
string`;
```

3. **Boolean:**

```javascript
let isTrue = true;
let isFalse = false;

// Used in conditions
if (isTrue) {
  console.log("It's true!");
}
```

4. **Undefined:**

```javascript
let x;
console.log(x); // undefined (variable declared but not assigned)

let y = undefined; // Explicitly set to undefined
```

5. **Null:**

```javascript
let empty = null; // Intentionally empty (no value)

// Difference: undefined = not set, null = intentionally empty
```

6. **Symbol** (brief introduction):

```javascript
let id = Symbol("id"); // Unique identifier (advanced topic)
```

**Typeof Operator:**

```javascript
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (this is a JavaScript quirk!)
typeof {}; // "object"
typeof []; // "object"
typeof function () {}; // "function"
```

**Type Conversion:**

```javascript
// String to Number
Number("42"); // 42
Number("3.14"); // 3.14
Number("abc"); // NaN

parseInt("42"); // 42
parseInt("42px"); // 42 (stops at first non-number)
parseInt("3.14"); // 3 (integer only)

parseFloat("3.14"); // 3.14
parseFloat("3.14px"); // 3.14

// Number to String
String(42); // "42"
(42).toString(); // "42"

// Boolean conversion
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("hello"); // true
Boolean(null); // false
Boolean(undefined); // false

// Truthy and Falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy
```

**Practice Task 2**:

1. Declare variables using `let` and `const`
2. Create variables of different types (number, string, boolean)
3. Use `typeof` to check types
4. Convert between types using `Number()`, `String()`, `Boolean()`
5. Experiment with template literals

---

#### Step 3: Operators (20 minutes)

**Arithmetic Operators:**

```javascript
let a = 10;
let b = 3;

a + b; // 13 (addition)
a - b; // 7 (subtraction)
a * b; // 30 (multiplication)
a / b; // 3.333... (division)
a % b; // 1 (modulus/remainder: 10 divided by 3 = 3 remainder 1)
a ** b; // 1000 (exponentiation: 10 to the power of 3)

// String concatenation with +
"Hello" + " " + "World"; // "Hello World"
"Number: " + 42; // "Number: 42" (number converted to string)
```

**Assignment Operators:**

```javascript
let x = 10; // Assignment

x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (6)
x %= 5; // x = x % 5 (1)
x **= 2; // x = x ** 2 (1)
```

**Comparison Operators:**

```javascript
let a = 5;
let b = 10;

// Equality (avoid ==, use ===)
a == b; // false (loose equality, type coercion)
a === b; // false (strict equality, no type coercion)
5 == "5"; // true (coerces types)
5 === "5"; // false (strict)

// Inequality
a != b; // true (loose)
a !== b; // true (strict)

// Comparison
a > b; // false
a < b; // true
a >= b; // false
a <= b; // true

// Always use === and !== (strict equality)
```

**Logical Operators:**

```javascript
let isAdult = true;
let hasLicense = false;

// AND (&&) - both must be true
isAdult && hasLicense; // false

// OR (||) - at least one must be true
isAdult || hasLicense; // true

// NOT (!) - reverses boolean
!isAdult; // false
!hasLicense; // true

// Real-world example
if (isAdult && hasLicense) {
  console.log("Can drive");
}

// Short-circuit evaluation
true && console.log("This runs"); // Runs
false && console.log("This doesn't"); // Doesn't run
true || console.log("This doesn't"); // Doesn't run (short-circuits)
false || console.log("This runs"); // Runs
```

**Ternary Operator:**

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "adult" : "minor";
// If age >= 18, status = "adult", else "minor"

// Equivalent to:
let status2;
if (age >= 18) {
  status2 = "adult";
} else {
  status2 = "minor";
}

// Nested ternary (use sparingly)
let message = age >= 18 ? "adult" : age >= 13 ? "teen" : "child";
```

**Increment and Decrement:**

```javascript
let x = 5;

x++; // x = x + 1 (6) - post-increment
++x; // x = x + 1 (7) - pre-increment

x--; // x = x - 1 (6) - post-decrement
--x; // x = x - 1 (5) - pre-decrement

// Difference:
let a = 5;
let b = a++; // b = 5, a = 6 (returns old value)

let c = 5;
let d = ++c; // d = 6, c = 6 (returns new value)
```

**Practice Task 3**:

1. Perform arithmetic operations
2. Use comparison operators with different values
3. Use logical operators to combine conditions
4. Write a ternary operator to check if a number is even or odd
5. Experiment with increment/decrement operators

---

### Hour 2: Strings, Arrays, and Objects (60 minutes)

#### Step 4: Strings (15 minutes)

**String Methods:**

```javascript
let text = "  Hello World  ";

// Length
text.length; // 15

// Case conversion
text.toUpperCase(); // "  HELLO WORLD  "
text.toLowerCase(); // "  hello world  "

// Trimming whitespace
text.trim(); // "Hello World"

// Character access
text.charAt(0); // " " (space at index 0)
text[0]; // " " (modern way, bracket notation)

// Finding substrings
let sentence = "Hello World, Hello JavaScript";
sentence.indexOf("Hello"); // 0 (first occurrence)
sentence.lastIndexOf("Hello"); // 13 (last occurrence)
sentence.indexOf("Hi"); // -1 (not found)

// Extracting substrings
let str = "Hello World";
str.substring(0, 5); // "Hello" (start index, end index)
str.substring(6); // "World" (from index 6 to end)
str.slice(0, 5); // "Hello" (similar to substring)
str.slice(-5); // "World" (negative index from end)

// Replacing
str.replace("World", "JavaScript"); // "Hello JavaScript"
str.replace(/Hello/g, "Hi"); // "Hi World" (regex for all occurrences)

// Checking if string contains
str.includes("World"); // true
str.startsWith("Hello"); // true
str.endsWith("World"); // true

// Splitting into array
"apple,banana,orange".split(","); // ["apple", "banana", "orange"]
"Hello World".split(" "); // ["Hello", "World"]
"Hello".split(""); // ["H", "e", "l", "l", "o"]
```

**Template Literals:**

```javascript
let name = "John";
let age = 30;

// Old way (string concatenation)
let message = "My name is " + name + " and I'm " + age + " years old";

// Template literals (modern way)
let message2 = `My name is ${name} and I'm ${age} years old`;

// Expressions in template literals
let a = 5;
let b = 10;
let result = `The sum of ${a} and ${b} is ${a + b}`;
// "The sum of 5 and 10 is 15"

// Multi-line strings
let multiLine = `
    This is line 1
    This is line 2
    This is line 3
`;
```

**String Concatenation:**

```javascript
// Using + operator
"Hello" + " " + "World"; // "Hello World"

// Using template literals (preferred)
`Hello ${"World"}`; // "Hello World"
```

**Practice Task 4**:

1. Create a string and use various string methods
2. Extract parts of a string using `substring()` or `slice()`
3. Use template literals to create formatted messages
4. Split a string into an array and join it back

---

#### Step 5: Arrays (25 minutes)

**Creating Arrays:**

```javascript
// Array literal (recommended)
let fruits = ["apple", "banana", "orange"];

// Array constructor
let numbers = new Array(1, 2, 3);

// Empty array
let empty = [];
```

**Accessing Elements:**

```javascript
let fruits = ["apple", "banana", "orange"];

fruits[0]; // "apple" (first element, index starts at 0)
fruits[1]; // "banana"
fruits[2]; // "orange"
fruits[3]; // undefined (doesn't exist)

// Length
fruits.length; // 3

// Last element
fruits[fruits.length - 1]; // "orange"
```

**Array Methods - Modifying:**

```javascript
let fruits = ["apple", "banana"];

// Add to end
fruits.push("orange"); // ["apple", "banana", "orange"]
// Returns new length (3)

// Remove from end
fruits.pop(); // "orange" (returns removed element)
// fruits is now ["apple", "banana"]

// Add to beginning
fruits.unshift("grape"); // ["grape", "apple", "banana"]

// Remove from beginning
fruits.shift(); // "grape" (returns removed element)
// fruits is now ["apple", "banana"]

// Splice (add/remove at any position)
fruits.splice(1, 0, "mango"); // Add at index 1, remove 0 elements
// ["apple", "mango", "banana"]

fruits.splice(1, 1); // Remove 1 element at index 1
// ["apple", "banana"]

fruits.splice(1, 1, "cherry"); // Replace 1 element at index 1
// ["apple", "cherry"]
```

**Array Methods - Searching:**

```javascript
let fruits = ["apple", "banana", "orange", "banana"];

fruits.indexOf("banana"); // 1 (first occurrence)
fruits.lastIndexOf("banana"); // 3 (last occurrence)
fruits.indexOf("grape"); // -1 (not found)

fruits.includes("apple"); // true
fruits.includes("grape"); // false

// Find (returns first matching element)
let numbers = [1, 5, 10, 15, 20];
numbers.find((num) => num > 10); // 15 (first number > 10)

// Find index
numbers.findIndex((num) => num > 10); // 3 (index of first number > 10)
```

**Array Methods - Transformation:**

```javascript
let numbers = [1, 2, 3, 4, 5];

// Map (transform each element)
let doubled = numbers.map((num) => num * 2);
// [2, 4, 6, 8, 10]

// Filter (select elements based on condition)
let evens = numbers.filter((num) => num % 2 === 0);
// [2, 4]

// Reduce (accumulate to single value)
let sum = numbers.reduce((total, num) => total + num, 0);
// 15 (sum of all numbers)
// Syntax: reduce((accumulator, current) => operation, initialValue)
```

**Array Methods - Iteration:**

```javascript
let fruits = ["apple", "banana", "orange"];

// forEach (execute function for each element)
fruits.forEach((fruit) => {
  console.log(fruit);
});
// Prints: apple, banana, orange

// Some (returns true if any element passes test)
let hasLongFruit = fruits.some((fruit) => fruit.length > 5);
// true (banana and orange have length > 5)

// Every (returns true if all elements pass test)
let allShort = fruits.every((fruit) => fruit.length < 10);
// true (all fruits have length < 10)
```

**Multi-dimensional Arrays:**

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrix[0][0]; // 1 (first row, first column)
matrix[1][2]; // 6 (second row, third column)
```

**Spread Operator:**

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Copying array
let copy = [...arr1]; // [1, 2, 3] (new array)

// Merging arrays
let merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Adding elements
let newArr = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
```

**Practice Task 5**:

1. Create arrays and access elements
2. Use push, pop, shift, unshift to modify arrays
3. Use map, filter, and forEach methods
4. Create a multi-dimensional array
5. Use spread operator to copy and merge arrays

---

#### Step 6: Objects (20 minutes)

**Object Literals:**

```javascript
// Creating objects
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Properties: key-value pairs
// Keys are strings (quotes optional if valid identifier)
// Values can be any type
```

**Accessing Properties:**

```javascript
let person = {
  name: "John",
  age: 30,
};

// Dot notation (recommended when key is valid identifier)
person.name; // "John"
person.age; // 30

// Bracket notation (use when key has spaces, special chars, or is a variable)
person["name"]; // "John"
let key = "age";
person[key]; // 30 (dynamic key access)

// Accessing non-existent property
person.email; // undefined
```

**Adding and Modifying Properties:**

```javascript
let person = {
  name: "John",
  age: 30,
};

// Adding properties
person.email = "john@example.com";
person["city"] = "New York";

// Modifying properties
person.age = 31;

// Deleting properties
delete person.city;

console.log(person);
// { name: "John", age: 31, email: "john@example.com" }
```

**Nested Objects:**

```javascript
let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
};

person.address.city; // "New York"
person.address["zipCode"]; // "10001"
```

**Object Methods:**

```javascript
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  // Shorthand (ES6)
  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

person.greet(); // "Hello, my name is John"
person.sayHello(); // "Hi, I'm John"

// this refers to the object the method belongs to
```

**Object Methods (Built-in):**

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Object.keys() - get all keys
Object.keys(person); // ["name", "age", "city"]

// Object.values() - get all values
Object.values(person); // ["John", 30, "New York"]

// Object.entries() - get key-value pairs
Object.entries(person);
// [["name", "John"], ["age", 30], ["city", "New York"]]
```

**Destructuring Objects:**

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Extract properties
let { name, age } = person;
// name = "John", age = 30

// Rename variables
let { name: personName, age: personAge } = person;
// personName = "John", personAge = 30

// Default values
let { name, age, email = "no email" } = person;
// email = "no email" (default if property doesn't exist)

// Rest operator
let { name, ...rest } = person;
// name = "John"
// rest = { age: 30, city: "New York" }
```

**Practice Task 6**:

1. Create objects with different properties
2. Access and modify object properties
3. Create nested objects
4. Add methods to objects
5. Use Object.keys(), Object.values(), Object.entries()
6. Practice destructuring objects

---

### Hour 3: Control Structures, Functions, and Scope (60 minutes)

#### Step 7: Control Structures (25 minutes)

**Conditional Statements - if/else:**

```javascript
let age = 20;

// if statement
if (age >= 18) {
  console.log("You are an adult");
}

// if-else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// if-else if-else
if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// Multiple conditions
let hasLicense = true;
if (age >= 18 && hasLicense) {
  console.log("Can drive");
}

// Nested if
if (age >= 18) {
  if (hasLicense) {
    console.log("Can drive");
  } else {
    console.log("Need license");
  }
}
```

**Switch Statement:**

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break; // Important! Without break, falls through to next case
  case "Friday":
    console.log("Weekend is coming!");
    break;
  case "Saturday":
  case "Sunday": // Multiple cases can share code
    console.log("Weekend!");
    break;
  default: // If no case matches
    console.log("Regular day");
    break;
}

// Switch with expressions
let score = 85;
switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  default:
    console.log("F");
}
```

**For Loop:**

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
// Initialization; Condition; Increment

// Loop through array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Reverse loop
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
```

**While Loop:**

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Use when number of iterations is unknown
let password = "";
while (password.length < 8) {
  password += "a"; // Keep adding until length >= 8
}
```

**Do-While Loop:**

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// Difference: do-while always runs at least once
let x = 10;
do {
  console.log(x); // Runs once, even though condition is false
} while (x < 5);
```

**For...in Loop (Objects):**

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key, person[key]);
}
// name John
// age 30
// city New York
```

**For...of Loop (Arrays, Strings):**

```javascript
// Arrays
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Strings
let text = "Hello";
for (let char of text) {
  console.log(char); // H, e, l, l, o
}
```

**Loop Control:**

```javascript
// break - exit loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i is 5
  }
  console.log(i); // 0, 1, 2, 3, 4
}

// continue - skip to next iteration
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); // 1, 3, 5, 7, 9
}
```

**Nested Loops:**

```javascript
// Multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

**Practice Task 7**:

1. Write if-else statements for different conditions
2. Create a switch statement for different cases
3. Use for loop to iterate through arrays
4. Use while loop for conditional iteration
5. Use break and continue in loops
6. Create nested loops

---

#### Step 8: Functions - Basics (20 minutes)

**Function Declarations:**

```javascript
// Function declaration (hoisted - can call before definition)
function greet() {
  console.log("Hello!");
}

greet(); // "Hello!"

// Function with parameters
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("John"); // "Hello, John!"

// Function with multiple parameters
function add(a, b) {
  return a + b;
}

let sum = add(5, 3); // 8
```

**Function Expressions:**

```javascript
// Function expression (not hoisted)
const greet = function () {
  console.log("Hello!");
};

greet(); // "Hello!"

// With parameters
const multiply = function (a, b) {
  return a * b;
};

multiply(4, 5); // 20
```

**Return Statement:**

```javascript
function add(a, b) {
  return a + b; // Returns value
  console.log("This never runs"); // Unreachable code
}

let result = add(2, 3); // result = 5

// Function without return
function sayHello(name) {
  console.log(`Hello, ${name}!`);
  // Returns undefined implicitly
}

let x = sayHello("John"); // x = undefined
```

**Default Parameters:**

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("John"); // "Hello, John!"
greet(); // "Hello, Guest!" (uses default)

function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5 (b defaults to 1)
multiply(5, 3); // 15
```

**Functions as First-Class Citizens:**

```javascript
// Functions can be assigned to variables
const myFunction = function () {
  console.log("Hello");
};

// Functions can be passed as arguments
function executeFunction(fn) {
  fn();
}

executeFunction(myFunction); // "Hello"

// Functions can be returned from functions
function createGreeter(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

let greetJohn = createGreeter("John");
greetJohn(); // "Hello, John!"
```

**Practice Task 8**:

1. Create function declarations and expressions
2. Write functions with parameters and return values
3. Use default parameters
4. Pass functions as arguments
5. Return functions from functions

---

#### Step 9: Scope (15 minutes)

**Global Scope:**

```javascript
// Variables declared outside functions are global
let globalVar = "I'm global";

function myFunction() {
  console.log(globalVar); // Can access global variable
}

myFunction(); // "I'm global"
```

**Local/Function Scope:**

```javascript
function myFunction() {
  let localVar = "I'm local";
  console.log(localVar); // Can access
}

// console.log(localVar);  // Error! localVar is not defined

// Each function has its own scope
function function1() {
  let x = 1;
  console.log(x); // 1
}

function function2() {
  let x = 2;
  console.log(x); // 2 (different x)
}
```

**Block Scope (let and const):**

```javascript
if (true) {
  let blockVar = "I'm in a block";
  const blockConst = "Me too";
}

// console.log(blockVar);  // Error! Not accessible outside block

// var is function-scoped, not block-scoped
if (true) {
  var functionScoped = "I'm accessible";
}

console.log(functionScoped); // Works! (var is function-scoped)
```

**Scope Chain:**

```javascript
let global = "global";

function outer() {
  let outerVar = "outer";

  function inner() {
    let innerVar = "inner";
    console.log(innerVar); // "inner" (from inner scope)
    console.log(outerVar); // "outer" (from outer scope)
    console.log(global); // "global" (from global scope)
  }

  inner();
}

outer();
```

**Hoisting:**

```javascript
// Function declarations are hoisted
sayHello(); // Works! Function is hoisted

function sayHello() {
  console.log("Hello");
}

// var declarations are hoisted (but not initialization)
console.log(x); // undefined (not error, but undefined)
var x = 5;

// let and const are NOT hoisted (Temporal Dead Zone)
// console.log(y);  // Error! Cannot access before initialization
let y = 10;
```

**Practice Task 9**:

1. Create variables in different scopes
2. Test accessing variables from different scopes
3. Understand the difference between var, let, and const scope
4. Test hoisting behavior

---

### Complete Practice Exercises (30-60 minutes)

**Exercise 1: Calculator Function**

Create a calculator function that performs basic operations:

```javascript
function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, "+", 5)); // 15
console.log(calculator(10, "-", 5)); // 5
console.log(calculator(10, "*", 5)); // 50
console.log(calculator(10, "/", 5)); // 2
```

**Exercise 2: Array Manipulation Functions**

Create functions to work with arrays:

```javascript
// Find maximum number in array
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Count occurrences of value in array
function countOccurrences(arr, value) {
  let count = 0;
  for (let item of arr) {
    if (item === value) {
      count++;
    }
  }
  return count;
}

// Reverse array
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

let numbers = [1, 5, 3, 9, 2, 9];
console.log(findMax(numbers)); // 9
console.log(countOccurrences(numbers, 9)); // 2
console.log(reverseArray(numbers)); // [9, 2, 9, 3, 5, 1]
```

**Exercise 3: Object Manipulation**

Create functions to work with objects:

```javascript
// Get all keys from object
function getKeys(obj) {
  return Object.keys(obj);
}

// Check if object has property
function hasProperty(obj, prop) {
  return prop in obj;
}

// Merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Count properties in object
function countProperties(obj) {
  return Object.keys(obj).length;
}

let person1 = { name: "John", age: 30 };
let person2 = { city: "NYC", job: "Developer" };

console.log(getKeys(person1)); // ["name", "age"]
console.log(hasProperty(person1, "name")); // true
console.log(mergeObjects(person1, person2));
// { name: "John", age: 30, city: "NYC", job: "Developer" }
console.log(countProperties(person1)); // 2
```

**Exercise 4: String Manipulation Functions**

Create functions to manipulate strings:

```javascript
// Count words in string
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Check if palindrome
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/\s/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(countWords("Hello World JavaScript")); // 3
console.log(capitalize("hello")); // "Hello"
console.log(reverseString("hello")); // "olleh"
console.log(isPalindrome("race car")); // true
```

**Exercise 5: Complete Program - Student Grade Calculator**

Create a program that manages student grades:

```javascript
// Student object
let student = {
  name: "John Doe",
  grades: [85, 90, 78, 92, 88],

  // Calculate average
  getAverage: function () {
    let sum = 0;
    for (let grade of this.grades) {
      sum += grade;
    }
    return sum / this.grades.length;
  },

  // Get letter grade
  getLetterGrade: function () {
    let avg = this.getAverage();
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    return "F";
  },

  // Add grade
  addGrade: function (grade) {
    this.grades.push(grade);
  },

  // Get highest grade
  getHighest: function () {
    let max = this.grades[0];
    for (let grade of this.grades) {
      if (grade > max) {
        max = grade;
      }
    }
    return max;
  },

  // Get lowest grade
  getLowest: function () {
    let min = this.grades[0];
    for (let grade of this.grades) {
      if (grade < min) {
        min = grade;
      }
    }
    return min;
  },
};

console.log(student.name); // "John Doe"
console.log(student.getAverage()); // 86.6
console.log(student.getLetterGrade()); // "B"
console.log(student.getHighest()); // 92
console.log(student.getLowest()); // 78

student.addGrade(95);
console.log(student.getAverage()); // 88
```

---

## Final Checklist

Before moving to Day 4, make sure you can:

- [ ] Add JavaScript to HTML (inline and external)
- [ ] Use console.log() for debugging
- [ ] Declare variables with let and const
- [ ] Understand different data types (number, string, boolean, etc.)
- [ ] Use operators (arithmetic, comparison, logical, ternary)
- [ ] Work with strings and string methods
- [ ] Create and manipulate arrays
- [ ] Use array methods (push, pop, map, filter, forEach)
- [ ] Create and work with objects
- [ ] Use object methods and destructuring
- [ ] Write conditional statements (if/else, switch)
- [ ] Use different types of loops (for, while, for...of, for...in)
- [ ] Create functions (declarations and expressions)
- [ ] Understand scope (global, local, block)
- [ ] Write functions to manipulate arrays and objects
- [ ] Build a calculator function
- [ ] Create functions using loops and conditionals

---

## Self-Assessment Questions

Test your understanding:

1. What's the difference between `let`, `const`, and `var`?
2. What's the difference between `==` and `===`?
3. How do you access the last element of an array?
4. What's the difference between `map()` and `filter()`?
5. How do you access object properties (two ways)?
6. What's the difference between `for...in` and `for...of`?
7. What does `return` do in a function?
8. What's the difference between function declarations and expressions?
9. What is scope in JavaScript?
10. What is hoisting?

---

## Common Mistakes to Avoid

1. **Using var instead of let/const** - Use const by default, let when needed
2. **Using == instead of ===** - Always use strict equality (===)
3. **Forgetting break in switch** - Results in fall-through behavior
4. **Modifying arrays while iterating** - Can cause unexpected behavior
5. **Not using return in functions** - Function returns undefined
6. **Confusing null and undefined** - null is intentional, undefined is unset
7. **Not understanding scope** - Variables may not be accessible where expected
8. **Forgetting array indices start at 0** - First element is [0], not [1]
9. **Not checking array length** - Can cause errors with empty arrays
10. **Using dot notation with dynamic keys** - Use bracket notation for variables

---

## JavaScript Best Practices

**1. Use const by default:**

```javascript
// Good
const name = "John";
let age = 30; // Only use let if value will change

// Bad
var name = "John"; // Avoid var
```

**2. Use strict equality:**

```javascript
// Good
if (x === 5) {
}

// Bad
if (x == 5) {
} // Avoid loose equality
```

**3. Use meaningful variable names:**

```javascript
// Good
let userName = "John";
let isLoggedIn = true;

// Bad
let n = "John";
let flag = true;
```

**4. Use template literals:**

```javascript
// Good
let message = `Hello, ${name}!`;

// Bad
let message = "Hello, " + name + "!";
```

**5. Use array methods:**

```javascript
// Good
let doubled = numbers.map((n) => n * 2);

// Bad (unless you need index or other reasons)
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
```

**6. Keep functions small and focused:**

```javascript
// Good - does one thing
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Bad - does too much
function processOrder(order) {
  // 100 lines of code doing everything
}
```

---

## Additional Resources

- **MDN JavaScript Guide**: [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- **JavaScript.info**: [javascript.info](https://javascript.info/)
- **Eloquent JavaScript**: [eloquentjavascript.net](https://eloquentjavascript.net/)
- **CodePen**: [codepen.io](https://codepen.io) (practice JavaScript)
- **JavaScript 30**: [javascript30.com](https://javascript30.com/) (30-day challenge)

---

## Next Steps

After completing Day 3:

1. Review your code and refactor for better practices
2. Practice more with arrays and objects
3. Write more functions to solve problems
4. Get ready for Day 4: JavaScript Fundamentals Part 2
5. You'll learn ES6+ features, advanced functions, and async JavaScript!

**Congratulations on completing Day 3!** 🚀
