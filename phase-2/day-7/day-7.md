# Day 7: React Fundamentals - Part 1

## Overview

**Duration**: 4-5 hours
**Goal**: Introduction to **React**, setting up a development environment, and understanding the core building blocks: **Components**, **JSX**, and **Props**.
**Prerequisites**: Good understanding of HTML, CSS, and JavaScript (ES6 features like Arrow Functions, Destructuring, and Modules are essential).
**Outcome**: A working React development environment and a simple static page built with reusable components.

---

## What You'll Need

### Tools Required

1.  **Node.js & npm** (New!):
    *   React needs a "build step" to work efficiently. Node.js allows us to run these tools outside the browser.
    *   **Download**: [nodejs.org](https://nodejs.org/) (Download the **LTS** version).
    *   **Verify**: Open your terminal (Command Prompt/PowerShell) and type `node -v` and `npm -v`. You should see version numbers.
2.  **Text Editor**: VS Code (recommended).
    *   **Extension**: Install "ES7+ React/Redux/React-Native snippets" for helpful shortcuts.
3.  **Web Browser**: Chrome/Edge/Firefox.
4.  **React Developer Tools**:
    *   Install the browser extension for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/). This adds a "Components" tab to your DevTools.

### File Organization

*   We will generate a project folder using a tool called **Vite**. You don't need to manually create `day-7` folders yet.

### Resources

*   **React Official Docs**: [react.dev](https://react.dev/) (The best resource!)
*   **Vite**: [vitejs.dev](https://vitejs.dev/)

---

## Step-by-Step Learning Plan

### Hour 1: Introduction & Setup (60 minutes)

#### Step 1: What is React and Why Use It?

**Concept**:
In simple HTML/JS (Days 1-6), you manually selected elements (`document.getElementById`) and modified them. This is called **Imperative Programming** ("Do this, then do that").
**React** is **Declarative**. You tell React "I want the UI to look like *this* based on this data," and React handles the messy DOM updates for you. It also lets you build **Components**—custom HTML tags like `<UserProfile />` or `<Navbar />` that you can reuse.

**Analogy**:
*   *HTML/JS*: You are painting a portrait. If you want to change the shirt color, you have to paint over it carefully.
*   *React*: You are building with LEGOs. If you want a blue shirt, you just swap the "Shirt Block".

#### Step 2: Creating Your First React App

We will use **Vite** (pronounced "veet", French for "quick") to set up our project. It's faster and modern compared to the older "Create React App".

**Action (In Terminal)**:
1.  Navigate to your study folder: `cd Desktop/fullstack-study-guide/phase-2`
2.  Run the creation command:
    ```bash
    npm create vite@latest day-7-react-intro -- --template react
    ```
    *(Note: The `-- --template react` part selects the React preset automatically)*
3.  Follow the instructions on screen:
    ```bash
    cd day-7-react-intro
    npm install
    npm run dev
    ```
4.  You should see a URL like `http://localhost:5173/`. Open it in your browser.

**Tour of the Files**:
Open the `day-7-react-intro` folder in VS Code.
*   `index.html`: The entry point. It has a `<div id="root"></div>`. Your entire React app lives inside this empty div!
*   `src/main.jsx`: The JavaScript file that "injects" your React app into that element.
*   `src/App.jsx`: The main component. **This is where we will work.**
*   `package.json`: Lists dependencies (like `react`, `react-dom`).

**Practice Task 1**:
1.  Open `src/App.jsx`.
2.  Delete everything inside the `return (...)` so it looks like this:
    ```jsx
    function App() {
      return (
        <div>
          <h1>Hello World from React!</h1>
        </div>
      )
    }
    export default App;
    ```
3.  Save and look at your browser. It updates instantly!

---

### Hour 2: JSX - HTML in JavaScript (60 minutes)

#### Step 3: Understanding JSX

**Concept**:
You noticed we wrote HTML *inside* a JavaScript function. This syntax is called **JSX** (JavaScript XML). It looks like HTML, but it's stricter and more powerful.

**Rules of JSX**:
1.  **Return a single parent**: You can't return two sibling tags. Wrap them in a `<div>` or a Fragment `<> ... </>`.
    *   *Bad*: `return <h1>Hi</h1> <p>Text</p>`
    *   *Good*: `return <> <h1>Hi</h1> <p>Text</p> </>`
2.  **Close all tags**: `<img />`, `<br />`, `<input />`.
3.  **camelCase attributes**: `class` becomes `className`, `onclick` becomes `onClick`, `for` becomes `htmlFor`.

**Example**:
```jsx
function App() {
  const name = "Alex";
  const elementClass = "greeting";

  return (
    <div className={elementClass}>
      {/* This is a comment in JSX */}
      <h1>Welcome, {name}!</h1>
      <p>Today is {new Date().toLocaleDateString()}</p>
    </div>
  );
}
```

**Interpolation `{ }`**:
You can put *any* valid JavaScript expression inside curly braces `{ }`. Variables, math, function calls, etc.

**Practice Task 2**:
Modify `App.jsx`:
1.  Create a variable `myName`.
2.  Display an `h1` that says "Welcome back, [myName]".
3.  Add a paragraph that calculates `5 + 5` inside `{ }`.
4.  Add an image with `src` set to a strict string, but `alt` set to a variable.

#### Step 4: Styling in React

**Concept**:
You can style React components in a few ways:
1.  **CSS Files**: Import a CSS file (`import './App.css'`) and use `className`.
2.  **Inline Styles**: Pass an object to the `style` attribute. Note: properties are camelCase.

**Example (Inline Style)**:
```jsx
// Note the double curly braces: outer for JSX, inner for the object
<p style={{ color: "blue", fontSize: "20px" }}>Styled Text</p>
```

**Common Mistake**:
Writing `style="color: red;"` like regular HTML. This will throw an error. Use `style={{ color: "red" }}`.

---

### Hour 3: Components & Props (90 minutes)

#### Step 5: Components - Building Blocks

**Concept**:
A component is just a JavaScript function that returns JSX. Step 1 used `App` component. We can make more!

**Creating a Component**:
Create a new file `src/Header.jsx`:
```jsx
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="#">Home</a> | <a href="#">About</a>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
```

**Using a Component**:
In `App.jsx`:
```jsx
import Header from './Header'; // Import it

function App() {
  return (
    <div>
      <Header /> {/* Use it like a custom tag */}
      <main>
        <p>Main content here...</p>
      </main>
      <Header /> {/* Reused! */}
    </div>
  );
}
```

**Practice Task 3**:
1.  Create a `Footer.jsx` component that displays "© 2025 Your Name".
2.  Import and use it in `App.jsx` at the bottom.

#### Step 6: Props - Passing Data

**Concept**:
Components are reusable, but boring if they are always the same. **Props** (properties) let us pass custom data *into* a component, just like attributes in HTML (`src`, `href`) or arguments in a function.

**Syntax**:
1.  **Pass it**: `<WelcomeMessage user="Sam" age={25} />`
2.  **Receive it**: The component receives an object as the first argument, usually called `props`.

**Example**:
```jsx
// Child Component
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      {props.isAdmin && <span>(Admin)</span>}
    </div>
  );
}

// Parent Component (App)
function App() {
  return (
    <div>
      <UserCard name="Alice" age={28} />
      <UserCard name="Bob" age={32} isAdmin={true} />
    </div>
  );
}
```

**Destructuring Props (Better Way)**:
Instead of `props.name`, we usually destructure immediately:
```jsx
function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

**Practice Task 4**:
1.  Create a component `Song` that takes `title` and `artist` as props.
2.  In `App.jsx`, render three `<Song />` components with different data.

---

## Final Project: Static Profile Page

**Goal**: Build a profile page using React Components.

1.  **Setup**: Clean up your `App.jsx`.
2.  **Components**: Create the following files in `src/`:
    *   `ProfileImage.jsx`: Receives an image URL prop.
    *   `ProfileInfo.jsx`: Receives `name` and `bio` props.
    *   `Hobbies.jsx`: Displays a static list of hobbies (hardcoded is fine for now).
    *   `SocialLinks.jsx`: Receives links for Twitter/GitHub.
3.  **App**: Import all of them and arrange them nicely in `App.jsx`.
4.  **Style**: Use `App.css` to make it look decent (add padding, card borders).

---

## Checklist: End of Day 7

[ ] Installed Node.js and verified version.
[ ] Created a new project with `npm create vite@latest`.
[ ] Understood the project folder structure (`src`, `main.jsx`, `App.jsx`).
[ ] Wrote JSX with dynamic variables `{ }`.
[ ] Built at least 2 custom components (`Header`, `Footer`).
[ ] Passed data from Parent to Child using **Props**.
[ ] Used correct `className` instead of `class`.

---

## Self-Assessment Questions

1.  Why do React component names strictly start with a **Capital Letter** (e.g., `UserCard`, not `userCard`)?
2.  What is the difference between `class` in HTML and `className` in JSX?
3.  How do you pass a number or a boolean as a prop? Do you use quotes `""` or curly braces `{}`?
4.  Why can't you return two sibling `<div>`s side-by-side without a parent wrapper?
5.  If we change a prop passed to a component (e.g., name changes from "Bob" to "Alice"), what does React do?

---

## Common Mistakes to Avoid

1.  **Lowercasing Component Names**: `<myComponent />` will be treated as a built-in HTML tag by React and won't work. Always use `<MyComponent />`.
2.  **Forgetting to Export/Import**: Defining a component in a new file but forgetting to `export default ComponentName` or `import` it in `App.jsx` will crash the app.
3.  **Missing Closing Tags**: JSX is strict! Standard HTML `<br>` is invalid. You must use `<br />`.
4.  **Using `class` instead of `className`**: It might work with a warning, but it's invalid JSX because `class` is a reserved word in JavaScript.
5.  **Putting Objects directly in JSX**: You can render strings/numbers `{name}`, but you cannot render an entire object `{user}` directly. usage: `{user.name}`.
6.  **Confusing JS execution**: You can only put **expressions** (things that produce a value) inside `{ }`. You cannot put `if` statements or `for` loops inside JSX `{ }`. Use ternary operators `? :` or `map` instead.
