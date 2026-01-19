# Day 8: React Fundamentals - Part 2 (State & Interactivity)

## Overview

**Duration**: 4-5 hours
**Goal**: Breathe life into your static components using **State**, handle user **Events** (clicks, inputs), and learn how to display **Lists** of data dynamically.
**Prerequisites**: Day 7 (Components, JSX, Props).
**Outcome**: Build an interactive "Task Tracker" or "Blog List" where you can add, delete, and interact with items.

---

## What You'll Need

### Tools Required

1.  **Your Day 7 Project**: We can continue working in the same project (`day-7-react-intro`) or create a new one.
    *   *Recommendation*: Create a new one for a fresh start: `npm create vite@latest day-8-state -- --template react`.
2.  **React Developer Tools**: extremely important today for watching "State" change in real-time.

### Resources

*   **React Docs - State**: [react.dev/learn/state-a-component-memory](https://react.dev/learn/state-a-component-memory)
*   **React Docs - Rendering Lists**: [react.dev/learn/rendering-lists](https://react.dev/learn/rendering-lists)

---

## Step-by-Step Learning Plan

### Hour 1: Events and State (`useState`) (60 minutes)

#### Step 1: Handling Events

**Concept**:
In HTML, you used `onclick="..."`. In React, we use `onClick={function}`. Note the camelCase and the curly braces. We pass the *function definition*, we do not call it immediately (i.e., no `()`).

**Example**:
```jsx
function Button() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    // Good: Passing the function
    <button onClick={handleClick}>Click Me</button>
    
    // Bad: Calling the function immediately (runs when page loads!)
    // <button onClick={handleClick()}>Don't do this</button>
  );
}
```

**Common Events**:
*   `onClick` (Buttons, Divs)
*   `onChange` (Input fields)
*   `onSubmit` (Forms)

#### Step 2: State - The Memory of a Component

**Concept**:
Regular variables in functions `let count = 0` "forget" their value every time the function (component) re-runs/renders. To make a component "remember" data (like a counter, or text in an input), we use **State**.

We use a "Hook" called `useState`.

**Syntax**:
```jsx
import { useState } from 'react'; // 1. Import it

function Counter() {
  // 2. Declare state
  // [currentValue, functionToUpdateIt] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count is: {count}</p>
      {/* 3. Update state on click */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**How it works**:
1.  React calls `Counter()`. `useState(0)` initializes `count` to 0.
2.  User clicks button -> `setCount(1)` is called.
3.  React **re-renders** (calls) `Counter()` again.
4.  This time, `useState` remembers the previous value was 1, so `count` is now 1.
5.  The HTML updates automatically.

**Practice Task 1**:
1.  Create a `Counter` component.
2.  Add a "Decrement" button.
3.  Add a "Reset" button that sets count back to 0.
4.  *Bonus*: Prevent the counter from going below 0 (using an `if` inside the handler).

---

### Hour 2: Input Handling & Conditional Rendering (60 minutes)

#### Step 3: Controlled Inputs (Forms)

**Concept**:
In React, we want the "State" to be the single source of truth. The input field shouldn't just hold its own text; it should reflect a state variable.

**Pattern**:
1.  Variable: `const [text, setText] = useState("")`
2.  Input: `<input value={text} onChange={(e) => setText(e.target.value)} />`

**Example**:
```jsx
function MyInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text" 
        placeholder="Type your name..."
        value={name} // Locked to state
        onChange={(e) => setName(e.target.value)} // Update state on typing
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
```

**Why do this?**
It allows us to manipulate the input easily: converting to uppercase instantly, validating length, or clearing it after a button click.

#### Step 4: Conditional Rendering

**Concept**:
Show or hide elements based on logic (usually State).
We don't use `if` *inside* JSX. We use:
1.  **Ternary Operator** (`condition ? true : false`)
2.  **Logical AND** (`condition && showThis`)

**Examples**:
```jsx
function UserStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Ternary: If/Else logic */}
      {isLoggedIn ? <span>Welcome back!</span> : <button onClick={() => setIsLoggedIn(true)}>Log In</button>}
      
      {/* Logical AND: specific check */}
      {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Log Out</button>}
    </div>
  );
}
```

**Practice Task 2**:
1.  Create a simple "Secret Message" app.
2.  Have a button that says "Show Secret".
3.  When clicked, the button text changes to "Hide Secret", and a paragraph of text appears.
4.  Use `useState` (boolean) to track visibility.

---

### Hour 3: Rendering Lists (Keys & Maps) (60 minutes)

#### Step 5: The `.map()` Method

**Concept**:
You often have an array of data (e.g., list of comments, products). In React, we use the JavaScript `.map()` method to transform that array of data into an array of JSX elements.

**Rule**:
Every item in the list needs a unique `key` prop. This helps React track which items changed, were added, or removed.

**Example**:
```jsx
function TaskList() {
  const tasks = [
    { id: 1, text: "Buy Milk" },
    { id: 2, text: "Walk Dog" },
    { id: 3, text: "Learn React" }
  ];

  return (
    <ul>
      {tasks.map((task) => (
        // The 'key' is essential! unique ID preferred over index.
        <li key={task.id}>
          {task.text}
        </li>
      ))}
    </ul>
  );
}
```

#### Step 6: Managing a List in State

**Concept**:
To add or remove items from a list, the array effectively needs to be in `useState`. Remember, we cannot use `.push()` because that mutates the variable directly. We must create a *new* array.

**Adding an Item**: `setList([...oldList, newItem])`
**Removing an Item**: `setList(oldList.filter(item => item.id !== idToRemove))`

**Example**:
```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" }
  ]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (!inputText) return;
    const newTodo = { id: Date.now(), text: inputText };
    setTodos([...todos, newTodo]); // Spread operator to copy + add
    setInputText(""); // Clear input
  };

  return (
    <div>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Practice Task 3**:
1.  Implement the TodoList above.
2.  Add a "Delete" button next to each item.
3.  Implement the delete function using `.filter()`.

---

### Hour 4: Introduction to `useEffect` (60 minutes)

#### Step 7: The Effect Hook

**Concept**:
Components are usually pure: they take props/state and return JSX.
Sometimes you need to reach *outside* the component to synchronize with external systems: changing the document title, setting up a timer, or fetching data. We use `useEffect`.

**Syntax**:
```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Code to run
}, [dependencies]);
```

**Common Patterns**:
1.  **Run once on mount** (like `window.onload`): Dependency array is `[]`.
2.  **Run on every change**: No dependency array (Rarely used, dangerous).
3.  **Run when specific variable changes**: `[count]` (Runs when `count` updates).

**Example (Document Title)**:
```jsx
function PageTitleLogic() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This runs every time 'count' changes
    document.title = `You clicked ${count} times`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
}
```

**Practice Task 4**:
1.  Add a `useEffect` to your TodoList ap.
2.  Make it so every time you add a todo, `console.log("Total todos:", todos.length)` runs.
3.  *Bonus*: Use `useEffect` to alert "Welcome!" only once when the page first loads.

---

## Final Project: Interactive Blog Post Editor

**Goal**: Combine Input, State, Lists, and Conditional Rendering.

**Scope**:
1.  **View Mode**: Shows a list of blog posts (Title, Body).
2.  **Create Mode**: A form to add a new post.
    *   Toggle between "View" and "Create" using a button (Conditional Rendering).
3.  **Data**: Store posts in `useState`.
4.  **Delete**: Ability to delete a specific post.
5.  **Bonus**: "Like" button on each post that increases a counter for that specific post.

**Steps**:
1.  `posts` state: array of objects `{id, title, body, likes}`.
2.  `showForm` state: boolean.
3.  Form inputs linked to `titleInput` and `bodyInput` states.
4.  Map through `posts` to display them.

---

## Checklist: End of Day 8

[ ] Comfortable using `useState` for numbers, strings, and booleans.
[ ] Can handle `onClick` and `onChange` events properly.
[ ] Understands "Controlled Components" (Inputs tied to state).
[ ] Can render an array of objects using `.map()`.
[ ] Knows why the `key` prop is mandatory in lists.
[ ] Knows how to add/remove items from a state array immutably (`...spread` and `.filter`).
[ ] Basic understanding of `useEffect` with an empty dependency array `[]`.

---

## Self-Assessment Questions

1.  Why can't I just say `count = count + 1` in React? Why do I need `setCount`?
2.  What happens if I forget to providing a `key` prop in a list?
3.  In `useState`, what is the first item in the returned array? What is the second?
4.  How do I run a piece of code **only once** when the component first appears on the screen?
5.  What is the "Spread Operator" (`...`) and why is it useful for arrays in React?

---

## Common Mistakes to Avoid

1.  **Mutating State Directly**: Writing `todos.push(newItem)` will **not** trigger a re-render. React won't know data changed. Always use `setTodos([...todos, newItem])`.
2.  **Infinite Loops in useEffect**: Calling `setState` inside a `useEffect` without a dependency array will cause: Render -> Effect -> SetState -> Render -> Effect... Crash.
3.  **Invoking Events Immediately**: `onClick={handleClick()}` runs immediately. Use `onClick={handleClick}` or `onClick={() => handleClick()}`.
4.  **Missing Keys in Lists**: React will give a warning in the console, and list updates might behave buggily.
5.  **State Updates are Asynchronous**: If you do `setCount(count+1); console.log(count);` immediately after, the log will show the *old* value. React schedules the update for the next render.
