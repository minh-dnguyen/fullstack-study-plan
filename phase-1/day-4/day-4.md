# Day 4: JavaScript Fundamentals Part 2 - Complete Study Guide

## Overview

**Duration**: 3-4 hours  
**Goal**: Learn ES6+ features, advanced functions, error handling, and essential JavaScript APIs  
**Prerequisites**: Completed Day 3 (JavaScript Fundamentals Part 1)  
**Outcome**: Write modern JavaScript code with ES6+ features, handle errors, and work with dates, math, and JSON

---

## What You'll Need

### Tools Required

1. **Text Editor**: VS Code (recommended) with JavaScript support
2. **Web Browser**: Chrome, Firefox, Edge, or Safari (latest version)
3. **Browser Console**: F12 → Console tab
4. **HTML Files**: Create files for testing JavaScript modules

### File Organization

- Create folder: `day4-javascript-advanced`
- Create files: `index.html`, `script.js`, `utils.js`, `main.js`
- Create folder: `exercises/` for practice files

### Resources for Learning

- **MDN JavaScript Reference**: [developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **JavaScript.info**: [javascript.info](https://javascript.info/)
- **ES6 Features**: [es6-features.org](http://es6-features.org/)
- **Can I Use**: [caniuse.com](https://caniuse.com/) (browser compatibility)

---

## Step-by-Step Learning Plan

### Hour 1: ES6+ Features - Arrow Functions, Destructuring, Spread/Rest (60 minutes)

#### Step 1: Arrow Functions (20 minutes)

**Arrow Function Syntax:**

```javascript
// Regular function
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function (equivalent)
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Single parameter (parentheses optional)
const greet = (name) => {
  return `Hello, ${name}!`;
};

// No parameters
const sayHello = () => {
  return "Hello!";
};

// Multiple parameters
const add = (a, b) => {
  return a + b;
};
```

**Single Expression vs Block Body:**

```javascript
// Block body (explicit return)
const multiply = (a, b) => {
  return a * b;
};

// Single expression (implicit return)
const multiply = (a, b) => a * b;

// More examples
const square = (x) => x * x;
const isEven = (num) => num % 2 === 0;
const getName = (person) => person.name;

// Block body when you need multiple statements
const processData = (data) => {
  const cleaned = data.trim();
  const upper = cleaned.toUpperCase();
  return upper;
};
```

**Implicit Return:**

```javascript
// Regular function
function double(x) {
  return x * 2;
}

// Arrow function with implicit return
const double = (x) => x * 2;

// With array methods (common use case)
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((x) => x * 2);
// [2, 4, 6, 8]

// Cannot use implicit return with multiple statements
// const process = x => { const y = x * 2; return y; }  // Need explicit return
```

**Arrow Functions and `this` Binding:**

```javascript
// Regular function - this refers to the object calling the function
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
    // this = person object
  },
};

person.greet(); // "Hello, I'm John"

// Arrow function - this refers to the enclosing scope
const person2 = {
  name: "John",
  greet: () => {
    console.log(`Hello, I'm ${this.name}`);
    // this = global/window object (not person2)
  },
};

person2.greet(); // "Hello, I'm undefined" (or error in strict mode)

// Use arrow functions for callbacks (preserves this)
const timer = {
  seconds: 0,
  start: function () {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
      // Arrow function preserves this from timer object
    }, 1000);
  },
};

// Regular function would lose this context
const timer2 = {
  seconds: 0,
  start: function () {
    setInterval(function () {
      this.seconds++; // this is not timer2!
      // Would need: const self = this; or .bind(this)
    }, 1000);
  },
};
```

**When to Use Arrow Functions vs Regular Functions:**

```javascript
// Use arrow functions for:
// 1. Callbacks
const numbers = [1, 2, 3];
numbers.map((n) => n * 2);

// 2. Array methods
numbers.filter((n) => n > 1);

// 3. Short functions
const add = (a, b) => a + b;

// Use regular functions for:
// 1. Object methods (when you need this)
const obj = {
  name: "John",
  greet: function () {
    return `Hello, ${this.name}`;
  },
};

// 2. Constructor functions
function Person(name) {
  this.name = name;
}

// 3. Function declarations (hoisting)
function myFunction() {
  // Can be called before declaration
}
```

**Practice Task 1**:

1. Convert regular functions to arrow functions
2. Practice single-expression arrow functions with implicit return
3. Use arrow functions in array methods (map, filter)
4. Understand when to use arrow vs regular functions

---

#### Step 2: Destructuring (20 minutes)

**Array Destructuring:**

```javascript
// Basic destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
// a = 1, b = 2, c = 3

// Skip elements
const [first, , third] = [1, 2, 3];
// first = 1, third = 3 (skipped second element)

// Default values
const [x = 10, y = 20] = [5];
// x = 5, y = 20 (y uses default)

// Rest element
const [first, ...rest] = [1, 2, 3, 4, 5];
// first = 1, rest = [2, 3, 4, 5]

// Swapping variables
let a = 1;
let b = 2;
[a, b] = [b, a];
// a = 2, b = 1

// Returning multiple values from function
function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();
// x = 10, y = 20
```

**Object Destructuring:**

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Basic destructuring
const { name, age } = person;
// name = "John", age = 30

// Rename variables
const { name: personName, age: personAge } = person;
// personName = "John", personAge = 30

// Default values
const { name, age, email = "no email" } = person;
// email = "no email" (if property doesn't exist)

// Nested destructuring
const user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

const {
  address: { city },
} = user;
// city = "New York"

// Rest operator
const { name, ...rest } = person;
// name = "John"
// rest = { age: 30, city: "New York" }
```

**Destructuring Function Parameters:**

```javascript
// Regular function
function greet(person) {
  console.log(`Hello, ${person.name}!`);
}

// Destructured parameter
function greet({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet({ name: "John", age: 30 });

// With default values
function createUser({ name, age = 18, city = "Unknown" }) {
  return { name, age, city };
}

createUser({ name: "John" });
// { name: "John", age: 18, city: "Unknown" }

// Array destructuring in parameters
function processCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}

processCoordinates([10, 20]);
```

**Practice Task 2**:

1. Destructure arrays with different patterns
2. Destructure objects with renaming and defaults
3. Use destructuring in function parameters
4. Practice nested destructuring

---

#### Step 3: Spread and Rest Operators (20 minutes)

**Spread Operator (`...`):**

```javascript
// Copying arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // New array, not reference
arr2.push(4);
// arr1 = [1, 2, 3], arr2 = [1, 2, 3, 4]

// Merging arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
// merged = [1, 2, 3, 4, 5, 6]

// Adding elements
const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4];
// newNumbers = [0, 1, 2, 3, 4]

// Converting string to array
const str = "Hello";
const chars = [...str];
// chars = ["H", "e", "l", "l", "o"]

// Function arguments (spreading array as arguments)
const numbers = [1, 2, 3];
Math.max(...numbers); // Same as Math.max(1, 2, 3)

// Copying objects (ES2018)
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // Shallow copy
// obj2 = { a: 1, b: 2 }

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
// merged = { a: 1, b: 2, c: 3, d: 4 }

// Overwriting properties
const defaults = { color: "red", size: "medium" };
const user = { ...defaults, color: "blue" };
// user = { color: "blue", size: "medium" }
```

**Rest Operator (`...`):**

```javascript
// Rest parameters (collecting arguments)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4, 5); // 15
// numbers = [1, 2, 3, 4, 5]

// Rest with other parameters
function greet(greeting, ...names) {
  return names.map((name) => `${greeting}, ${name}!`).join(" ");
}

greet("Hello", "John", "Jane", "Bob");
// "Hello, John! Hello, Jane! Hello, Bob!"

// Rest in array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// Rest in object destructuring
const { name, ...otherProps } = { name: "John", age: 30, city: "NYC" };
// name = "John", otherProps = { age: 30, city: "NYC" }
```

**Difference Between Spread and Rest:**

```javascript
// Spread: expanding/breaking apart
const arr = [1, 2, 3];
console.log(...arr); // Expands to: console.log(1, 2, 3)

// Rest: collecting/gathering
function collect(...args) {
  // args collects all arguments into array
  return args;
}

collect(1, 2, 3); // [1, 2, 3]

// Same operator (...), different context
// - When used to expand: spread
// - When used to collect: rest
```

**Practice Task 3**:

1. Use spread operator to copy and merge arrays/objects
2. Use rest operator in function parameters
3. Use rest in destructuring
4. Understand the difference between spread and rest

---

### Hour 2: Advanced Functions, Error Handling, Date & Time (60 minutes)

#### Step 4: Advanced Functions (25 minutes)

**Higher-Order Functions:**

```javascript
// Functions that take functions as arguments
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

operate(5, 3, add); // 8
operate(5, 3, multiply); // 15

// Functions that return functions
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5); // 10
triple(5); // 15
```

**Callback Functions:**

```javascript
// Callback: function passed as argument to another function
function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, function (num) {
  return num * 2;
});
// [2, 4, 6, 8]

// With arrow function
const squared = processArray(numbers, (num) => num * num);
// [1, 4, 9, 16]

// Real-world example: setTimeout
setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

// Array methods use callbacks
numbers.forEach(function (num) {
  console.log(num);
});
```

**Map, Filter, Reduce in Detail:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// map() - transform each element
const doubled = numbers.map((num) => num * 2);
// [2, 4, 6, 8, 10]

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];
const names = users.map((user) => user.name);
// ["John", "Jane"]

// filter() - select elements based on condition
const evens = numbers.filter((num) => num % 2 === 0);
// [2, 4]

const adults = users.filter((user) => user.age >= 18);
// All users with age >= 18

// reduce() - accumulate to single value
const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
// 15 (sum of all numbers)
// Syntax: reduce((acc, current) => operation, initialValue)

// More reduce examples
const product = numbers.reduce((acc, num) => acc * num, 1);
// 120 (product of all numbers)

const max = numbers.reduce((acc, num) => {
  return num > acc ? num : acc;
}, numbers[0]);
// 5 (maximum number)

// Reduce to object
const grouped = users.reduce((acc, user) => {
  const key = user.age >= 30 ? "adults" : "young";
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(user);
  return acc;
}, {});
// { adults: [{name: "John", age: 30}], young: [{name: "Jane", age: 25}] }
```

**Method Chaining:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain array methods
const result = numbers
  .filter((num) => num % 2 === 0) // [2, 4, 6, 8, 10]
  .map((num) => num * 2) // [4, 8, 12, 16, 20]
  .reduce((sum, num) => sum + num, 0); // 60

console.log(result); // 60

// More chaining
const users = [
  { name: "John", age: 30, active: true },
  { name: "Jane", age: 25, active: false },
  { name: "Bob", age: 35, active: true },
];

const activeUserNames = users
  .filter((user) => user.active)
  .map((user) => user.name.toUpperCase())
  .sort();
// ["BOB", "JOHN"]
```

**Closures:**

```javascript
// Closure: function that remembers its outer scope
function outerFunction(x) {
  // Outer scope variable
  return function innerFunction(y) {
    // Inner function has access to x
    return x + y;
  };
}

const addFive = outerFunction(5);
addFive(3); // 8 (remembers x = 5)

// Practical example: Counter
function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount(); // 2
// count is private, can't access directly

// Module pattern
const calculator = (function () {
  let result = 0;

  return {
    add: function (x) {
      result += x;
      return this;
    },
    multiply: function (x) {
      result *= x;
      return this;
    },
    getResult: function () {
      return result;
    },
    reset: function () {
      result = 0;
      return this;
    },
  };
})();

calculator.add(5).multiply(3).getResult(); // 15
```

**IIFE (Immediately Invoked Function Expression):**

```javascript
// IIFE: function that runs immediately
(function () {
  console.log("This runs immediately");
})();

// With parameters
(function (name) {
  console.log(`Hello, ${name}!`);
})("John");

// Why use IIFE?
// 1. Avoid polluting global scope
(function () {
  let privateVar = "secret";
  // privateVar is not accessible outside
})();

// 2. Module pattern
const myModule = (function () {
  let private = "private";

  return {
    public: "public",
    getPrivate: function () {
      return private;
    },
  };
})();

// 3. Arrow function IIFE
(() => {
  console.log("Arrow function IIFE");
})();
```

**Practice Task 4**:

1. Create higher-order functions
2. Use callbacks in your functions
3. Practice map, filter, reduce with different scenarios
4. Chain array methods
5. Create closures to encapsulate data
6. Use IIFE to create modules

---

#### Step 5: Error Handling (15 minutes)

**Try-Catch-Finally:**

```javascript
// Basic error handling
try {
  // Code that might throw an error
  const result = 10 / 0;
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
} finally {
  // Always runs (cleanup code)
  console.log("This always runs");
}

// Example: JSON parsing
try {
  const data = JSON.parse('{"invalid json"');
} catch (error) {
  console.error("Invalid JSON:", error.message);
}

// Example: Accessing properties
try {
  const user = null;
  console.log(user.name); // Error: Cannot read property
} catch (error) {
  console.error("Error:", error.message);
}
```

**Error Object and Error Types:**

```javascript
// Error object properties
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error(error.name); // "Error"
  console.error(error.message); // "Something went wrong"
  console.error(error.stack); // Stack trace
}

// Common error types
try {
  // SyntaxError
  eval("invalid syntax {");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("Syntax error:", error.message);
  }
}

try {
  // ReferenceError
  console.log(undefinedVariable);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error("Variable not defined:", error.message);
  }
}

try {
  // TypeError
  const num = null;
  num.toUpperCase();
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type error:", error.message);
  }
}
```

**Throw Statement:**

```javascript
// Throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (error) {
  console.error(error.message); // "Cannot divide by zero"
}

// Custom error
function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  if (age > 150) {
    throw new Error("Age is too high");
  }
  return true;
}

// Throwing different error types
function processData(data) {
  if (!data) {
    throw new TypeError("Data is required");
  }
  if (typeof data !== "object") {
    throw new TypeError("Data must be an object");
  }
  // Process data...
}
```

**Best Practices for Error Handling:**

```javascript
// 1. Be specific with error messages
function getUser(id) {
  if (!id) {
    throw new Error("User ID is required");
  }
  // ...
}

// 2. Handle errors at appropriate level
function processUser(userId) {
  try {
    const user = getUser(userId);
    return user;
  } catch (error) {
    // Log error
    console.error("Failed to get user:", error);
    // Return default or rethrow
    throw error;
  }
}

// 3. Use finally for cleanup
function processFile(filename) {
  let file;
  try {
    file = openFile(filename);
    // Process file
  } catch (error) {
    console.error("Error processing file:", error);
  } finally {
    // Always close file
    if (file) {
      closeFile(file);
    }
  }
}

// 4. Don't swallow errors silently
// Bad:
try {
  riskyOperation();
} catch (error) {
  // Silent failure - bad!
}

// Good:
try {
  riskyOperation();
} catch (error) {
  console.error("Operation failed:", error);
  // Handle appropriately
}
```

**Practice Task 5**:

1. Use try-catch to handle errors
2. Throw custom errors
3. Handle different error types
4. Use finally for cleanup
5. Create error handling for user input validation

---

#### Step 6: Date and Time (10 minutes)

**Date Object:**

```javascript
// Creating dates
const now = new Date(); // Current date and time
const specificDate = new Date(2024, 0, 15); // January 15, 2024
// Note: month is 0-indexed (0 = January, 11 = December)

const dateString = new Date("2024-01-15");
const timestamp = new Date(1705276800000); // Milliseconds since epoch

// Date methods
const date = new Date();

date.getFullYear(); // 2024 (4-digit year)
date.getMonth(); // 0-11 (0 = January)
date.getDate(); // 1-31 (day of month)
date.getDay(); // 0-6 (0 = Sunday)
date.getHours(); // 0-23
date.getMinutes(); // 0-59
date.getSeconds(); // 0-59
date.getMilliseconds(); // 0-999

// UTC methods (same but in UTC)
date.getUTCFullYear();
date.getUTCMonth();
// etc.

// Timestamps
Date.now(); // Current timestamp in milliseconds
date.getTime(); // Timestamp of date object
date.valueOf(); // Same as getTime()
```

**Date Formatting:**

```javascript
const date = new Date();

// Built-in methods
date.toString(); // "Mon Jan 15 2024 12:00:00 GMT-0500"
date.toDateString(); // "Mon Jan 15 2024"
date.toTimeString(); // "12:00:00 GMT-0500"
date.toISOString(); // "2024-01-15T17:00:00.000Z"
date.toLocaleString(); // Locale-specific format

// Custom formatting
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

formatDate(new Date()); // "2024-01-15"
```

**Date Arithmetic:**

```javascript
const date = new Date();

// Adding/subtracting time (milliseconds)
const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
// Add 1 day (24 hours * 60 minutes * 60 seconds * 1000 ms)

const yesterday = new Date(date.getTime() - 24 * 60 * 60 * 1000);

// Comparing dates
const date1 = new Date(2024, 0, 15);
const date2 = new Date(2024, 0, 20);

date1 < date2; // true
date1 > date2; // false
date1.getTime() === date2.getTime(); // false

// Difference in days
function daysBetween(date1, date2) {
  const diff = Math.abs(date2 - date1);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
```

**Practice Task 6**:

1. Create dates in different ways
2. Extract date components (year, month, day, time)
3. Format dates
4. Perform date arithmetic
5. Compare dates

---

#### Step 7: Math Object (10 minutes)

**Common Math Methods:**

```javascript
// Rounding
Math.round(4.7); // 5 (rounds to nearest)
Math.floor(4.7); // 4 (rounds down)
Math.ceil(4.3); // 5 (rounds up)
Math.trunc(4.7); // 4 (removes decimal part)

// Min and Max
Math.min(5, 10, 3); // 3
Math.max(5, 10, 3); // 10

const numbers = [5, 10, 3, 8];
Math.min(...numbers); // 3 (use spread with arrays)
Math.max(...numbers); // 10

// Absolute value
Math.abs(-5); // 5
Math.abs(5); // 5

// Power and Square root
Math.pow(2, 3); // 8 (2 to the power of 3)
2 ** 3; // 8 (ES6 exponentiation operator)
Math.sqrt(16); // 4
Math.cbrt(8); // 2 (cube root)

// Random
Math.random(); // Random number between 0 and 1
Math.floor(Math.random() * 10); // Random integer 0-9
Math.floor(Math.random() * 10) + 1; // Random integer 1-10

// Random in range
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomInRange(5, 10); // Random integer between 5 and 10

// Constants
Math.PI; // 3.141592653589793
Math.E; // Euler's number
Math.SQRT2; // Square root of 2
```

**Practice Task 7**:

1. Use Math methods for rounding
2. Find min/max values
3. Generate random numbers
4. Use Math constants

---

### Hour 3: JSON, Modules, and Practice (60 minutes)

#### Step 8: JSON (15 minutes)

**JSON.stringify():**

```javascript
// Converting objects/arrays to JSON strings
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const jsonString = JSON.stringify(person);
// '{"name":"John","age":30,"city":"New York"}'

// With arrays
const numbers = [1, 2, 3, 4, 5];
JSON.stringify(numbers); // '[1,2,3,4,5]'

// Replacer function (filter properties)
JSON.stringify(person, (key, value) => {
  if (key === "age") {
    return undefined; // Exclude age
  }
  return value;
});
// '{"name":"John","city":"New York"}'

// Replacer array (whitelist)
JSON.stringify(person, ["name", "city"]);
// '{"name":"John","city":"New York"}'

// Indentation (pretty print)
JSON.stringify(person, null, 2);
/*
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
*/
```

**JSON.parse():**

```javascript
// Converting JSON strings to objects/arrays
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const person = JSON.parse(jsonString);
// { name: "John", age: 30, city: "New York" }

const numbersString = "[1,2,3,4,5]";
const numbers = JSON.parse(numbersString);
// [1, 2, 3, 4, 5]

// Reviver function (transform values)
const json = '{"name":"John","age":"30","birthYear":"1994"}';
const person = JSON.parse(json, (key, value) => {
  if (key === "age" || key === "birthYear") {
    return parseInt(value); // Convert to number
  }
  return value;
});
```

**JSON Syntax Rules:**

```javascript
// Valid JSON
// - Keys must be in double quotes
// - Strings must be in double quotes
// - Numbers, booleans, null are valid
// - No functions, undefined, symbols

// Valid
JSON.parse('{"name":"John","age":30,"active":true,"data":null}');

// Invalid (single quotes)
// JSON.parse("{'name':'John'}");  // Error

// Invalid (trailing comma)
// JSON.parse('{"name":"John",}');  // Error

// Invalid (functions)
const obj = { name: "John", greet: function () {} };
JSON.stringify(obj); // '{"name":"John"}' (functions are omitted)
```

**Working with JSON Data:**

```javascript
// Storing in localStorage
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieving from localStorage
const stored = localStorage.getItem("user");
const user = JSON.parse(stored);

// Fetching JSON from API (preview)
fetch("https://api.example.com/data")
  .then((response) => response.json()) // Parse JSON
  .then((data) => {
    console.log(data);
  });

// Error handling
try {
  const data = JSON.parse("invalid json");
} catch (error) {
  console.error("Invalid JSON:", error.message);
}
```

**Practice Task 8**:

1. Convert objects to JSON strings
2. Parse JSON strings to objects
3. Use JSON with localStorage
4. Handle JSON parsing errors

---

#### Step 9: ES6+ Modules (15 minutes)

**Export:**

```javascript
// Named exports (utils.js)
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// Or export at the end
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : null;
}

export { multiply, divide };

// Default export (one per module)
export default function greet(name) {
    return `Hello, ${name}!`;
}

// Or
function greet(name) {
    return `Hello, ${name}!`;
}

export default greet;
```

**Import:**

```javascript
// Named imports
import { add, subtract, PI } from "./utils.js";

add(5, 3); // 8
subtract(5, 3); // 2

// Import with aliases
import { add as sum, subtract as diff } from "./utils.js";

// Import all named exports
import * as utils from "./utils.js";
utils.add(5, 3);
utils.subtract(5, 3);

// Default import
import greet from "./greet.js";
greet("John");

// Mixed imports
import greet, { add, subtract } from "./math.js";

// Re-exporting
export { add, subtract } from "./utils.js";
```

**Module Scripts:**

```html
<!-- In HTML -->
<script type="module" src="main.js"></script>

<!-- Modules are deferred by default -->
<!-- Modules have strict mode by default -->
<!-- Modules have their own scope -->
```

**File Organization:**

```
project/
  index.html
  js/
    main.js       (entry point)
    utils.js      (utility functions)
    math.js       (math functions)
    user.js       (user-related)
```

**Practice Task 9**:

1. Create a module with named exports
2. Create a module with default export
3. Import and use modules
4. Organize code into multiple modules

---

#### Step 10: Complete Practice Exercises (30 minutes)

**Exercise 1: Rewrite Functions with Arrow Functions**

```javascript
// Rewrite these using arrow functions
function multiply(a, b) {
  return a * b;
}

function isEven(num) {
  return num % 2 === 0;
}

function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function versions
const multiply = (a, b) => a * b;
const isEven = (num) => num % 2 === 0;
const greet = (name) => `Hello, ${name}!`;
```

**Exercise 2: Array Methods Practice**

```javascript
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Book", price: 20, category: "Education" },
  { name: "Tablet", price: 300, category: "Electronics" },
  { name: "Pen", price: 2, category: "Office" },
];

// 1. Get all product names
const names = products.map((product) => product.name);

// 2. Get electronics products
const electronics = products.filter((p) => p.category === "Electronics");

// 3. Calculate total price
const total = products.reduce((sum, p) => sum + p.price, 0);

// 4. Get average price
const average = products.reduce((sum, p) => sum + p.price, 0) / products.length;

// 5. Get expensive products (price > 100)
const expensive = products.filter((p) => p.price > 100);

// 6. Chain: Get names of expensive electronics
const expensiveElectronicsNames = products
  .filter((p) => p.category === "Electronics" && p.price > 100)
  .map((p) => p.name);
```

**Exercise 3: Closure - Counter Module**

```javascript
function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
    reset: () => {
      count = initialValue;
      return count;
    },
  };
}

const counter = createCounter(10);
console.log(counter.getValue()); // 10
counter.increment(); // 11
counter.increment(); // 12
counter.decrement(); // 11
console.log(counter.getValue()); // 11
counter.reset(); // 10
```

**Exercise 4: Error Handling - Input Validation**

```javascript
function validateUser(user) {
  const errors = [];

  if (!user.name || typeof user.name !== "string") {
    errors.push("Name is required and must be a string");
  }

  if (!user.email || !user.email.includes("@")) {
    errors.push("Valid email is required");
  }

  if (!user.age || typeof user.age !== "number" || user.age < 0) {
    errors.push("Age must be a positive number");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }

  return true;
}

try {
  validateUser({ name: "John", email: "john@example.com", age: 30 });
  console.log("User is valid");
} catch (error) {
  console.error("Validation error:", error.message);
}
```

**Exercise 5: Interactive Calculator**

```javascript
const calculator = {
  result: 0,

  add: function (x) {
    this.result += x;
    return this;
  },

  subtract: function (x) {
    this.result -= x;
    return this;
  },

  multiply: function (x) {
    this.result *= x;
    return this;
  },

  divide: function (x) {
    if (x === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= x;
    return this;
  },

  getResult: function () {
    return this.result;
  },

  reset: function () {
    this.result = 0;
    return this;
  },
};

// Method chaining
calculator.add(10).multiply(2).subtract(5).getResult(); // 15

try {
  calculator.reset().add(10).divide(0);
} catch (error) {
  console.error(error.message); // "Cannot divide by zero"
}
```

---

## Final Checklist

Before moving to Day 5, make sure you can:

- [ ] Write arrow functions (single expression and block body)
- [ ] Understand arrow functions and `this` binding
- [ ] Destructure arrays and objects
- [ ] Use spread operator to copy and merge
- [ ] Use rest operator in functions and destructuring
- [ ] Create higher-order functions
- [ ] Use callbacks effectively
- [ ] Use map, filter, and reduce
- [ ] Chain array methods
- [ ] Create and use closures
- [ ] Use IIFE for module pattern
- [ ] Handle errors with try-catch-finally
- [ ] Throw and catch custom errors
- [ ] Work with Date objects
- [ ] Use Math object methods
- [ ] Convert objects to/from JSON
- [ ] Create and import ES6 modules
- [ ] Rewrite functions using arrow functions
- [ ] Build functions using closures
- [ ] Create error handling for validation

---

## Self-Assessment Questions

Test your understanding:

1. What's the difference between arrow functions and regular functions regarding `this`?
2. When would you use arrow functions vs regular functions?
3. How do you destructure nested objects?
4. What's the difference between spread and rest operators?
5. What are higher-order functions?
6. What's the difference between `map()`, `filter()`, and `reduce()`?
7. What is a closure?
8. When would you use an IIFE?
9. How do you handle errors in JavaScript?
10. What's the difference between named and default exports?

---

## Common Mistakes to Avoid

1. **Using arrow functions for object methods** - Loses `this` context
2. **Confusing spread and rest** - Context determines which one
3. **Not handling errors** - Always use try-catch for risky operations
4. **Mutating arrays in map/filter** - These methods return new arrays
5. **Forgetting return in reduce** - Must return accumulator
6. **Not using modules** - Leads to global namespace pollution
7. **Incorrect JSON syntax** - Must use double quotes, no trailing commas
8. **Date month indexing** - Months are 0-indexed (0 = January)
9. **Not using const/let in loops** - var causes scope issues
10. **Ignoring error messages** - Read and understand error messages

---

## JavaScript Best Practices

**1. Use arrow functions for callbacks:**

```javascript
// Good
numbers.map((n) => n * 2);

// Less ideal
numbers.map(function (n) {
  return n * 2;
});
```

**2. Use destructuring for clean code:**

```javascript
// Good
const { name, age } = user;

// Less ideal
const name = user.name;
const age = user.age;
```

**3. Use const by default:**

```javascript
// Good
const add = (a, b) => a + b;

// Only use let when reassignment needed
let counter = 0;
counter++;
```

**4. Chain array methods:**

```javascript
// Good
const result = numbers
  .filter((n) => n > 0)
  .map((n) => n * 2)
  .reduce((sum, n) => sum + n, 0);
```

**5. Handle errors appropriately:**

```javascript
// Good
try {
  riskyOperation();
} catch (error) {
  console.error("Operation failed:", error);
  // Handle error
}
```

**6. Use modules to organize code:**

```javascript
// Good - organized in modules
import { add, subtract } from "./math.js";
```

---

## Additional Resources

- **MDN JavaScript Guide**: [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- **JavaScript.info**: [javascript.info](https://javascript.info/)
- **ES6 Features**: [es6-features.org](http://es6-features.org/)
- **You Don't Know JS**: [github.com/getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)

---

## Next Steps

After completing Day 4:

1. Review ES6+ features and practice more
2. Refactor old code to use modern JavaScript
3. Practice error handling in real scenarios
4. Get ready for Day 5: DOM Manipulation and Events
5. You'll learn to interact with HTML elements and handle user events!

**Congratulations on completing Day 4!** 🎯
