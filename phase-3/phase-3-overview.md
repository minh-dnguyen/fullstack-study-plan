## **Phase 3: Backend Development (Days 13-18)**

Goal: Build server-side applications and APIs

### **Day 13: Node.js Fundamentals (3-4 hours)**

#### **Node.js Introduction**

* What is Node.js: JavaScript runtime built on Chrome's V8 engine  
* Why Node.js: server-side JavaScript, non-blocking I/O, single-threaded event loop  
* Node.js vs browser JavaScript: differences and similarities  
* Installation: downloading from nodejs.org, checking version with `node --version`  
* npm (Node Package Manager): comes with Node.js, `npm --version`  
* REPL (Read-Eval-Print Loop): interactive Node.js shell, type `node` in terminal

#### **Node.js Modules**

* What are modules: code organization, reusable code units  
* CommonJS modules: Node.js module system  
* Module.exports: exporting from a module  
* Single export: `module.exports = functionName`  
* Multiple exports: `module.exports = { func1, func2 }`  
* Or: `exports.func1 = functionName`  
* Require: importing modules  
* Syntax: `const moduleName = require('./moduleName')`  
* File paths: `./` for relative, no extension needed for `.js`  
* Core modules: built-in modules (no path needed)  
* Third-party modules: from `node_modules` (no path needed)  
* Core modules: built-in Node.js modules  
* `fs`: file system operations  
* `path`: path manipulation  
* `http`: HTTP server and client  
* `url`: URL parsing  
* `querystring`: query string parsing  
* `crypto`: cryptographic functionality  
* `os`: operating system information  
* `util`: utility functions

#### **File System (fs module)**

* Reading files: `fs.readFile()` and `fs.readFileSync()`  
* Async: `fs.readFile('file.txt', 'utf8', (err, data) => { })`  
* Sync: `const data = fs.readFileSync('file.txt', 'utf8')`  
* Writing files: `fs.writeFile()` and `fs.writeFileSync()`  
* Async: `fs.writeFile('file.txt', 'content', (err) => { })`  
* Sync: `fs.writeFileSync('file.txt', 'content')`  
* Appending files: `fs.appendFile()` and `fs.appendFileSync()`  
* Creating directories: `fs.mkdir()` and `fs.mkdirSync()`  
* Reading directories: `fs.readdir()` and `fs.readdirSync()`  
* Checking file existence: `fs.existsSync()` or `fs.access()`  
* File stats: `fs.stat()` and `fs.statSync()` (file size, creation time, etc.)  
* Promises: `fs.promises.readFile()` for promise-based API  
* Error handling: handling file system errors

#### **Path Module**

* Path manipulation: `const path = require('path')`  
* Joining paths: `path.join('dir', 'subdir', 'file.txt')` \- cross-platform  
* Getting directory name: `path.dirname('/users/john/file.txt')` returns `/users/john`  
* Getting filename: `path.basename('/users/john/file.txt')` returns `file.txt`  
* Getting extension: `path.extname('file.txt')` returns `.txt`  
* Resolving paths: `path.resolve('dir', 'file.txt')` \- absolute path  
* Normalizing paths: `path.normalize('/users/../john/file.txt')`  
* Platform-specific paths: `path.sep` (path separator)

#### **Process and Environment**

* Process object: `process` global object  
* Environment variables: `process.env.PORT`, `process.env.NODE_ENV`  
* Command line arguments: `process.argv` array  
* Process methods: `process.exit()`, `process.cwd()` (current working directory)  
* Setting environment variables:  
* Windows: `set PORT=3000 && node app.js`  
* Linux/Mac: `PORT=3000 node app.js`  
* Using `.env` files with `dotenv` package (covered later)

#### **HTTP Server (http module)**

* Creating HTTP server: `http.createServer((req, res) => { })`  
* Request object: `req.url`, `req.method`, `req.headers`  
* Response object: `res.writeHead()`, `res.write()`, `res.end()`  
* Basic server: `server.listen(3000, () => { console.log('Server running') })`  
* Handling routes: checking `req.url` and `req.method`  
* Sending JSON: `res.writeHead(200, { 'Content-Type': 'application/json' })`  
* Status codes: 200 (OK), 404 (Not Found), 500 (Server Error), etc.  
* Basic routing: if/else or switch statements for routes

#### **npm and package.json**

* Initializing project: `npm init` or `npm init -y` (skip questions)  
* package.json: project configuration file  
* Dependencies: `"dependencies": { "express": "^4.18.0" }`  
* Scripts: `"scripts": { "start": "node index.js" }`  
* Installing packages: `npm install package-name` (adds to dependencies)  
* Installing dev dependencies: `npm install -D package-name` (devDependencies)  
* package-lock.json: locks exact versions  
* node\_modules: folder containing installed packages  
* Running scripts: `npm start`, `npm run script-name`

#### **Asynchronous Programming in Node.js**

* Callbacks: callback-based APIs (fs, http)  
* Callback hell: nested callbacks problem  
* Promises: promise-based APIs (`fs.promises`)  
* Async/await: using async/await with promises  
* Event loop: understanding Node.js event-driven architecture  
* Blocking vs non-blocking: why non-blocking is important

#### **Practice Exercises (1-2 hours)**

* Create Node.js scripts that read and write files  
* Build a simple HTTP server with basic routing  
* Practice with path module for file operations  
* Create modules and export/import them  
* Build a simple file-based data storage system  
* Handle command line arguments with process.argv

\---

### **Day 14: Express.js and RESTful APIs (3-4 hours)**

#### **Express.js Introduction**

* What is Express: fast, unopinionated web framework for Node.js  
* Why Express: simplifies HTTP server creation, middleware, routing  
* Installation: `npm install express`  
* Basic Express app: `const express = require('express'); const app = express(); app.listen(3000)`  
* Express vs vanilla Node.js: comparison of code complexity

#### **Express Basics**

* Creating app: `const app = express()`  
* Starting server: `app.listen(port, callback)`  
* Routes: `app.get()`, `app.post()`, `app.put()`, `app.delete()`, `app.patch()`  
* Route handlers: `app.get('/path', (req, res) => { res.send('Hello') })`  
* Request object: `req.params`, `req.query`, `req.body`, `req.headers`  
* Response methods:  
* `res.send()`: send response (auto-detects content type)  
* `res.json()`: send JSON response  
* `res.status()`: set status code  
* `res.sendStatus()`: send status code and message  
* `res.redirect()`: redirect to another URL  
* `res.render()`: render template (with view engine)

#### **Express Routing**

* Basic routes: `app.get('/users', handler)`  
* Route parameters: `app.get('/users/:id', (req, res) => { const id = req.params.id })`  
* Multiple parameters: `app.get('/users/:userId/posts/:postId', handler)`  
* Optional parameters: `app.get('/users/:id?', handler)`  
* Query parameters: `req.query.key` for `?key=value`  
* Route handlers: can have multiple handlers (middleware pattern)  
* Route methods: GET, POST, PUT, DELETE, PATCH, ALL  
* Router: `express.Router()` for modular routes  
* Creating router: `const router = express.Router()`  
* Defining routes: `router.get('/path', handler)`  
* Using router: `app.use('/api', router)`

#### **Middleware**

* What is middleware: functions that execute during request-response cycle  
* Middleware function signature: `(req, res, next) => { }`  
* `next()` function: pass control to next middleware  
* Using middleware: `app.use(middlewareFunction)`  
* Order matters: middleware executes in order  
* Built-in middleware:  
* `express.json()`: parse JSON bodies (`app.use(express.json())`)  
* `express.urlencoded()`: parse URL-encoded bodies  
* `express.static()`: serve static files  
* Custom middleware: creating your own middleware functions  
* Error handling middleware: `(err, req, res, next) => { }` (4 parameters)  
* Middleware for specific routes: `app.use('/api', middleware)`  
* Multiple middleware: `app.use(middleware1, middleware2)`

#### **Request and Response Objects**

* Request object (req):  
* `req.params`: route parameters (`/users/:id`)  
* `req.query`: query string parameters (`?name=john`)  
* `req.body`: request body (requires body parser middleware)  
* `req.headers`: request headers  
* `req.method`: HTTP method (GET, POST, etc.)  
* `req.url`: request URL  
* `req.path`: URL path  
* `req.ip`: client IP address  
* Response object (res):  
* `res.status(code)`: set status code  
* `res.send(data)`: send response  
* `res.json(data)`: send JSON response  
* `res.sendStatus(code)`: send status code  
* `res.redirect(url)`: redirect  
* `res.setHeader(name, value)`: set response header  
* `res.cookie(name, value)`: set cookie  
* `res.clearCookie(name)`: clear cookie

#### **RESTful API Design**

* What is REST: Representational State Transfer architectural style  
* REST principles:  
* Resources: nouns (users, posts, comments)  
* HTTP methods: GET (read), POST (create), PUT (update), DELETE (delete)  
* Stateless: each request contains all information needed  
* Uniform interface: consistent URL structure  
* RESTful routes:  
* GET `/users` \- get all users  
* GET `/users/:id` \- get single user  
* POST `/users` \- create user  
* PUT `/users/:id` \- update user (full update)  
* PATCH `/users/:id` \- update user (partial update)  
* DELETE `/users/:id` \- delete user  
* Nested resources: `/users/:userId/posts` \- user's posts  
* Status codes:  
* 200 OK: successful GET, PUT, PATCH  
* 201 Created: successful POST  
* 204 No Content: successful DELETE  
* 400 Bad Request: client error  
* 401 Unauthorized: authentication required  
* 403 Forbidden: not authorized  
* 404 Not Found: resource doesn't exist  
* 500 Internal Server Error: server error

#### **API Best Practices**

* URL structure: use nouns, not verbs (`/users` not `/getUsers`)  
* Use HTTP methods correctly: GET for reading, POST for creating, etc.  
* Consistent response format: `{ success: true, data: {...} }` or `{ error: 'message' }`  
* Error handling: consistent error response format  
* Versioning: `/api/v1/users` for API versions  
* Documentation: document your API endpoints  
* Pagination: for large datasets (`?page=1&limit=10`)  
* Filtering and sorting: query parameters (`?sort=name&order=asc`)

#### **Error Handling**

* Try-catch blocks: catching errors in route handlers  
* Error handling middleware: `app.use((err, req, res, next) => { })`  
* Custom error classes: creating error types  
* Error status codes: appropriate HTTP status codes  
* Error responses: consistent error format  
* Async error handling: wrapping async functions  
* Error logging: logging errors for debugging

#### **CORS (Cross-Origin Resource Sharing)**

* What is CORS: mechanism for cross-origin requests  
* CORS problem: browser blocks requests from different origins  
* CORS middleware: `npm install cors`, `app.use(cors())`  
* CORS options: configuring allowed origins, methods, headers  
* `cors({ origin: 'http://localhost:3000' })`  
* \`cors({ methods: \['GET', 'POST'\] })\`

#### **Body Parsing**

* JSON bodies: `app.use(express.json())` \- parses JSON request bodies  
* URL-encoded: `app.use(express.urlencoded({ extended: true }))` \- parses form data  
* Raw bodies: `express.raw()` for raw data  
* Text bodies: `express.text()` for text data  
* Body size limits: `express.json({ limit: '10mb' })`

#### **Static Files**

* Serving static files: `app.use(express.static('public'))`  
* Multiple static directories: multiple `express.static()` calls  
* Virtual path prefix: `app.use('/static', express.static('public'))`

#### **Practice Exercises and Project (2-3 hours)**

* Build Express server with multiple routes  
* Create RESTful API endpoints (GET, POST, PUT, DELETE)  
* Implement middleware for logging, error handling  
* Build a REST API for a blog or todo system:  
* CRUD operations (Create, Read, Update, Delete)  
* Proper HTTP methods and status codes  
* Route parameters and query parameters  
* Error handling middleware  
* JSON responses  
* File-based storage (JSON files) for now (database on Day 15-16)  
* Endpoints: GET /posts, GET /posts/:id, POST /posts, PUT /posts/:id, DELETE /posts/:id

\---

### **Day 15: SQL and PostgreSQL (3-4 hours)**

#### **Database Fundamentals**

* What is a database: organized collection of data  
* Relational databases: data stored in tables with relationships  
* Database management system (DBMS): software for managing databases  
* SQL: Structured Query Language for relational databases  
* Tables: collections of rows and columns  
* Rows (records): individual entries in a table  
* Columns (fields): attributes of data  
* Primary key: unique identifier for each row  
* Foreign key: reference to primary key in another table

#### **PostgreSQL Introduction**

* What is PostgreSQL: open-source relational database  
* Installation: downloading and installing PostgreSQL  
* PostgreSQL vs MySQL: differences and use cases  
* PostgreSQL tools: psql (command line), pgAdmin (GUI), DBeaver  
* Connecting to PostgreSQL: `psql -U username -d database_name`  
* Creating database: `CREATE DATABASE dbname;`  
* Listing databases: `\l` in psql  
* Connecting to database: `\c dbname` in psql

#### **SQL Basics**

* SQL syntax: SQL keywords are case-insensitive (convention: uppercase)  
* Comments: `-- single line comment` or `/* multi-line comment */`  
* Data types:  
* `INTEGER` or `INT`: whole numbers  
* `SERIAL`: auto-incrementing integer (primary keys)  
* `VARCHAR(n)`: variable-length string (n \= max length)  
* `TEXT`: unlimited length string  
* `BOOLEAN`: true/false  
* `DATE`: date values  
* `TIMESTAMP`: date and time  
* `NUMERIC` or `DECIMAL`: exact numeric values  
* `FLOAT` or `REAL`: floating-point numbers  
* Creating tables: `CREATE TABLE table_name (column1 TYPE, column2 TYPE);`  
* Dropping tables: `DROP TABLE table_name;`  
* Altering tables: `ALTER TABLE table_name ADD COLUMN column_name TYPE;`  
* Viewing table structure: `\d table_name` in psql

#### **Creating Tables**

* CREATE TABLE syntax: `CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(100));`  
* Primary key: `PRIMARY KEY` constraint  
* NOT NULL: `name VARCHAR(100) NOT NULL` \- column cannot be null  
* UNIQUE: `email VARCHAR(100) UNIQUE` \- column values must be unique  
* DEFAULT: `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`  
* Constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK  
* Auto-increment: `SERIAL` or `BIGSERIAL` for auto-incrementing IDs

#### **Inserting Data**

* INSERT statement: `INSERT INTO table_name (column1, column2) VALUES (value1, value2);`  
* Inserting single row: `INSERT INTO users (name, email) VALUES ('John', 'john@example.com');`  
* Inserting multiple rows: `INSERT INTO users (name, email) VALUES ('John', 'john@example.com'), ('Jane', 'jane@example.com');`  
* Returning inserted data: `INSERT INTO users (name, email) VALUES ('John', 'john@example.com') RETURNING *;`  
* Inserting with default values: `INSERT INTO users (name) VALUES ('John');` (email uses default)  
* Inserting NULL: `INSERT INTO users (name, email) VALUES ('John', NULL);`

#### **Querying Data (SELECT)**

* SELECT statement: `SELECT column1, column2 FROM table_name;`  
* Selecting all columns: `SELECT * FROM users;`  
* WHERE clause: filtering rows  
* `SELECT * FROM users WHERE id = 1;`  
* Comparison operators: `=`, `!=`, `<>`, `>`, `<`, `>=`, `<=`  
* Logical operators: `AND`, `OR`, `NOT`  
* `IN`: `WHERE id IN (1, 2, 3)`  
* `BETWEEN`: `WHERE age BETWEEN 18 AND 65`  
* `LIKE`: pattern matching `WHERE name LIKE 'J%'` (starts with J)  
* `IS NULL`: `WHERE email IS NULL`  
* ORDER BY: sorting results  
* `SELECT * FROM users ORDER BY name ASC;` (ascending)  
* `SELECT * FROM users ORDER BY name DESC;` (descending)  
* Multiple columns: `ORDER BY name ASC, age DESC;`  
* LIMIT: limiting number of results  
* `SELECT * FROM users LIMIT 10;`  
* `LIMIT 10 OFFSET 20;` \- skip first 20, get next 10 (pagination)  
* DISTINCT: unique values  
* `SELECT DISTINCT country FROM users;`

#### **Updating Data**

* UPDATE statement: `UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;`  
* Updating single row: `UPDATE users SET name = 'John Doe' WHERE id = 1;`  
* Updating multiple rows: `UPDATE users SET status = 'active' WHERE age > 18;`  
* Updating with expressions: `UPDATE products SET price = price * 1.1;` (10% increase)  
* Returning updated data: `UPDATE users SET name = 'John' WHERE id = 1 RETURNING *;`  
* Important: Always use WHERE clause (or update all rows)

#### **Deleting Data**

* DELETE statement: `DELETE FROM table_name WHERE condition;`  
* Deleting single row: `DELETE FROM users WHERE id = 1;`  
* Deleting multiple rows: `DELETE FROM users WHERE status = 'inactive';`  
* Important: Always use WHERE clause (or delete all rows)  
* TRUNCATE: `TRUNCATE TABLE table_name;` \- delete all rows faster  
* CASCADE: deleting related records (with foreign keys)

#### **Relationships**

* One-to-Many: one record in table A relates to many in table B  
* Example: One user has many posts  
* Foreign key in "many" table: `posts` table has `user_id` referencing `users.id`  
* Many-to-Many: many records in table A relate to many in table B  
* Junction table: `post_tags` table with `post_id` and `tag_id`  
* Foreign keys: `FOREIGN KEY (user_id) REFERENCES users(id)`  
* Creating relationships:  
* `CREATE TABLE posts (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), title TEXT);`  
* Referential integrity: ensures foreign key references valid primary key

#### **JOINs**

* What are JOINs: combining data from multiple tables  
* INNER JOIN: returns matching rows from both tables  
* `SELECT * FROM users INNER JOIN posts ON users.id = posts.user_id;`  
* LEFT JOIN (LEFT OUTER JOIN): returns all rows from left table, matching from right  
* `SELECT * FROM users LEFT JOIN posts ON users.id = posts.user_id;`  
* RIGHT JOIN: returns all rows from right table, matching from left  
* FULL OUTER JOIN: returns all rows from both tables  
* Multiple JOINs: joining multiple tables  
* JOIN with WHERE: filtering joined results  
* Aliases: `SELECT u.name, p.title FROM users u JOIN posts p ON u.id = p.user_id;`

#### **Aggregation Functions**

* COUNT: counting rows  
* `SELECT COUNT(*) FROM users;`  
* `SELECT COUNT(*) FROM users WHERE age > 18;`  
* SUM: summing values  
* `SELECT SUM(price) FROM products;`  
* AVG: average value  
* `SELECT AVG(age) FROM users;`  
* MIN and MAX: minimum and maximum values  
* `SELECT MIN(price), MAX(price) FROM products;`  
* GROUP BY: grouping rows  
* `SELECT country, COUNT(*) FROM users GROUP BY country;`  
* HAVING: filtering groups (like WHERE for GROUP BY)  
* `SELECT country, COUNT(*) FROM users GROUP BY country HAVING COUNT(*) > 10;`

#### **Node.js with PostgreSQL**

* Installing pg library: `npm install pg`  
* Creating connection: `const { Pool } = require('pg'); const pool = new Pool({ connectionString: 'postgresql://...' });`  
* Querying database: `pool.query('SELECT * FROM users', (err, result) => { });`  
* Promises: `const result = await pool.query('SELECT * FROM users');`  
* Parameterized queries: \`pool.query('SELECT \* FROM users WHERE id \= $1', \[userId\]);\`  
* Connection pooling: Pool manages multiple connections  
* Environment variables: storing database credentials in `.env` file

#### **Practice Exercises (1-2 hours)**

* Create database and tables  
* Insert, select, update, delete data  
* Practice JOINs with multiple tables  
* Write aggregation queries with GROUP BY  
* Connect Node.js/Express to PostgreSQL  
* Build database queries in Express routes

\---

### **Day 16: NoSQL (MongoDB) and ORMs (3-4 hours)**

#### **NoSQL Databases Introduction**

* What is NoSQL: non-relational databases  
* NoSQL types: document (MongoDB), key-value, column-family, graph  
* When to use NoSQL: flexible schema, large scale, rapid development  
* NoSQL vs SQL: differences and use cases  
* Document databases: store data as documents (JSON-like)

#### **MongoDB Introduction**

* What is MongoDB: document-based NoSQL database  
* MongoDB concepts:  
* Database: container for collections  
* Collection: group of documents (like table)  
* Document: record (like row) stored as BSON (Binary JSON)  
* Field: key-value pair in document (like column)  
* Installation: downloading and installing MongoDB  
* MongoDB Compass: GUI tool for MongoDB  
* MongoDB Shell (mongosh): command-line interface  
* Connecting: `mongosh` or `mongosh "mongodb://localhost:27017"`

#### **MongoDB Basics**

* Creating database: `use database_name` (creates if doesn't exist)  
* Showing databases: `show dbs`  
* Creating collections: `db.createCollection('collection_name')` or automatic creation  
* Showing collections: `show collections`  
* Dropping database: `db.dropDatabase()`  
* Dropping collection: `db.collection_name.drop()`

#### **MongoDB Documents**

* Document structure: JSON-like format (BSON)  
* Example: `{ name: "John", age: 30, email: "john@example.com" }`  
* Data types: String, Number, Boolean, Date, Array, Object, Null, ObjectId  
* ObjectId: unique identifier for documents (like primary key)  
* Embedded documents: documents within documents  
* Arrays: storing arrays in documents

#### **Inserting Documents**

* insertOne: inserting single document  
* `db.users.insertOne({ name: "John", age: 30 });`  
* insertMany: inserting multiple documents  
* \`db.users.insertMany(\[{ name: "John" }, { name: "Jane" }\]);\`  
* Returning inserted document: insertOne/insertMany return result with insertedId

#### **Querying Documents**

* find: querying documents  
* `db.users.find()` \- get all documents  
* `db.users.findOne()` \- get first document  
* Filtering: `db.users.find({ age: 30 })` \- find documents where age is 30  
* Comparison operators:  
* `$gt`: greater than `{ age: { $gt: 18 } }`  
* `$gte`: greater than or equal  
* `$lt`: less than  
* `$lte`: less than or equal  
* `$ne`: not equal  
* `$in`: in array \`{ age: { $in: \[18, 19, 20\] } }\`  
* Logical operators:  
* `$and`: \`{ $and: \[{ age: { $gt: 18 } }, { age: { $lt: 65 } }\] }\`  
* `$or`: \`{ $or: \[{ name: "John" }, { name: "Jane" }\] }\`  
* `$not`: `{ age: { $not: { $gt: 18 } } }`  
* Projection: selecting specific fields  
* `db.users.find({}, { name: 1, email: 1 })` \- only name and email (1 \= include, 0 \= exclude)  
* Sorting: `db.users.find().sort({ age: 1 })` (1 \= ascending, \-1 \= descending)  
* Limiting: `db.users.find().limit(10)`  
* Skipping: `db.users.find().skip(10).limit(10)` (pagination)

#### **Updating Documents**

* updateOne: updating single document  
* `db.users.updateOne({ _id: ObjectId("...") }, { $set: { name: "John Doe" } })`  
* updateMany: updating multiple documents  
* `db.users.updateMany({ age: { $lt: 18 } }, { $set: { status: "minor" } })`  
* Update operators:  
* `$set`: set field value  
* `$unset`: remove field  
* `$inc`: increment numeric value  
* `$push`: add to array  
* `$pull`: remove from array  
* Replace: `replaceOne()` \- replace entire document

#### **Deleting Documents**

* deleteOne: deleting single document  
* `db.users.deleteOne({ _id: ObjectId("...") })`  
* deleteMany: deleting multiple documents  
* `db.users.deleteMany({ status: "inactive" })`  
* Important: Always use filter (or delete all documents)

#### **MongoDB Aggregation**

* aggregate: aggregation pipeline  
* Pipeline stages:  
* `$match`: filter documents (like WHERE)  
* `$group`: group documents (like GROUP BY)  
* `$sort`: sort documents  
* `$limit`: limit documents  
* `$project`: reshape documents (select fields)  
* `$lookup`: join collections (like JOIN)  
* Example: \`db.users.aggregate(\[{ $match: { age: { $gt: 18 } } }, { $group: { \_id: "$country", count: { $sum: 1 } } }\])\`

#### **MongoDB Indexes**

* What are indexes: improve query performance  
* Creating index: `db.users.createIndex({ email: 1 })` (1 \= ascending, \-1 \= descending)  
* Unique index: `db.users.createIndex({ email: 1 }, { unique: true })`  
* Compound index: `db.users.createIndex({ name: 1, age: -1 })`  
* Listing indexes: `db.users.getIndexes()`  
* Dropping index: `db.users.dropIndex({ email: 1 })`

#### **Mongoose (MongoDB ODM)**

* What is Mongoose: Object Document Mapper for MongoDB  
* Installation: `npm install mongoose`  
* Connecting: `mongoose.connect('mongodb://localhost:27017/dbname')`  
* Schemas: defining document structure  
* `const userSchema = new mongoose.Schema({ name: String, age: Number })`  
* Models: creating models from schemas  
* `const User = mongoose.model('User', userSchema)`  
* Creating documents: `const user = new User({ name: "John" }); await user.save();`  
* Querying: `User.find()`, `User.findOne()`, `User.findById()`  
* Updating: `User.updateOne()`, `User.findByIdAndUpdate()`  
* Deleting: `User.deleteOne()`, `User.findByIdAndDelete()`  
* Schema types: String, Number, Date, Boolean, Array, Object, ObjectId  
* Schema validation: required, min, max, enum, default  
* Virtual properties: computed properties not stored in database  
* Methods and statics: instance methods and static methods on models

#### **Prisma (ORM for PostgreSQL and MongoDB)**

* What is Prisma: next-generation ORM for Node.js  
* Installation: `npm install prisma @prisma/client`  
* Initializing: `npx prisma init`  
* Schema file: `prisma/schema.prisma` \- define database schema  
* Database providers: PostgreSQL, MySQL, SQLite, MongoDB, etc.  
* Models: defining models in schema  
* `model User { id Int @id @default(autoincrement()) name String email String }`  
* Migrations: `npx prisma migrate dev` \- create and apply migrations  
* Prisma Client: generating and using Prisma Client  
* `const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient();`  
* Querying: `prisma.user.findMany()`, `prisma.user.create()`, `prisma.user.update()`, `prisma.user.delete()`  
* Relationships: defining relationships in schema  
* Prisma Studio: `npx prisma studio` \- GUI for database

#### **Choosing Between SQL and NoSQL**

* SQL (PostgreSQL) use cases:  
* Structured data with relationships  
* Complex queries and transactions  
* Data integrity requirements  
* Established schema  
* NoSQL (MongoDB) use cases:  
* Flexible schema  
* Rapid development  
* Large-scale applications  
* Document-based data  
* Many applications use both: SQL for structured data, NoSQL for flexible data

#### **Practice Exercises and Project (2-3 hours)**

* Install and set up MongoDB  
* Practice MongoDB CRUD operations  
* Use Mongoose with Express (MongoDB)  
* Or use Prisma with Express (PostgreSQL or MongoDB)  
* Add database layer to previous API project:  
* Replace file-based storage with database  
* Set up database connection  
* Create database models/schemas  
* Update API routes to use database queries  
* Handle database errors  
* Test all CRUD operations with database

\---

### **Day 17: Authentication and Sessions (3-4 hours)**

#### **Authentication Fundamentals**

* What is authentication: verifying user identity  
* Authentication vs authorization:  
* Authentication: "Who are you?" (login)  
* Authorization: "What can you do?" (permissions)  
* Authentication methods:  
* Sessions: server-side session storage  
* JWT (JSON Web Tokens): stateless tokens  
* OAuth: third-party authentication  
* Password security: never store plain text passwords

#### **Password Hashing**

* Why hash passwords: security (passwords should never be stored in plain text)  
* Hashing: one-way function (cannot reverse)  
* bcrypt: popular password hashing library  
* Installing bcrypt: `npm install bcrypt` or `npm install bcryptjs`  
* Hashing passwords:  
* `const hashedPassword = await bcrypt.hash(password, 10)` (10 \= salt rounds)  
* Salt rounds: higher \= more secure but slower  
* Comparing passwords:  
* `const isMatch = await bcrypt.compare(plainPassword, hashedPassword)`  
* Password requirements: minimum length, complexity (enforced in application)

#### **User Registration**

* Registration flow:  
1. User submits registration form (email, password, etc.)  
2. Validate input (email format, password strength)  
3. Check if user exists  
4. Hash password  
5. Save user to database  
6. Return success or error  
* Validation: email format, password requirements, required fields  
* Error handling: user already exists, validation errors

#### **Sessions**

* What are sessions: server-side authentication mechanism  
* Session storage: sessions stored on server (memory, database, Redis)  
* How sessions work:  
1. User logs in  
2. Server creates session, stores session ID  
3. Session ID sent to client (cookie)  
4. Client sends session ID with requests  
5. Server validates session ID  
* Express sessions: `express-session` middleware  
* Installation: `npm install express-session`  
* Usage: `app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }))`  
* Session storage: default (memory), or use `connect-mongo` for MongoDB  
* Accessing session: `req.session.userId = user.id` (set), `const userId = req.session.userId` (get)  
* Destroying session: `req.session.destroy()` (logout)

#### **JWT (JSON Web Tokens)**

* What is JWT: stateless authentication token  
* JWT structure: `header.payload.signature`  
* JWT benefits: stateless (no server-side storage), scalable, works with microservices  
* Installing jsonwebtoken: `npm install jsonwebtoken`  
* Creating tokens:  
* `const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' })`  
* Payload: data to encode (user ID, etc.)  
* Secret: key to sign token (keep secure)  
* Options: expiration, issuer, etc.  
* Verifying tokens:  
* `const decoded = jwt.verify(token, 'secret')`  
* Throws error if invalid or expired  
* Token expiration: set expiration time (1h, 7d, etc.)  
* Refresh tokens: long-lived tokens for getting new access tokens (advanced)

#### **Authentication Middleware**

* Protecting routes: middleware to check authentication  
* Session-based middleware:  
* `const requireAuth = (req, res, next) => { if (req.session.userId) next(); else res.status(401).json({ error: 'Unauthorized' }) }`  
* JWT-based middleware:  
* Extract token from headers: \`const token \= req.headers.authorization?.split(' ')\[1\]\`  
* Verify token: `const decoded = jwt.verify(token, 'secret')`  
* Attach user to request: `req.userId = decoded.userId`  
* Call next() or return error  
* Using middleware: `app.get('/protected', requireAuth, handler)`  
* Optional authentication: middleware that doesn't require auth but attaches user if authenticated

#### **Login Flow**

* Login endpoint: POST `/api/login` or `/api/auth/login`  
* Login process:  
1. Receive email/username and password  
2. Find user in database  
3. Compare password with hashed password  
4. If match: create session/token, return success  
5. If no match: return error  
* Response: return user data (without password) and session/token  
* Error handling: invalid credentials, user not found

#### **Logout Flow**

* Logout endpoint: POST `/api/logout` or `/api/auth/logout`  
* Session-based logout: `req.session.destroy()`  
* JWT-based logout: client removes token (server doesn't store tokens)  
* Response: success message

#### **OAuth Basics (Introduction)**

* What is OAuth: authorization framework for third-party authentication  
* OAuth providers: Google, GitHub, Facebook, Twitter, etc.  
* OAuth flow (simplified):  
1. User clicks "Login with Google"  
2. Redirect to Google login  
3. User authorizes application  
4. Google redirects back with authorization code  
5. Exchange code for access token  
6. Use access token to get user info  
* Passport.js: authentication middleware for Node.js  
* Installation: `npm install passport passport-google-oauth20`  
* Strategies: different OAuth providers  
* OAuth benefits: users don't need to create account, trusted providers

#### **Practice Exercises (1-2 hours)**

* Implement user registration with password hashing  
* Implement login with sessions  
* Implement login with JWT  
* Create authentication middleware  
* Protect routes with authentication  
* Implement logout functionality

\---

### **Day 18: Security and API Best Practices (3-4 hours)**

#### **Input Validation**

* Why validate input: security, data integrity, user experience  
* Validation libraries: `express-validator` or `joi`  
* Installing express-validator: `npm install express-validator`  
* Validation middleware:  
* `body('email').isEmail()`  
* `body('password').isLength({ min: 8 })`  
* `body('age').isInt({ min: 0, max: 120 })`  
* Running validation: `validationResult(req)` to check errors  
* Custom validation: creating custom validators  
* Sanitization: cleaning input data (`trim()`, `escape()`, `normalizeEmail()`)  
* Validation on both client and server: client for UX, server for security

#### **SQL Injection Prevention**

* What is SQL injection: malicious SQL code injection  
* Parameterized queries: using placeholders instead of string concatenation  
* Prisma/ORM protection: ORMs use parameterized queries automatically  
* Raw queries: if using raw SQL, always use parameters  
* Example (bad): `query('SELECT * FROM users WHERE id = ' + userId)` \- vulnerable  
* Example (good): \`query('SELECT \* FROM users WHERE id \= $1', \[userId\])\` \- safe

#### **XSS (Cross-Site Scripting) Prevention**

* What is XSS: injecting malicious scripts into web pages  
* Prevention:  
* Escape user input: convert `<script>` to `&lt;script&gt;`  
* Use template engines that auto-escape (EJS, Handlebars)  
* Content Security Policy (CSP) headers  
* Sanitize user input  
* Express: use `express.escape()` or template engines with auto-escaping  
* JSON responses: JSON.stringify() automatically escapes

#### **CORS (Cross-Origin Resource Sharing)**

* CORS recap: browser security mechanism  
* CORS middleware: `npm install cors`  
* Configuring CORS:  
* `app.use(cors())` \- allow all origins (development only)  
* `cors({ origin: 'http://localhost:3000' })` \- specific origin  
* \`cors({ origin: \['http://localhost:3000', 'https://example.com'\] })\` \- multiple origins  
* `cors({ credentials: true })` \- allow cookies/credentials  
* Preflight requests: OPTIONS requests for complex requests  
* CORS headers: Access-Control-Allow-Origin, Access-Control-Allow-Methods, etc.

#### **Security Headers**

* Helmet.js: security middleware for Express  
* Installation: `npm install helmet`  
* Usage: `app.use(helmet())`  
* Security headers:  
* Content-Security-Policy: prevent XSS  
* X-Content-Type-Options: prevent MIME type sniffing  
* X-Frame-Options: prevent clickjacking  
* Strict-Transport-Security: force HTTPS  
* X-XSS-Protection: enable browser XSS filter

#### **Rate Limiting**

* What is rate limiting: limiting number of requests from IP/user  
* express-rate-limit: rate limiting middleware  
* Installation: `npm install express-rate-limit`  
* Usage: `const rateLimit = require('express-rate-limit'); const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })`  
* Apply to routes: `app.use('/api/', limiter)`  
* Rate limiting options:  
* `windowMs`: time window (15 minutes)  
* `max`: maximum requests per window  
* `message`: custom error message  
* Different limits: stricter for login/registration endpoints

#### **Environment Variables**

* What are environment variables: configuration values outside code  
* .env files: storing environment variables  
* dotenv: loading .env files  
* Installation: `npm install dotenv`  
* Usage: `require('dotenv').config()` at top of file  
* .env file format: `PORT=3000`, `DATABASE_URL=postgresql://...`, `JWT_SECRET=secret`  
* .gitignore: add `.env` to .gitignore (never commit secrets)  
* Accessing: `process.env.PORT`, `process.env.DATABASE_URL`  
* Environment-specific: `.env.development`, `.env.production`

#### **Error Handling Best Practices**

* Don't expose sensitive information: don't leak database errors, stack traces in production  
* Generic error messages: "Something went wrong" instead of detailed errors  
* Logging errors: log detailed errors server-side for debugging  
* Error responses: consistent error format  
* HTTP status codes: use appropriate status codes  
* Error middleware: centralized error handling

#### **API Security Best Practices Summary**

* Use HTTPS: encrypt data in transit (production)  
* Validate all input: never trust user input  
* Use parameterized queries: prevent SQL injection  
* Hash passwords: use bcrypt with salt  
* Use secure session storage: don't use default memory store in production  
* Set secure cookies: `httpOnly`, `secure`, `sameSite` flags  
* Implement rate limiting: prevent abuse  
* Use security headers: Helmet.js  
* Keep dependencies updated: `npm audit` to check vulnerabilities  
* Implement CORS properly: don't allow all origins in production  
* Use environment variables: store secrets securely  
* Log security events: log authentication failures, etc.

#### **API Documentation**

* Why document APIs: helps developers use your API  
* Documentation tools: Swagger/OpenAPI, Postman, etc.  
* API documentation should include:  
* Endpoints and HTTP methods  
* Request/response formats  
* Authentication requirements  
* Example requests/responses  
* Error codes and messages  
* Swagger/OpenAPI: industry standard for API documentation  
* Postman collections: shareable API documentation

#### **Testing APIs**

* Why test APIs: catch bugs, ensure functionality  
* Testing tools: Postman, Insomnia, curl  
* Manual testing: using tools to test endpoints  
* Automated testing: writing test scripts (Jest, Supertest)  
* Testing authentication: testing protected routes  
* Testing error cases: testing validation, error handling

#### **Practice Exercises and Project (2-3 hours)**

* Add input validation to API endpoints  
* Implement rate limiting  
* Add security headers with Helmet  
* Set up environment variables  
* Implement comprehensive error handling  
* Add authentication to your API:  
* User registration and login endpoints  
* Password hashing with bcrypt  
* JWT or session-based authentication  
* Protected routes with authentication middleware  
* User-specific data (users can only access their own data)  
* Logout endpoint  
* Test authentication flow (register, login, access protected routes, logout)  
* Document your API endpoints

#### **Week 3 Project: Complete Authenticated REST API**

Requirements:

* Express.js server with RESTful API  
* PostgreSQL or MongoDB database  
* User authentication (JWT or sessions)  
* Password hashing with bcrypt  
* Protected routes with authentication middleware  
* Input validation on all endpoints  
* Error handling middleware  
* Security best practices (CORS, Helmet, rate limiting)  
* Environment variables for configuration  
* CRUD operations with authentication  
* Users can only access their own resources

