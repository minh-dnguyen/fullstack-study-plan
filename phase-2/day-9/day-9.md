# Day 9: React Advanced - Part 1 (Router & Context)

## Overview

**Duration**: 4-5 hours
**Goal**: Move beyond single-page interactions. Learn to build **Multi-Page Applications** using **React Router** and manage global data (like a user login or shopping cart) using the **Context API**.
**Prerequisites**: Day 7 (Components) & Day 8 (State, Effects).
**Outcome**: Build a multi-page website with navigation a global "Theme" or "User Auth" state that persists across pages.

---

## What You'll Need

### Tools Required

1.  **Project**: Start a fresh project to practice routing cleanly.
    *   Command: `npm create vite@latest day-9-advanced -- --template react`
    *   Install Router: `npm install react-router-dom` (Vital step!)
2.  **VS Code Extensions**: Continue using ES7+ React snippets.

### Resources

*   **React Router Tutorial**: [reactrouter.com/en/main/start/tutorial](https://reactrouter.com/en/main/start/tutorial)
*   **React Docs - Context**: [react.dev/learn/passing-data-deeply-with-context](https://react.dev/learn/passing-data-deeply-with-context)

---

## Step-by-Step Learning Plan

### Hour 1: React Router Basics (60 minutes)

#### Step 1: The Single Page Application (SPA) Concept

**Concept**:
In traditional websites, clicking a link downloads a whole new HTML page. In React (SPAs), we only load the HTML *once*. When you click a link, JavaScript intercepts it, changes the URL in the browser bar, and swaps the components shown on screen. This is instant and feels like a native app.

**Library**: `react-router-dom` is the standard library for this.

#### Step 2: Setting up Routes

**Setup**:
1.  In `main.jsx`, wrap your `<App />` with `<BrowserRouter>`.
    ```jsx
    import { BrowserRouter } from 'react-router-dom';
    // ...
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ```

2.  In `App.jsx`, define your routes.
    ```jsx
    import { Routes, Route, Link } from 'react-router-dom';

    function Home() { return <h2>Home Page</h2>; }
    function About() { return <h2>About Page</h2>; }

    function App() {
      return (
        <div>
          <nav>
            {/* NEVER use <a href> in React Router! It triggers a page reload. */}
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      );
    }
    ```

**Practice Task 1**:
1.  Create 3 components: `Home`, `About`, `Contact`.
2.  Set up React Router in `App.jsx`.
3.  Create a navigation bar using `<Link>` to switch between them.

---

### Hour 2: Dynamic Routes & Navigation (60 minutes)

#### Step 3: URL Parameters (`useParams`)

**Concept**:
Sometimes URLs have dynamic IDs, like `/product/123` or `/user/alice`. We use a "colon" syntax in the route path to capture this.

**Syntax**:
1.  **Route**: `<Route path="/product/:id" element={<ProductDetail />} />`
2.  **Component**:
    ```jsx
    import { useParams } from 'react-router-dom';

    function ProductDetail() {
      const { id } = useParams(); // Extracts '123' from URL
      return <h2>Displaying Product ID: {id}</h2>;
    }
    ```

#### Step 4: Programmatic Navigation (`useNavigate`)

**Concept**:
Sometimes you need to change pages automatically (e.g., after a form submission or login), not just when a user clicks a link.

**Syntax**:
```jsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ... perform login logic ...
    navigate('/dashboard'); // Jump to dashboard page
  };

  return <button onClick={handleLogin}>Log In</button>;
}
```

**Practice Task 2**:
1.  Create a `UserProfile` component that accepts a username from the URL (`/user/:username`).
2.  Create a `Login` component with a button. When clicked, it should navigate to `/user/YOUR_NAME`.

---

### Hour 3: Context API - Global State (90 minutes)

#### Step 5: The "Prop Drilling" Problem

**Concept**:
Imagine you have `App -> Layout -> Header -> UserMenu -> Avatar`.
If `App` has the `user` data, you have to pass it as props through *all* those layers, even though `Layout` and `Header` don't care about it. This is called **Prop Drilling**, and it's messy.

**Solution**: **Context** lets you "teleport" data from the top (`App`) directly to the bottom (`Avatar`) without passing it through the middle.

#### Step 6: Using Context

**3-Step Process**:
1.  **Create**: `export const UserContext = createContext()`
2.  **Provide**: Wrap parent with `<UserContext.Provider value={...}>`
3.  **Consume**: Child uses `useContext(UserContext)`

**Example (Theme Switcher)**:
```jsx
// 1. Setup (usually in a separate file, e.g., ThemeContext.js)
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // Toolbar doesn't need props! It just holds the button.
  return <ThemeButton />;
}

function ThemeButton() {
  // 3. Consume
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ background: theme === 'dark' ? '#333' : '#FFF' }}
    >
      Current Theme: {theme}
    </button>
  );
}
```

**Practice Task 3**:
1.  Create a `UserContext`.
2.  In `App`, create a state `username`.
3.  Wrap everything in the Provider.
4.  Create a deeply nested component (e.g., `App -> Navbar -> Profile`) that displays "Hello, {username}" using `useContext`.

---

### Hour 4: Custom Hooks (Brief Intro) & Project (60 minutes)

#### Step 7: Introduction to Custom Hooks

**Concept**:
If you reuse the same logic (e.g., fetching data, toggling a boolean) in many components, you can extract it into a function starting with `use...`.

**Example**:
```jsx
// useWindowWidth.js
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// In any component:
const width = useWindowWidth();
```

---

## Final Project: Mini E-Commerce with Router & Context

**Goal**: A store with a "Cart" that persists across pages.

**Features**:
1.  **Routes**:
    *   `/`: Home page listing products.
    *   `/product/:id`: Product details.
    *   `/cart`: Shows added items.
2.  **Context**: `CartContext`.
    *   Stores `cartItems` (array).
    *   Provides `addToCart` function.
3.  **Implementation**:
    *   Clicking "Add to Cart" on Home/Product page updates the Context.
    *   The "Cart" link in the navbar shows the count (e.g., "Cart (3)").
    *   Cart page lists items from Context.

---

## Checklist: End of Day 9

[ ] Installed `react-router-dom` and wrapped App in `<BrowserRouter>`.
[ ] Created multiple pages using `<Routes>` and `<Route>`.
[ ] Used `<Link>` instead of `<a>` tags for navigation.
[ ] Extracted parameters from the URL using `useParams`.
[ ] Navigate programmatically using `useNavigate`.
[ ] Understood "Prop Drilling" and why Context solves it.
[ ] successfully implemented `createContext` -> `Provider` -> `useContext`.

---

## Self-Assessment Questions

1.  Why happens if I use a standard HTML `<a href="/about">` tag in a React app? Why is that "bad" for an SPA?
2.  How do I define a route parameter in the path string? (e.g., what logic symbol is used?)
3.  What hook does a child component use to access the data provided by a Context Provider?
4.  If the Context value changes (e.g., theme changes from 'light' to 'dark'), do all components consuming that context re-render?
5.  What is the main argument passed to `useNavigate()`?

---

## Common Mistakes to Avoid

1.  **Forgetting `<BrowserRouter>`**: The app will crash with "useNavigate() may be used only in the context of a <Router> component" if you forget to wrap `App` in `main.jsx`.
2.  **Using `<a>` tags**: This causes a full page refresh, resetting all your Redux/Context state and slowing down the app. Always use `<Link>`.
3.  **Context Overuse**: Don't put *everything* in Context. If state is only used by a parent and one child, Props are still better (keeping state local/co-located). Context is for *Global* data.
4.  **Missing `value` prop in Provider**: `<UserContext.Provider>` needs a `value={...}` prop, otherwise consumers get `undefined`.
5.  **Placing Routes randomly**: `<Route>` components must be direct children of `<Routes>`. You can't wrap them in a `div` inside `<Routes>`.
