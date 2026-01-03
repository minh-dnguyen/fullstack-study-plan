# Day 1: HTML Fundamentals - Complete Study Guide

## Overview

**Duration**: 3-4 hours  
**Goal**: Learn HTML fundamentals and build your first web pages  
**Outcome**: Create a personal profile page, contact form, and schedule table using semantic HTML

---

## What You'll Need

### Tools Required

1. **Text Editor**:

   - VS Code (recommended) - Download from [code.visualstudio.com](https://code.visualstudio.com/)
   - Or any text editor (Notepad++, Sublime Text, etc.)

2. **Web Browser**:

   - Chrome, Firefox, Edge, or Safari (latest version)
   - Chrome DevTools (F12) for inspecting HTML

3. **File Organization**:
   - Create a folder: `day1-html-fundamentals`
   - Inside, create: `index.html`, `profile.html`, `contact.html`, `schedule.html`

### Resources for Learning

- **MDN Web Docs**: [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **HTML Validator**: [validator.w3.org](https://validator.w3.org/)
- **CodePen**: [codepen.io](https://codepen.io) (for quick testing)

---

## Step-by-Step Learning Plan

### Hour 1: HTML Document Structure & Basic Elements (60 minutes)

#### Step 1: Understanding HTML Document Structure (15 minutes)

**What is HTML?**
HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements (tags).

**Basic HTML5 Document Template:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Your content goes here -->
  </body>
</html>
```

**Understanding Each Part:**

1. **`<!DOCTYPE html>`**

   - Tells the browser this is an HTML5 document
   - Must be the first line
   - Not case-sensitive, but use uppercase

2. **`<html lang="en">`**

   - Root element of HTML document
   - `lang="en"` declares the language (helps screen readers, SEO)
   - Contains `<head>` and `<body>`

3. **`<head>` Section**

   - Contains metadata (information about the page)
   - Not visible to users
   - Contains: `<meta>`, `<title>`, `<link>`, `<style>`, `<script>`

4. **`<meta charset="UTF-8">`**

   - Declares character encoding (allows special characters, emojis)
   - Should be in first 1024 bytes of document
   - UTF-8 supports all characters

5. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**

   - Makes page responsive on mobile devices
   - `width=device-width`: use device's screen width
   - `initial-scale=1.0`: no zoom on load

6. **`<title>`**

   - Shows in browser tab/bookmarks
   - Important for SEO
   - Should be descriptive

7. **`<body>`**
   - Contains all visible content
   - Images, text, links, etc.

**Practice Task 1**: Create `index.html` with the template above. Change the title to "My First HTML Page" and add "Hello World!" in the body. Open it in your browser.

---

#### Step 2: HTML Elements and Tags (20 minutes)

**Understanding Elements:**

- Elements are made of tags: `<tagname>content</tagname>`
- Opening tag: `<p>`
- Closing tag: `</p>`
- Some elements are self-closing: `<br>` or `<br />` (no closing tag)

**Block-Level Elements** (take full width, new line):

```html
<!-- Headings (h1 is largest, h6 is smallest) -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Heading</h3>
<h4>Even Smaller</h4>
<h5>Small</h5>
<h6>Smallest</h6>

<!-- Paragraphs -->
<p>This is a paragraph. It contains text that forms a block.</p>

<!-- Divisions (containers, no semantic meaning) -->
<div>This is a div container</div>

<!-- Lists -->
<ul>
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
</ul>

<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
</ol>
```

**Inline Elements** (stay in line, don't start new line):

```html
<!-- Span (generic inline container) -->
<span>Inline text</span>

<!-- Links -->
<a href="https://example.com">Link text</a>

<!-- Text formatting -->
<strong>Bold/important text</strong>
<em>Italic/emphasized text</em>
<b>Bold (no semantic meaning)</b>
<i>Italic (no semantic meaning)</i>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<sub>Subscript</sub>
<sup>Superscript</sup>
```

**Text Formatting Examples:**

```html
<p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>
<p>H<sub>2</sub>O is water. E=mc<sup>2</sup> is Einstein's equation.</p>
<p>This text is <small>smaller</small> and this is <mark>highlighted</mark>.</p>
```

**Definition Lists:**

```html
<dl>
  <dt>Term</dt>
  <dd>Definition or description</dd>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
```

**Practice Task 2**: Add to your `index.html`:

- A heading with your name
- A paragraph about yourself
- An unordered list with 3 things you like
- Text with formatting (bold, italic, highlighted)

---

#### Step 3: HTML5 Semantic Elements (25 minutes)

**Why Semantic Elements?**

- Better accessibility (screen readers understand structure)
- Better SEO (search engines understand content)
- Clearer code (easier to read and maintain)
- Better styling (CSS can target specific sections)

**Semantic Elements:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semantic HTML Example</title>
  </head>
  <body>
    <!-- Header: Top of page, often contains logo and navigation -->
    <header>
      <h1>Website Title</h1>
      <nav>
        <!-- Navigation links -->
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <!-- Main: Main content of the page (one per page) -->
    <main>
      <!-- Article: Standalone content (blog post, news article) -->
      <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
      </article>

      <!-- Section: Thematic grouping of content -->
      <section>
        <h2>Section Title</h2>
        <p>Section content...</p>
      </section>

      <!-- Aside: Sidebar content (related but not main) -->
      <aside>
        <h3>Related Links</h3>
        <p>Additional information...</p>
      </aside>
    </main>

    <!-- Footer: Bottom of page (copyright, links, contact info) -->
    <footer>
      <p>&copy; 2026 Your Name. All rights reserved.</p>
    </footer>
  </body>
</html>
```

**Other Semantic Elements:**

```html
<!-- Figure: Contains images, diagrams, code blocks -->
<figure>
  <img src="image.jpg" alt="Description" />
  <figcaption>Caption for the image</figcaption>
</figure>

<!-- Time: Dates and times -->
<p>Published on <time datetime="2026-01-02">January 2, 2026</time></p>
<p>Meeting at <time datetime="2026-01-02T14:30">2:30 PM</time></p>
```

**When to Use Each:**

- `<header>`: Site header, article header
- `<nav>`: Navigation menus
- `<main>`: Main content (one per page)
- `<article>`: Blog posts, news articles, forum posts
- `<section>`: Chapters, grouped content
- `<aside>`: Sidebars, pull quotes, ads
- `<footer>`: Site footer, article footer

**Practice Task 3**: Create `profile.html` with semantic structure:

- Header with your name
- Main section with article about yourself
- Sections for: About, Skills, Education
- Footer with copyright

---

### Hour 2: Links, Images, Tables, and Forms (60 minutes)

#### Step 4: Links and Navigation (15 minutes)

**Anchor Tag (`<a>`):**

```html
<!-- External link (absolute URL) -->
<a href="https://www.example.com">Visit Example</a>

<!-- Opens in new tab (with security attribute) -->
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer"
  >Open in New Tab</a
>

<!-- With title (tooltip on hover) -->
<a href="https://www.example.com" title="Visit our website">Example</a>

<!-- Internal link (relative path) -->
<a href="about.html">About Page</a>
<a href="pages/contact.html">Contact (in subfolder)</a>

<!-- Link to section on same page (anchor link) -->
<a href="#section1">Go to Section 1</a>
<section id="section1">
  <h2>Section 1</h2>
  <p>Content here...</p>
</section>

<!-- Email link -->
<a href="mailto:your.email@example.com">Send Email</a>

<!-- Phone link (mobile) -->
<a href="tel:+1234567890">Call Us</a>

<!-- Link to download file -->
<a href="document.pdf" download>Download PDF</a>
```

**Navigation Element:**

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

**Practice Task 4**: Add navigation to your `profile.html` with links to different sections on the same page.

---

#### Step 5: Images and Media (20 minutes)

**Image Tag (`<img>`):**

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description of image" />

<!-- With width and height (helps prevent layout shift) -->
<img src="image.jpg" alt="Description" width="300" height="200" />

<!-- Responsive image (scales with container) -->
<img src="image.jpg" alt="Description" style="max-width: 100%; height: auto;" />

<!-- Lazy loading (loads when visible) -->
<img src="image.jpg" alt="Description" loading="lazy" />
```

**Image Attributes:**

- `src`: Path to image (required)
- `alt`: Alternative text (required for accessibility, SEO)
- `width`, `height`: Dimensions in pixels
- `loading`: "lazy" (load when visible) or "eager" (load immediately)
- `title`: Tooltip text

**Responsive Images:**

```html
<!-- Different sizes for different screens -->
<img
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
  src="medium.jpg"
  alt="Responsive image"
/>

<!-- Picture element for art direction -->
<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg" />
  <source media="(max-width: 1000px)" srcset="tablet.jpg" />
  <img src="desktop.jpg" alt="Description" />
</picture>
```

**Audio and Video:**

```html
<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser does not support audio.
</audio>

<!-- Video -->
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  Your browser does not support video.
</video>

<!-- Video with poster (thumbnail) -->
<video controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4" />
</video>
```

**Practice Task 5**: Add an image to your profile page (you can use a placeholder from [placeholder.com](https://placeholder.com) or [via.placeholder.com](https://via.placeholder.com/300x200)).

---

#### Step 6: Tables (15 minutes)

**Basic Table Structure:**

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 2, Cell 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
      <td>Footer 3</td>
    </tr>
  </tfoot>
</table>
```

**Table Elements:**

- `<table>`: Container for table
- `<thead>`: Header section
- `<tbody>`: Body section (can have multiple)
- `<tfoot>`: Footer section
- `<tr>`: Table row
- `<th>`: Header cell (bold, centered by default)
- `<td>`: Data cell

**Colspan and Rowspan:**

```html
<table>
  <tr>
    <th colspan="2">Spanning 2 columns</th>
    <th>Normal column</th>
  </tr>
  <tr>
    <td rowspan="2">Spanning 2 rows</td>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
  <tr>
    <!-- Cell above spans this row -->
    <td>Cell 3</td>
    <td>Cell 4</td>
  </tr>
</table>
```

**Table Accessibility:**

```html
<table>
  <caption>
    Weekly Schedule
  </caption>
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Activity</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Monday</th>
      <td>Study HTML</td>
      <td>9:00 AM</td>
    </tr>
  </tbody>
</table>
```

**Practice Task 6**: Create `schedule.html` with a table showing your weekly schedule (Day, Time, Activity).

---

#### Step 7: Forms - Part 1 (25 minutes)

**Basic Form Structure:**

```html
<form action="/submit" method="POST">
  <!-- Form fields go here -->
  <button type="submit">Submit</button>
</form>
```

**Form Attributes:**

- `action`: URL where form data is sent
- `method`: "GET" (data in URL) or "POST" (data in request body)
- `enctype`: Encoding type (for file uploads: "multipart/form-data")

**Input Types:**

```html
<form>
  <!-- Text input -->
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <!-- Email input (validation) -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <!-- Password (hidden text) -->
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" />

  <!-- Number input -->
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="18" max="100" />

  <!-- Tel (phone number) -->
  <label for="phone">Phone:</label>
  <input type="tel" id="phone" name="phone" />

  <!-- URL input -->
  <label for="website">Website:</label>
  <input type="url" id="website" name="website" />

  <!-- Date input -->
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday" />

  <!-- Time input -->
  <label for="time">Time:</label>
  <input type="time" id="time" name="time" />

  <!-- Checkbox -->
  <label>
    <input type="checkbox" name="subscribe" value="yes" />
    Subscribe to newsletter
  </label>

  <!-- Radio buttons (same name groups them) -->
  <fieldset>
    <legend>Gender</legend>
    <label>
      <input type="radio" name="gender" value="male" />
      Male
    </label>
    <label>
      <input type="radio" name="gender" value="female" />
      Female
    </label>
  </fieldset>

  <!-- File upload -->
  <label for="file">Upload file:</label>
  <input type="file" id="file" name="file" />

  <!-- Textarea (multiline text) -->
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50"></textarea>

  <!-- Select dropdown -->
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>

  <!-- Buttons -->
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
  <button type="button">Regular Button</button>
</form>
```

**Input Attributes:**

- `type`: Input type (text, email, password, etc.)
- `id`: Unique identifier (links to label)
- `name`: Name sent with form data (required for submission)
- `value`: Default value
- `placeholder`: Hint text in empty field
- `required`: Field must be filled
- `min`, `max`: Minimum/maximum values
- `minlength`, `maxlength`: Minimum/maximum length
- `pattern`: Regular expression for validation
- `readonly`: Field can't be edited
- `disabled`: Field is disabled

**Labels (Important for Accessibility):**

```html
<!-- Method 1: Using for attribute -->
<label for="email">Email:</label>
<input type="email" id="email" name="email" />

<!-- Method 2: Wrapping input -->
<label>
  Email:
  <input type="email" name="email" />
</label>
```

**Practice Task 7**: Create `contact.html` with a contact form including:

- Name (text, required)
- Email (email, required)
- Subject (text, required)
- Message (textarea, required)
- Submit button

---

### Hour 3: Attributes, Best Practices, and Practice (60 minutes)

#### Step 8: HTML Attributes (15 minutes)

**Global Attributes** (work on all elements):

```html
<!-- id: Unique identifier (one per page) -->
<div id="header">Header</div>

<!-- class: Reusable identifier (multiple elements can have same class) -->
<div class="container">Content</div>
<p class="container text-primary">Paragraph</p>

<!-- style: Inline CSS (not recommended, use CSS files instead) -->
<p style="color: blue; font-size: 20px;">Styled text</p>

<!-- title: Tooltip text (shown on hover) -->
<p title="This is a tooltip">Hover over me</p>

<!-- data-*: Custom data attributes (used by JavaScript) -->
<div data-user-id="123" data-role="admin">User info</div>

<!-- lang: Language (for individual elements) -->
<p lang="fr">Bonjour le monde</p>

<!-- role and aria-*: Accessibility attributes -->
<button role="button" aria-label="Close dialog">X</button>
<div role="alert">Error message</div>
<div aria-live="polite">Live region for updates</div>
```

**Language Attribute:**

```html
<html lang="en">
  <!-- Page language: English -->
  <p lang="es">Hola mundo</p>
  <!-- Spanish text in English page -->
</html>
```

**Data Attributes:**

```html
<!-- Store custom data (accessed via JavaScript) -->
<div data-user-id="12345" data-username="john">User Profile</div>

<!-- JavaScript access: element.dataset.userId, element.dataset.username -->
```

**Accessibility Attributes (ARIA):**

```html
<!-- aria-label: Label for screen readers -->
<button aria-label="Close">X</button>

<!-- aria-labelledby: Reference to element that labels this -->
<div id="error-message">Error occurred</div>
<div role="alert" aria-labelledby="error-message"></div>

<!-- aria-hidden: Hide from screen readers -->
<div aria-hidden="true">Decorative icon</div>
```

**Practice Task 8**: Add appropriate attributes (id, class, data attributes) to elements in your profile page.

---

#### Step 9: HTML Best Practices (15 minutes)

**1. Proper Indentation:**

```html
<!-- Good: Properly indented -->
<html>
  <head>
    <title>Page</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li>Item</li>
        </ul>
      </nav>
    </header>
  </body>
</html>

<!-- Bad: No indentation (hard to read and maintain) -->
<html>
  <head>
    <title>Page</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li>Item</li>
        </ul>
      </nav>
    </header>
  </body>
</html>
```

**2. Comments:**

```html
<!-- This is a comment -->
<!-- Comments help explain code -->
<!-- 
    Multi-line comments
    can span multiple lines
-->

<!-- Good: Comment explains what section does -->
<!-- Navigation Menu -->
<nav>...</nav>
```

**3. Valid HTML:**

- Use HTML validator: [validator.w3.org](https://validator.w3.org/)
- Fix all errors and warnings
- Valid HTML = better browser compatibility

**4. Naming Conventions:**

```html
<!-- IDs: Use camelCase or kebab-case, descriptive -->
<div id="mainHeader"></div>
<div id="main-header"></div>

<!-- Classes: Use kebab-case (most common), descriptive -->
<div class="container"></div>
<div class="main-content"></div>
<div class="button-primary"></div>

<!-- Names: Use camelCase for JavaScript interaction -->
<input name="firstName" />
<input name="lastName" />
```

**5. Semantic HTML:**

- Use semantic elements (`<header>`, `<nav>`, `<main>`, etc.)
- Don't use `<div>` for everything
- Use appropriate heading levels (`<h1>` through `<h6>`)

**6. Accessibility:**

- Always include `alt` text on images
- Use `<label>` for form inputs
- Use proper heading hierarchy
- Include `lang` attribute

**7. Performance:**

- Use `loading="lazy"` for images below the fold
- Specify image dimensions to prevent layout shift
- Minimize nested elements

**Practice Task 9**: Validate your HTML files using the W3C validator. Fix any errors.

---

#### Step 10: Complete Practice Exercises (30 minutes)

**Exercise 1: Personal Profile Page** (`profile.html`)

Create a complete personal profile page with:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Name - Profile</title>
  </head>
  <body>
    <header>
      <h1>Your Full Name</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>About Me</h2>
        <figure>
          <img src="your-photo.jpg" alt="Your Name" width="200" height="200" />
          <figcaption>Your Name</figcaption>
        </figure>
        <p>Write a paragraph about yourself here.</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </section>

      <section id="education">
        <h2>Education</h2>
        <article>
          <h3>Degree/Program Name</h3>
          <p>
            <time datetime="2020">2020</time> -
            <time datetime="2024">2024</time>
          </p>
          <p>Institution Name</p>
        </article>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email:
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </section>
    </main>

    <footer>
      <p>
        &copy; <time datetime="2026">2026</time> Your Name. All rights reserved.
      </p>
    </footer>
  </body>
</html>
```

**Exercise 2: Contact Form** (`contact.html`)

Create a contact form with:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Me</title>
  </head>
  <body>
    <header>
      <h1>Contact Me</h1>
      <nav>
        <a href="profile.html">Back to Profile</a>
      </nav>
    </header>

    <main>
      <form action="/submit-contact" method="POST">
        <div>
          <label for="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>

        <div>
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="40"
            required
          ></textarea>
        </div>

        <div>
          <label>
            <input type="checkbox" name="newsletter" value="yes" />
            Subscribe to newsletter
          </label>
        </div>

        <button type="submit">Send Message</button>
        <button type="reset">Reset</button>
      </form>
    </main>

    <footer>
      <p>&copy; 2026 Your Name</p>
    </footer>
  </body>
</html>
```

**Exercise 3: Weekly Schedule Table** (`schedule.html`)

Create a table showing your weekly schedule:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weekly Schedule</title>
  </head>
  <body>
    <header>
      <h1>My Weekly Schedule</h1>
    </header>

    <main>
      <table>
        <caption>
          Study and Activity Schedule
        </caption>
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Activity</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Monday</th>
            <td>9:00 AM - 12:00 PM</td>
            <td>Study HTML</td>
            <td>Home</td>
          </tr>
          <tr>
            <th scope="row">Tuesday</th>
            <td>10:00 AM - 1:00 PM</td>
            <td>Study CSS</td>
            <td>Home</td>
          </tr>
          <!-- Add more rows for other days -->
        </tbody>
      </table>
    </main>

    <footer>
      <p>&copy; 2026 Your Name</p>
    </footer>
  </body>
</html>
```

---

## Final Checklist

Before moving to Day 2, make sure you can:

- [ ] Create a valid HTML5 document structure
- [ ] Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] Create links (internal, external, email, phone, anchors)
- [ ] Add images with proper `alt` attributes
- [ ] Create tables with proper structure
- [ ] Create forms with different input types
- [ ] Use proper HTML attributes (id, class, data-\*)
- [ ] Write clean, indented, commented HTML code
- [ ] Validate HTML using W3C validator
- [ ] Created all practice files (index.html, profile.html, contact.html, schedule.html)

---

## Self-Assessment Questions

Test your understanding:

1. What is the purpose of the `<!DOCTYPE html>` declaration?
2. What's the difference between `<strong>` and `<b>`?
3. When would you use `<article>` vs `<section>`?
4. What's the difference between `id` and `class` attributes?
5. Why is the `alt` attribute important on images?
6. What's the difference between GET and POST methods in forms?
7. What does `colspan="2"` do in a table?
8. How do you link to a section on the same page?
9. What's the purpose of the `<label>` element?
10. What does the viewport meta tag do?

---

## Common Mistakes to Avoid

1. **Forgetting closing tags** - Always close your tags properly
2. **Missing alt attributes** - Every image needs alt text
3. **Using divs for everything** - Use semantic elements instead
4. **Improper nesting** - Don't put block elements inside inline elements
5. **Missing required attributes** - Forms need `name` attributes
6. **Not validating HTML** - Always check your code
7. **Poor indentation** - Makes code hard to read
8. **Missing DOCTYPE** - Must be first line
9. **Using presentational tags** - Use CSS instead of `<font>`, `<center>`, etc.
10. **Not using labels** - Forms are inaccessible without labels

---

## Additional Resources

- **MDN HTML Reference**: [developer.mozilla.org/en-US/docs/Web/HTML/Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- **HTML Validator**: [validator.w3.org](https://validator.w3.org/)
- **HTML5 Semantic Elements**: [developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements)
- **Web Accessibility**: [webaim.org](https://webaim.org/)
- **CodePen**: Practice HTML snippets at [codepen.io](https://codepen.io)

---

## Next Steps

After completing Day 1:

1. Review your code and make improvements
2. Validate all HTML files
3. Test in multiple browsers
4. Get ready for Day 2: CSS Fundamentals
5. You'll learn to style your HTML pages beautifully!

**Congratulations on completing Day 1!** 🎉
