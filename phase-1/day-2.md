# Day 2: CSS Fundamentals - Complete Study Guide

## Overview

**Duration**: 3-4 hours  
**Goal**: Master CSS fundamentals and style your HTML pages beautifully  
**Prerequisites**: Completed Day 1 (HTML Fundamentals)  
**Outcome**: Create styled, responsive web pages with modern CSS techniques

---

## What You'll Need

### Tools Required

1. **Text Editor**: VS Code (recommended) with CSS support
2. **Web Browser**: Chrome, Firefox, Edge, or Safari (latest version)
3. **Browser DevTools**: F12 to inspect and debug CSS
4. **Files from Day 1**: Your HTML files (profile.html, contact.html, schedule.html)

### File Organization

- Create folder: `day2-css-fundamentals`
- Create CSS file: `styles.css` (external stylesheet)
- Keep your HTML files from Day 1

### Resources for Learning

- **MDN CSS Reference**: [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **CSS Validator**: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)
- **Flexbox Guide**: [css-tricks.com/snippets/css/a-guide-to-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Grid Guide**: [css-tricks.com/snippets/css/complete-guide-grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **CodePen**: [codepen.io](https://codepen.io) (for quick testing)

---

## Step-by-Step Learning Plan

### Hour 1: CSS Basics, Selectors, and Box Model (60 minutes)

#### Step 1: CSS Introduction (15 minutes)

**What is CSS?**
CSS (Cascading Style Sheets) is a language used to style and layout web pages. It controls colors, fonts, spacing, positioning, and more.

**Three Ways to Add CSS:**

1. **Inline Styles** (not recommended for production):

```html
<p style="color: blue; font-size: 18px;">This is blue text</p>
```

- Pros: Quick for testing
- Cons: Hard to maintain, not reusable, mixes structure with style

2. **Internal Styles** (`<style>` tag in `<head>`):

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
```

- Pros: Good for single-page sites
- Cons: Not reusable across pages

3. **External Stylesheet** (recommended):

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

- Create `styles.css` file
- Pros: Reusable, maintainable, separates concerns
- Cons: None (best practice)

**CSS Syntax:**

```css
selector {
  property: value;
  property: value;
}
```

**Example:**

```css
p {
  color: red;
  font-size: 16px;
  margin: 10px;
}
```

**CSS Comments:**

```css
/* This is a single-line comment */

/* This is a
   multi-line comment */
```

**Practice Task 1**:

1. Create `styles.css` file
2. Link it to your `profile.html` from Day 1
3. Add a comment at the top: `/* Profile Page Styles */`
4. Style the `<body>` with a background color and font family

---

#### Step 2: CSS Selectors (25 minutes)

**Selectors** determine which HTML elements the CSS rules apply to.

**1. Type/Element Selectors:**

```css
/* Selects all <p> elements */
p {
  color: blue;
}

/* Selects all <h1> elements */
h1 {
  font-size: 32px;
}
```

**2. Class Selectors** (most common):

```css
/* Selects elements with class="container" */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* HTML: <div class="container">Content</div> */
```

- Use `.` (dot) before class name
- Multiple elements can have same class
- Elements can have multiple classes: `class="container primary"`

**3. ID Selectors:**

```css
/* Selects element with id="header" */
#header {
  background-color: #333;
  color: white;
}

/* HTML: <header id="header">Header</header> */
```

- Use `#` (hash) before ID name
- IDs must be unique (one per page)
- Use sparingly (classes are preferred)

**4. Universal Selector:**

```css
/* Selects all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- Often used in CSS reset

**5. Descendant Selectors:**

```css
/* Selects <p> inside <article> */
article p {
  color: green;
}

/* HTML: <article><p>This is green</p></article> */
/* HTML: <p>This is NOT green</p> */
```

- Space between selectors means "descendant of"

**6. Child Selectors:**

```css
/* Selects <li> that are direct children of <ul> */
ul > li {
  list-style: none;
}

/* HTML: <ul><li>Selected</li></ul> */
/* HTML: <ul><div><li>NOT selected</li></div></ul> */
```

- `>` means "direct child"

**7. Adjacent Sibling Selector:**

```css
/* Selects <p> immediately after <h2> */
h2 + p {
  margin-top: 0;
}

/* HTML: <h2>Title</h2><p>Selected</p><p>Not selected</p> */
```

**8. General Sibling Selector:**

```css
/* Selects all <p> after <h2> */
h2 ~ p {
  color: blue;
}

/* HTML: <h2>Title</h2><p>Selected</p><div>Content</div><p>Selected</p> */
```

**9. Attribute Selectors:**

```css
/* Selects elements with href attribute */
a[href] {
  color: blue;
}

/* Selects elements with href="https://example.com" */
a[href="https://example.com"]
{
  color: red;
}

/* Selects elements with href starting with "https" */
a[href^="https"] {
  font-weight: bold;
}

/* Selects elements with href ending with ".pdf" */
a[href$=".pdf"] {
  color: green;
}

/* Selects elements with href containing "example" */
a[href*="example"] {
  text-decoration: underline;
}
```

**10. Pseudo-classes** (state-based):

```css
/* Link states */
a:link {
  color: blue; /* Unvisited link */
}

a:visited {
  color: purple; /* Visited link */
}

a:hover {
  color: red; /* Mouse over */
}

a:active {
  color: orange; /* Being clicked */
}

a:focus {
  outline: 2px solid blue; /* Keyboard focus */
}

/* Child selectors */
li:first-child {
  font-weight: bold;
}

li:last-child {
  margin-bottom: 0;
}

li:nth-child(2) {
  color: green; /* 2nd child */
}

li:nth-child(even) {
  background-color: #f0f0f0; /* Even children */
}

li:nth-child(odd) {
  background-color: white; /* Odd children */
}

li:nth-child(3n) {
  color: blue; /* Every 3rd child */
}

/* Form states */
input:focus {
  border: 2px solid blue;
}

input:disabled {
  opacity: 0.5;
}

input:required {
  border-left: 3px solid red;
}
```

**11. Pseudo-elements:**

```css
/* Before element */
p::before {
  content: "→ ";
  color: blue;
}

/* After element */
p::after {
  content: " ←";
  color: blue;
}

/* First line */
p::first-line {
  font-weight: bold;
}

/* First letter */
p::first-letter {
  font-size: 200%;
  color: red;
}
```

**12. Combining Selectors:**

```css
/* Multiple selectors (same styles) */
h1,
h2,
h3 {
  color: blue;
}

/* Combined selectors */
.container p {
  color: green;
}

.container.primary {
  background: yellow;
}

/* Specificity: More specific wins */
#header .nav a {
  color: red;
}
```

**Specificity Rules** (how CSS determines which rule wins):

1. Inline styles (1000 points)
2. IDs (100 points each)
3. Classes, attributes, pseudo-classes (10 points each)
4. Elements, pseudo-elements (1 point each)

**Cascade Order** (when specificity is equal):

1. Last rule wins (if same specificity)
2. More specific selector wins
3. `!important` overrides everything (use sparingly)

**Practice Task 2**:

1. Add classes to your HTML elements
2. Style them using class selectors
3. Use pseudo-classes to style links and hover states
4. Try combining selectors

---

#### Step 3: CSS Box Model (20 minutes)

**The Box Model** - Every element is a rectangular box with:

- **Content**: The actual content (text, images, etc.)
- **Padding**: Space inside the element (between content and border)
- **Border**: Line around the padding
- **Margin**: Space outside the element (between elements)

```
┌─────────────────────────────────┐ ← Margin (outside)
│ ┌─────────────────────────────┐ │
│ │ ┌─────────────────────────┐ │ │ ← Border
│ │ │ ┌─────────────────────┐ │ │ │
│ │ │ │     Content         │ │ │ │ ← Padding (inside)
│ │ │ └─────────────────────┘ │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

**Box-Sizing:**

```css
/* Default: content-box (width includes only content) */
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* Total width = 200 + 20*2 + 5*2 = 250px */
}

/* Recommended: border-box (width includes padding and border) */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* Total width = 200px (padding and border included) */
}

/* Global reset (recommended) */
* {
  box-sizing: border-box;
}
```

**Width and Height:**

```css
.element {
  width: 300px; /* Fixed width */
  width: 50%; /* Percentage of parent */
  width: 100vw; /* Viewport width */
  max-width: 1200px; /* Maximum width */
  min-width: 300px; /* Minimum width */

  height: 200px; /* Fixed height */
  height: 50vh; /* Viewport height */
  max-height: 500px;
  min-height: 200px;
}
```

**Padding:**

```css
/* Individual properties */
.element {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}

/* Shorthand (clockwise: top, right, bottom, left) */
.element {
  padding: 10px 20px 10px 20px; /* All sides */
  padding: 10px 20px; /* top/bottom, left/right */
  padding: 10px; /* All sides same */
}
```

**Margin:**

```css
/* Individual properties */
.element {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}

/* Shorthand (same as padding) */
.element {
  margin: 10px 20px; /* top/bottom, left/right */
  margin: 10px; /* All sides */
}

/* Auto centering (horizontal) */
.container {
  width: 800px;
  margin: 0 auto; /* Centers horizontally */
}

/* Margin collapse: When two vertical margins meet, they collapse to the larger one */
/* Only vertical margins collapse, not horizontal */
```

**Border:**

```css
/* Individual properties */
.element {
  border-width: 2px;
  border-style: solid; /* solid, dashed, dotted, double, none */
  border-color: black;
}

/* Shorthand */
.element {
  border: 2px solid black;
}

/* Individual sides */
.element {
  border-top: 2px solid black;
  border-right: 1px dashed red;
  border-bottom: 3px dotted blue;
  border-left: 1px solid green;
}

/* Border radius (rounded corners) */
.element {
  border-radius: 10px; /* All corners */
  border-radius: 10px 20px; /* top-left/bottom-right, top-right/bottom-left */
  border-radius: 10px 20px 30px 40px; /* top-left, top-right, bottom-right, bottom-left */
  border-radius: 50%; /* Circle */
}
```

**Practice Task 3**:

1. Add padding, margin, and borders to elements
2. Use `box-sizing: border-box` globally
3. Center a container using `margin: 0 auto`
4. Create rounded corners with `border-radius`

---

### Hour 2: Colors, Typography, Display, and Positioning (60 minutes)

#### Step 4: CSS Colors and Backgrounds (15 minutes)

**Color Values:**

```css
/* Named colors */
.text {
  color: red;
  color: blue;
  color: green;
}

/* Hex colors (#RRGGBB) */
.text {
  color: #ff0000; /* Red */
  color: #00ff00; /* Green */
  color: #0000ff; /* Blue */
  color: #ffffff; /* White */
  color: #000000; /* Black */
  color: #333333; /* Dark gray */
  color: #ff5733; /* Orange-red */
}

/* Short hex (when pairs are same) */
.text {
  color: #f00; /* Same as #ff0000 */
  color: #0f0; /* Same as #00ff00 */
}

/* RGB (Red, Green, Blue: 0-255) */
.text {
  color: rgb(255, 0, 0); /* Red */
  color: rgb(0, 255, 0); /* Green */
  color: rgb(0, 0, 255); /* Blue */
}

/* RGBA (with alpha/opacity: 0-1) */
.text {
  color: rgba(255, 0, 0, 0.5); /* Red with 50% opacity */
  background-color: rgba(0, 0, 0, 0.1); /* Black with 10% opacity */
}

/* HSL (Hue, Saturation, Lightness) */
.text {
  color: hsl(0, 100%, 50%); /* Red */
  color: hsl(120, 100%, 50%); /* Green */
  color: hsl(240, 100%, 50%); /* Blue */
}

/* HSLA (with alpha) */
.text {
  color: hsla(0, 100%, 50%, 0.5); /* Red with 50% opacity */
}
```

**Background Properties:**

```css
.element {
  /* Background color */
  background-color: #f0f0f0;
  background-color: rgba(255, 0, 0, 0.1);

  /* Background image */
  background-image: url("image.jpg");

  /* Background repeat */
  background-repeat: no-repeat; /* no-repeat, repeat, repeat-x, repeat-y */

  /* Background position */
  background-position: center; /* center, top, bottom, left, right */
  background-position: 50% 50%; /* x% y% */
  background-position: 10px 20px; /* x y */

  /* Background size */
  background-size: cover; /* Cover entire area, may crop */
  background-size: contain; /* Fit entire image, may show gaps */
  background-size: 100% 100%; /* Exact size */
  background-size: 200px 150px; /* Specific dimensions */

  /* Background attachment */
  background-attachment: scroll; /* Scrolls with content */
  background-attachment: fixed; /* Fixed to viewport */

  /* Shorthand */
  background: #f0f0f0 url("image.jpg") no-repeat center/cover;
  /* color image repeat position/size */
}
```

**Multiple Backgrounds:**

```css
.element {
  background-image: url("image1.jpg"), url("image2.jpg");
  background-position: top left, bottom right;
  background-repeat: no-repeat, repeat;
}
```

**Practice Task 4**:

1. Experiment with different color formats
2. Add background colors and images to sections
3. Use `background-size: cover` for hero sections
4. Try gradients (we'll cover more in advanced topics)

---

#### Step 5: Typography (20 minutes)

**Font Properties:**

```css
.text {
  /* Font family */
  font-family: Arial, sans-serif; /* Fallback fonts */
  font-family: "Times New Roman", serif;
  font-family: "Courier New", monospace;
  font-family: Georgia, serif;

  /* Font size */
  font-size: 16px; /* Pixels */
  font-size: 1em; /* Relative to parent (1em = parent's font-size) */
  font-size: 1.5rem; /* Relative to root (1rem = root font-size, usually 16px) */
  font-size: 100%; /* Percentage of parent */
  font-size: 1.2vw; /* Viewport width (responsive) */

  /* Font weight */
  font-weight: normal; /* 400 */
  font-weight: bold; /* 700 */
  font-weight: 100; /* Thin */
  font-weight: 300; /* Light */
  font-weight: 400; /* Normal */
  font-weight: 700; /* Bold */
  font-weight: 900; /* Black */

  /* Font style */
  font-style: normal;
  font-style: italic;
  font-style: oblique;

  /* Font shorthand */
  font: italic bold 18px/1.5 Arial, sans-serif;
  /* style weight size/line-height family */
}
```

**Text Properties:**

```css
.text {
  /* Color */
  color: #333;

  /* Alignment */
  text-align: left; /* left, right, center, justify */

  /* Decoration */
  text-decoration: none; /* none, underline, overline, line-through */
  text-decoration: underline;
  text-decoration: line-through;

  /* Transform */
  text-transform: none; /* none, uppercase, lowercase, capitalize */
  text-transform: uppercase;
  text-transform: capitalize;

  /* Spacing */
  line-height: 1.5; /* Space between lines (1.5 = 150% of font-size) */
  letter-spacing: 2px; /* Space between letters */
  word-spacing: 5px; /* Space between words */

  /* Text shadow */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  /* offset-x offset-y blur-radius color */
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5); /* Glow effect */

  /* Other */
  text-indent: 20px; /* First line indent */
  white-space: nowrap; /* Prevent wrapping */
  word-wrap: break-word; /* Break long words */
}
```

**Google Fonts:**

```html
<!-- In HTML <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

```css
/* In CSS */
body {
  font-family: "Roboto", sans-serif;
}
```

**Web Fonts (@font-face):**

```css
@font-face {
  font-family: "CustomFont";
  src: url("font.woff2") format("woff2"), url("font.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "CustomFont", sans-serif;
}
```

**Practice Task 5**:

1. Set up a font hierarchy (h1, h2, h3, body)
2. Add Google Fonts to your page
3. Experiment with text properties
4. Add text shadows for effects

---

#### Step 6: Display and Positioning (25 minutes)

**Display Types:**

```css
.element {
  /* Block: Takes full width, new line */
  display: block;

  /* Inline: Stays in line, no width/height */
  display: inline;

  /* Inline-block: Inline but can have width/height */
  display: inline-block;

  /* None: Hidden, takes no space */
  display: none;

  /* Flex: Flexbox container */
  display: flex;

  /* Grid: CSS Grid container */
  display: grid;
}
```

**Visibility:**

```css
.element {
  /* Hidden but takes space */
  visibility: hidden;

  /* Visible */
  visibility: visible;
}

/* display: none vs visibility: hidden */
/* display: none - element removed from layout, takes no space */
/* visibility: hidden - element still in layout, takes space but invisible */
```

**Position Property:**

```css
.element {
  /* Static: Default, normal flow */
  position: static;

  /* Relative: Positioned relative to normal position */
  position: relative;
  top: 10px; /* Move 10px down from normal position */
  left: 20px; /* Move 20px right from normal position */
  /* Other elements don't move */

  /* Absolute: Positioned relative to nearest positioned ancestor */
  position: absolute;
  top: 0;
  right: 0;
  /* Removed from normal flow, other elements act like it doesn't exist */

  /* Fixed: Positioned relative to viewport */
  position: fixed;
  top: 0;
  left: 0;
  /* Stays in same place when scrolling */

  /* Sticky: Hybrid of relative and fixed */
  position: sticky;
  top: 0;
  /* Sticks to top when scrolling */
}
```

**Z-Index** (stacking order):

```css
.element1 {
  position: relative;
  z-index: 1; /* Lower number = behind */
}

.element2 {
  position: relative;
  z-index: 2; /* Higher number = in front */
}

/* Only works on positioned elements (relative, absolute, fixed, sticky) */
```

**Practice Task 6**:

1. Experiment with different display types
2. Create a fixed header
3. Position elements using relative/absolute
4. Use z-index to layer elements

---

### Hour 3: Flexbox, Grid, Responsive Design, and Practice (60 minutes)

#### Step 7: Flexbox (20 minutes)

**Flexbox** - One-dimensional layout (row or column)

**Flex Container:**

```css
.container {
  display: flex; /* Makes children flex items */
}
```

**Flex Direction:**

```css
.container {
  flex-direction: row; /* Default: left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column; /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */
}
```

**Flex Wrap:**

```css
.container {
  flex-wrap: nowrap; /* Default: single line */
  flex-wrap: wrap; /* Multiple lines */
  flex-wrap: wrap-reverse; /* Multiple lines, reversed */
}
```

**Justify Content** (main axis alignment):

```css
.container {
  justify-content: flex-start; /* Start of container */
  justify-content: flex-end; /* End of container */
  justify-content: center; /* Center */
  justify-content: space-between; /* Space between items */
  justify-content: space-around; /* Space around items */
  justify-content: space-evenly; /* Equal space everywhere */
}
```

**Align Items** (cross axis alignment):

```css
.container {
  align-items: stretch; /* Default: stretch to fill */
  align-items: flex-start; /* Start of cross axis */
  align-items: flex-end; /* End of cross axis */
  align-items: center; /* Center */
  align-items: baseline; /* Align to text baseline */
}
```

**Align Content** (for multi-line):

```css
.container {
  align-content: stretch;
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
}
```

**Flex Items Properties:**

```css
.item {
  /* Grow: How much item can grow (default: 0) */
  flex-grow: 1; /* Takes available space */
  flex-grow: 2; /* Takes twice as much space as flex-grow: 1 */

  /* Shrink: How much item can shrink (default: 1) */
  flex-shrink: 0; /* Don't shrink */
  flex-shrink: 1; /* Can shrink */

  /* Basis: Initial size before growing/shrinking */
  flex-basis: 200px; /* Initial width */
  flex-basis: auto; /* Based on content */

  /* Shorthand */
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 0 1 auto; /* Default */
  flex: 2 1 200px; /* grow shrink basis */

  /* Individual alignment */
  align-self: flex-start; /* Override container's align-items */

  /* Order: Visual order (default: 0) */
  order: 1; /* Appears after order: 0 */
  order: -1; /* Appears before order: 0 */
}
```

**Common Flexbox Patterns:**

```css
/* Centering content */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navigation bar */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Equal width columns */
.container {
  display: flex;
}
.item {
  flex: 1; /* Equal width */
}
```

**Practice Task 7**:

1. Create a navigation bar using flexbox
2. Center content vertically and horizontally
3. Create equal-width columns
4. Build a card layout with flexbox

---

#### Step 8: CSS Grid (20 minutes)

**CSS Grid** - Two-dimensional layout (rows and columns)

**Grid Container:**

```css
.container {
  display: grid;
}
```

**Defining Columns and Rows:**

```css
.container {
  /* Fixed columns */
  grid-template-columns: 200px 200px 200px; /* 3 columns, 200px each */

  /* Flexible columns */
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
  grid-template-columns: 1fr 2fr 1fr; /* Middle column twice as wide */

  /* Mix */
  grid-template-columns: 200px 1fr 2fr; /* Fixed, flexible, flexible */

  /* Rows */
  grid-template-rows: 100px 200px 100px; /* 3 rows */
  grid-template-rows: auto; /* Auto height */

  /* Repeat */
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive */

  /* Minmax */
  grid-template-columns: minmax(200px, 1fr) 1fr; /* Min 200px, max 1fr */
}
```

**Grid Gap:**

```css
.container {
  gap: 20px; /* Space between all items */
  row-gap: 20px; /* Space between rows */
  column-gap: 20px; /* Space between columns */

  /* Old syntax (still works) */
  grid-gap: 20px;
}
```

**Grid Areas:**

```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

**Grid Lines and Placement:**

```css
.item {
  /* Using line numbers */
  grid-column: 1 / 3; /* Start at line 1, end at line 3 (spans 2 columns) */
  grid-row: 1 / 2; /* Start at line 1, end at line 2 */

  /* Using span */
  grid-column: span 2; /* Span 2 columns */
  grid-row: span 3; /* Span 3 rows */

  /* Shorthand */
  grid-area: 1 / 1 / 2 / 3; /* row-start / col-start / row-end / col-end */
}
```

**Alignment:**

```css
.container {
  /* Align items within cells */
  justify-items: start; /* start, end, center, stretch */
  align-items: start;

  /* Align grid within container */
  justify-content: center; /* If grid is smaller than container */
  align-content: center;
}

.item {
  /* Align individual item */
  justify-self: center;
  align-self: center;
}
```

**Common Grid Patterns:**

```css
/* 12-column grid */
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.col-1 {
  grid-column: span 1;
}
.col-2 {
  grid-column: span 2;
}
.col-3 {
  grid-column: span 3;
}
/* ... up to col-12 */

/* Card grid */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
```

**Practice Task 8**:

1. Create a 3-column grid layout
2. Build a card grid with auto-fit
3. Create a page layout using grid areas (header, sidebar, main, footer)
4. Experiment with grid placement

---

#### Step 9: Responsive Design (15 minutes)

**Media Queries:**

```css
/* Mobile-first approach (recommended) */
/* Base styles for mobile */
.container {
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
  }
}

/* Desktop-first approach */
/* Base styles for desktop */
.container {
  width: 1200px;
}

/* Tablet and down */
@media (max-width: 1023px) {
  .container {
    width: 750px;
  }
}

/* Mobile and down */
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}
```

**Common Breakpoints:**

```css
/* Mobile: 320px - 767px */
@media (max-width: 767px) {
}

/* Tablet: 768px - 1023px */
@media (min-width: 768px) and (max-width: 1023px) {
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
}

/* Large Desktop: 1440px and up */
@media (min-width: 1440px) {
}
```

**Media Query Features:**

```css
/* Width */
@media (min-width: 768px) {
}
@media (max-width: 1024px) {
}

/* Height */
@media (min-height: 600px) {
}

/* Orientation */
@media (orientation: landscape) {
}
@media (orientation: portrait) {
}

/* Multiple conditions */
@media (min-width: 768px) and (max-width: 1024px) {
}
@media (min-width: 1024px), (orientation: landscape) {
} /* OR */
```

**Responsive Typography:**

```css
/* Fluid typography */
h1 {
  font-size: clamp(24px, 5vw, 48px);
  /* min, preferred, max */
}

/* Viewport units */
h1 {
  font-size: 4vw; /* 4% of viewport width */
}
```

**Responsive Images:**

```css
img {
  max-width: 100%;
  height: auto; /* Maintain aspect ratio */
}
```

**Practice Task 9**:

1. Make your profile page responsive
2. Use media queries for different screen sizes
3. Adjust font sizes for mobile
4. Test on different screen sizes (browser DevTools)

---

#### Step 10: Transitions and Basic Animations (5 minutes)

**CSS Transitions:**

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red;
  /* Smoothly transitions over 0.3 seconds */
}

/* Multiple properties */
.element {
  transition: color 0.3s, transform 0.5s ease-in-out;
}

/* Shorthand */
.element {
  transition: property duration timing-function delay;
  transition: all 0.3s ease 0.1s;
}

/* Individual properties */
.element {
  transition-property: color, transform;
  transition-duration: 0.3s, 0.5s;
  transition-timing-function: ease, ease-in-out;
  transition-delay: 0s, 0.1s;
}
```

**Transform:**

```css
.element {
  transform: translateX(10px); /* Move right */
  transform: translateY(-10px); /* Move up */
  transform: translate(10px, -10px); /* X, Y */
  transform: rotate(45deg); /* Rotate */
  transform: scale(1.2); /* Scale up 20% */
  transform: scaleX(1.5); /* Scale X axis */
  transform: skew(10deg, 5deg); /* Skew */

  /* Multiple transforms */
  transform: translate(10px, 10px) rotate(45deg) scale(1.2);
}

.element:hover {
  transform: scale(1.1); /* Grow on hover */
}
```

**Keyframe Animations:**

```css
/* Define animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Or with percentages */
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

/* Use animation */
.element {
  animation: fadeIn 1s ease-in-out;
  animation: slideIn 0.5s ease-out;
}

/* Animation properties */
.element {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: 3; /* or infinite */
  animation-direction: normal; /* or reverse, alternate */
  animation-fill-mode: forwards; /* Keep end state */
}
```

**Practice Task 10**:

1. Add hover transitions to buttons
2. Create a fade-in animation
3. Use transform for interactive effects

---

### Complete Practice Exercises (30-60 minutes)

**Exercise 1: Style Your Profile Page**

Create `profile-styled.html` and `profile-styles.css`:

```css
/* profile-styles.css */

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Base styles */
body {
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

/* Header */
header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

/* Navigation */
nav {
  background-color: #333;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  display: inline-block;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #555;
}

/* Main content */
main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

section {
  background: white;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

section h2 {
  color: #667eea;
  margin-bottom: 1rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

/* Images */
figure {
  text-align: center;
  margin: 1rem 0;
}

figure img {
  border-radius: 50%;
  max-width: 200px;
  height: auto;
}

/* Lists */
ul {
  list-style: none;
  padding-left: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

li:last-child {
  border-bottom: none;
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  header h1 {
    font-size: 1.8rem;
  }

  nav a {
    display: block;
    margin: 0.5rem 0;
  }

  main {
    padding: 0 0.5rem;
  }

  section {
    padding: 1rem;
  }
}
```

**Exercise 2: Navigation Bar with Flexbox**

```css
/* nav-styles.css */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
}

.navbar-brand {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.navbar-nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  border-radius: 4px;
}

.navbar-nav a:hover {
  background-color: #555;
}

/* Mobile menu */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .navbar-nav {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }
}
```

**Exercise 3: Card Grid with CSS Grid**

```css
/* card-grid.css */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.card h3 {
  color: #333;
  margin-bottom: 1rem;
}

.card p {
  color: #666;
  line-height: 1.6;
}
```

**Exercise 4: Responsive Layout**

Create a complete responsive page layout:

```css
/* layout.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
header {
  background-color: #333;
  color: white;
  padding: 1rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Navigation */
nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
}

/* Main content */
main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  margin: 2rem 0;
}

/* Sidebar */
aside {
  background: #f4f4f4;
  padding: 1.5rem;
  border-radius: 8px;
}

/* Content */
article {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }

  main {
    grid-template-columns: 1fr;
  }
}
```

---

## Final Checklist

Before moving to Day 3, make sure you can:

- [ ] Add CSS to HTML using external stylesheets
- [ ] Use various CSS selectors (class, ID, descendant, pseudo-classes)
- [ ] Understand and use the box model (padding, margin, border)
- [ ] Apply colors using different formats (hex, RGB, RGBA)
- [ ] Style typography (fonts, sizes, spacing)
- [ ] Use display and positioning properties
- [ ] Create layouts with Flexbox
- [ ] Create layouts with CSS Grid
- [ ] Make pages responsive with media queries
- [ ] Add transitions and basic animations
- [ ] Styled your profile page from Day 1
- [ ] Created a responsive navigation bar
- [ ] Built a card grid layout
- [ ] Validated your CSS

---

## Self-Assessment Questions

Test your understanding:

1. What's the difference between `margin` and `padding`?
2. When would you use Flexbox vs CSS Grid?
3. What does `box-sizing: border-box` do?
4. How do you center an element horizontally?
5. What's the difference between `display: none` and `visibility: hidden`?
6. How do media queries work?
7. What's the difference between `1em` and `1rem`?
8. How do you make an image responsive?
9. What's the purpose of `flex: 1`?
10. How do you create a 3-column grid layout?

---

## Common Mistakes to Avoid

1. **Forgetting box-sizing** - Always set `box-sizing: border-box` globally
2. **Using inline styles** - Use external stylesheets instead
3. **Not using semantic class names** - Use descriptive names like `.card` not `.box1`
4. **Overusing !important** - Fix specificity issues instead
5. **Not making pages responsive** - Always test on mobile
6. **Forgetting vendor prefixes** - Use autoprefixer or check browser support
7. **Not organizing CSS** - Group related styles, use comments
8. **Using fixed widths everywhere** - Use flexible units (%, fr, rem)
9. **Not testing in multiple browsers** - Test in Chrome, Firefox, Safari
10. **Ignoring accessibility** - Ensure sufficient color contrast, readable fonts

---

## CSS Best Practices

**1. Organization:**

```css
/* 1. Reset/Normalize */
* {
  box-sizing: border-box;
}

/* 2. Base styles */
body {
}

/* 3. Layout */
.container {
}
.header {
}

/* 4. Components */
.button {
}
.card {
}

/* 5. Utilities */
.text-center {
}
.mt-1 {
  margin-top: 1rem;
}
```

**2. Naming Conventions (BEM - Block Element Modifier):**

```css
/* Block */
.card {
}

/* Element */
.card__title {
}
.card__body {
}

/* Modifier */
.card--featured {
}
.card__title--large {
}
```

**3. Comments:**

```css
/* ========================================
   Header Section
   ======================================== */

/* Navigation */
.nav {
}

/* Navigation links */
.nav__link {
}
```

**4. Use CSS Variables:**

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --font-size-base: 16px;
  --spacing-unit: 1rem;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
  padding: var(--spacing-unit);
}
```

---

## Additional Resources

- **MDN CSS Reference**: [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **CSS-Tricks**: [css-tricks.com](https://css-tricks.com/)
- **Flexbox Froggy**: [flexboxfroggy.com](https://flexboxfroggy.com/) (Interactive game)
- **Grid Garden**: [cssgridgarden.com](https://cssgridgarden.com/) (Interactive game)
- **Can I Use**: [caniuse.com](https://caniuse.com/) (Browser compatibility)
- **CSS Validator**: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

---

## Next Steps

After completing Day 2:

1. Review your styled pages and make improvements
2. Validate your CSS
3. Test in multiple browsers
4. Get ready for Day 3: JavaScript Fundamentals Part 1
5. You'll learn to make your pages interactive!

**Congratulations on completing Day 2!** 🎨
