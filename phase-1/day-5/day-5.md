# Day 5: DOM Manipulation and Events - Complete Study Guide

## Overview

**Duration**: 3-4 hours  
**Goal**: Learn to manipulate HTML elements with JavaScript and handle user interactions  
**Prerequisites**: Completed Day 1 (HTML), Day 2 (CSS), Day 3-4 (JavaScript)  
**Outcome**: Create interactive web pages that respond to user actions

---

## What You'll Need

### Tools Required

1. **Text Editor**: VS Code (recommended)
2. **Web Browser**: Chrome, Firefox, Edge, or Safari (latest version)
3. **Browser DevTools**: F12 (Elements and Console tabs)
4. **HTML File**: Create `index.html` for practice

### File Organization

- Create folder: `day5-dom-events`
- Create files: `index.html`, `script.js`, `styles.css`
- Create folder: `exercises/` for practice files

### Resources for Learning

- **MDN DOM Reference**: [developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- **MDN Events Reference**: [developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- **JavaScript.info DOM**: [javascript.info/document](https://javascript.info/document)

---

## Step-by-Step Learning Plan

### Hour 1: DOM Introduction and Selecting Elements (60 minutes)

#### Step 1: DOM Introduction (15 minutes)

**What is the DOM?**
The DOM (Document Object Model) is a programming interface for HTML documents. It represents the page structure as a tree of nodes that can be accessed and modified with JavaScript.

**DOM Tree Structure:**

```
Document (root)
├── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── header
        │   └── h1
        ├── main
        │   ├── p
        │   └── div
        │       └── button
        └── footer
```

**Document Object:**

```javascript
// document is the root of the DOM tree
console.log(document); // The entire document

// document represents the HTML page
// All DOM manipulation starts with document
```

**Nodes:**

- **Element nodes**: HTML elements (`<div>`, `<p>`, `<button>`, etc.)
- **Text nodes**: Text content inside elements
- **Attribute nodes**: Attributes of elements (less commonly used)

**Parent, Child, and Sibling Relationships:**

```html
<div id="parent">
  <!-- Parent of p and span -->
  <p>Paragraph</p>
  <!-- Child of div, sibling of span -->
  <span>Text</span>
  <!-- Child of div, sibling of p -->
</div>
```

**Practice Task 1**:

1. Open an HTML page in browser
2. Open DevTools (F12)
3. Explore the Elements tab to see the DOM tree
4. Use `console.log(document)` in Console tab

---

#### Step 2: Selecting Elements (25 minutes)

**getElementById:**

```javascript
// Select element by ID (returns single element or null)
const header = document.getElementById("header");
console.log(header); // Element object or null

// HTML: <div id="header">Header</div>
```

**getElementsByClassName:**

```javascript
// Select elements by class (returns HTMLCollection - live)
const items = document.getElementsByClassName("item");
console.log(items); // HTMLCollection (array-like, but not array)
console.log(items[0]); // First element
console.log(items.length); // Number of elements

// HTML: <div class="item">Item 1</div>
//       <div class="item">Item 2</div>
```

**getElementsByTagName:**

```javascript
// Select elements by tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // HTMLCollection of all <p> elements
```

**querySelector:**

```javascript
// Select first matching element (returns element or null)
const firstItem = document.querySelector(".item"); // First element with class "item"
const header = document.querySelector("#header"); // Element with id "header"
const button = document.querySelector("button"); // First button

// Can use any CSS selector
const link = document.querySelector("a.active");
const input = document.querySelector('input[type="text"]');
```

**querySelectorAll:**

```javascript
// Select all matching elements (returns NodeList - static)
const items = document.querySelectorAll(".item");
console.log(items); // NodeList (array-like)
console.log(items[0]); // First element
console.log(items.length); // Number of elements

// Can use any CSS selector
const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a.active");
```

**NodeList vs HTMLCollection:**

```javascript
// HTMLCollection (getElementsByClassName, getElementsByTagName)
// - Live collection (updates when DOM changes)
// - Array-like but not array
// - Can't use array methods directly

const items = document.getElementsByClassName("item");
// items.forEach()  // Error! Not an array

// NodeList (querySelectorAll)
// - Static collection (snapshot when called)
// - Array-like but not array
// - Can use forEach (NodeList has forEach method)

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item)); // Works!
```

**Converting to Array:**

```javascript
// HTMLCollection to Array
const items = document.getElementsByClassName("item");
const itemsArray = Array.from(items);
// or
const itemsArray2 = [...items];

// NodeList to Array
const elements = document.querySelectorAll(".element");
const elementsArray = Array.from(elements);
// or
const elementsArray2 = [...elements];

// Now you can use array methods
itemsArray.forEach((item) => console.log(item));
itemsArray.map((item) => item.textContent);
```

**Best Practices:**

```javascript
// Use querySelector/querySelectorAll for flexibility
// Use getElementById for IDs (faster, but limited)

// Good
const button = document.querySelector("#submit-button");
const items = document.querySelectorAll(".item");

// Also good (for IDs)
const header = document.getElementById("header");

// Store selections in variables
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
```

**Practice Task 2**:

1. Create HTML with various elements (IDs, classes, tags)
2. Use different selection methods
3. Log selected elements to console
4. Convert NodeList/HTMLCollection to arrays
5. Practice with different CSS selectors

---

#### Step 3: Manipulating Elements (20 minutes)

**Text Content:**

```javascript
const element = document.querySelector("#my-element");

// textContent - Gets/sets text (recommended)
element.textContent = "New text"; // Set text
console.log(element.textContent); // Get text

// innerText - Gets/sets visible text (browser-dependent)
element.innerText = "New text";
console.log(element.innerText);

// innerHTML - Gets/sets HTML content (security risk if user input)
element.innerHTML = "<strong>Bold text</strong>"; // Sets HTML
console.log(element.innerHTML); // Gets HTML

// Differences:
// - textContent: All text, including hidden
// - innerText: Only visible text
// - innerHTML: HTML markup (can execute scripts - XSS risk)
```

**Creating Elements:**

```javascript
// Create new element
const div = document.createElement("div");
const paragraph = document.createElement("p");
const button = document.createElement("button");

// Set properties before adding to DOM
div.textContent = "New div";
div.className = "container";
button.textContent = "Click me";
button.id = "my-button";
```

**Appending Elements:**

```javascript
const parent = document.querySelector("#parent");
const newElement = document.createElement("div");

// appendChild - Adds to end
parent.appendChild(newElement);

// append - Modern way (can add multiple, text, etc.)
parent.append(newElement);
parent.append(newElement, "text", anotherElement);

// prepend - Adds to beginning
parent.prepend(newElement);

// insertBefore - Insert before specific element
const referenceElement = document.querySelector("#reference");
parent.insertBefore(newElement, referenceElement);
```

**Removing Elements:**

```javascript
const element = document.querySelector("#to-remove");
const parent = element.parentElement;

// remove - Modern way (recommended)
element.remove();

// removeChild - Old way (need parent)
parent.removeChild(element);
```

**Replacing Elements:**

```javascript
const oldElement = document.querySelector("#old");
const newElement = document.createElement("div");
newElement.textContent = "New element";

// replaceWith - Modern way
oldElement.replaceWith(newElement);

// replaceChild - Old way (need parent)
const parent = oldElement.parentElement;
parent.replaceChild(newElement, oldElement);
```

**Cloning Elements:**

```javascript
const original = document.querySelector("#original");

// cloneNode(false) - Shallow copy (element only)
const shallowCopy = original.cloneNode(false);

// cloneNode(true) - Deep copy (element + children)
const deepCopy = original.cloneNode(true);

// Add cloned element to DOM
document.body.appendChild(deepCopy);
```

**Practice Task 3**:

1. Create and append new elements
2. Modify text content of existing elements
3. Remove elements from DOM
4. Clone and add elements
5. Build a simple list that can be modified

---

### Hour 2: Attributes, Classes, Styles, and Traversing (60 minutes)

#### Step 4: Manipulating Attributes and Classes (20 minutes)

**Getting and Setting Attributes:**

```javascript
const element = document.querySelector("#my-element");

// Get attribute
const id = element.getAttribute("id");
const href = element.getAttribute("href");

// Set attribute
element.setAttribute("id", "new-id");
element.setAttribute("data-value", "123");
element.setAttribute("aria-label", "Button");

// Remove attribute
element.removeAttribute("data-value");

// Check if attribute exists
if (element.hasAttribute("data-value")) {
  console.log("Has data-value attribute");
}
```

**Data Attributes:**

```javascript
// HTML: <div data-user-id="123" data-user-name="John"></div>
const element = document.querySelector("div");

// Access via dataset (camelCase, no data- prefix)
element.dataset.userId; // "123"
element.dataset.userName; // "John"

// Set data attributes
element.dataset.userId = "456";
element.dataset.isActive = "true";

// HTML automatically updates to: data-user-id="456" data-is-active="true"
```

**Class Manipulation:**

```javascript
const element = document.querySelector("#my-element");

// classList methods (recommended)
element.classList.add("active"); // Add class
element.classList.remove("active"); // Remove class
element.classList.toggle("active"); // Toggle class
element.classList.contains("active"); // Check if has class
element.classList.replace("old", "new"); // Replace class

// Multiple classes
element.classList.add("class1", "class2", "class3");

// className (alternative - sets all classes)
element.className = "active highlight"; // Replaces all classes
element.className += " new-class"; // Append (clumsy)
```

**Style Manipulation:**

```javascript
const element = document.querySelector("#my-element");

// Inline styles (camelCase properties)
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";
element.style.marginTop = "10px";

// cssText - Set multiple styles at once
element.style.cssText = "color: red; background-color: blue; padding: 10px;";

// Get computed styles (all styles, not just inline)
const computedStyles = window.getComputedStyle(element);
console.log(computedStyles.color);
console.log(computedStyles.fontSize);
console.log(computedStyles.margin);
```

**Practice Task 4**:

1. Add/remove/toggle classes
2. Set and get data attributes
3. Modify inline styles
4. Get computed styles
5. Create a theme switcher that changes classes

---

#### Step 5: Traversing the DOM (15 minutes)

**Parent Elements:**

```javascript
const element = document.querySelector("#child");

// Get parent element
const parent = element.parentElement; // Element parent (or null)
const parentNode = element.parentNode; // Node parent (can be text node)

// Get parent's parent
const grandparent = element.parentElement.parentElement;
```

**Children:**

```javascript
const parent = document.querySelector("#parent");

// Get children
parent.children; // HTMLCollection of element children
parent.childNodes; // NodeList of all children (text, comment, etc.)
parent.firstElementChild; // First element child
parent.lastElementChild; // Last element child
parent.childElementCount; // Number of element children

// Access specific child
parent.children[0]; // First child
parent.children[parent.children.length - 1]; // Last child
```

**Siblings:**

```javascript
const element = document.querySelector("#middle");

// Get siblings
element.nextElementSibling; // Next sibling element
element.previousElementSibling; // Previous sibling element

// nextSibling and previousSibling (can be text nodes)
element.nextSibling;
element.previousSibling;
```

**closest() Method:**

```javascript
// Find nearest ancestor matching selector
const child = document.querySelector("#deep-child");
const container = child.closest(".container"); // Find nearest .container ancestor

// Useful for event delegation
button.closest("form"); // Find parent form
```

**Practice Task 5**:

1. Navigate through parent/child relationships
2. Find siblings of elements
3. Use closest() to find ancestors
4. Traverse DOM tree programmatically

---

#### Step 6: Events Introduction (10 minutes)

**What are Events?**
Events are actions or occurrences that happen in the browser (user interactions, page loading, etc.). JavaScript can listen for these events and respond to them.

**Event-Driven Programming:**

- Page loads → `load` event
- User clicks button → `click` event
- User types in input → `input` event
- Form submitted → `submit` event

**Common Event Types:**

```javascript
// Mouse events
click; // Click on element
dblclick; // Double click
mouseover; // Mouse enters element
mouseout; // Mouse leaves element
mousedown; // Mouse button pressed
mouseup; // Mouse button released
mousemove; // Mouse moves over element

// Keyboard events
keydown; // Key pressed down
keyup; // Key released
keypress; // Key pressed (deprecated)

// Form events
submit; // Form submitted
focus; // Element receives focus
blur; // Element loses focus
change; // Value changed (after losing focus)
input; // Value changed (while typing)

// Window events
load; // Page loaded
resize; // Window resized
scroll; // Page scrolled

// Touch events (mobile)
touchstart;
touchend;
touchmove;
```

**Practice Task 6**:

1. List common events you might use
2. Think about when each event fires
3. Prepare HTML structure for event practice

---

#### Step 7: Event Listeners (15 minutes)

**Adding Event Listeners:**

```javascript
const button = document.querySelector("#my-button");

// addEventListener (recommended)
button.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Named function
function handleClick() {
  console.log("Button clicked!");
}
button.addEventListener("click", handleClick);
```

**Inline Event Handlers (Not Recommended):**

```html
<!-- Avoid this approach -->
<button onclick="handleClick()">Click me</button>

<!-- Better: Use addEventListener in JavaScript -->
<button id="my-button">Click me</button>
<script>
  document.querySelector("#my-button").addEventListener("click", handleClick);
</script>
```

**Multiple Event Listeners:**

```javascript
const button = document.querySelector("#my-button");

// Can add multiple listeners to same element
button.addEventListener("click", function () {
  console.log("First handler");
});

button.addEventListener("click", function () {
  console.log("Second handler");
});

// Both run when button is clicked
```

**Removing Event Listeners:**

```javascript
const button = document.querySelector("#my-button");

function handleClick() {
  console.log("Clicked");
}

button.addEventListener("click", handleClick);

// Remove listener (must be same function reference)
button.removeEventListener("click", handleClick);
```

**Event Listener Options:**

```javascript
// Options object
button.addEventListener("click", handleClick, {
  once: true, // Remove listener after first call
  capture: false, // Use capture phase
  passive: true, // Listener won't call preventDefault()
});

// Once (alternative syntax)
button.addEventListener("click", handleClick, { once: true });
```

**Practice Task 7**:

1. Add click event listeners to buttons
2. Add multiple listeners to same element
3. Remove event listeners
4. Try different event types (mouseover, focus, etc.)

---

### Hour 3: Event Object, Event Delegation, Forms, and Local Storage (60 minutes)

#### Step 8: Event Object (20 minutes)

**Event Object Properties:**

```javascript
const button = document.querySelector("#my-button");

button.addEventListener("click", function (event) {
  // event is the Event object

  // Basic properties
  console.log(event.type); // "click"
  console.log(event.target); // Element that triggered event
  console.log(event.currentTarget); // Element listener is attached to
  console.log(event.timeStamp); // Time when event occurred
});
```

**target vs currentTarget:**

```javascript
<div id="parent">
  <button id="child">Click me</button>
</div>;

const parent = document.querySelector("#parent");
parent.addEventListener("click", function (event) {
  console.log(event.target); // button (element clicked)
  console.log(event.currentTarget); // div (element with listener)
});
```

**Mouse Event Properties:**

```javascript
element.addEventListener("click", function (event) {
  // Coordinates relative to viewport
  console.log(event.clientX); // X coordinate
  console.log(event.clientY); // Y coordinate

  // Coordinates relative to page
  console.log(event.pageX); // X coordinate (includes scroll)
  console.log(event.pageY); // Y coordinate (includes scroll)

  // Mouse button
  console.log(event.button); // 0 = left, 1 = middle, 2 = right

  // Modifier keys
  console.log(event.ctrlKey); // Ctrl key pressed
  console.log(event.shiftKey); // Shift key pressed
  console.log(event.altKey); // Alt key pressed
  console.log(event.metaKey); // Cmd key (Mac) or Windows key
});
```

**Keyboard Event Properties:**

```javascript
input.addEventListener("keydown", function (event) {
  // Key pressed
  console.log(event.key); // "a", "Enter", "ArrowUp", etc.
  console.log(event.code); // "KeyA", "Enter", "ArrowUp", etc.
  console.log(event.keyCode); // 65 (deprecated, use key or code)

  // Modifier keys
  console.log(event.ctrlKey);
  console.log(event.shiftKey);
  console.log(event.altKey);

  // Prevent default behavior
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
  }
});
```

**Preventing Default Behavior:**

```javascript
const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent navigation
  console.log("Link clicked but navigation prevented");
});

// Common use cases:
// - Prevent form submission
// - Prevent link navigation
// - Prevent context menu
```

**Stopping Propagation:**

```javascript
const button = document.querySelector("#button");
const parent = document.querySelector("#parent");

button.addEventListener("click", function (event) {
  console.log("Button clicked");
  event.stopPropagation(); // Stop event bubbling
});

parent.addEventListener("click", function (event) {
  console.log("Parent clicked"); // Won't run if stopPropagation() called
});

// Event phases:
// 1. Capture phase (top to target)
// 2. Target phase (at target)
// 3. Bubbling phase (target to top)
```

**Practice Task 8**:

1. Access event object properties
2. Use event.target and event.currentTarget
3. Get mouse coordinates
4. Handle keyboard events
5. Prevent default behavior
6. Stop event propagation

---

#### Step 9: Event Delegation (15 minutes)

**Concept:**
Instead of attaching listeners to each child element, attach one listener to the parent and handle events for all children.

**Why Use Event Delegation?**

- Performance: One listener instead of many
- Dynamic elements: Works with elements added after page load
- Less memory: Fewer event listeners

**Basic Example:**

```javascript
// Without delegation (inefficient)
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("Item clicked");
  });
});

// With delegation (efficient)
const list = document.querySelector("#list");
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("item")) {
    console.log("Item clicked:", event.target);
  }
});
```

**Using closest():**

```javascript
const list = document.querySelector("#list");

list.addEventListener("click", function (event) {
  const item = event.target.closest(".item");
  if (item) {
    console.log("Item clicked:", item);
    item.classList.toggle("active");
  }
});

// Works even if clicking nested elements inside .item
```

**Dynamic Elements:**

```javascript
const list = document.querySelector("#list");

// Event delegation works with dynamically added elements
list.addEventListener("click", function (event) {
  if (event.target.matches(".delete-btn")) {
    event.target.closest(".item").remove();
  }
});

// Add new item (delegation still works)
function addItem(text) {
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `${text} <button class="delete-btn">Delete</button>`;
  list.appendChild(item);
}

addItem("New item"); // Delete button works automatically!
```

**Practice Task 9**:

1. Implement event delegation for a list
2. Handle clicks on dynamically added elements
3. Use closest() for nested elements
4. Build an interactive list with add/remove functionality

---

#### Step 10: Forms and Events (15 minutes)

**Form Submission:**

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  // Or get individual inputs
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  // Validate and submit
  if (validateForm(data)) {
    submitForm(data);
  }
});
```

**Getting Form Values:**

```javascript
// Text inputs, textareas
const name = document.querySelector("#name").value;

// Checkboxes
const checkbox = document.querySelector("#subscribe");
if (checkbox.checked) {
  console.log("Subscribed");
}

// Radio buttons
const radios = document.querySelectorAll('input[name="gender"]');
const selected = Array.from(radios).find((radio) => radio.checked);
console.log(selected.value);

// Select dropdowns
const select = document.querySelector("#country");
console.log(select.value); // Selected value
console.log(select.selectedIndex); // Selected index
```

**Change vs Input Events:**

```javascript
const input = document.querySelector("#name");

// change - Fires when value changes AND element loses focus
input.addEventListener("change", function () {
  console.log("Value changed:", input.value);
});

// input - Fires immediately while typing
input.addEventListener("input", function () {
  console.log("Value:", input.value);
  // Good for real-time validation or live search
});

// Focus and blur
input.addEventListener("focus", function () {
  console.log("Input focused");
});

input.addEventListener("blur", function () {
  console.log("Input lost focus");
});
```

**Form Validation:**

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();

  // Validation
  if (!name) {
    showError("name", "Name is required");
    return;
  }

  if (!email || !email.includes("@")) {
    showError("email", "Valid email is required");
    return;
  }

  // If valid, submit
  console.log("Form is valid");
  form.submit();
});

function showError(fieldId, message) {
  const field = document.querySelector(`#${fieldId}`);
  field.classList.add("error");
  // Show error message...
}
```

**Practice Task 10**:

1. Handle form submission
2. Get values from different input types
3. Validate form inputs
4. Show validation errors
5. Use change and input events

---

#### Step 11: Local Storage (10 minutes)

**Local Storage Basics:**

```javascript
// Set item
localStorage.setItem("key", "value");
localStorage.setItem("username", "John");

// Get item
const username = localStorage.getItem("username");
console.log(username); // "John"

// Remove item
localStorage.removeItem("username");

// Clear all
localStorage.clear();

// Get key by index
localStorage.key(0); // First key

// Get number of items
localStorage.length;
```

**Storing Objects:**

```javascript
const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

// Convert to JSON string before storing
localStorage.setItem("user", JSON.stringify(user));

// Parse when retrieving
const stored = localStorage.getItem("user");
const user = JSON.parse(stored);
console.log(user.name); // "John"
```

**Session Storage:**

```javascript
// Same API as localStorage
sessionStorage.setItem("key", "value");
const value = sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();

// Difference:
// - localStorage: Persists until manually cleared
// - sessionStorage: Cleared when tab/window closes
```

**Storage Events:**

```javascript
// Listen for storage changes (in other tabs/windows)
window.addEventListener("storage", function (event) {
  console.log("Key changed:", event.key);
  console.log("Old value:", event.oldValue);
  console.log("New value:", event.newValue);
});
```

**Practice Task 11**:

1. Store and retrieve data from localStorage
2. Store objects using JSON
3. Build a simple app that persists data
4. Compare localStorage and sessionStorage

---

### Complete Practice Exercises (30-60 minutes)

**Exercise 1: Interactive Color Changer**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        width: 200px;
        height: 200px;
        background-color: #f0f0f0;
        border: 2px solid #333;
        margin: 20px;
      }
    </style>
  </head>
  <body>
    <div class="box" id="color-box"></div>
    <button id="red-btn">Red</button>
    <button id="blue-btn">Blue</button>
    <button id="green-btn">Green</button>
    <button id="random-btn">Random</button>

    <script>
      const box = document.querySelector("#color-box");
      const buttons = document.querySelectorAll("button");

      buttons.forEach((button) => {
        button.addEventListener("click", function () {
          const color = this.id.replace("-btn", "");
          if (color === "random") {
            const colors = ["red", "blue", "green", "yellow", "purple"];
            box.style.backgroundColor =
              colors[Math.floor(Math.random() * colors.length)];
          } else {
            box.style.backgroundColor = color;
          }
        });
      });
    </script>
  </body>
</html>
```

**Exercise 2: Todo List with Local Storage**

```javascript
// HTML structure needed:
// <input type="text" id="todo-input">
// <button id="add-btn">Add</button>
// <ul id="todo-list"></ul>

const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#todo-list");

// Load from localStorage
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  todos.forEach((todo) => addTodoToList(todo));
}

// Save to localStorage
function saveTodos() {
  const items = list.querySelectorAll("li");
  const todos = Array.from(items).map((item) => ({
    text: item.querySelector("span").textContent,
    completed: item.classList.contains("completed"),
  }));
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add todo to list
function addTodoToList(todo) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${todo.text}</span>
        <button class="delete-btn">Delete</button>
    `;

  if (todo.completed) {
    li.classList.add("completed");
  }

  list.appendChild(li);
  saveTodos();
}

// Event delegation for list
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest("li").remove();
    saveTodos();
  } else if (event.target.tagName === "SPAN") {
    event.target.closest("li").classList.toggle("completed");
    saveTodos();
  }
});

// Add new todo
addBtn.addEventListener("click", function () {
  const text = input.value.trim();
  if (text) {
    addTodoToList({ text, completed: false });
    input.value = "";
  }
});

// Load on page load
loadTodos();
```

**Exercise 3: Form Validation**

```javascript
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input[required]");

// Real-time validation
inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    validateField(this);
  });

  input.addEventListener("input", function () {
    if (this.classList.contains("error")) {
      validateField(this);
    }
  });
});

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  // Remove previous error
  field.classList.remove("error");
  const errorEl = field.parentElement.querySelector(".error-message");
  if (errorEl) {
    errorEl.remove();
  }

  // Validation rules
  if (field.hasAttribute("required") && !value) {
    isValid = false;
    errorMessage = "This field is required";
  } else if (field.type === "email" && value && !value.includes("@")) {
    isValid = false;
    errorMessage = "Please enter a valid email";
  } else if (field.type === "number" && value && isNaN(value)) {
    isValid = false;
    errorMessage = "Please enter a valid number";
  }

  // Show error
  if (!isValid) {
    field.classList.add("error");
    const error = document.createElement("span");
    error.className = "error-message";
    error.textContent = errorMessage;
    field.parentElement.appendChild(error);
  }

  return isValid;
}

// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isFormValid = true;
  inputs.forEach((input) => {
    if (!validateField(input)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    console.log("Form is valid!");
    // Submit form
  }
});
```

---

## Final Checklist

Before moving to Day 6, make sure you can:

- [ ] Select elements using various methods
- [ ] Create and append elements to DOM
- [ ] Modify element content (textContent, innerHTML)
- [ ] Manipulate attributes and classes
- [ ] Modify inline styles
- [ ] Traverse DOM (parent, children, siblings)
- [ ] Add and remove event listeners
- [ ] Access event object properties
- [ ] Prevent default behavior and stop propagation
- [ ] Implement event delegation
- [ ] Handle form submission and validation
- [ ] Get values from different input types
- [ ] Store and retrieve data from localStorage
- [ ] Build an interactive page with DOM manipulation
- [ ] Create a form with validation
- [ ] Build a Todo app with local storage

---

## Self-Assessment Questions

Test your understanding:

1. What's the difference between `querySelector` and `querySelectorAll`?
2. What's the difference between `textContent`, `innerText`, and `innerHTML`?
3. What's the difference between `target` and `currentTarget`?
4. Why use event delegation?
5. What's the difference between `change` and `input` events?
6. How do you store objects in localStorage?
7. What's the difference between localStorage and sessionStorage?
8. How do you prevent default form submission?
9. What's the difference between `children` and `childNodes`?
10. When would you use `closest()`?

---

## Common Mistakes to Avoid

1. **Using innerHTML with user input** - XSS security risk, use textContent
2. **Not preventing default form submission** - Form submits and page reloads
3. **Adding listeners to NodeList directly** - Need to iterate first
4. **Not storing objects as JSON** - localStorage only stores strings
5. **Forgetting event delegation** - Inefficient with many elements
6. **Not removing event listeners** - Memory leaks
7. **Using inline event handlers** - Use addEventListener instead
8. **Not checking if element exists** - Can cause errors
9. **Modifying DOM in loops inefficiently** - Batch DOM updates
10. **Not handling errors** - Validate inputs, check element existence

---

## DOM and Events Best Practices

**1. Cache DOM queries:**

```javascript
// Bad - queries DOM multiple times
document.querySelector("#button").addEventListener("click", function () {
  document.querySelector("#button").style.color = "red";
});

// Good - cache the element
const button = document.querySelector("#button");
button.addEventListener("click", function () {
  button.style.color = "red";
});
```

**2. Use event delegation:**

```javascript
// Bad - many listeners
items.forEach((item) => {
  item.addEventListener("click", handleClick);
});

// Good - one listener
list.addEventListener("click", function (event) {
  if (event.target.matches(".item")) {
    handleClick(event.target);
  }
});
```

**3. Use textContent for text:**

```javascript
// Good
element.textContent = userInput; // Safe

// Bad (if userInput contains HTML)
element.innerHTML = userInput; // XSS risk
```

**4. Validate before DOM manipulation:**

```javascript
// Good
const element = document.querySelector("#my-element");
if (element) {
  element.textContent = "Hello";
}
```

**5. Use classes for styling:**

```javascript
// Good
element.classList.add("active");

// Less ideal (harder to maintain)
element.style.color = "red";
element.style.backgroundColor = "blue";
```

---

## Additional Resources

- **MDN DOM Reference**: [developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- **MDN Events Reference**: [developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- **JavaScript.info DOM**: [javascript.info/document](https://javascript.info/document)
- **JavaScript.info Events**: [javascript.info/events](https://javascript.info/events)

---

## Next Steps

After completing Day 5:

1. Practice building interactive pages
2. Refactor code to use event delegation
3. Build more complex interactions
4. Get ready for Day 6: Asynchronous JavaScript
5. You'll learn Promises, async/await, and Fetch API!

**Congratulations on completing Day 5!** 🎉
