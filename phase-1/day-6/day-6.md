# Day 6: Asynchronous JavaScript - Complete Study Guide

## Overview

**Duration**: 3-4 hours  
**Goal**: Master asynchronous JavaScript, Promises, async/await, and the Fetch API  
**Prerequisites**: Completed Days 1-5 (HTML, CSS, JavaScript fundamentals, DOM)  
**Outcome**: Write asynchronous code, fetch data from APIs, and build interactive applications with async operations

---

## What You'll Need

### Tools Required

1. **Text Editor**: VS Code (recommended)
2. **Web Browser**: Chrome, Firefox, Edge, or Safari (latest version)
3. **Browser Console**: F12 → Console tab
4. **HTML Files**: Create files for testing async code
5. **API Testing**: Free APIs for practice (JSONPlaceholder, OpenWeatherMap)

### File Organization

- Create folder: `day6-async-javascript`
- Create files: `index.html`, `script.js`, `api.js`, `utils.js`
- Create folder: `exercises/` for practice files

### Resources for Learning

- **MDN Promises**: [developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- **MDN async/await**: [developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- **MDN Fetch API**: [developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- **Free APIs**: [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/), [openweathermap.org](https://openweathermap.org/api)

---

## Step-by-Step Learning Plan

### Hour 1: Asynchronous Concepts, Timers, and Callbacks (60 minutes)

#### Step 1: Asynchronous Programming Concepts (20 minutes)

**Synchronous vs Asynchronous Code:**

```javascript
// Synchronous (blocking) - runs line by line
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3 (in order)

// Asynchronous (non-blocking) - doesn't wait
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2 (2 comes after 1 second)
```

**JavaScript is Single-Threaded:**

- JavaScript has one call stack (single thread)
- Can only do one thing at a time
- Uses event loop to handle async operations
- Non-blocking: doesn't wait for slow operations

**Call Stack, Event Loop, Callback Queue:**

```
Call Stack (synchronous code runs here)
  ↓
Event Loop (checks if call stack is empty)
  ↓
Callback Queue (async callbacks wait here)
  ↓
When stack is empty, callbacks move to stack
```

**Blocking vs Non-Blocking:**

```javascript
// Blocking operation (bad)
function slowFunction() {
  const start = Date.now();
  while (Date.now() - start < 3000) {
    // Wait 3 seconds (blocks everything)
  }
  console.log("Done");
}

// Non-blocking operation (good)
setTimeout(() => {
  console.log("Done");
}, 3000);
// Other code continues running
```

**Why Async is Needed:**

- **Network requests**: Fetching data from servers (slow)
- **File operations**: Reading/writing files
- **Timers**: Delays and intervals
- **User input**: Waiting for user actions
- **Animations**: Smooth UI updates

**Practice Task 1**:

1. Compare synchronous and asynchronous code
2. Observe how async code doesn't block execution
3. Understand the concept of single-threaded JavaScript

---

#### Step 2: Timers (15 minutes)

**setTimeout:**

```javascript
// Execute function after delay
setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

// Arrow function
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// With parameters
setTimeout(
  function (name) {
    console.log(`Hello, ${name}!`);
  },
  1000,
  "John"
);

// Store timeout ID
const timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 1000);

// Clear timeout
clearTimeout(timeoutId);
```

**setInterval:**

```javascript
// Execute function repeatedly
const intervalId = setInterval(function () {
  console.log("This runs every second");
}, 1000);

// Clear interval
clearInterval(intervalId);

// Example: Countdown timer
let count = 10;
const timer = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);
```

**Using Timers for Animations:**

```javascript
// Simple animation
let position = 0;
const element = document.querySelector("#box");

function animate() {
  position += 1;
  element.style.left = position + "px";

  if (position < 200) {
    setTimeout(animate, 10);
  }
}

animate();
```

**Practice Task 2**:

1. Use setTimeout to delay code execution
2. Use setInterval to create a timer
3. Clear timers using clearTimeout and clearInterval
4. Create a simple countdown timer

---

#### Step 3: Callbacks (25 minutes)

**Callback Functions:**

```javascript
// Callback: function passed as argument
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Execute callback
}

greet("John", function () {
  console.log("Callback executed!");
});

// Arrow function callback
greet("Jane", () => {
  console.log("Arrow function callback");
});
```

**Callback Pattern for Async Operations:**

```javascript
// Simulated async operation
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

// Using the callback
fetchData(function (data) {
  console.log("Data received:", data);
});

// Error handling with callbacks (error-first pattern)
function fetchDataWithError(callback) {
  setTimeout(() => {
    const error = Math.random() > 0.5 ? null : new Error("Failed");
    const data = error ? null : { name: "John" };
    callback(error, data); // Error first, data second
  }, 1000);
}

fetchDataWithError(function (error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
});
```

**Callback Hell (Nested Callbacks):**

```javascript
// Callback hell - hard to read and maintain
fetchData1(function (data1) {
  processData1(data1, function (result1) {
    fetchData2(result1, function (data2) {
      processData2(data2, function (result2) {
        fetchData3(result2, function (data3) {
          console.log("Final result:", data3);
        });
      });
    });
  });
});

// Problems with callback hell:
// - Hard to read (pyramid of doom)
// - Difficult to debug
// - Error handling is complex
// - Hard to maintain
```

**Practice Task 3**:

1. Create functions that use callbacks
2. Handle async operations with callbacks
3. Use error-first callback pattern
4. Understand the problems with callback hell

---

### Hour 2: Promises and async/await (60 minutes)

#### Step 4: Promises (30 minutes)

**What are Promises:**
Promises are objects that represent the eventual completion (or failure) of an asynchronous operation.

**Promise States:**

- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled/Resolved**: Operation completed successfully
- **Rejected**: Operation failed

**Creating Promises:**

```javascript
// Create a Promise
const promise = new Promise(function (resolve, reject) {
  // Async operation
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!"); // Promise fulfilled
    } else {
      reject(new Error("Failed!")); // Promise rejected
    }
  }, 1000);
});
```

**Using Promises:**

```javascript
// .then() - handle resolved promise
promise.then(function (result) {
  console.log(result); // "Success!"
});

// .catch() - handle rejected promise
promise.catch(function (error) {
  console.error(error); // Error object
});

// Chaining
promise
  .then((result) => {
    console.log(result);
    return "Next step";
  })
  .then((nextResult) => {
    console.log(nextResult);
  })
  .catch((error) => {
    console.error(error);
  });
```

**Promise Methods:**

```javascript
// Promise.resolve() - create resolved promise
const resolved = Promise.resolve("Value");
resolved.then((value) => console.log(value)); // "Value"

// Promise.reject() - create rejected promise
const rejected = Promise.reject(new Error("Error"));
rejected.catch((error) => console.error(error));

// Promise.all() - wait for all promises
const promise1 = fetch("/api/data1");
const promise2 = fetch("/api/data2");
const promise3 = fetch("/api/data3");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One promise failed:", error);
  });

// Promise.race() - first promise to settle (resolve or reject)
Promise.race([promise1, promise2]).then((result) => {
  console.log("First promise resolved:", result);
});

// Promise.allSettled() - wait for all promises (regardless of outcome)
Promise.allSettled([promise1, promise2]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index} succeeded:`, result.value);
    } else {
      console.log(`Promise ${index} failed:`, result.reason);
    }
  });
});

// .finally() - executes regardless of outcome
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => {
    console.log("Always runs");
  });
```

**Chaining Promises:**

```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: "John" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Post 1" }]);
    }, 1000);
  });
}

// Chaining promises
fetchUser(1)
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

**Practice Task 4**:

1. Create and use Promises
2. Handle resolved and rejected promises
3. Chain promises together
4. Use Promise.all(), Promise.race(), Promise.allSettled()
5. Use .finally() for cleanup

---

#### Step 5: async/await (30 minutes)

**async Functions:**

```javascript
// async function always returns a Promise
async function myAsyncFunction() {
  return "Hello";
}

myAsyncFunction().then((result) => console.log(result)); // "Hello"

// Equivalent to:
function myAsyncFunction() {
  return Promise.resolve("Hello");
}
```

**await Keyword:**

```javascript
// await waits for Promise to resolve
async function fetchData() {
  const result = await fetchUser(1);
  console.log(result); // { id: 1, name: "John" }
  return result;
}

// await can only be used inside async functions
```

**Error Handling with async/await:**

```javascript
async function fetchData() {
  try {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    return { user, posts };
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw if needed
  }
}

// Using the function
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Sequential vs Parallel Execution:**

```javascript
// Sequential (one after another) - slower
async function sequential() {
  const user = await fetchUser(1); // Wait 1 second
  const posts = await fetchPosts(1); // Wait 1 second
  // Total: 2 seconds
}

// Parallel (at the same time) - faster
async function parallel() {
  const [user, posts] = await Promise.all([
    fetchUser(1), // Both run simultaneously
    fetchPosts(1),
  ]);
  // Total: 1 second (whichever is slower)
}
```

**Using Promise.all() with async/await:**

```javascript
async function fetchAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch("/api/users"),
      fetch("/api/posts"),
      fetch("/api/comments"),
    ]);

    const usersData = await users.json();
    const postsData = await posts.json();
    const commentsData = await comments.json();

    return { usersData, postsData, commentsData };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

**Practice Task 5**:

1. Convert Promise chains to async/await
2. Handle errors with try/catch
3. Execute promises in parallel with Promise.all()
4. Compare sequential vs parallel execution

---

### Hour 3: Fetch API, Advanced Topics, and Practice (60 minutes)

#### Step 6: Fetch API (25 minutes)

**Basic Fetch:**

```javascript
// GET request (default)
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// With async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

**Response Object:**

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    console.log(response.status); // HTTP status code (200, 404, etc.)
    console.log(response.ok); // true if status 200-299
    console.log(response.headers); // Response headers

    // Parse response
    return response.json(); // For JSON
    // return response.text();       // For text
    // return response.blob();       // For binary data
  })
  .then((data) => console.log(data));
```

**POST Request:**

```javascript
// POST request with JSON
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// With async/await
async function createUser(userData) {
  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

**Request Options:**

```javascript
fetch(url, {
  method: "GET", // GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  },
  body: JSON.stringify(data), // For POST/PUT
  mode: "cors", // cors, no-cors, same-origin
  credentials: "include", // include, same-origin, omit
  cache: "no-cache", // Cache control
});
```

**Error Handling with Fetch:**

```javascript
// Fetch doesn't reject on HTTP errors (404, 500, etc.)
// Only rejects on network errors

async function fetchData(url) {
  try {
    const response = await fetch(url);

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handles both network errors and HTTP errors
    console.error("Error:", error);
  }
}
```

**Working with JSON APIs:**

```javascript
// JSONPlaceholder API example
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createPost(postData) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const newPost = await response.json();
    return newPost;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

**Practice Task 6**:

1. Fetch data from a public API (JSONPlaceholder)
2. Make GET and POST requests
3. Handle responses and errors
4. Parse JSON data
5. Create a simple app that displays API data

---

#### Step 7: Advanced Topics (20 minutes)

**Modules (ES6) - Deep Dive:**

```javascript
// Named exports (utils.js)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// Default export
export default function greet(name) {
  return `Hello, ${name}!`;
}

// Import (main.js)
import greet, { add, subtract, PI } from "./utils.js";
// greet is default, others are named

// Import all named exports
import * as utils from "./utils.js";
utils.add(5, 3);

// Re-exporting
export { add, subtract } from "./utils.js";

// Dynamic imports
async function loadModule() {
  const module = await import("./utils.js");
  module.default("John");
}
```

**Closures - Advanced:**

```javascript
// Closure: function remembers outer scope
function createCounter() {
  let count = 0; // Private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2

// Closures in loops (common pitfall)
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Prints 3, 3, 3 (not 0, 1, 2)
  }, 1000);
}

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Prints 0, 1, 2
  }, 1000);
}

// Solution 2: IIFE
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // Prints 0, 1, 2
    }, 1000);
  })(i);
}
```

**`this` Keyword:**

```javascript
// this in global context
console.log(this); // window (browser) or global (Node.js)

// this in functions (strict mode)
function myFunction() {
  "use strict";
  console.log(this); // undefined
}

// this in methods
const person = {
  name: "John",
  greet: function () {
    console.log(this.name); // 'John'
  },
};

person.greet();

// this in arrow functions (lexical binding)
const person2 = {
  name: "John",
  greet: () => {
    console.log(this.name); // undefined (this is window)
  },
};

// .bind(), .call(), .apply()
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person3 = { name: "John" };

greet.call(person3, "Hello"); // Hello, John
greet.apply(person3, ["Hi"]); // Hi, John
const boundGreet = greet.bind(person3);
boundGreet("Hey"); // Hey, John
```

**Practice Task 7**:

1. Create and use ES6 modules
2. Understand closures in different contexts
3. Fix closure issues in loops
4. Understand `this` binding
5. Use .bind(), .call(), .apply()

---

#### Step 8: Complete Practice Exercises (15 minutes)

**Exercise 1: Fetch and Display API Data**

```javascript
// Fetch posts from JSONPlaceholder and display them
async function displayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const container = document.querySelector("#posts-container");

    posts.slice(0, 10).forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
      container.appendChild(div);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

displayPosts();
```

**Exercise 2: Complete Todo App with Async Operations**

```javascript
// Enhanced Todo app with async operations
class TodoApp {
  constructor() {
    this.todos = [];
    this.init();
  }

  async init() {
    await this.loadTodos();
    this.setupEventListeners();
    this.render();
  }

  async loadTodos() {
    try {
      const stored = localStorage.getItem("todos");
      this.todos = stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error loading todos:", error);
      this.todos = [];
    }
  }

  async saveTodos() {
    try {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  }

  async addTodo(text) {
    const todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    this.todos.push(todo);
    await this.saveTodos();
    this.render();
  }

  async toggleTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      await this.saveTodos();
      this.render();
    }
  }

  async deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
    await this.saveTodos();
    this.render();
  }

  filterTodos(filter) {
    // Filter logic: 'all', 'active', 'completed'
    // Implementation here
  }

  render() {
    const list = document.querySelector("#todo-list");
    list.innerHTML = "";

    this.todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = todo.completed ? "completed" : "";
      li.innerHTML = `
                <span onclick="app.toggleTodo(${todo.id})">${todo.text}</span>
                <button onclick="app.deleteTodo(${todo.id})">Delete</button>
            `;
      list.appendChild(li);
    });
  }

  setupEventListeners() {
    const input = document.querySelector("#todo-input");
    const addBtn = document.querySelector("#add-btn");

    addBtn.addEventListener("click", () => {
      if (input.value.trim()) {
        this.addTodo(input.value);
        input.value = "";
      }
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && input.value.trim()) {
        this.addTodo(input.value);
        input.value = "";
      }
    });
  }
}

const app = new TodoApp();
```

---

## Final Checklist

Before moving to Week 2 (React), make sure you can:

- [ ] Understand synchronous vs asynchronous code
- [ ] Use setTimeout and setInterval
- [ ] Understand callback functions and callback hell
- [ ] Create and use Promises
- [ ] Chain promises with .then()
- [ ] Handle errors with .catch()
- [ ] Use Promise.all(), Promise.race(), Promise.allSettled()
- [ ] Write async functions
- [ ] Use await to wait for promises
- [ ] Handle errors with try/catch in async functions
- [ ] Execute promises in parallel
- [ ] Make HTTP requests with Fetch API
- [ ] Handle Fetch responses and errors
- [ ] Use ES6 modules (import/export)
- [ ] Understand closures and `this` keyword
- [ ] Fetch data from public APIs
- [ ] Complete a Todo app with async operations

---

## Self-Assessment Questions

Test your understanding:

1. What's the difference between synchronous and asynchronous code?
2. What are the three states of a Promise?
3. What's the difference between .then() and async/await?
4. How do you handle errors in async/await?
5. What's the difference between Promise.all() and Promise.race()?
6. Does fetch() reject on HTTP errors (404, 500)?
7. How do you make a POST request with fetch?
8. What is a closure?
9. How does `this` work in arrow functions vs regular functions?
10. When would you use Promise.allSettled()?

---

## Common Mistakes to Avoid

1. **Forgetting await** - Promise not resolved, get Promise object instead of value
2. **Not handling errors** - Unhandled promise rejections
3. **Using await in non-async function** - Syntax error
4. **Not checking response.ok** - Fetch doesn't reject on HTTP errors
5. **Callback hell** - Use Promises or async/await instead
6. **Sequential when parallel possible** - Use Promise.all() for parallel execution
7. **Not parsing JSON** - response.json() returns a Promise, need await
8. **Forgetting return in .then()** - Can't chain promises
9. **Not cleaning up timers** - Memory leaks
10. **Misunderstanding `this` in arrow functions** - Doesn't bind `this`

---

## Async JavaScript Best Practices

**1. Use async/await for readability:**

```javascript
// Good
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Also good (Promise chains)
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**2. Always handle errors:**

```javascript
// Good
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP error");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    // Handle error appropriately
  }
}
```

**3. Use Promise.all() for parallel operations:**

```javascript
// Good
const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);

// Less efficient
const users = await fetchUsers();
const posts = await fetchPosts();
```

**4. Clean up timers:**

```javascript
// Good
const intervalId = setInterval(() => {
  // Do something
}, 1000);

// Later, clean up
clearInterval(intervalId);
```

**5. Use try/catch with async/await:**

```javascript
// Good
async function processData() {
  try {
    const data = await fetchData();
    return process(data);
  } catch (error) {
    // Handle error
    throw error; // Re-throw if needed
  }
}
```

---

## Additional Resources

- **MDN Promises**: [developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- **MDN async/await**: [developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- **MDN Fetch API**: [developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- **JavaScript.info Async**: [javascript.info/async](https://javascript.info/async)
- **JSONPlaceholder API**: [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)

---

## Next Steps

After completing Day 6:

1. Practice fetching data from different APIs
2. Build more complex async applications
3. Review all Week 1 concepts
4. Complete the Week 1 Todo App project
5. Get ready for Week 2: React and Frontend Frameworks!

**Congratulations on completing Day 6 and Week 1!** 🎉
