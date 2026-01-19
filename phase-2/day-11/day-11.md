# Day 11: TypeScript Fundamentals & Build Tools

## Overview

**Duration**: 4-5 hours
**Goal**: Transition from loosely typed JavaScript to strict **TypeScript** to catch errors before they happen. Understand modern Build Tools (**Vite**) and Package Managers (**npm**).
**Prerequisites**: Good grasp of JavaScript (Variables, Functions, Objects).
**Outcome**: A typed React project where the editor (VS Code) yells at you *before* you run the code if you make a mistake.

---

## What You'll Need

### Tools Required

1.  **Project**:
    *   `npm create vite@latest day-11-typescript -- --template react-ts`
    *   *(Note the `react-ts` template!)*
2.  **VS Code Extension**: "TypeScript Vue Plugin" (Volar) is not needed for React, but "Pretty TypeScript Errors" is a nice optional extension. VS Code supports TS out of the box.

### Resources

*   **TypeScript Handbook**: [typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html)
*   **React + TypeScript Cheatsheet**: [react-typescript-cheatsheet.netlify.app](https://react-typescript-cheatsheet.netlify.app/)

---

## Step-by-Step Learning Plan

### Hour 1: Why TypeScript? Basic Types (60 minutes)

#### Step 1: The Problem with JavaScript

**Concept**:
JavaScript is "Dynamically Typed".
```javascript
let add = (a, b) => a + b;
console.log(add(5, "10")); // Output: "510" (Wait, what? I wanted 15!)
```
JS doesn't care if `a` is a number or a string. This leads to bugs.

**TypeScript Solution**:
```typescript
let add = (a: number, b: number): number => a + b;
// add(5, "10"); // Error: Argument of type 'string' is not assignable to 'number'.
```

#### Step 2: Basic Types

**Syntax**:
```typescript
let username: string = "Alice";
let age: number = 30;
let isAdmin: boolean = true;
let hobbies: string[] = ["Coding", "Music"]; // Array of strings
let anything: any = "Avoid using this!"; // Escapes the type check
```

**Practice Task 1**:
1.  Open `src/App.tsx`.
2.  Create a function `greet(name: string, age: number)` that returns a string.
3.  Try calling it with `greet("Bob", "20")` and see the red squiggle.
4.  Fix it by passing a number.

---

### Hour 2: Interfaces & React Components (60 minutes)

#### Step 3: Interfaces (Defining Shapes)

**Concept**:
Instead of typing every single object property inline, we define a "Shape" or contract called an **Interface**.

**Syntax**:
```typescript
interface User {
  id: number;
  name: string;
  email?: string; // ? means Optional (can be missing)
}

const user1: User = { 
  id: 1, 
  name: "Alice" 
  // email is optional, so this is valid.
};
```

#### Step 4: Typing React Props

**Concept**:
In Day 7, we passed `props`. In TS, we *must* define what those props are.

**Syntax**:
```tsx
// 1. Define Props Interface
interface ButtonProps {
  label: string;
  onClick: () => void; // Function that returns nothing
  disabled?: boolean;
}

// 2. Apply to Component
function MyButton({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// Usage
// <MyButton label="Submit" onClick={() => {}} /> // OK
// <MyButton label={123} /> // Error: label must be string
```

**Practice Task 2**:
1.  Create a component `UserCard`.
2.  Define props: `name` (string), `email` (string), `role` ('admin' | 'user' - Union Type).
3.  In `App.tsx`, try to render `<UserCard name="Sam" role="superuser" />` and observe the error (because "superuser" is not allowed).

---

### Hour 3: Advanced Types & Generics (90 minutes)

#### Step 5: Union Types

**Concept**:
A variable can be one of multiple specific things.
```typescript
type Status = "loading" | "success" | "error";
let appStatus: Status = "loading";
// appStatus = "pending"; // Error!
```

#### Step 6: Generics (Making reusable functions)

**Concept**:
Imagine an `identity` function that returns whatever you give it.
If I give it a number, it returns a number. If string, string.
We use `<T>` as a placeholder for "Type".

**Syntax**:
```typescript
function wrapInArray<T>(item: T): T[] {
  return [item];
}

const numArr = wrapInArray(5); // Type: number[]
const strArr = wrapInArray("Hi"); // Type: string[]
```

**Why in React?**
Used often in Hooks and custom utility functions.
```tsx
const [user, setUser] = useState<User | null>(null);
```

**Practice Task 3**:
1.  Create a state variable that can hold either a `number` OR `null`.
2.  Initialize it as `null`.
3.  Add a button that sets it to `5`.

---

### Hour 4: Migration & Build Tools (60 minutes)

#### Step 7: Migrating to TypeScript

**Strategy**:
If you have a JS project:
1.  Install Typescript: `npm install typescript @types/react @types/react-dom`.
2.  Rename files from `.jsx` to `.tsx`.
3.  Fix the 1000 red errors one by one (The "red squiggle" driven development).

#### Step 8: Understanding Vite & npm

**Vite**:
*   Bundler: Takes your 100 files and squishes them into one `bundle.js` for the browser.
*   Server: updates immediately (HMR).

**npm (Node Package Manager)**:
*   `package.json`: The "Menu" of ingredients your app needs.
*   `node_modules`: The kitchen where the actual ingredients are stored (Huge folder, never commit to Git).
*   `package-lock.json`: The exact receipt of what versions were installed.

**Practice Task 4**:
1.  Open `package.json`. Look at `dependencies` vs `devDependencies`.
2.  "Types" (`@types/react`) are usually devDependencies because the browser doesn't need them; only VS Code needs them while you type.

---

## Final Project: Typed Todo List

**Goal**: Re-create the Todo List from Day 8, but strictly typed.

**Requirements**:
1.  **Interface**: Define `Todo` interface (`id`: number, `text`: string, `completed`: boolean).
2.  **State**: `const [todos, setTodos] = useState<Todo[]>([])`.
3.  **Events**: Type the event in `onChange`.
    ```tsx
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    }
    ```
4.  **Props**: Create a `TodoItem` component with defined props interface.

---

## Checklist: End of Day 11

[ ] Created a React project using the `react-ts` template.
[ ] Defined strict types for variables (`string`, `number`).
[ ] Created an `interface` to define the shape of an object or Props.
[ ] Used Union Types (`'left' | 'right'`) to restrict values.
[ ] Understood Generics `<T>` and used them in `useState<User | null>`.
[ ] Can read a TypeScript error in VS Code and understand what it demands.

---

## Self-Assessment Questions

1.  What is the file extension for a React component using TypeScript? (`.js` vs `.ts` vs `.tsx`?)
2.  What does the `?` mean in `interface User { email?: string }`?
3.  Why do we need `@types/react`? Why doesn't React just come with types? (Hint: React is written in JS, the types are a community add-on).
4.  If I receive an event `e` in `onChange`, what type should I give it?
5.  What is `any` type, and why should I avoid it like the plague?

---

## Common Mistakes to Avoid

1.  **"Any" Abuse**: Using `any` (`something: any`) turns off TypeScript checking. Use it only as a last resort. If you don't know the type, try `unknown` or look it up.
2.  **Renaming .js to .ts instead of .tsx**: If your file contains JSX (`<div>`), it MUST be `.tsx`. `.ts` is only for pure logic files.
3.  **Ignoring the red squiggles**: "It runs in the browser so it's fine." NO. TS errors will often block the build process later. Fix them now.
4.  **Complex Type Gymnastics**: Don't try to make the perfect generic mapped conditional type on Day 1. Simple Interfaces are enough for 95% of tasks.
5.  **Forgetting to type `useState`**: `useState([])` infers `never[]` (array of nothing). Always do `useState<string[]>([])`.
