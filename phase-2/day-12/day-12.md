# Day 12: Testing and Deployment (Phase 2 Capstone)

## Overview

**Duration**: 5-6 hours
**Goal**: Complete Phase 2 by learning how to **Test** your code (so you don't break things) and **Deploy** your app to the internet (so people can see it).
**Prerequisites**: React & TypeScript knowledge (Days 7-11).
**Outcome**: A migrated TypeScript application, tested, and live on Vercel/Netlify.

---

## What You'll Need

### Tools Required

1.  **Vitest**: Vite's testing runner (Much faster than Jest).
2.  **React Testing Library**: Tools to test React components.
3.  **Vercel Account** or **Netlify Account**: For free hosting.

### Resources

*   **Vitest Guide**: [vitest.dev/guide](https://vitest.dev/guide/)
*   **React Testing Library Cheatsheet**: [testing-library.com/docs/react-testing-library/cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
*   **Vercel**: [vercel.com](https://vercel.com)

---

## Step-by-Step Learning Plan

### Hour 1: Testing Fundamentals (60 minutes)

#### Step 1: Why Test?

**Concept**:
Manual testing (clicking around) is slow and unreliable. Automated tests run in seconds.
*   **Unit Tests**: Test one function/component in isolation. (e.g., "Does 1+1 = 2?")
*   **Integration Tests**: Test how components work together. (e.g., "Does clicking 'Add' actually add item to list?")

#### Step 2: Setting up Vitest

Since we used Vite, we use **Vitest**.

1.  **Install**:
    ```bash
    npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
    ```
    *   `vitest`: The runner.
    *   `jsdom`: Simulates a browser environment in the terminal.
    *   `@testing-library/react`: Helpers to render components.
    *   `@testing-library/jest-dom`: Adds matchers like `toBeInTheDocument()`.

2.  **Configure (`vite.config.ts`)**:
    ```typescript
    /// <reference types="vitest" />
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()],
      test: {
        environment: 'jsdom', // Simulate browser
        globals: true, // Use describe/it without importing
        setupFiles: './src/setupTests.ts', // Setup file
      },
    })
    ```

3.  **Setup File (`src/setupTests.ts`)**:
    ```typescript
    import '@testing-library/jest-dom';
    ```

4.  **Script**: Add `"test": "vitest"` to `package.json`.

**Practice Task 1**:
1.  Set up the environment.
2.  Create a simple file `math.ts`: `export const add = (a: number, b: number) => a + b;`
3.  Create `math.test.ts`:
    ```typescript
    import { describe, it, expect } from 'vitest';
    import { add } from './math';

    describe('Math functions', () => {
      it('should add two numbers correctly', () => {
        expect(add(2, 2)).toBe(4);
      });
    });
    ```
4.  Run `npm test`. Green checkmark? Success!

---

### Hour 2: Testing Components (60 minutes)

#### Step 3: React Testing Library (RTL)

**Concept**:
RTL encourages testing *how the user interacts*, not implementation details.
*   **Do**: "Find button with text 'Submit' and click it."
*   **Don't**: "Find the div with id 'btn-wrapper' and check its internal state."

**Syntax**:
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the welcome message', () => {
    render(<App />); // 1. Render content
    
    // 2. Find element (like a user looking at screen)
    const heading = screen.getByText(/Hello World/i); 
    
    // 3. Assert (Check if it's there)
    expect(heading).toBeInTheDocument();
  });

  it('increments counter on click', () => {
    render(<Counter />);
    
    const button = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(button); // Simulate click
    
    expect(screen.getByText('Count is 1')).toBeInTheDocument();
  });
});
```

**Practice Task 2**:
1.  Create a simple `<Button label="Click Me" onClick={____} />` component.
2.  Write a test that checks if the button renders with the correct label.
3.  Write a test that checks if `onClick` is called when clicked (Use `vi.fn()` mock function).

---

### Hour 3: Capstone Project - Migration & Polish (90 minutes)

#### Step 4: The Phase 2 Capstone

**Goal**:
Take your **E-Commerce Project** (from Day 9/10) or **Todo App** and fully completely migrate it to **TypeScript** (if not already) and ensure it has **2-3 critical tests**.

**Migration Checklist**:
1.  Rename `.jsx` -> `.tsx`.
2.  Create Interfaces for your Data (e.g., `Product`, `CartItem`).
3.  Type your Props, State, and Event Handlers.
4.  Fix all red squiggles.

**Verification Checklist**:
1.  App runs (`npm run dev`) with no console errors.
2.  Build works (`npm run build`) without TS errors.
3.  Tests pass (`npm test`).

---

### Hour 4: Deployment (60 minutes)

#### Step 5: Preparing for Production

**Concept**:
We don't deploy the `src` folder. We deploy the **Build**.
`npm run build` initializes Vite to take your TS/React code and compile it into optimized HTML/CSS/JS in a `dist` folder.

#### Step 6: Deploying to Vercel (Easiest Method)

1.  **Push to GitHub**:
    *   Create a repo on GitHub.
    *   `git init`, `git add .`, `git commit -m "Phase 2 Complete"`.
    *   `git remote add origin ...`, `git push ...`.
2.  **Connect Vercel**:
    *   Go to Vercel.com -> "Add New..." -> Project.
    *   Select your GitHub Repo.
    *   Framework Preset: Vite (Usually auto-detected).
    *   Click **Deploy**.
3.  **Wait**: Vercel will clone, install, build, and host.
4.  **Success**: You get a URL (e.g., `my-react-app.vercel.app`).

**Practice Task 3**:
Deploy your Capstone project. Share the link with a friend (or just open it on your phone).

---

## Checklist: End of Day 12 (Phase 2 Complete)

[ ] Installed Vitest and configured it for a Vite project.
[ ] Wrote a simple Unit Test (`1+1=2`) to verify setup.
[ ] Wrote a Component Test using `render` and `screen` to check if text appears.
[ ] **Migrated** a project to TypeScript completely (No `any` types!).
[ ] Ran `npm run build` locally to check for build errors.
[ ] **Deployed** successfully to Vercel/Netlify.
[ ] Verified the live URL works on mobile/desktop.

---

## Self-Assessment Questions

1.  What is the difference between `it()` and `describe()` in a test file?
2.  Why do we use `screen.getByText` instead of `document.getElementById` in React Testing Library?
3.  What command creates the production-ready files in the `dist` folder?
4.  If my test fails, does it prevent the app from being deployed? (Hint: In a CI/CD pipeline, yes. Manually, up to you).
5.  What does `expect(...).toBeInTheDocument()` do?

---

## Common Mistakes to Avoid

1.  **Testing Implementation Details**: Don't check "Is the state variable `count` equal to 5?". Check "Does the screen show 'Count: 5'?". Users don't see state; they see the screen.
2.  **Not Mocking API Calls**: Real tests shouldn't hit real APIs (slow, unreliable). We mock them. (Advanced topic, but be aware).
3.  **Deploying Broken Builds**: Vercel will fail the build if you have TypeScript errors. Fix them locally first!
4.  **Forgetting Environment Variables**: If your app uses an API Key, you need to add it to Vercel's "Settings -> Environment Variables".
5.  **Giving Up on TS Errors**: The "Build" step is stricter than the "Dev" step. You might run fine in dev but fail build. Always check `npm run build` before pushing.
