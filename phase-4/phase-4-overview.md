## **Phase 4: Integration & Deployment (Days 19-23)**

Goal: Deploy full-stack applications and learn DevOps

### **Day 19: Full-Stack Integration Part 1 (3-4 hours)**

#### **Full-Stack Architecture**

* Frontend-backend separation: React (frontend) and Express (backend)  
* Communication: HTTP requests (REST API)  
* Development setup: running frontend and backend separately  
* CORS configuration: backend must allow frontend origin  
* API base URL: configuring API endpoint in frontend  
* Environment variables: different API URLs for development and production

#### **Fetch API in React**

* Fetch API recap: making HTTP requests from React  
* GET requests: fetching data from API  
  * `fetch('http://localhost:3000/api/posts')`  
    * Handling response: `.then(res => res.json())`  
* POST requests: creating data  
  * `fetch('http://localhost:3000/api/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })`  
* PUT/PATCH requests: updating data  
* DELETE requests: deleting data  
* Headers: setting Content-Type, Authorization headers  
* Error handling: checking `response.ok`, handling network errors

#### **Axios Library**

* What is Axios: promise-based HTTP client  
* Installation: `npm install axios`  
* Creating axios instance: `const api = axios.create({ baseURL: 'http://localhost:3000/api' })`  
* GET request: `axios.get('/posts')` or `api.get('/posts')`  
* POST request: `axios.post('/posts', data)`  
* PUT request: `axios.put('/posts/1', data)`  
* DELETE request: `axios.delete('/posts/1')`  
* Axios vs Fetch: Axios automatically JSON stringifies, better error handling  
* Axios interceptors: request/response interceptors for auth tokens, error handling  
* Default headers: setting default headers for all requests

#### **API Integration with React**

* Data fetching in useEffect: fetching data when component mounts  
* Loading states: \`const \[loading, setLoading\] \= useState(true)\`  
* Data state: \`const \[data, setData\] \= useState(null)\`  
* Error state: \`const \[error, setError\] \= useState(null)\`  
* Fetching pattern:  
* `useEffect(() => {`  
*  `setLoading(true);`  
    `fetch('/api/posts')`  
      `.then(res => res.json())`  
      `.then(data => { setData(data); setLoading(false); })`  
      `.catch(err => { setError(err); setLoading(false); });`  
  `}, []);`  
* Refetching data: adding dependencies to useEffect  
* Fetching on user action: fetching data when button clicked, form submitted

#### **Custom Hooks for API Calls**

* Creating useApi hook: custom hook for API calls  
* useFetch hook: reusable data fetching hook  
* useMutation hook: hook for POST/PUT/DELETE operations  
* Benefits: reusable logic, cleaner components  
* Example:  
* `const useFetch = (url) => {`  
*  `const [data, setData] = useState(null);`  
    `const [loading, setLoading] = useState(true);`  
    `const [error, setError] = useState(null);`  
    `// fetch logic`  
    `return { data, loading, error };`  
  `};`

#### **State Management with APIs**

* Local state: useState for API data  
* Context API: sharing API data across components  
* Lifting state: sharing API data between sibling components  
* State updates: updating state after API calls (create, update, delete)  
* Optimistic updates: updating UI before API confirms (advanced)

#### **Error Handling**

* Network errors: handling fetch/axios errors  
* HTTP errors: checking response status (400, 401, 404, 500\)  
* Error messages: displaying user-friendly error messages  
* Error boundaries: catching errors in React components  
* Try-catch: using try-catch with async/await  
* Error states: showing error messages in UI

#### **Loading States**

* Loading indicators: showing loading spinner/skeleton while fetching  
* Conditional rendering: `{loading ? <Spinner /> : <Content />}`  
* Skeleton screens: placeholder content while loading  
* Disabling buttons: prevent multiple submissions  
* Loading states for individual operations: loading state for each button/action

#### **Authentication Integration**

* Storing tokens: localStorage or sessionStorage for JWT tokens  
* Sending tokens: including token in Authorization header  
  * ``headers: { 'Authorization': `Bearer ${token}`` }\`  
* Token expiration: handling expired tokens, redirecting to login  
* Protected routes: checking authentication before rendering  
* Logout: clearing token, redirecting to login  
* Token refresh: refreshing expired tokens (advanced)

#### **CORS Configuration**

* Backend CORS setup: allowing frontend origin  
* Development: `cors({ origin: 'http://localhost:3000' })`  
* Production: `cors({ origin: 'https://yourdomain.com' })`  
* Credentials: `cors({ credentials: true })` for cookies  
* Preflight requests: handling OPTIONS requests

#### **Practice Exercises (1-2 hours)**

* Set up React app to connect to Express API  
* Fetch data from API and display in React components  
* Implement CRUD operations (Create, Read, Update, Delete)  
* Add loading and error states  
* Implement authentication flow (login, protected routes)  
* Create custom hooks for API calls

\---

### **Day 20: Full-Stack Integration Part 2 (3-4 hours)**

#### **Form Handling with API**

* Form submission: submitting forms to API  
* Controlled inputs: form inputs controlled by state  
* Form validation: validating before submission  
* Error handling: displaying API validation errors  
* Success feedback: showing success message after submission  
* Reset form: clearing form after successful submission

#### **File Uploads**

* File input: `<input type="file" onChange={handleFileChange} />`  
* FormData: creating FormData for file uploads  
  * `const formData = new FormData(); formData.append('file', file);`  
* Uploading files: POST request with FormData  
  * `axios.post('/api/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })`  
* Progress tracking: tracking upload progress (advanced)  
* Image preview: showing preview before upload  
* Backend: handling file uploads with `multer` middleware (Express)

#### **Real-time Updates (Introduction)**

* Polling: periodically fetching data  
  * `setInterval(() => fetchData(), 5000)` \- fetch every 5 seconds  
* WebSockets: real-time bidirectional communication (advanced)  
* Server-Sent Events (SSE): server pushing updates to client (advanced)  
* Socket.io: library for WebSockets (introduction)

#### **Error Handling Patterns**

* Centralized error handling: creating error handling utilities  
* Error types: network errors, validation errors, server errors  
* Error messages: user-friendly error messages  
* Error logging: logging errors for debugging  
* Retry logic: retrying failed requests (advanced)

#### **State Management Libraries (Brief Introduction)**

* React Query (TanStack Query): data fetching library  
  * Features: caching, background updates, error handling  
    * Installation: `npm install @tanstack/react-query`  
* Redux Toolkit Query: data fetching with Redux  
* SWR: data fetching library by Vercel  
* When to use: complex data fetching, caching needs

#### **Performance Optimization**

* Memoization: preventing unnecessary re-renders  
* Code splitting: lazy loading routes  
* Image optimization: optimizing images, lazy loading  
* Bundle size: analyzing bundle size, code splitting  
* API optimization: reducing API calls, caching

#### **Testing API Integration**

* Mocking API calls: mocking fetch/axios in tests  
* Testing loading states: testing loading indicators  
* Testing error handling: testing error states  
* Testing authentication: testing protected routes  
* Integration testing: testing full flow (form submit → API call → state update)

#### **Full-Stack Project Structure**

* Frontend structure: organizing React components, hooks, utils  
* Backend structure: organizing routes, controllers, models, middleware  
* Shared types: TypeScript types shared between frontend and backend  
* Environment configuration: different configs for dev/prod  
* API documentation: documenting API endpoints

#### **Practice Exercises and Project (3-4 hours)**

* Complete full-stack application integration:  
  * Connect React frontend to Express backend  
    * Implement all CRUD operations with API  
    * Add authentication (login, registration, protected routes)  
    * Handle loading and error states throughout app  
    * Form handling with API integration  
    * File uploads (if applicable)  
    * User-specific data (users see only their data)  
    * Proper error handling and user feedback  
* Choose project: Expense Tracker, Blog Platform, or E-commerce Site  
* Test all functionality end-to-end  
* Ensure responsive design  
* Polish UI/UX

\---

### **Day 21: Git and Version Control (3-4 hours)**

#### **Git Fundamentals**

* What is Git: distributed version control system  
* Why Git: track changes, collaborate, backup code  
* Installation: downloading and installing Git  
* Configuration: `git config --global user.name "Name"`, `git config --global user.email "email"`  
* Checking Git: `git --version`

#### **Git Basics**

* Initializing repository: `git init` \- creates .git folder  
* Repository states: working directory, staging area, repository  
* Git workflow: modify → stage → commit  
* Checking status: `git status` \- see what files changed  
* Viewing changes: `git diff` \- see changes in files  
* Staging files: `git add filename` or `git add .` (all files)  
* Committing: `git commit -m "commit message"`  
* Viewing history: `git log` \- see commit history  
* Commit messages: writing good commit messages (descriptive, present tense)

#### **Git Commands**

* `git add`: stage files for commit  
  * `git add file.js`: stage specific file  
    * `git add .`: stage all changes  
    * `git add -A`: stage all changes including deletions  
* `git commit`: save changes  
  * `git commit -m "message"`: commit with message  
    * `git commit -a -m "message"`: stage and commit (skips git add)  
* `git status`: check repository status  
* `git log`: view commit history  
  * `git log --oneline`: compact view  
    * `git log --graph`: graph view  
* `git diff`: view changes  
  * `git diff`: changes in working directory  
    * `git diff --staged`: changes in staging area  
* `git show`: show specific commit  
* `git rm`: remove files from Git  
* `git mv`: move/rename files

#### **.gitignore**

* What is .gitignore: file listing files/folders Git should ignore  
* Creating .gitignore: create `.gitignore` file in repository root  
* Common ignores:  
  * `node_modules/`: dependencies  
    * `.env`: environment variables  
    * `dist/` or `build/`: build outputs  
    * `*.log`: log files  
    * `.DS_Store`: macOS system files  
    * `*.env.local`: local environment files  
* Patterns: `*` (wildcard), `!` (negation), `/` (directory)

#### **Branches**

* What are branches: separate lines of development  
* Main/master branch: default branch  
* Creating branch: `git branch branch-name` or `git checkout -b branch-name`  
* Switching branches: `git checkout branch-name` or `git switch branch-name`  
* Listing branches: `git branch` (local), `git branch -a` (all)  
* Current branch: asterisk (\*) shows current branch  
* Deleting branch: `git branch -d branch-name` (safe delete), `git branch -D branch-name` (force delete)  
* Branch naming: descriptive names (feature/add-login, bugfix/fix-error)

#### **Merging**

* What is merging: combining changes from one branch into another  
* Merging branch: `git checkout main`, then `git merge branch-name`  
* Fast-forward merge: when branch is ahead (linear history)  
* Merge commit: when branches diverged (creates merge commit)  
* Merge conflicts: when same lines changed in both branches  
* Resolving conflicts:  
  1. Git marks conflicts in files  
     2. Edit files to resolve conflicts  
     3. Stage resolved files: `git add filename`  
     4. Complete merge: `git commit`  
* Conflict markers: `<<<<<<<`, `=======`, `>>>>>>>`  
* Aborting merge: `git merge --abort`

#### **Remote Repositories**

* What are remotes: repositories on servers (GitHub, GitLab, etc.)  
* Adding remote: `git remote add origin https://github.com/user/repo.git`  
* Viewing remotes: `git remote -v`  
* Cloning repository: `git clone https://github.com/user/repo.git`  
* Fetching: `git fetch origin` \- download changes without merging  
* Pulling: `git pull origin main` \- fetch and merge  
* Pushing: `git push origin main` \- upload changes to remote  
* Remote branches: `origin/main` \- branch on remote  
* Setting upstream: `git push -u origin main` \- set tracking branch

#### **GitHub**

* What is GitHub: web-based Git hosting service  
* Creating account: sign up on github.com  
* Creating repository: clicking "New repository" on GitHub  
* Repository settings: public/private, description, README  
* Cloning repository: `git clone <repository-url>`  
* Pushing to GitHub: `git push origin main`  
* Pulling from GitHub: `git pull origin main`  
* GitHub features: Issues, Pull Requests, Actions, Wiki

#### **Pull Requests**

* What are Pull Requests (PR): propose changes to codebase  
* Creating PR:  
  1. Push branch to GitHub  
     2. Click "New Pull Request" on GitHub  
     3. Select base and compare branches  
     4. Add description, review changes  
     5. Click "Create Pull Request"  
* Reviewing PR: code review, comments, suggestions  
* Merging PR: merge button on GitHub (merge commit, squash, rebase)  
* PR best practices: descriptive title, clear description, link issues

#### **Collaboration Workflow**

* Forking: copying someone else's repository  
* Cloning: `git clone <repository-url>`  
* Creating feature branch: `git checkout -b feature/new-feature`  
* Making changes: edit files, commit changes  
* Pushing branch: `git push origin feature/new-feature`  
* Creating PR: create pull request on GitHub  
* Code review: reviewer reviews and approves  
* Merging: merge PR into main branch  
* Updating local: `git pull origin main` to get latest changes

#### **Common Git Scenarios**

* Undo changes: `git checkout -- filename` (discard changes)  
* Unstage files: `git reset HEAD filename`  
* Amend commit: `git commit --amend` \- modify last commit  
* Undo commit (keep changes): `git reset --soft HEAD~1`  
* Undo commit (discard changes): `git reset --hard HEAD~1`  
* Stash changes: `git stash` \- temporarily save changes  
  * Apply stash: `git stash apply` or `git stash pop`  
    * List stashes: `git stash list`  
* Viewing file history: `git log -- filename`  
* Tagging: `git tag v1.0.0` \- mark specific commits (releases)

#### **Git Best Practices**

* Commit often: small, logical commits  
* Write good commit messages: descriptive, present tense  
* Use branches: one branch per feature/fix  
* Keep main branch stable: only merge tested code  
* Pull before push: `git pull` before `git push`  
* Review before committing: `git diff` to review changes  
* Don't commit sensitive data: use .gitignore for secrets  
* Use meaningful branch names: descriptive names

#### **Practice Exercises (1-2 hours)**

* Initialize Git repository in your project  
* Make commits for different features  
* Create and switch between branches  
* Merge branches  
* Create GitHub repository  
* Push code to GitHub  
* Create pull request  
* Practice collaboration workflow  
* Handle merge conflicts  
* Use .gitignore properly

\---

### **Day 22: Docker and CI/CD (3-4 hours)**

#### **Docker Introduction**

* What is Docker: platform for containerizing applications  
* Containers vs Virtual Machines: containers are lighter, share OS kernel  
* Why Docker: consistent environments, easy deployment, isolation  
* Docker concepts:  
  * Image: template for creating containers  
    * Container: running instance of image  
    * Dockerfile: instructions for building image  
    * Docker Hub: registry for Docker images  
* Installation: downloading and installing Docker Desktop

#### **Docker Basics**

* Checking Docker: `docker --version`  
* Docker commands:  
  * `docker ps`: list running containers  
    * `docker ps -a`: list all containers  
    * `docker images`: list images  
    * `docker pull image-name`: download image  
    * `docker run image-name`: run container from image  
    * `docker stop container-id`: stop container  
    * `docker start container-id`: start stopped container  
    * `docker rm container-id`: remove container  
    * `docker rmi image-id`: remove image

#### **Dockerfile**

* What is Dockerfile: text file with instructions for building image  
* Creating Dockerfile: create `Dockerfile` in project root  
* Dockerfile instructions:  
  * `FROM`: base image (`FROM node:18`)  
    * `WORKDIR`: set working directory (`WORKDIR /app`)  
    * `COPY`: copy files (`COPY package.json .`)  
    * `RUN`: execute command (`RUN npm install`)  
    * `EXPOSE`: expose port (`EXPOSE 3000`)  
    * `CMD`: default command (\`CMD \["node", "index.js"\]\`)  
* Example Dockerfile:  
* `FROM node:18`  
* `WORKDIR /app`  
  `COPY package*.json ./`  
  `RUN npm install`  
  `COPY . .`  
  `EXPOSE 3000`  
  `CMD ["node", "index.js"]`

#### **Building and Running Containers**

* Building image: `docker build -t image-name .`  
  * `-t`: tag/name for image  
    * `.`: build context (current directory)  
* Running container: `docker run -p 3000:3000 image-name`  
  * `-p`: port mapping (host:container)  
    * `-d`: run in detached mode (background)  
    * `--name`: name container  
* Viewing logs: `docker logs container-id` or `docker logs container-name`  
* Interactive mode: `docker run -it image-name /bin/bash`  
* Environment variables: `docker run -e VAR=value image-name`

#### **Docker Compose**

* What is Docker Compose: tool for defining multi-container applications  
* docker-compose.yml: YAML file defining services  
* Installation: comes with Docker Desktop  
* docker-compose.yml structure:  
* `version: '3.8'`  
* `services:`  
    `app:`  
      `build: .`  
      `ports:`  
        `- "3000:3000"`  
    `db:`  
      `image: postgres:14`  
      `environment:`  
        `POSTGRES_PASSWORD: password`  
* Docker Compose commands:  
  * `docker-compose up`: start services  
    * `docker-compose up -d`: start in detached mode  
    * `docker-compose down`: stop and remove containers  
    * `docker-compose build`: build images  
    * `docker-compose logs`: view logs  
* Networking: services can communicate by service name

#### **Docker for Node.js Applications**

* Multi-stage builds: optimize image size  
* .dockerignore: exclude files from build context (like .gitignore)  
* Environment variables: using environment variables in containers  
* Volume mounts: `-v host-path:container-path` for persistent data  
* Docker Compose for full-stack: frontend, backend, database services

#### **CI/CD Introduction**

* What is CI/CD: Continuous Integration / Continuous Deployment  
* CI (Continuous Integration): automatically test code on every commit  
* CD (Continuous Deployment): automatically deploy code after tests pass  
* Benefits: catch bugs early, automate deployment, consistent process  
* CI/CD pipeline: series of automated steps (test, build, deploy)

#### **GitHub Actions**

* What is GitHub Actions: CI/CD platform integrated with GitHub  
* Workflows: automated processes defined in YAML files  
* Workflow file: `.github/workflows/workflow-name.yml`  
* Workflow structure:  
* `name: CI`  
* `on: [push, pull_request]`  
  `jobs:`  
    `test:`  
      `runs-on: ubuntu-latest`  
      `steps:`  
        `- uses: actions/checkout@v2`  
        `- uses: actions/setup-node@v2`  
        `- run: npm install`  
        `- run: npm test`  
* Triggers: `on: push`, `on: pull_request`, `on: schedule`  
* Jobs: separate tasks that run in parallel or sequence  
* Steps: individual commands in a job  
* Actions: reusable workflow steps (`actions/checkout`, `actions/setup-node`)

#### **GitHub Actions Workflows**

* Node.js workflow: setting up Node.js, running tests  
* Building: `npm run build`  
* Testing: `npm test`  
* Linting: `npm run lint`  
* Deployment: deploying to hosting platforms  
* Secrets: storing sensitive data (API keys, passwords)  
  * Settings → Secrets → New repository secret  
    * Using secrets: `${{ secrets.SECRET_NAME }}`  
* Matrix strategy: testing on multiple Node.js versions

#### **Other CI/CD Platforms (Introduction)**

* GitLab CI: CI/CD for GitLab repositories  
* Jenkins: self-hosted CI/CD server  
* CircleCI: cloud-based CI/CD  
* Travis CI: cloud-based CI/CD  
* Azure DevOps: Microsoft's CI/CD platform

#### **Docker in CI/CD**

* Building Docker images in CI: `docker build`  
* Pushing to registry: Docker Hub, GitHub Container Registry  
* Running tests in containers: consistent test environment  
* Docker Compose in CI: testing multi-container setups

#### **Practice Exercises and Project (2-3 hours)**

* Install Docker Desktop  
* Create Dockerfile for Node.js application  
* Build and run Docker container  
* Create docker-compose.yml for full-stack app (frontend, backend, database)  
* Set up GitHub Actions workflow:  
  * Run tests on push  
    * Build application  
    * Optional: deploy to staging  
* Test CI/CD pipeline (make commit, see workflow run)  
* Configure secrets in GitHub  
* Practice with Docker commands

\---

### **Day 23: Deployment and Review (3-4 hours)**

#### **Deployment Overview**

* What is deployment: making application available to users  
* Deployment options: cloud platforms, VPS, serverless  
* Deployment considerations:  
  * Environment variables  
    * Database setup  
    * Domain and SSL  
    * Monitoring  
    * Scaling

#### **Environment Setup**

* Production environment: different from development  
* Environment variables: separate .env files for dev/prod  
* Database: production database (different from dev)  
* API URLs: production API endpoints  
* Build process: building frontend for production  
  * React: `npm run build` creates optimized build  
    * Node.js: may need transpilation (TypeScript, Babel)

#### **Deployment Platforms \- Frontend**

* Vercel: popular for React/Next.js  
  * Installation: `npm install -g vercel`  
    * Deployment: `vercel` command or GitHub integration  
    * Features: automatic deployments, preview deployments, CDN  
* Netlify: frontend hosting platform  
  * Drag-and-drop or Git integration  
    * Features: form handling, serverless functions, CDN  
* GitHub Pages: free hosting for static sites  
  * Settings → Pages → select branch  
    * Limitations: static sites only, no server-side code

#### **Deployment Platforms \- Backend**

* Heroku: platform as a service (PaaS)  
  * Installation: Heroku CLI  
    * Deployment: `git push heroku main`  
    * Features: easy deployment, add-ons (databases), free tier  
    * Configuration: `Procfile`, environment variables  
* Railway: modern deployment platform  
  * Git integration, automatic deployments  
    * Database support, environment variables  
* Render: cloud platform  
  * Free tier available  
    * Automatic deployments from Git  
* AWS (Introduction): Amazon Web Services  
  * EC2: virtual servers  
    * Elastic Beanstalk: simplified deployment  
    * Lambda: serverless functions  
    * More complex, more control

#### **Database Deployment**

* Managed databases: PostgreSQL, MongoDB on cloud  
  * Heroku Postgres: managed PostgreSQL  
    * MongoDB Atlas: cloud MongoDB  
    * Railway PostgreSQL: managed database  
* Connection strings: updating DATABASE\_URL in production  
* Migrations: running database migrations in production  
* Backups: setting up database backups

#### **Deployment Process**

* Preparing for deployment:  
  1. Build frontend: `npm run build`  
     2. Set environment variables  
     3. Configure database  
     4. Test locally with production build  
* Deployment steps:  
  1. Create account on platform  
     2. Connect repository (if Git integration)  
     3. Configure build settings  
     4. Set environment variables  
     5. Deploy  
     6. Test deployed application  
* Environment variables: setting in platform dashboard  
* Build commands: specifying build commands in platform

#### **SSL/HTTPS**

* What is SSL: secure connection (HTTPS)  
* Why HTTPS: encrypts data, required for many features  
* SSL certificates: most platforms provide free SSL (Let's Encrypt)  
* Custom domains: connecting custom domain to deployment  
* DNS configuration: pointing domain to deployment

#### **Monitoring and Logging**

* Application logs: viewing logs in deployment platform  
* Error tracking: services like Sentry for error monitoring  
* Uptime monitoring: services to check if site is up  
* Analytics: Google Analytics, etc.  
* Performance monitoring: tracking application performance

#### **Production Best Practices**

* Environment variables: never commit secrets  
* Error handling: generic error messages (don't expose internals)  
* Logging: log errors for debugging  
* Security: HTTPS, security headers, rate limiting  
* Performance: optimize images, code splitting, caching  
* Backups: regular database backups  
* Monitoring: set up monitoring and alerts  
* Documentation: document deployment process

#### **Troubleshooting Deployment**

* Common issues:  
  * Build failures: check build logs  
    * Environment variables: verify all variables set  
    * Database connection: check connection string  
    * Port configuration: ensure correct port  
    * CORS issues: configure CORS for production domain  
* Debugging: check logs, test locally with production config  
* Rollback: reverting to previous deployment

#### **Final Review**

* Review all concepts learned:  
  * HTML, CSS, JavaScript  
    * React and TypeScript  
    * Node.js and Express  
    * Databases (SQL and NoSQL)  
    * Authentication and Security  
    * Full-stack integration  
    * Git and version control  
    * Docker and CI/CD  
    * Deployment  
* Key takeaways: what you've learned  
* Next steps: continue learning, build more projects

