# Day 10: React Advanced - Part 2 (State Management & Performance)

## Overview

**Duration**: 4-5 hours
**Goal**: Master complex state management. Use **useReducer** for component logic, learn **Redux Toolkit** for global state (scaling beyond Context), and optimize app **Performance** (loading speed).
**Prerequisites**: Day 9 (Context API).
**Outcome**: A collaborative-ready coding style with centralized state (Redux) and an app that loads blazing fast using Code Splitting.

---

## What You'll Need

### Tools Required

1.  **Project**: Continue from Day 9, or start fresh:
    *   `npm create vite@latest day-10-redux -- --template react`
    *   Install Redux: `npm install @reduxjs/toolkit react-redux`
2.  **Redux DevTools**:
    *   Install the [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) browser extension.

### Resources

*   **Redux Toolkit (RTK) Tutorials**: [redux-toolkit.js.org/tutorials/quick-start](https://redux-toolkit.js.org/tutorials/quick-start)
*   **React Docs - usage of useReducer**: [react.dev/reference/react/useReducer](https://react.dev/reference/react/useReducer)

---

## Step-by-Step Learning Plan

### Hour 1: The `useReducer` Hook (60 minutes)

#### Step 1: Why `useReducer`?

**Concept**:
`useState` is great for simple things (numbers, strings). But if you have complex logic (e.g., "When User adds item: Check stock, deduct inventory, add to cart, update total price"), `useState` gets messy with many scattered function calls.
**Reducers** consolidate all logic into one place.

#### Step 2: How it Works

**Analogy**:
*   **useState**: You manually edit the database.
*   **useReducer**: You send a "Command" (Action) to a "Manager" (Reducer), and the Manager decides how to update the database.

**Syntax**:
```jsx
import { useReducer } from 'react';

// 1. The Reducer Function (The Manager)
// (state, action) => new state
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error("Unknown action");
  }
}

function Counter() {
  // 2. Initialize
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      {/* 3. Dispatch Actions (Commands) */}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

**Practice Task 1**:
1.  Create a "Bank Account" component using `useReducer`.
2.  State: `{ balance: 0 }`.
3.  Actions: `DEPOSIT` (add 100), `WITHDRAW` (subtract 100).
4.  Rule: Prevent withdrawal if balance is 0.

---

### Hour 2: Redux Toolkit (RTK) Setup (60 minutes)

#### Step 3: Global State with Redux

**Concept**:
Context is built-in, but can have performance issues with high-frequency updates. **Redux** is the industry standard for strict, predictable global state. **Redux Toolkit (RTK)** is the modern, "easy" way to write Redux.

**Core Terms**:
1.  **Store**: The single huge object holding ALL data.
2.  **Slice**: A section of the store (e.g., `userSlice`, `cartSlice`).
3.  **Dispatch**: Sending an action.
4.  **Selector**: Reading data.

#### Step 4: Setting up Store & Slice

**1. Create a Slice (`features/counterSlice.js`)**:
```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // In RTK, we can "mutate" state directly (thanks to Improper library)!
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Data passed with action represents 'payload'
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

**2. Configure Store (`store.js`)**:
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // user: userReducer (future)
  },
});
```

**3. Provide Store (`main.jsx`)**:
```jsx
// Wrap the whole app, similar to Context
import { Provider } from 'react-redux';
import { store } from './store';

// ...
<Provider store={store}>
  <App />
</Provider>
```

**Practice Task 2**:
Set up the files above in your project. Ensure the app runs without errors (even if you haven't used the state yet).

---

### Hour 3: Using Redux in Components (60 minutes)

#### Step 5: useSelector & useDispatch

Now we connect our components to the Redux brain.

**Syntax**:
```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount } from './features/counterSlice';

function CounterComponent() {
  // Read Data
  const count = useSelector((state) => state.counter.value);
  
  // Write Data
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
```

**Comparison**:
*   *Context*: `useContext(MyContext)`
*   *Redux*: `useSelector(state => state.part)` + `useDispatch()`

**Practice Task 3**:
1.  Create a `counterSlice`.
2.  Build a `CounterComponent` that reads/writes to Redux.
3.  Open **Redux DevTools** in your browser (F12 -> Redux tab). Click buttons and watch the actions appear in the log. This Time Travel debugging is Redux's superpower!

---

### Hour 4: Performance & Optimization (60 minutes)

#### Step 6: Code Splitting (`React.lazy`)

**Concept**:
By default, React bundles your whole app into one huge JS file. If your app is 5MB, the user sees a white screen until 5MB loads.
**Code Splitting** breaks it into chunks. "Only load the Admin Dashboard code when the user actually goes to /admin."

**Syntax**:
```jsx
import React, { Suspense } from 'react';

// Standard import (Load immediately)
// import About from './About'; 

// Lazy import (Load on demand)
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div>
      {/* Suspense shows a spinner while the chunk downloads */}
      <Suspense fallback={<div>Loading page...</div>}>
        <About />
      </Suspense>
    </div>
  );
}
```

#### Step 7: Memoization (`useMemo`)

**Concept**:
If you have a slow function (e.g., calculating 5000 prime numbers), React runs it *every render*.
`useMemo` caches the result. "If inputs X and Y haven't changed, use the cached answer."

**Example**:
```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ list }) {
  // Only re-calculate if 'list' changes
  const sortedList = useMemo(() => {
    console.log("Expensive sorting...");
    return list.sort((a, b) => a - b);
  }, [list]);

  return <div>{sortedList.join(", ")}</div>;
}
```

**Practice Task 4**:
1.  In your Router setup (from Day 9), make the Routes "Lazy".
2.  Wrap your `<Routes>` in a `<Suspense>`.
3.  Navigate around and verify it still works.

---

## Final Project: Redux E-Commerce Refactor

**Goal**: Convert your Day 9 Cart to use Redux Toolkit.

**Steps**:
1.  **Delete** your `CartContext`.
2.  **Create** `features/cartSlice.js`.
    *   State: `{ items: [] }`
    *   Reducers: `addToCart` (push to array), `removeFromCart` (filter array), `clearCart`.
3.  **Store**: Add `cartReducer` to `store.js`.
4.  **Refactor Components**:
    *   `ProductPage`: Use `dispatch(addToCart(product))` instead of context.
    *   `CartPage`: Use `useSelector(state => state.cart.items)` to display list.
    *   `Navbar`: Use `useSelector` to show cart count badge.

---

## Checklist: End of Day 10

[ ] Understood `useReducer` and the Action/State pattern.
[ ] Installed `@reduxjs/toolkit` and `react-redux`.
[ ] Configured a `store` and provided it to the app.
[ ] Created a Slice with `createSlice`.
[ ] Accessed data with `useSelector` and updated it with `useDispatch`.
[ ] Used React DevTools to inspect state changes.
[ ] Implemented Lazy Loading for at least one Route component.

---

## Self-Assessment Questions

1.  What is the difference between `state` in `useState` vs `state` in Redux?
2.  Why do we modify `state` directly in Redux Toolkit reducers (e.g., `state.value += 1`)? Is it actually mutating the real state? (Hint: background library called Immer).
3.  If I dispatch an action, does the component automatically re-render? Why/Why not?
4.  What does `<Suspense>` do?
5.  Why shouldn't I use `useMemo` everywhere? (Cost of memory vs cost of computation).

---

## Common Mistakes to Avoid

1.  **Direct Mutation (Outside Redux)**: mutating state in `useState` or `useReducer` directly (`state.value++`) breaks React. RTK allows it *only* inside `createSlice` because it handles it safely for you.
2.  **Over-usage of Redux**: Putting simple UI state (like "isDropdownOpen") in Redux. Keep simple things in `useState`. Redux is for shared data.
3.  **Forgetting `return state`**: In `useReducer` (not RTK), if you forget to return the new state, the app crashes or state becomes undefined.
4.  **Suspense Missing**: Using `React.lazy` without wrapping it in `Suspense` will throw an error.
5.  **Complexity Shock**: Redux has a lot of boilerplate. Don't panic. It's a pattern. Copy-paste the structure (Store, Slice, Provider) until you memorize it.
