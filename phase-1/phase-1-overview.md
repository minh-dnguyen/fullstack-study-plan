## **Phase 1: Frontend Foundations (Days 1-6)**

Goal: Master HTML, CSS, and JavaScript fundamentals

### **Day 1: HTML Fundamentals (3-4 hours)**

#### **HTML Document Structure**

* DOCTYPE declaration and HTML5 document structure  
* `<html>`, `<head>`, `<title>`, `<meta>`, `<body>` elements  
* Character encoding (`<meta charset="UTF-8">`)  
* Viewport meta tag for responsive design

#### **HTML Elements and Tags**

* Block-level elements: `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<ol>`, `<li>`  
* Inline elements: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<br>`  
* Text formatting: `<b>`, `<i>`, `<mark>`, `<small>`, `<sub>`, `<sup>`  
* Lists: ordered (`<ol>`), unordered (`<ul>`), definition lists (`<dl>`, `<dt>`, `<dd>`)

#### **HTML5 Semantic Elements**

* `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`  
* `<figure>` and `<figcaption>` for images/media  
* `<time>` for dates and times  
* When and why to use semantic elements (accessibility and SEO)

#### **Links and Navigation**

* Absolute URLs vs relative paths  
* Anchor tags: `href`, `target`, `title` attributes  
* Internal page navigation with ID anchors (`#section-id`)  
* Email links (`mailto:`) and phone links (`tel:`)

#### **Images and Media**

* `<img>` tag: `src`, `alt`, `width`, `height`, `loading` attributes  
* Responsive images: `srcset` and `sizes` attributes  
* Picture element for art direction  
* `<audio>` and `<video>` elements and their attributes

#### **Tables**

* `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`  
* `colspan` and `rowspan` attributes  
* Table accessibility: scope attribute, captions

#### **Forms \- Part 1**

* `<form>` element: `action`, `method`, `enctype` attributes  
* Input types: `text`, `email`, `password`, `number`, `tel`, `url`, `date`, `time`, `checkbox`, `radio`, `file`  
* `<label>` element and `for` attribute (accessibility)  
* `<button>` and input type `submit`, `reset`  
* `name` and `value` attributes for form submission

#### **HTML Attributes**

* Global attributes: `id`, `class`, `style`, `title`, `data-*` (custom data attributes)  
* `lang` attribute for language declaration  
* `role` and `aria-*` attributes for accessibility (ARIA basics)

#### **HTML Best Practices**

* Proper indentation and code formatting  
* Comments in HTML (`<!-- comment -->`)  
* Valid HTML and HTML validation tools  
* Naming conventions for IDs and classes

#### **Practice Exercises (1-2 hours)**

* Build a simple personal profile page with semantic HTML  
* Create a contact form with proper input types  
* Build a simple table with your weekly schedule

\---

### **Day 2: CSS Fundamentals (3-4 hours)**

#### **CSS Introduction**

* Three ways to add CSS: inline styles, `<style>` tag, external stylesheets  
* CSS syntax: selectors, properties, values  
* CSS comments (`/* comment */`)  
* Linking external CSS files: `<link rel="stylesheet" href="style.css">`

#### **CSS Selectors**

* Type/element selectors (`p`, `div`, `h1`)  
* Class selectors (`.className`)  
* ID selectors (`#idName`)  
* Universal selector (`*`)  
* Descendant selectors (space)  
* Child selectors (`>`)  
* Adjacent sibling (`+`) and general sibling (`~`)  
* Attribute selectors (`[attribute]`, `[attribute="value"]`)  
* Pseudo-classes: `:hover`, `:focus`, `:active`, `:visited`, `:first-child`, `:last-child`, `:nth-child()`  
* Pseudo-elements: `::before`, `::after`, `::first-line`, `::first-letter`  
* Specificity rules and cascade order

#### **CSS Box Model**

* Content, padding, border, margin  
* `box-sizing: content-box` vs `box-sizing: border-box`  
* Width and height properties  
* Padding: shorthand and individual properties (`padding-top`, `padding-right`, etc.)  
* Margin: shorthand, auto centering, margin collapse  
* Border: `border-width`, `border-style`, `border-color`, shorthand  
* `border-radius` for rounded corners

#### **CSS Colors and Backgrounds**

* Color values: named colors, hex (`#RRGGBB`), RGB (`rgb()`), RGBA (`rgba()`), HSL (`hsl()`)  
* `background-color` property  
* `background-image`, `background-repeat`, `background-position`, `background-size`  
* `background-attachment` (fixed, scroll)  
* `background` shorthand property

#### **Typography**

* Font properties: `font-family`, `font-size`, `font-weight`, `font-style`  
* `font` shorthand  
* Text properties: `color`, `text-align`, `text-decoration`, `text-transform`, `line-height`, `letter-spacing`, `word-spacing`  
* `text-shadow` for text effects  
* Google Fonts and web fonts (`@font-face`)

#### **Display and Positioning**

* Display types: `block`, `inline`, `inline-block`, `none`, `flex`, `grid`  
* `visibility: hidden` vs `display: none`  
* Position property: `static`, `relative`, `absolute`, `fixed`, `sticky`  
* `top`, `right`, `bottom`, `left` properties  
* `z-index` for stacking context

#### **Flexbox (CSS Flexible Box Layout)**

* Flex container: `display: flex`  
* Flex direction: `flex-direction: row`, `column`, `row-reverse`, `column-reverse`  
* Wrapping: `flex-wrap: nowrap`, `wrap`, `wrap-reverse`  
* Justify content: `justify-content: flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`  
* Align items: `align-items: stretch`, `flex-start`, `flex-end`, `center`, `baseline`  
* Align content: `align-content` (for multi-line)  
* Flex items: `flex-grow`, `flex-shrink`, `flex-basis`, `flex` shorthand  
* `align-self` for individual items  
* `order` property

#### **CSS Grid Layout**

* Grid container: `display: grid`  
* Defining columns and rows: `grid-template-columns`, `grid-template-rows`  
* Grid units: `fr` (fraction), `auto`, `minmax()`, `repeat()`  
* Grid gap: `gap`, `row-gap`, `column-gap`  
* Grid lines and areas: `grid-area`, `grid-row`, `grid-column`  
* `grid-template-areas` for layout planning  
* Implicit vs explicit grid  
* Alignment: `justify-items`, `align-items`, `justify-content`, `align-content`

#### **Responsive Design**

* Media queries: `@media` rule  
* Breakpoints: mobile-first vs desktop-first approach  
* Common breakpoints: mobile (320px-768px), tablet (768px-1024px), desktop (1024px+)  
* Media query syntax: `@media (max-width: 768px) { }`  
* Viewport meta tag review  
* Responsive images (revisited from HTML)

#### **CSS Transitions and Basic Animations**

* `transition` property: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`  
* Transition shorthand  
* Common transitions: color, opacity, transform  
* `transform` property: `translate()`, `rotate()`, `scale()`, `skew()`  
* `@keyframes` and `animation` property (basics)

#### **CSS Best Practices**

* CSS reset and normalize  
* Organizing CSS: comments, grouping properties  
* Naming conventions (BEM methodology basics)  
* Avoiding inline styles in production  
* Browser compatibility and vendor prefixes

#### **Practice Exercises (1-2 hours)**

* Style your Day 1 HTML profile page with CSS  
* Build a navigation bar using flexbox  
* Create a card layout using CSS Grid  
* Make your page responsive with media queries

\---

### **Day 3: JavaScript Fundamentals Part 1 (3-4 hours)**

#### **JavaScript Basics**

* JavaScript in HTML: `<script>` tag, inline vs external  
* `console.log()` for debugging and output  
* Comments: single-line (`//`) and multi-line (`/* */`)  
* Statements and semicolons  
* Case sensitivity

#### **Variables and Data Types**

* Variable declaration: `var`, `let`, `const` (difference and when to use)  
* Naming conventions: camelCase, allowed characters  
* Primitive data types:  
* `Number` (integers, floats, NaN, Infinity)  
* `String` (single quotes, double quotes, template literals)  
* `Boolean` (true, false)  
* `undefined` and `null`  
* `Symbol` (brief introduction)  
* `typeof` operator  
* Type coercion and type conversion: `Number()`, `String()`, `Boolean()`  
* `parseInt()` and `parseFloat()`

#### **Operators**

* Arithmetic: `+`, `-`, `*`, `/`, `%` (modulus), `**` (exponentiation)  
* Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`  
* Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`  
* Logical: `&&` (AND), `||` (OR), `!` (NOT)  
* Ternary operator: `condition ? value1 : value2`  
* Increment/decrement: `++`, `--`

#### **Strings**

* String methods: `.length`, `.toUpperCase()`, `.toLowerCase()`, `.trim()`  
* String methods: `.charAt()`, `.indexOf()`, `.lastIndexOf()`, `.substring()`, `.slice()`, `.replace()`  
* Template literals: backticks, `${}` interpolation  
* String concatenation with `+`

#### **Arrays**

* Creating arrays: array literals `[]`  
* Accessing elements: index notation \`array\[0\]\`  
* Array properties: `.length`  
* Array methods:  
* Modifying: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`  
* Searching: `.indexOf()`, `.includes()`, `.find()`, `.findIndex()`  
* Transformation: `.map()`, `.filter()`, `.reduce()` (basics)  
* Iteration: `.forEach()`, `.some()`, `.every()`  
* Multi-dimensional arrays  
* Spread operator with arrays (`...array`)

#### **Objects**

* Object literals: `{ key: value }`  
* Accessing properties: dot notation (`obj.property`) and bracket notation (\`obj\["property"\]\`)  
* Adding and modifying properties  
* Nested objects  
* Object methods: properties that are functions  
* `this` keyword in objects (basics)  
* Object methods: `Object.keys()`, `Object.values()`, `Object.entries()`  
* Destructuring objects: `const { prop1, prop2 } = obj`

#### **Control Structures**

* Conditional statements:  
* `if`, `else if`, `else`  
* `switch` statement: `case`, `break`, `default`  
* Loops:  
* `for` loop: initialization, condition, increment  
* `while` loop  
* `do...while` loop  
* `for...in` loop (for objects)  
* `for...of` loop (for arrays, strings)  
* Loop control: `break` and `continue`  
* Nested loops

#### **Functions \- Basics**

* Function declarations: `function name() { }`  
* Function expressions: `const name = function() { }`  
* Calling/invoking functions  
* Function parameters and arguments  
* Return statement and return values  
* Default parameters  
* Functions as first-class citizens

#### **Scope**

* Global scope vs local scope  
* Function scope (`var`)  
* Block scope (`let`, `const`)  
* Scope chain and lexical scoping  
* Hoisting (concept and behavior with `var`, `let`, `const`)

#### **Practice Exercises (1-2 hours)**

* Write functions to manipulate arrays and objects  
* Build a simple calculator function  
* Create functions that use loops and conditionals  
* Practice with string and array methods

\---

### **Day 4: JavaScript Fundamentals Part 2 (3-4 hours)**

#### **ES6+ Features \- Arrow Functions**

* Arrow function syntax: `const func = () => { }`  
* Single expression vs block body  
* Implicit return  
* Arrow functions and `this` binding (difference from regular functions)  
* When to use arrow functions vs regular functions

#### **ES6+ Features \- Destructuring**

* Array destructuring: \`const \[a, b\] \= array\`  
* Object destructuring: `const { prop1, prop2 } = obj`  
* Default values in destructuring  
* Rest element in destructuring: \`const \[first, ...rest\] \= array\`  
* Destructuring function parameters

#### **ES6+ Features \- Spread and Rest Operators**

* Spread operator (`...`) with arrays: copying, merging arrays  
* Spread operator with objects: copying, merging objects (ES2018)  
* Rest parameters in functions: `function(...args) { }`  
* Difference between spread and rest

#### **ES6+ Features \- Template Literals**

* Multi-line strings  
* Expression interpolation: `${variable}`, `${expression}`  
* Tagged templates (basics)

#### **Functions \- Advanced Concepts**

* Function declarations vs expressions vs arrow functions  
* Higher-order functions: functions that take/return functions  
* Callback functions: passing functions as arguments  
* `map()`, `filter()`, `reduce()` in detail:  
* `map()`: transform each element  
* `filter()`: select elements based on condition  
* `reduce()`: accumulate values into a single value  
* Method chaining  
* Closures: functions that remember their outer scope  
* Immediately Invoked Function Expressions (IIFE): `(function() { })()`

#### **Error Handling**

* `try`, `catch`, `finally` blocks  
* Error object and error types  
* `throw` statement: creating custom errors  
* Common error types: `SyntaxError`, `ReferenceError`, `TypeError`  
* Best practices for error handling

#### **Date and Time**

* `Date` object: creating dates  
* Date methods: `.getFullYear()`, `.getMonth()`, `.getDate()`, `.getHours()`, etc.  
* Formatting dates  
* Date arithmetic  
* `Date.now()` and timestamps

#### **Math Object**

* Common Math methods: `Math.random()`, `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.max()`, `Math.min()`, `Math.abs()`, `Math.pow()`, `Math.sqrt()`

#### **JSON (JavaScript Object Notation)**

* `JSON.stringify()`: converting objects to JSON strings  
* `JSON.parse()`: converting JSON strings to objects  
* JSON syntax rules  
* Working with JSON data

#### **ES6+ Modules (Introduction)**

* Export: `export` keyword, named exports, default exports  
* Import: `import` keyword, named imports, default imports  
* Module scripts: `<script type="module">`  
* File organization with modules

#### **Practice Exercises (1-2 hours)**

* Rewrite functions using arrow functions  
* Practice array methods: map, filter, reduce  
* Build a function that uses closures  
* Create error handling for user input validation  
* Build an interactive calculator or quiz application

\---

### **Day 5: DOM Manipulation and Events (3-4 hours)**

#### **DOM (Document Object Model) Introduction**

* What is the DOM: tree structure of HTML elements  
* `document` object: the root of the DOM tree  
* Nodes: element nodes, text nodes, attribute nodes  
* Parent, child, and sibling relationships

#### **Selecting Elements**

* `document.getElementById('id')`  
* `document.getElementsByClassName('class')`  
* `document.getElementsByTagName('tag')`  
* `document.querySelector('selector')` \- returns first match  
* `document.querySelectorAll('selector')` \- returns NodeList  
* Difference between NodeList and HTMLCollection  
* Converting NodeList to Array

#### **Manipulating Elements**

* Getting and setting text content: `.textContent` vs `.innerText` vs `.innerHTML`  
* Getting and setting HTML: `.innerHTML` (security considerations)  
* Creating elements: `document.createElement('tag')`  
* Appending elements: `.appendChild()`, `.append()`, `.prepend()`, `.insertBefore()`  
* Removing elements: `.removeChild()`, `.remove()`  
* Replacing elements: `.replaceChild()`, `.replaceWith()`  
* Cloning elements: `.cloneNode()`

#### **Manipulating Attributes and Classes**

* Getting and setting attributes: `.getAttribute()`, `.setAttribute()`, `.removeAttribute()`  
* Data attributes: `.dataset` property  
* Class manipulation: `.classList.add()`, `.classList.remove()`, `.classList.toggle()`, `.classList.contains()`  
* Style manipulation: `.style.property` (camelCase), `.style.cssText`  
* Getting computed styles: `window.getComputedStyle()`

#### **Traversing the DOM**

* Parent: `.parentElement`, `.parentNode`  
* Children: `.children`, `.childNodes`, `.firstElementChild`, `.lastElementChild`  
* Siblings: `.nextElementSibling`, `.previousElementSibling`  
* `.closest()` method to find nearest ancestor

#### **Events \- Introduction**

* What are events: user interactions and browser events  
* Event-driven programming  
* Event types: click, mouseover, mouseout, mousedown, mouseup, keydown, keyup, keypress, submit, focus, blur, change, input, load, resize, scroll

#### **Event Listeners**

* Adding event listeners: `.addEventListener('event', handler)`  
* Event handler functions  
* Removing event listeners: `.removeEventListener()`  
* Inline event handlers (not recommended): `onclick="..."` in HTML  
* Multiple event listeners on same element

#### **Event Object**

* Event object properties: `.target`, `.currentTarget`, `.type`, `.timeStamp`  
* Mouse events: `.clientX`, `.clientY`, `.pageX`, `.pageY`, `.button`  
* Keyboard events: `.key`, `.code`, `.keyCode` (deprecated), `.ctrlKey`, `.shiftKey`, `.altKey`  
* Preventing default behavior: `.preventDefault()`  
* Stopping propagation: `.stopPropagation()`

#### **Event Delegation**

* Concept: attaching listener to parent instead of multiple children  
* Using `.target` to identify which child was clicked  
* Benefits: performance and dynamic elements

#### **Forms and Events**

* Form submission: `submit` event  
* Form validation: checking inputs before submission  
* Getting form values: `.value` property  
* Radio buttons and checkboxes: `.checked` property  
* Select dropdowns: `.selectedIndex`, `.value`  
* `change` vs `input` events

#### **Local Storage**

* `localStorage.setItem('key', 'value')`  
* `localStorage.getItem('key')`  
* `localStorage.removeItem('key')`  
* `localStorage.clear()`  
* Storing objects: using `JSON.stringify()` and `JSON.parse()`  
* `sessionStorage` (difference from localStorage)  
* Storage events

#### **Practice Exercises (1-2 hours)**

* Build an interactive page with DOM manipulation  
* Create a form with validation  
* Build a simple color changer or theme switcher  
* Practice event delegation with dynamic lists  
* Start building a Todo app with local storage

\---

### **Day 6: Asynchronous JavaScript (3-4 hours)**

#### **Asynchronous Programming Concepts**

* Synchronous vs asynchronous code  
* JavaScript is single-threaded  
* Call stack, event loop, callback queue  
* Blocking vs non-blocking operations  
* Why async is needed: network requests, file operations, timers

#### **Timers**

* `setTimeout(function, delay)`: execute after delay  
* `setInterval(function, interval)`: execute repeatedly  
* Clearing timers: `clearTimeout()`, `clearInterval()`  
* Using timers for animations and delays

#### **Callbacks**

* Callback functions: functions passed as arguments  
* Callback pattern for async operations  
* Callback hell (nested callbacks) and its problems  
* Error handling with callbacks (error-first pattern)

#### **Promises**

* What are Promises: objects representing eventual completion/failure  
* Promise states: pending, fulfilled, resolved, rejected  
* Creating Promises: `new Promise((resolve, reject) => { })`  
* `.then()`: handling resolved promises  
* `.catch()`: handling rejected promises  
* `.finally()`: executing code regardless of outcome  
* Chaining promises: returning values from `.then()`  
* Promise.all(): waiting for all promises  
* Promise.race(): first promise to settle  
* Promise.allSettled(): all promises complete

#### **async/await**

* `async` functions: functions that return promises  
* `await` keyword: waiting for promise to resolve  
* Error handling with `try/catch` and async/await  
* Sequential vs parallel execution with await  
* Using `Promise.all()` with async/await

#### **Fetch API**

* Making HTTP requests: `fetch(url)`  
* Fetch returns a Promise  
* Response object: `.json()`, `.text()`, `.blob()`, `.status`, `.ok`  
* GET requests (default)  
* POST requests: `fetch(url, { method: 'POST', body: data, headers: {...} })`  
* Request options: `method`, `headers`, `body`, `mode`, `credentials`  
* Error handling with fetch (network errors vs HTTP errors)  
* Working with JSON APIs

#### **Modules (ES6) \- Deep Dive**

* Export syntax: `export const/function`, `export default`  
* Import syntax: `import { named }`, `import default`, `import * as`  
* Default vs named exports  
* Re-exporting: `export { } from`  
* Dynamic imports: `import()` function  
* Module scope and variables

#### **Closures \- Advanced**

* Closure definition: function with access to outer scope  
* Examples: counter function, private variables  
* Common use cases: data privacy, function factories  
* Closures in loops (common pitfall and solutions)

#### **`this` Keyword**

* `this` in global context  
* `this` in functions (strict mode vs non-strict)  
* `this` in methods (object methods)  
* `this` in arrow functions (lexical binding)  
* `.bind()`, `.call()`, `.apply()` methods  
* Common `this` pitfalls

#### **Practice Exercises and Project (2-3 hours)**

* Practice with Promises and async/await  
* Fetch data from a public API (e.g., JSONPlaceholder, OpenWeatherMap)  
* Handle errors in async code  
* Complete Todo app with local storage  
* Add features: edit, delete, filter todos  
* Integrate async operations if applicable

\---

### **Week 1 Project: Build a Complete Todo Application**

Requirements:

* Responsive HTML structure with semantic elements  
* Styled with CSS (use Flexbox or Grid for layout)  
* JavaScript functionality:  
* Add new todos  
* Mark todos as complete  
* Delete todos  
* Edit todos  
* Filter todos (all, active, completed)  
* Store todos in localStorage  
* Load todos on page load  
* Clean, modern UI design  
* Form validation  
* Error handling

Bonus Features:

* Use async/await for any API calls (if you add a backend later)  
* Add animations/transitions with CSS  
* Dark mode toggle with localStorage persistence

