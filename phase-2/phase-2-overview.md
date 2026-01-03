## **Phase 2: Frontend Frameworks (Days 7-12)**

Goal: Build modern, interactive UIs with React

### **Day 7: React Fundamentals Part 1 (3-4 hours)**

#### **React Introduction**

* What is React: JavaScript library for building user interfaces  
* Why React: component-based architecture, declarative programming, reusable components  
* Virtual DOM concept: how React efficiently updates the UI  
* React vs vanilla JavaScript: advantages and when to use React  
* React ecosystem: React Native, Next.js, Gatsby (brief overview)  
* React history and current version (React 18+)

#### **Setting Up React**

* Create React App: `npx create-react-app my-app` (legacy, still used)  
* Vite setup (recommended): `npm create vite@latest my-app -- --template react`  
* Project structure: `src/` folder, `public/` folder, `package.json`  
* Key files: `index.js` (entry point), `App.js` (main component), `index.html`  
* Running development server: `npm start` (CRA) or `npm run dev` (Vite)  
* Browser DevTools: React Developer Tools browser extension installation  
* Hot Module Replacement (HMR): automatic browser refresh on code changes

#### **JSX (JavaScript XML)**

* JSX syntax: HTML-like syntax written in JavaScript files  
* JSX rules and syntax:  
* Must return a single parent element (or React Fragment `<>...</>`)  
* Self-closing tags required: `<img />`, `<br />`, `<input />`  
* Use `className` instead of `class` attribute  
* Use `htmlFor` instead of `for` attribute (for labels)  
* Inline styles: object syntax `style={{ color: 'red', fontSize: '16px' }}`  
* CSS properties in camelCase: `backgroundColor`, `fontSize`, `marginTop`  
* JavaScript expressions: wrap in curly braces `{ variable }`, `{ expression }`  
* JSX expressions: variables, function calls, ternary operators, method calls  
* JSX comments: `{/* This is a comment */}`  
* JSX is compiled: JSX gets transformed to `React.createElement()` calls  
* JSX vs HTML: differences and similarities

#### **Components**

* What are components: reusable, independent pieces of UI  
* Component types: functional components (modern) vs class components (legacy, know basics)  
* Functional component syntax:  
* Arrow function: `const Component = () => { return <div>Hello</div> }`  
* Function declaration: `function Component() { return <div>Hello</div> }`  
* Component naming: PascalCase convention (`MyComponent`, not `myComponent`)  
* Component file organization: one component per file (best practice)  
* Component files: `.js` or `.jsx` extension  
* Exporting components:  
* Default export: `export default Component`  
* Named export: `export const Component = () => { }`  
* Importing components: `import Component from './Component'` or `import { Component } from './components'`  
* Component composition: using components inside other components

#### **Props (Properties)**

* What are props: data passed from parent to child components  
* Passing props: `<Component propName="value" numberProp={42} />`  
* Accessing props: `props.propName` in function parameter  
* Function component props: `const Component = (props) => { return <div>{props.name}</div> }`  
* Destructuring props: `const Component = ({ prop1, prop2 }) => { return <div>{prop1}</div> }`  
* Props are read-only: components cannot modify their props (immutability)  
* Default props:  
* Default parameters: `const Component = ({ name = 'Guest' }) => { }`  
* `Component.defaultProps = { name: 'Guest' }` (legacy, not recommended)  
* Props.children: accessing nested content with `{props.children}`  
* Usage: `<Component>Hello World</Component>` \- "Hello World" is children  
* Prop types and validation: PropTypes library (optional, TypeScript preferred)  
* Installation: `npm install prop-types`  
* Usage: `Component.propTypes = { name: PropTypes.string.isRequired }`

#### **Conditional Rendering**

* If statements: `if (condition) { return <Component /> } else { return null }`  
* Ternary operator: `{condition ? <ComponentA /> : <ComponentB />}`  
* Logical AND operator: `{condition && <Component />}` (returns Component or nothing)  
* Multiple conditions:  
* Nested ternaries: `{a ? <A /> : b ? <B /> : <C />}`  
* Helper functions: `const renderContent = () => { if (a) return <A />; return <B />; }`  
* Early returns in components: return different JSX based on conditions  
* Null rendering: returning `null` to render nothing

#### **Rendering Lists**

* Using `.map()` method to render arrays of data  
* Basic list rendering: `{items.map(item => <Item key={item.id} data={item} />)}`  
* Keys in lists: `key` prop is required for list items  
* Why keys are needed: React uses keys for reconciliation (efficient updates)  
* Key best practices:  
* Use stable, unique IDs (from data)  
* Avoid array index as key for dynamic lists (causes issues with reordering)  
* Keys should be unique among siblings  
* Rendering lists with conditions: filtering before mapping  
* Nested lists: keys are required at each level  
* Lists and state: adding/removing items from lists

#### **Events in React**

* Event handling: React uses camelCase for event names (`onClick`, not `onclick`)  
* Event handlers: functions that handle events  
* Inline event handlers: `onClick={() => console.log('clicked')}`  
* Separate event handler functions: `const handleClick = () => { }; onClick={handleClick}`  
* Event object: React passes SyntheticEvent object  
* Accessing event: `const handleClick = (e) => { e.preventDefault(); }`  
* Common methods: `e.preventDefault()`, `e.stopPropagation()`, `e.target`  
* Passing arguments to event handlers:  
* Arrow function: `onClick={() => handleClick(id)}`  
* Bind method: `onClick={handleClick.bind(this, id)}`  
* Synthetic events: React's wrapper around native browser events (normalized cross-browser)  
* Common events:  
* Mouse: `onClick`, `onMouseOver`, `onMouseOut`, `onMouseEnter`, `onMouseLeave`, `onDoubleClick`  
* Form: `onChange`, `onSubmit`, `onFocus`, `onBlur`, `onInput`  
* Keyboard: `onKeyDown`, `onKeyUp`, `onKeyPress`  
* Other: `onLoad`, `onError`

#### **State \- useState Hook**

* What is state: component's internal data that can change over time  
* `useState` hook: \`const \[state, setState\] \= useState(initialValue)\`  
* useState syntax breakdown:  
* Returns array with two elements: `[currentState, setStateFunction]`  
* Array destructuring to get state and setter  
* Initial value: passed as argument to `useState()`  
* State updates: `setState(newValue)` \- replace entire state  
* Functional updates: `setState(prevState => prevState + 1)` \- update based on previous state  
* State is isolated: each component instance has its own independent state  
* State updates trigger re-renders: component re-renders when state changes  
* Multiple state variables: use multiple `useState` calls for different values  
* State with objects: `useState({ name: '', age: 0 })` and spreading: `setState({ ...state, name: 'John' })`  
* State with arrays: \`useState(\[1, 2, 3\])\` and array methods: \`setState(\[...state, newItem\])\`  
* State update batching: React batches multiple setState calls  
* Common useState patterns: counters, form inputs, toggles, lists

#### **Forms in React**

* Controlled components: form inputs whose value is controlled by React state  
* Input elements: `value={state}` and `onChange={handler}` props  
* Text inputs: `<input type="text" value={name} onChange={(e) => setName(e.target.value)} />`  
* Textareas: `<textarea value={text} onChange={(e) => setText(e.target.value)} />`  
* Select dropdowns: `<select value={selected} onChange={(e) => setSelected(e.target.value)}>`  
* Checkboxes: `<input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />`  
* Radio buttons: `<input type="radio" checked={option === 'a'} onChange={() => setOption('a')} />`  
* File inputs: \`\<input type="file" onChange={(e) \=\> setFile(e.target.files\[0\])} /\>\`  
* Form submission: `onSubmit` handler on `<form>` element, `e.preventDefault()`  
* Multiple inputs: managing multiple form fields with single state object  
* Form validation basics: checking values before submission, displaying errors

#### **Practice Exercises (1-2 hours)**

* Create multiple components and compose them together  
* Build a component that receives and displays props  
* Practice conditional rendering with different scenarios  
* Render lists of data with proper keys  
* Build a simple form with controlled inputs (login form, contact form)  
* Create a counter component with useState (increment, decrement, reset)  
* Build a simple todo list (add items, display list)

\---

### **Day 8: React Fundamentals Part 2 (3-4 hours)**

#### **useEffect Hook**

* What is useEffect: hook for performing side effects in functional components  
* Side effects: data fetching, subscriptions, manually changing DOM, timers  
* useEffect syntax: \`useEffect(() \=\> { effect }, \[dependencies\])\`  
* Component lifecycle concepts: mounting, updating, unmounting  
* useEffect runs after render: effects run after the browser has painted  
* Empty dependency array: `useEffect(() => { }, [])` \- runs once after initial render (mount)  
* No dependency array: `useEffect(() => { })` \- runs after every render (usually avoid)  
* Dependency array: \`useEffect(() \=\> { }, \[dep1, dep2\])\` \- runs when dependencies change  
* Cleanup function: returning a function from useEffect for cleanup  
* Syntax: `useEffect(() => { return () => { cleanup } }, [])`  
* Cleanup use cases:  
* Clearing timers: `clearTimeout()`, `clearInterval()`  
* Cancelling subscriptions: unsubscribe from events  
* Cleaning up event listeners: `removeEventListener()`  
* Aborting fetch requests: `AbortController`

#### **useEffect Patterns**

* Fetching data: using useEffect with fetch API or axios  
* API calls in useEffect: making HTTP requests when component mounts  
* Loading states: \`const \[loading, setLoading\] \= useState(true)\`  
* Data state: \`const \[data, setData\] \= useState(null)\`  
* Error state: \`const \[error, setError\] \= useState(null)\`  
* Dependency array with API calls: including variables that affect the API call  
* Cleanup for subscriptions: cleaning up WebSocket connections, event listeners  
* Multiple useEffect hooks: using multiple useEffect calls for different concerns  
* useEffect dependencies: understanding what should be in dependency array  
* Common pitfalls: missing dependencies, infinite loops, stale closures

#### **React Hooks Rules**

* Rules of Hooks:  
1. Only call hooks at the top level (not in loops, conditions, nested functions)  
2. Only call hooks from React functions (functional components or custom hooks)  
* Why these rules exist: hooks rely on call order for state management  
* ESLint plugin: `eslint-plugin-react-hooks` enforces rules  
* Common mistakes: calling hooks conditionally, calling hooks in loops

#### **More React Hooks (Introduction)**

* `useContext`: accessing context values (covered in Day 9\)  
* `useRef`: `const ref = useRef(initialValue)`, accessing with `ref.current`  
* `useRef` for DOM references: `const inputRef = useRef(null)`, `<input ref={inputRef} />`, `inputRef.current.focus()`  
* `useRef` for values: storing values that don't trigger re-renders (like previous props)  
* `useMemo` and `useCallback`: performance optimization hooks (covered Day 10\)  
* `useReducer`: alternative to useState for complex state (brief introduction)  
* Hook reference: React hooks API documentation

#### **Component Composition**

* Composition over inheritance: React's recommended pattern  
* Containment: using `children` prop to compose components  
* Example: `<Card><Content /></Card>` where Card renders `{children}`  
* Specialization: specific components that use general ones  
* Example: `<WelcomeDialog />` uses `<Dialog />` with specific content  
* Higher-order components (HOC): functions that take components and return new components (advanced, covered later)  
* Render props pattern: components that accept functions as children (advanced)

#### **Lifting State Up**

* Sharing state between components: moving state to common ancestor  
* Problem: sibling components need to share state  
* Solution: lift state to parent, pass down as props  
* Passing state down: parent passes state value as prop to children  
* Passing state updaters down: parent passes setState function as prop  
* Controlled components pattern: child components receive value and onChange from parent  
* Example: multiple components using same state (theme, user data, form data)  
* Data flow: props down, events up (unidirectional data flow)

#### **Thinking in React**

* Breaking UI into component hierarchy: identifying components and their relationships  
* Identifying where state should live: which component should own the state  
* Identifying minimal state representation: what's the minimum state needed  
* Data flow principles: props down, events up  
* Component design principles:  
* Single responsibility: each component does one thing  
* Reusability: design components to be reusable  
* Composition: build complex UIs from simple components

#### **Styling React Components**

* CSS classes: importing CSS files, using `className` prop  
* `import './Component.css'`, then `className="my-class"`  
* CSS Modules: scoped CSS classes  
* File: `Component.module.css`, `import styles from './Component.module.css'`  
* Usage: `className={styles.className}` (classes are scoped to component)  
* Inline styles: `style={{ property: 'value' }}` (camelCase properties)  
* CSS-in-JS libraries: styled-components (brief introduction)  
* Installation: `npm install styled-components`  
* Basic usage: \`const StyledButton \= styled.button\\\` color: red; \\\`\`  
* Global styles: CSS files imported in `index.js` or `App.js`  
* Component styles: CSS Modules or CSS-in-JS for component-specific styles  
* CSS frameworks: Bootstrap, Tailwind CSS integration  
* Tailwind: utility-first CSS framework  
* Installation and setup with React

#### **React DevTools**

* Installing React Developer Tools: browser extension (Chrome, Firefox, Edge)  
* Components tab: inspecting component tree, seeing component hierarchy  
* Props and state inspection: viewing current props and state values  
* Profiler tab: performance analysis, identifying slow renders  
* Debugging with React DevTools: finding components, inspecting values  
* Using DevTools for learning: seeing how React works internally

#### **Error Boundaries (Concept)**

* What are error boundaries: catch JavaScript errors in component tree  
* Error boundaries in class components: `componentDidCatch` and `getDerivedStateFromError`  
* Error boundaries in functional components: using libraries or React 18+ error boundaries  
* Where to place error boundaries: catch errors in component subtrees  
* What error boundaries catch: errors in render, lifecycle methods, constructors  
* What error boundaries don't catch: event handlers, async code, SSR errors  
* Error boundary libraries: `react-error-boundary` (recommended for functional components)

#### **Practice Exercises and Project (2-3 hours)**

* Build components using useEffect for data fetching (fetch from API)  
* Practice useEffect cleanup patterns (timers, subscriptions)  
* Build a component with multiple useState and useEffect hooks  
* Practice lifting state up (multiple components sharing state)  
* Start building an Interactive Blog or Portfolio Site:  
* Multiple pages/sections (Home, About, Blog, Contact)  
* Navigation between sections (use state for now, React Router on Day 9\)  
* Data fetching with useEffect (mock data or real API like JSONPlaceholder)  
* Forms and user interactions (contact form)  
* Responsive design with CSS or CSS Modules  
* Components: Header, Footer, BlogPost, BlogList, ContactForm

\---

### **Day 9: React Advanced Part 1 (3-4 hours)**

#### **Custom Hooks**

* What are custom hooks: extracting component logic into reusable functions  
* Custom hook naming: must start with "use" (React convention)  
* Custom hook rules: same rules as built-in hooks (only call at top level)  
* Creating custom hooks: `const useCustomHook = () => { /* hooks here */ return value }`  
* Returning values from custom hooks: `return { value1, value2 }` or \`return \[value1, value2\]\`  
* Common custom hooks patterns:  
* `useFetch` or `useApi`: data fetching logic with loading/error states  
* `useLocalStorage`: sync state with localStorage  
* `useToggle`: boolean state toggler (\`const \[isOpen, toggle\] \= useToggle(false)\`)  
* `useDebounce`: debounce values (for search inputs)  
* `useWindowSize`: track window dimensions  
* `usePrevious`: store previous value of prop/state  
* Sharing logic: custom hooks allow sharing logic between components  
* Custom hooks composition: using hooks inside other hooks

#### **Context API**

* What is Context: way to share values across component tree without prop drilling  
* When to use Context: global state, theme, user authentication, language preferences  
* Problem Context solves: passing props through many levels (prop drilling)  
* Creating Context: `const MyContext = React.createContext(defaultValue)`  
* Context Provider: `<MyContext.Provider value={value}>` wraps component tree  
* Consuming Context: `useContext(MyContext)` hook to access context value  
* Context value: can be any JavaScript value (object, string, number, etc.)  
* Multiple contexts: using multiple Context Providers (nesting providers)  
* Context best practices:  
* Split contexts by domain (ThemeContext, UserContext, etc.)  
* Create context and provider in separate file  
* Custom hook for consuming context: `const useTheme = () => useContext(ThemeContext)`  
* Context vs Props: when to use Context (many levels) vs Props (few levels)  
* Context performance: context value changes cause all consumers to re-render  
* Updating context: provide setState function in context value

#### **React Router**

* What is React Router: routing library for single-page applications (SPA)  
* Installation: `npm install react-router-dom`  
* BrowserRouter: `<BrowserRouter>` wrapper component (wrap entire app)  
* Routes: `<Routes>` and `<Route>` components for defining routes  
* Route syntax: `<Route path="/about" element={<About />} />`  
* Route matching: exact path matching (React Router v6)  
* Link component: `<Link to="/about">About</Link>` for navigation (replaces `<a>` tags)  
* NavLink component: `<NavLink to="/about">About</NavLink>` with active state styling  
* `className` prop with function: `className={({ isActive }) => isActive ? 'active' : ''}`  
* Navigate component: `<Navigate to="/login" />` for redirects  
* useNavigate hook: programmatic navigation  
* `const navigate = useNavigate()`, then `navigate('/path')` or `navigate(-1)` for back  
* useParams hook: accessing route parameters  
* Route: `<Route path="/user/:id" element={<User />} />`  
* Component: `const { id } = useParams()`  
* Route parameters: `/user/:id`, `/post/:slug`, multiple params `/user/:id/post/:postId`  
* Query parameters: `useSearchParams()` hook for `?key=value` in URL  
* Nested routes: routes within routes  
* Parent route: `<Route path="/users" element={<Users />}>`  
* Child routes: `<Route path=":id" element={<UserDetail />} />`  
* Outlet component: `<Outlet />` renders child routes  
* Route protection: conditional rendering based on authentication  
* Protected route component: check auth, render component or redirect  
* 404 page: `<Route path="*" element={<NotFound />} />` (catch-all route)  
* Index routes: `<Route index element={<Home />} />` for default child route

#### **Forms and Validation**

* Form libraries: React Hook Form, Formik (brief introduction, know they exist)  
* Form validation with controlled components: validation logic in component  
* Error states: \`const \[errors, setErrors\] \= useState({})\` for validation errors  
* Form submission: handling form data, validation before submit  
* Validation patterns:  
* Required fields: `if (!value) setError('Required')`  
* Email validation: regex pattern or HTML5 `type="email"`  
* Min/max length: `value.length < min`  
* Custom validation: complex rules  
* Real-time validation:  
* `onBlur`: validate when user leaves field  
* `onChange`: validate as user types (can be annoying)  
* Displaying errors: show error messages near inputs  
* Form libraries benefits: less boilerplate, built-in validation, performance

#### **State Management Patterns**

* Local state: `useState` for component-specific state (most common)  
* Lifted state: shared state in parent component, passed as props (for siblings)  
* Context API: global state without prop drilling (for app-wide state)  
* State management libraries: Redux, Zustand, Recoil (introduction, know they exist)  
* When to use each approach:  
* Local state: component-only data  
* Lifted state: shared between few components  
* Context: theme, user, language (read-heavy, less frequent updates)  
* Redux/Zustand: complex global state, frequent updates, time-travel debugging

#### **Redux Basics (Introduction)**

* What is Redux: predictable state container for JavaScript apps  
* Redux concepts: Store (state container), Actions (events), Reducers (state updates)  
* Redux Toolkit: modern Redux (recommended, simplifies Redux)  
* Installation: `npm install @reduxjs/toolkit react-redux`  
* Creating a store: `configureStore({ reducer: { counter: counterReducer } })`  
* Creating slices: `createSlice({ name: 'counter', initialState: { value: 0 }, reducers: { increment: (state) => { state.value += 1 } } })`  
* Providing store: `<Provider store={store}>` wraps app (in index.js or App.js)  
* Using Redux state: `useSelector` hook to select state  
* `const count = useSelector((state) => state.counter.value)`  
* Dispatching actions: `useDispatch` hook to dispatch actions  
* `const dispatch = useDispatch()`, then `dispatch(increment())`  
* Async actions: thunks with `createAsyncThunk` for async operations (API calls)  
* Redux vs Context: when to use Redux (complex state, devtools, middleware) vs Context (simple global state)

#### **Practice Exercises (1-2 hours)**

* Create custom hooks for common functionality (useLocalStorage, useFetch)  
* Implement Context API for theme switching (dark/light mode)  
* Set up React Router with multiple routes (Home, About, Products, Contact)  
* Build navigation with active states using NavLink  
* Practice route parameters (user profile page with `:id`)  
* Practice programmatic navigation (redirect after form submission)  
* Build a simple protected route (redirect to login if not authenticated)

\---

### **Day 10: React Advanced Part 2 (3-4 hours)**

#### **Performance Optimization**

* React rendering: understanding when components re-render  
* Identifying performance issues: React DevTools Profiler tab  
* `React.memo`: memoizing functional components to prevent unnecessary re-renders  
* Syntax: `const MemoizedComponent = React.memo(Component)`  
* Shallow comparison of props (only re-renders if props change)  
* `useMemo` hook: memoizing expensive calculations  
* Syntax: \`const memoizedValue \= useMemo(() \=\> computeExpensiveValue(a, b), \[a, b\])\`  
* Only recalculates when dependencies change  
* `useCallback` hook: memoizing functions to prevent recreation  
* Syntax: \`const memoizedCallback \= useCallback(() \=\> { doSomething(a, b) }, \[a, b\])\`  
* Useful when passing functions as props to memoized components  
* When to use memoization:  
* Expensive calculations (complex computations)  
* Preventing unnecessary re-renders (large lists, frequent updates)  
* Don't overuse: memoization has its own overhead  
* Virtualization: rendering only visible items in long lists  
* Libraries: `react-window` or `react-virtualized`  
* Use case: rendering thousands of list items  
* Lazy loading images: `loading="lazy"` attribute on `<img>` tags  
* Code splitting: splitting code into smaller chunks (covered next)

#### **Code Splitting**

* What is code splitting: splitting code into smaller chunks, loaded on demand  
* Benefits: faster initial page load, smaller bundle sizes  
* React.lazy: lazy loading components  
* Syntax: `const Component = React.lazy(() => import('./Component'))`  
* Dynamic imports: `import()` returns a Promise  
* Suspense component: wrapping lazy-loaded components  
* Syntax: `<Suspense fallback={<Loading />}><Component /></Suspense>`  
* Fallback: component to show while loading  
* Route-based code splitting: lazy loading routes (common pattern)  
* Lazy load each route component  
* Wrap routes in Suspense  
* Dynamic imports: `import()` function for code splitting  
* Error boundaries with lazy loading: handling errors in lazy-loaded components

#### **React Patterns**

* Compound Components: components that work together  
* Example: `<Select><Option value="1">One</Option><Option value="2">Two</Option></Select>`  
* Share implicit state through context  
* Render Props: components that accept functions as children  
* Pattern: `<DataFetcher render={(data) => <Display data={data} />} />`  
* Higher-Order Components (HOC): functions that take components and return new components  
* Pattern: `const withAuth = (Component) => (props) => { if (authenticated) return <Component {...props} />; return <Login />; }`  
* Usage: `const ProtectedComponent = withAuth(MyComponent)`  
* Controlled vs Uncontrolled Components:  
* Controlled: React state controls value (most common)  
* Uncontrolled: DOM handles value, use refs to access  
* Presentational vs Container Components:  
* Presentational: how things look (receives data via props)  
* Container: how things work (manages state, data fetching)

#### **Refs \- useRef and useImperativeHandle**

* `useRef` recap: DOM references and mutable values that don't trigger re-renders  
* Forwarding refs: `React.forwardRef((props, ref) => { })`  
* Forward ref from parent to child component  
* Usage: `const Input = React.forwardRef((props, ref) => <input ref={ref} {...props} />)`  
* `useImperativeHandle`: customizing the instance value exposed to parent components  
* Syntax: `useImperativeHandle(ref, () => ({ focus: () => { inputRef.current.focus() } }))`  
* Use case: expose specific methods to parent instead of entire DOM node  
* When to use refs:  
* Focus management: focusing inputs  
* Animations: triggering animations  
* Third-party libraries: integrating with DOM libraries  
* Measuring DOM: getting element dimensions  
* Avoid overusing refs: prefer declarative React patterns when possible

#### **Error Handling**

* Error boundaries recap: catch errors in component tree (class components)  
* Error boundaries in functional components: using libraries like `react-error-boundary`  
* Installation: `npm install react-error-boundary`  
* Usage: `<ErrorBoundary fallback={<ErrorFallback />}><App /></ErrorBoundary>`  
* try-catch in event handlers: catching errors in event handlers (error boundaries don't catch these)  
* Error handling in async operations: try-catch with async/await in useEffect  
* User-friendly error messages: displaying helpful error messages to users  
* Error logging: sending errors to error tracking service (Sentry, etc.)

#### **Testing Basics (Introduction)**

* Why test: catch bugs, document behavior, enable confident refactoring  
* Testing libraries: Jest (test runner) and React Testing Library (React testing utilities)  
* Running tests: `npm test` (in Create React App, uses Jest)  
* Writing tests: `test()` or `it()` functions  
* Syntax: `test('description', () => { expect(...).toBe(...) })`  
* Rendering components: `render(<Component />)` from React Testing Library  
* Querying elements: finding elements in rendered component  
* `screen.getByText('text')`: find by text content  
* `screen.getByRole('button')`: find by accessible role  
* `screen.getByLabelText('label')`: find form inputs by label  
* `screen.getByTestId('id')`: find by test ID (last resort)  
* User events: simulating user interactions  
* `fireEvent.click(element)` or `userEvent.click(element)` (preferred)  
* `userEvent` library: more realistic user interactions  
* Assertions: `expect().toBe()`, `expect().toHaveTextContent()`, `expect().toBeInTheDocument()`  
* Basic test structure: Arrange, Act, Assert pattern

#### **React Testing Library**

* Philosophy: test behavior, not implementation (test what user sees/does)  
* Query priorities (best to worst):  
1. `getByRole`: most accessible, preferred  
2. `getByLabelText`: for form inputs  
3. `getByText`: for visible text  
4. `getByTestId`: last resort, not accessible  
* User-centric queries: queries that reflect what users see  
* Testing user interactions: clicks, form inputs, keyboard events  
* Testing async operations:  
* `waitFor`: wait for async operations  
* `findBy` queries: automatically wait (e.g., `findByText`)  
* Mocking:  
* `jest.fn()`: create mock functions  
* `jest.mock()`: mock modules  
* Mocking fetch/API calls  
* Testing custom hooks: `renderHook` from `@testing-library/react-hooks` (if needed)

#### **Build Tools \- npm and package.json**

* npm (Node Package Manager): package manager for JavaScript  
* package.json: project configuration file  
* Metadata: name, version, description, author  
* Scripts: `"scripts": { "start": "react-scripts start", "build": "react-scripts build" }`  
* Dependencies: `"dependencies"` \- packages needed in production  
* DevDependencies: `"devDependencies"` \- packages needed only in development  
* Running scripts: `npm run script-name` or `npm start` (for "start" script)  
* Installing packages: `npm install package-name` (adds to dependencies)  
* Installing dev dependencies: `npm install -D package-name` or `npm install --save-dev package-name`  
* package-lock.json: lockfile that locks exact versions of dependencies  
* Semantic versioning: version numbers `major.minor.patch`  
* `^1.2.3`: allows updates to 1.x.x (major version fixed)  
* `~1.2.3`: allows updates to 1.2.x (minor version fixed)  
* `1.2.3`: exact version  
* npm scripts: common scripts (start, build, test, eject)

#### **Build Tools \- Webpack Basics**

* What is Webpack: module bundler for JavaScript applications  
* Webpack concepts:  
* Entry: starting point of application  
* Output: where to emit bundled files  
* Loaders: transform files (CSS, images, TypeScript to JavaScript)  
* Plugins: extend Webpack functionality (optimization, HTML generation)  
* Create React App uses Webpack: hidden configuration (ejected with `npm run eject`)  
* Webpack configuration: `webpack.config.js` file (advanced, usually not needed)  
* Loaders: processing different file types  
* CSS loader: import CSS files  
* Babel loader: transpile JavaScript/JSX  
* File loader: handle images, fonts  
* Plugins: extending Webpack functionality  
* HTML Webpack Plugin: generate HTML file  
* Mini CSS Extract Plugin: extract CSS to separate file  
* Production builds: optimization and minification  
* Code splitting  
* Tree shaking: removing unused code  
* Minification: reducing file size

#### **Build Tools \- Vite**

* What is Vite: fast build tool and dev server (alternative to Webpack)  
* Vite advantages:  
* Faster development server (uses native ES modules)  
* Faster builds (uses Rollup for production)  
* Better developer experience  
* Creating React app with Vite: `npm create vite@latest my-app -- --template react`  
* Vite configuration: `vite.config.js` file  
* Vite plugins: React plugin, etc.  
* Development server: HMR (Hot Module Replacement) \- instant updates  
* Production build: `npm run build` creates optimized production build  
* Vite vs Webpack: Vite is faster, simpler configuration

#### **Practice Exercises and Project (2-3 hours)**

* Optimize a React component using React.memo, useMemo, useCallback  
* Implement code splitting with React.lazy for routes  
* Write basic tests for a component (counter, form, etc.)  
* Continue/Complete E-commerce Product Listing Project:  
* Multiple routes (home, products, product details, cart, checkout)  
* Product listing with filtering and search functionality  
* Shopping cart functionality (add, remove, update quantity)  
* State management (Context API or Redux for cart)  
* Code splitting for routes (lazy load routes)  
* Responsive design with CSS Modules or styled-components  
* Product details page with route parameters  
* Form validation for checkout

\---

### **Day 11: TypeScript Basics (3-4 hours)**

#### **TypeScript Introduction**

* What is TypeScript: JavaScript with static type checking (superset of JavaScript)  
* Why TypeScript:  
* Catch errors early (during development, not runtime)  
* Better IDE support (autocomplete, refactoring)  
* Self-documenting code (types serve as documentation)  
* Better for large codebases  
* TypeScript compiles to JavaScript: TypeScript code is transpiled to JavaScript  
* Installing TypeScript:  
* Global: `npm install -g typescript`  
* Local: `npm install -D typescript` (recommended)  
* TypeScript configuration: `tsconfig.json` file  
* Generate: `npx tsc --init`  
* Compiling TypeScript: `tsc filename.ts` (compiles to JavaScript)  
* Type checking: TypeScript checks types without running code

#### **Basic Types**

* Type annotations: explicit type declarations  
* Syntax: `const name: string = "John"`  
* Variables: `let age: number = 30`  
* Primitive types:  
* `string`: text values  
* `number`: integers and floats  
* `boolean`: true/false  
* `null` and `undefined`: `null` and `undefined` types  
* Arrays:  
* `number[]` or `Array<number>`: array of numbers  
* `string[]`: array of strings  
* Tuples: fixed-length arrays with specific types  
* Syntax: `[string, number]` \- first element string, second number  
* Example: \`const person: \[string, number\] \= \["John", 30\]\`  
* Enums: named constants  
* Syntax: `enum Color { Red, Green, Blue }`  
* Usage: `const color: Color = Color.Red`  
* String enums: `enum Color { Red = "red", Green = "green" }`  
* `any`: disables type checking (avoid when possible)  
* Usage: `let value: any = "anything"`  
* `unknown`: safer alternative to `any`  
* Requires type checking before use  
* `void`: absence of value (functions that return nothing)  
* Usage: `function log(): void { console.log('hello') }`  
* `never`: type for functions that never return (always throw or infinite loop)

#### **Type Inference**

* TypeScript infers types: you don't always need explicit types  
* Type inference examples: `const name = "John"` (inferred as string)  
* When to use explicit types vs inference:  
* Use explicit: function parameters, return types, complex types  
* Use inference: simple variables where type is obvious  
* `const` vs `let` and type inference:  
* `const`: literal type (e.g., `const x = 5` is type `5`, not `number`)  
* `let`: broader type (e.g., `let x = 5` is type `number`)

#### **Functions and Types**

* Function parameters: `function add(a: number, b: number): number { return a + b }`  
* Return types: explicit return type annotations  
* Syntax: `function name(): ReturnType { }`  
* Optional parameters: `function greet(name?: string) { }`  
* Parameter can be undefined  
* Default parameters: `function greet(name: string = "Guest") { }`  
* Rest parameters: `function sum(...numbers: number[]): number { }`  
* Arrow functions: `const add = (a: number, b: number): number => a + b`  
* Function types: type for functions  
* Syntax: `type AddFunction = (a: number, b: number) => number`  
* Usage: `const add: AddFunction = (a, b) => a + b`  
* Function overloads: multiple function signatures (advanced)

#### **Objects and Types**

* Object types: `{ name: string, age: number }`  
* Syntax: `const person: { name: string; age: number } = { name: "John", age: 30 }`  
* Optional properties: `{ name: string, age?: number }`  
* Property may or may not exist  
* Readonly properties: `{ readonly id: number, name: string }`  
* Property cannot be reassigned  
* Index signatures: \`{ \[key: string\]: number }\`  
* Object with string keys and number values  
* Example: \`const scores: { \[key: string\]: number } \= { math: 90, science: 85 }\`

#### **Interfaces**

* Interface syntax: `interface User { name: string; age: number }`  
* Using interfaces: `const user: User = { name: "John", age: 30 }`  
* Optional properties: `interface User { name: string; age?: number }`  
* Readonly properties: `interface User { readonly id: number; name: string }`  
* Extending interfaces: `interface Admin extends User { role: string }`  
* Interfaces vs type aliases:  
* Interfaces: can be extended, merged (declaration merging)  
* Type aliases: more flexible, can use unions, intersections  
* When to use interfaces vs types: generally interchangeable, interfaces for objects

#### **Type Aliases**

* Type alias syntax: `type Point = { x: number; y: number }`  
* Using type aliases: `const point: Point = { x: 10, y: 20 }`  
* Union types: `type Status = "pending" | "completed" | "failed"`  
* Value can be one of several types  
* Intersection types: `type Admin = User & { role: string }`  
* Combines multiple types (all properties from both)

#### **Union and Intersection Types**

* Union types: `string | number` \- value can be string OR number  
* Type guards: checking types  
* `typeof`: `if (typeof value === "string") { }`  
* `instanceof`: `if (value instanceof Date) { }`  
* Discriminated unions: union types with common property  
* Example: `type Result = { status: "success"; data: string } | { status: "error"; error: string }`  
* Intersection types: `TypeA & TypeB` \- combines types (AND)  
* All properties from both types

#### **Generics**

* Generic syntax: `function identity<T>(arg: T): T { return arg }`  
* Generic functions: reusable functions with type parameters  
* `<T>` is type parameter (can be any name)  
* Generic interfaces: `interface Container<T> { value: T }`  
* Generic constraints: `function logLength<T extends { length: number }>(arg: T) { }`  
* Type parameter must have certain properties  
* Multiple generics: `function map<T, U>(arr: T[], fn: (item: T) => U): U[] { }`  
* Default generic parameters: `function create<T = string>(): T { }`  
* Common use cases: arrays, promises, React components

#### **Type Assertions**

* Type assertions: telling TypeScript the type of a value  
* Syntax: `value as Type` or `<Type>value` (JSX conflicts with angle brackets)  
* When to use: when you know more about type than TypeScript  
* `as const`: making values readonly and literal types  
* \`const arr \= \[1, 2, 3\] as const\` \- array is readonly tuple

#### **TypeScript with React**

* React.FC type: `const Component: React.FC = () => { }`  
* Note: React.FC includes children prop, many prefer explicit props  
* Component props: `interface Props { name: string }`  
* `const Component: React.FC<Props> = ({ name }) => { }`  
* Or: `const Component = ({ name }: Props) => { }` (preferred, no React.FC)  
* Typing useState: \`const \[state, setState\] \= useState\<Type\>(initialValue)\`  
* Example: \`const \[count, setCount\] \= useState\<number\>(0)\`  
* Typing useEffect: no special typing needed (same as JavaScript)  
* Typing events:  
* `React.ChangeEvent<HTMLInputElement>` for input changes  
* `React.MouseEvent<HTMLButtonElement>` for button clicks  
* `React.FormEvent<HTMLFormElement>` for form submission  
* Typing refs: `const ref = useRef<HTMLInputElement>(null)`  
* Typing custom hooks: return types, parameter types

#### **Practice Exercises (1-2 hours)**

* Convert JavaScript functions to TypeScript with proper types  
* Create interfaces for objects and component props  
* Practice with generics (create generic functions)  
* Type a React component and its props  
* Convert a simple React component to TypeScript  
* Practice with union types and type guards  
* Type event handlers in React components

\---

### **Day 12: TypeScript Advanced and Project Migration (3-4 hours)**

#### **Advanced TypeScript Concepts**

* Utility types: built-in types for common transformations  
* `Partial<T>`: make all properties optional  
  * Example: `Partial<User>` \- all User properties become optional  
* `Required<T>`: make all properties required  
* `Pick<T, K>`: select specific properties  
  * Example: `Pick<User, 'name' | 'email'>` \- only name and email  
* `Omit<T, K>`: exclude specific properties  
  * Example: `Omit<User, 'id'>` \- User without id property  
* `Record<K, V>`: object type with specific keys and values  
  * Example: `Record<string, number>` \- object with string keys, number values  
* Mapped types: transforming types (advanced)  
* Syntax: \`type Readonly\<T\> \= { readonly \[P in keyof T\]: T\[P\] }\`  
* Conditional types: types that depend on conditions (advanced)  
* Syntax: `type IsArray<T> = T extends Array<any> ? true : false`  
* Template literal types: string template types (advanced)  
* Example: `` type EventName<T> = \`on${Capitalize<T>}\` ``

#### **TypeScript Configuration**

* tsconfig.json options:  
* `strict`: enable all strict type checking options  
* `target`: JavaScript version to compile to (`ES2020`, `ES2015`, etc.)  
* `module`: module system (`ES2020`, `CommonJS`, `ESNext`, etc.)  
* `lib`: library files to include (`DOM`, `ES2020`, etc.)  
* `jsx`: how to handle JSX (`react`, `react-jsx`, `preserve`)  
* `esModuleInterop`: compatibility with CommonJS modules  
* `skipLibCheck`: skip type checking of declaration files (faster compilation)  
* `forceConsistentCasingInFileNames`: case-sensitive file names  
* `resolveJsonModule`: allow importing JSON files  
* Strict mode options (when `strict: true`):  
* `strictNullChecks`: null and undefined are separate types  
* `noImplicitAny`: error on implicit `any` type  
* `strictFunctionTypes`: strict function type checking  
* `strictPropertyInitialization`: ensure class properties are initialized  
* Recommended: enable `strict` mode for better type safety

#### **TypeScript with React Router**

* Typing routes and navigation: React Router is typed  
* Typing route parameters: `useParams<{ id: string }>()`  
* Example: `const { id } = useParams<{ id: string }>()`  
* Typing navigation: `useNavigate()` returns typed navigate function  
* Typing location and route objects (if needed)

#### **TypeScript with Redux/State Management**

* Typing Redux state: define types for state shape  
* Typing actions and action creators: Redux Toolkit has built-in types  
* Typing selectors: `useSelector` with typed state  
* Example: `const count = useSelector((state: RootState) => state.counter.value)`  
* Typing thunks: Redux Toolkit `createAsyncThunk` is typed  
* RootState type: export type from store for use in components

#### **Common TypeScript Patterns**

* Discriminated unions for state management: union types with discriminator  
* Example: `type State = { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string }`  
* Type guards and narrowing: checking types to narrow union types  
* Assertion functions: functions that assert types  
* Example: `function assertIsString(value: unknown): asserts value is string { }`

#### **Migrating JavaScript to TypeScript**

* Gradual migration strategy: convert files one at a time  
* Adding types incrementally: start with `.js` files, add types gradually  
* Using `any` temporarily: acceptable during migration (replace later)  
* Converting files: rename `.js` to `.ts` or `.jsx` to `.tsx`  
* Handling third-party libraries: install type definitions  
* `npm install -D @types/package-name`  
* Some packages include types, others need `@types` package  
* Declaration files: `.d.ts` files for type definitions  
* Custom declarations for libraries without types  
* tsconfig.json: configure to allow JavaScript files during migration  
* `"allowJs": true` \- allow JavaScript files in TypeScript project

#### **TypeScript Best Practices**

* Avoid `any`: use `unknown` or proper types  
* Use type inference: don't add types when TypeScript can infer  
* Create reusable types: extract common types to separate files  
* Use union types: for finite sets of values (better than string literals)  
* Document complex types: add comments for complex type definitions  
* Use utility types: instead of manually creating types  
* Keep types close to usage: co-locate types with code that uses them  
* Use interfaces for objects: interfaces for object shapes, types for unions/intersections

#### **Practice and Project Migration (3-4 hours)**

* Practice with TypeScript utility types (Partial, Pick, Omit, etc.)  
* Set up TypeScript in a React project  
* If using Create React App: `npx create-react-app my-app --template typescript`  
* If using Vite: `npm create vite@latest my-app -- --template react-ts`  
* Migrate a React component to TypeScript  
* Add types to props  
* Type state with useState  
* Type event handlers  
* Migrate previous React project (Blog/Portfolio or E-commerce) to TypeScript:  
* Convert all `.js`/`.jsx` files to `.ts`/`.tsx`  
* Add type definitions for all component props  
* Type all functions and hooks (useState, useEffect, etc.)  
* Type event handlers (onClick, onChange, onSubmit)  
* Type API responses and data structures (interfaces for API data)  
* Fix all TypeScript errors (don't use `any` as shortcut)  
* Ensure type safety throughout the application  
* Add types for React Router (route params, navigation)  
* Add types for Context API (if used)  
* Type form data and validation

#### **Week 2 Project: Complete TypeScript React Application**

Requirements:

* Fully typed React application (no `any` types, proper type safety)  
* Multiple routes with React Router (typed routes and params)  
* State management (Context API or Redux with TypeScript)  
* Type-safe API integration (if applicable, typed API responses)  
* Custom hooks with TypeScript (typed parameters and return values)  
* Error handling with proper types  
* Responsive design  
* Code splitting and performance optimizations (React.memo, useMemo, useCallback)  
* Basic tests with TypeScript (if time permits)

