# MERNSTACK COURSE
## Module-1 
### Introduction to javaScript
#### Day 1 : Introduction to javascript
- What is Javascript?
- Overview of web development
- MERN Stack roadmap
- Environment Setup
- Why use Javascript?
- What is MERNSTACK and benifits of stack?
#### Day 2 : Variable Declararion and Data Types
- Core Concepts
- What is variables?
- What are the different types of Data types supported by javascript?
- How to define/declare variables?

#### Day 3 : Javascript Functions
- What is function?
- Function declaration and expression.
- Different ways to declare functions.
- Different types of functions.

#### Day-4 : Scope, Higher Order Function and Callbacks
- What is scope?
- Different types of scope.
- Difference between let, const & var.
- What is HOF?
- How to implement HOF?
- What is callback function?

#### Day-5 :Javascript Objects
- Object Basics
- How to Define objects
- Object properties and methods
- How to Modify, update, Access and Delete object properties.
- Freeze and Seal Object.
- Other Object methods (Keys,values and entries) 

### Day-6: Javascript Array Basics and Array Functions
- Array Basics
- How to define array in javascript.
- Array with Object as element.
- Array Basic methods.
- Array methods Advanced (map,filter,...etc).
- Sort array.

### Day-6: Javascript Loops and Conditional Statements
A loop is a programming construct that repeats a block of code as long as a specified condition is true. Loops help avoid code repetition and make the code more efficient.
- What is loop and why we use it.
- What loops are available in Javascript.
- Syntax of while, do-while and for loop.
- what is conditional statements and Why/How to use.
  
Conditional statements allow a program to make decisions based on different conditions.
```
  - if
  - if...else
  - if..else if...else
  - switch case
```
- Understanding control flow.

Control flow determines the execution order of statements in a program. JavaScript executes code line by line unless control structures (loops, conditions) alter the flow.
  
- Control transfer statements/keywords
  ```
  - break;
  - continue;
  - return;
  ```

### Day-7: Hoisting and Closures
#### Hoisting
__Hoisting__ is JavaScript's behavior of moving function and variable declarations to the top of their scope before execution.
#### Closures in JavaScript

A __closure__ is a function that remembers the _variables_ from its outer scope even after the outer function has finished executing.
- Why Use Closures?
  ```
   - Data Encapsulation (Private variables)
   - Maintaining State
   - Function Factories
  ```
 
### Day-8: asynchronous jsvascript / promises and async/await
#### Asynchronous programming

__JavaScript__ is single-threaded, meaning it executes one operation at a time. __Asynchronous__ programming allows tasks to run in the background without blocking the main thread, improving performance and user experience.

#### Callback hell (Pyramid of Doom)

> __Callback hell__ occurs when multiple nested callbacks are used to handle asynchronous operations, making the code difficult to read and maintain.
> 
> Exmple:

```setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
    }, 1000);
  }, 1000);
}, 1000);
```
> This indentation pattern creates a ***"pyramid of doom,"*** which can be avoided using Promises or async/await.


#### Promises 

> A __Promise__ is an object representing a value that may be available now, in the future, or never. It has three states:

```
  1. Pending – Initial state
  2. Fulfilled – The operation was successful
  3. Rejected – The operation failed
```
Example:

  ``` const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

fetchData
  .then((data) => console.log(data)) // "Data received"
  .catch((error) => console.error(error));
  
  ```
     
#### async/await 

> ***async/await*** simplifies working with promises, making asynchronous code look synchronous.

Example:

```
async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

getData();
```
***Key Differences Between Promises and Async/Await:***
> [!NOTE]
> - `then/catch` is used with `Promises`, while `async/await` makes it easier to handle `asynchronous` operations with `try/catch`.
> - `async/await` provides cleaner syntax, avoiding nested `.then()` calls.

- fetch api


#### Day-9: Git/Github Basics

- What is Git?
  > Git is a distributed version control system (VCS) that helps developers track changes in their code, collaborate with others, and manage project history efficiently.
  
- Why Use Git?

  > - Tracks changes in code over time
  > - Enables collaboration on projects
  > - Provides a backup of the code
  > - Allows developers to experiment with branches

##### Basic Git Commands

> `git init` - Initializes a new Git repository in the current directory.

> `git status` - Shows the current state of the working directory and staging area.

> `git add <file>` - Stages a file for commit.

> `git commit -m "message"` - Saves changes with a descriptive message.

> `git push` - Uploads local commits to the remote repository.

- What is GitHub?
  
  > GitHub is a web-based hosting service for Git repositories that allows developers to collaborate, contribute, and manage projects online.

##### Common GitHub Actions

> Creating a Repository – Click on "New Repository" on GitHub, give it a name, and follow the setup instructions.
> Pushing Code to GitHub

  ```
    git remote add origin <repo-url>
    git branch -M main
    git push -u origin main
  ```

##### Best Practices

  1. use meaningful `commit` messages
  2. Pull before pushing to avoid merge conflicts
  3. Work on feature branches instead of `main`
  4. Use `.gitignore` to avoid committing unnecessary files


#### Day-10: Git/Github Continued

##### More Git Commands

 > `git clone <repo-url>` - Clones a remote repository to the local machine.
 
 >  `git pull` - Fetches the latest changes from the remote repository and merges them.

 >  `git merge <branch> `- Merges changes from a specified branch into the current branch.

 >  `git branch <branch-name>` - Creates a new branch.

 >  `git checkout <branch-name>` - Switches to a different branch.

 >  `git checkout -b <branch-name>` - Creates a new branch and switches to it.

 >  `git branch` - Lists all branches in the repository.

##### Branching Workflow

1. Always create a new branch for each feature or bug fix.

2. Use `git merge`  to integrate changes back into main.

3. Delete merged branches using `git branch -d <branch-name>` to keep the repository clean.

##### Pull Requests

Pull requests (PRs) allow developers to review, discuss, and approve changes before merging them into the main branch.


#### Day-11 Typescript

- What is TypeScript?

TypeScript is an open-source programming language developed by Microsoft that builds on JavaScript by adding static types. It compiles down to JavaScript and helps developers catch errors early in the development process.

- Why Use TypeScript?

  - Provides static typing, reducing runtime errors.

  - Enhances code readability and maintainability.

  - Supports modern JavaScript features with additional type safety.

  - Offers powerful interfaces and generics for better code organization.

  - Has great IDE support with autocompletion and error checking.


  ##### Basic TypeScript Concepts

  ##### Types & Annotations:

  In TypeScript, we define types using annotations. This helps you specify the type of a variable when you declare it. For example:

  ```
  let name: string = "John";

  let age: number = 30;

  let isActive: boolean = true;
  ```

##### Functions with Type Annotations:

Functions can also have type annotations for the `parameters` and `return type`. This makes it clear what types the function `expects and returns`. we can use `void` as return type if function not returning anything:

  ```
    function greet(name: string): string {
      return `Hello, ${name}!`;
    }
  ```

##### Interfaces:

An `interface` in TypeScript is used to define the shape of an object, including its properties and their types. You can also define optional properties using the `? symbol`:

  ```
    interface User {
      name: string;
      age: number;
      email?: string; // Optional property
    }
  ```

##### Classes:

  ```
      class Person {
        constructor(public name: string, private age: number) {}
        greet() {
          return `Hello, my name is ${this.name}.`;
        }
      }
  ```

##### Union Types:

A Union Type allows us to specify a variable that can hold multiple types. This is done by separating the types with a pipe (|). A variable with a union type can be assigned a value of any of the specified types.

```
  function printId(id: number | string): void {
    console.log(`The ID is: ${id}`);
  }
  
  printId(101); // Works with number
  printId("ABC123"); // Works with string
```

#####  Intersection Types:

An Intersection Type combines multiple types into one. A variable with an intersection type must satisfy all the types in the intersection.

   ```
                interface A {
                  name: string;
                }
                
                interface B {
                  age: number;
                }
                
                type C = A & B; // Intersection of A and B
                
                const person: C = {
                  name: "John",
                  age: 30,
                }
  ```

##### Generics:

 Generics allow us to create reusable and flexible components or functions that can work with any data type. You specify the type placeholder `<T>`:

  1. Generic Function 

     ```
       function identity<T>(arg: T): T {
          return arg;
        }
      
        let output = identity<string>("Hello TypeScript");
      ```

Generics can be used to create functions that work with arrays of any type:

Example:

```
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```
Using generics function:

```
const numbers = [1, 2, 3, 4];
const firstNumber = getFirstElement(numbers);

const strings = ["a", "b", "c"];
const firstString = getFirstElement(strings); 

console.log(firstNumber); // 1
console.log(firstString); // "a"
```

2. Generic Interface

We can use generics in interfaces to create reusable and flexible models for different types of data:

```
interface Response<T> {
  status: number;
  data: T;
}

const stringResponse: Response<string> = {
  status: 200,
  data: "Success"
};

const numberResponse: Response<number> = {
  status: 200,
  data: 123
};

console.log(stringResponse.data); // "Success"
console.log(numberResponse.data); // 123
```

3. Generic Classes:

Generics can also be used in classes to create reusable components that can handle different types of data:

```
class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const stringBox = new Box("Hello");
console.log(stringBox.getValue()); // "Hello"

const numberBox = new Box(123);
console.log(numberBox.getValue()); // 123
```

4. Using Generics with Promises

Generics can be applied to promises for better type safety:

```
function fetchData<T>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data as T);
}

interface User {
  name: string;
  age: number;
}

fetchData<User>("https://api.example.com/user")
  .then((user) => {
    console.log(user.name); // Type-safe access
  })
  .catch((error) => console.error(error));
```

##### Enums: 

Enums provide a way to define a set of named constants. They can be numeric or string-based. By default, enums are numeric, starting from 0:

```
enum Role {
  Admin, // 0
  User, // 1
  Guest // 2
}
let myRole: Role = Role.Admin;
```
// 'myRole' will be of type 'Role' and set to 0 (Admin)

For string-based enums, you can assign specific string values:

```
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest"
}

let myRole: Role = Role.Admin;
```
// 'myRole' will be 'Admin'


##### Type Alias in TypeScript:

A type alias is a way to give a name to a type in TypeScript. It is commonly used to define complex types or to create reusable types for better readability and maintainability. Type aliases are defined using the `type` keyword.

Example:

```
  type ID = string | number; // Alias for a type that can be a string or number

  let userId: ID = 123; // Valid
  userId = "ABC123"; // Valid
```

-  Alias for Literal Types

  We can create type aliases for literal types, which can be useful in narrowing down a variable to only specific values.

  Example:

  ```
    type Status = "success" | "error" | "pending";

    let currentStatus: Status = "success"; // Valid
    currentStatus = "error"; // Valid
    currentStatus = "completed"; // Error: Type '"completed"' is not assignable to type 'Status'.
  ```



- Alias for Generics
  
  Type aliases can also be used with generics to create more flexible and reusable types.
  
  Example:
  
```
  type Pair<T> = [T, T]; // Alias for a pair of any type

  const numberPair: Pair<number> = [1, 2]; // Valid
  const stringPair: Pair<string> = ["a", "b"]; // Valid
```


#### Day-11: Introduction to Node.js

##### Introduction to Node.js

- What is Node js
  - Node.js is a runtime environment that allows you to run JavaScript outside the browser.
  - It's built on Chrome’s V8 JavaScript engine, which compiles JavaScript into machine code for faster execution.
  - Node.js is used for building scalable network applications (web servers, APIs, etc.).
  - Asynchronous and event-driven architecture.
  - It has access to file systems, network protocols, and databases—things traditionally done in server-side languages like PHP, Python, or Java.

- Nodejs architecture and how it works.

***Key Points:***
> [!NOTE] 
> ***Non-blocking I/O:*** Node.js uses asynchronous, event-driven architecture to handle requests efficiently.
>
> Non-blocking I/O means that Node.js does not wait for tasks (like reading files or making network requests) to finish before moving on to the next task.
> 
> ***Single-threaded model:*** Unlike traditional web servers that create a new thread for each request, Node.js handles multiple requests using a single thread and an event loop.
> This ***Single-threaded model*** makes Node.js very efficient when it comes to handling large numbers of concurrent connections without requiring much overhead.

##### NPM (Node Package Manager)

- What is NPM?
  - NPM is the default package manager for Node.js.
  - It helps in installing and managing dependencies for your Node.js projects.
 
***Key Concepts:***
> [!NOTE]
> ***npm init:*** Initializes a new Node.js project.
> 
> ***package.json:*** The file that manages project metadata and dependencies.
> 
> ***Installing packages:*** Using `npm install <package-name>` to install packages.
> 
> ***Uninstalling packages:*** Using `npm uninstall <package-name>` to install packages.
> 
> ***npm update:*** Updates all packages or a specific package to the latest version.


##### Introduction to Node.js custom modules and Built-in Modules
- what is Module?
- What is importance of modules?
- Different types of node js built-in modules.

Node.js provides many built-in modules that allow you to perform various tasks without having to install any external libraries. These modules include utilities for working with the file system, paths, and handling HTTP requests, among other things.

>  ***File System (fs):*** for working with files.
>  ***Path (path):*** for working with file and directory paths.
>  ***HTTP (http):*** for creating simple web servers.

###### File System (fs) Module:

The fs module allows us to interact with the file system on our computer. It provides both synchronous and asynchronous methods for reading, writing, and manipulating files.

***Key Methods in the fs Module:***
>[!NOTE]
>  ***Asynchronous file operations:*** `fs.readFile()`, `fs.writeFile()`, `fs.appendFile()`, `fs.unlink()`.
>
>  ***Sunchronous file operations:*** `fs.readFileSync()`, `fs.writeFileSync()`, `fs.appendFileSync()`, `fs.unlinkSync()`.
>
> Asynchronous file operations are non-blocking.
>
>  Sunchronous file operations are blocking.
>
>  ***Checking if a File Exists:*** `fs.existsSync()`


Example: 
Asynchronous file read operation.

```
 // Asynchronous read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading the file:", err);
        return;
    }
    console.log("File content:", data);
});
```

##### Path Module:

The path module provides utilities for working with and manipulating file and directory paths. It helps ensure paths are correctly formatted and cross-platform compatible.

***Key Methods in the path Module:***

>[!NOTE]
>  `path.join()`: Combines multiple path segments into a single path.
>
>  `path.resolve()`: Resolves a sequence of paths into an absolute path.
>
>  `path.basename()`: Returns the last portion of a path (e.g., filename).
>
>  `path.extname()`: Returns the file extension from a path.
>
> `path.dirname()`: Returns the directory name from a path.

```
const path = require('path');

// Joining paths
const filePath = path.join(__dirname, 'example.txt');
console.log("Full file path:", filePath);

// Getting the file name
const fileName = path.basename(filePath);
console.log("File name:", fileName);

// Getting the file extension
const extName = path.extname(filePath);
console.log("File extension:", extName);
```


#### Day-12: Node.js http Built-in Module

##### Introduction to Node.js http Module

The http module in Node.js is a built-in core module that allows developers to create and manage HTTP servers and clients. Since it is a core module, we do not need to install it separately using npm.

##### What is the http Module?

The http module enables Node.js to act as a web server, allowing it to listen for HTTP requests from clients (browsers, APIs, etc.) and send appropriate responses.

##### Why Use the http Module?

- It allows us to create lightweight web servers without external dependencies.
- It provides control over request and response handling.
- It is useful for learning and building low-level HTTP applications.

##### Creating a Simple HTTP Server

An HTTP server is a program that listens for incoming client requests (e.g., from a browser) and sends back an appropriate response.

Example: Basic Server

```
const http = require("http");

// Creating an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" }); // Set response headers
    res.end("Hello, World!"); // Send response and end request
});

// Defining a port number
const PORT = 5000;

// Server listens on the defined port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

> `http.createServer()` → Creates an HTTP server.
>
>  `Callback function (req, res)` → Handles incoming requests (req) and sends responses (res).
>
> `res.writeHead(200, {...})` → Sets the HTTP response status code (200 OK) and content type.
>
> `res.end("Hello, World!")` → Sends a response and ends the request.
>
> `server.listen(PORT, callback)` → Starts the server on port 5000.


#####  Running the Server

Save the file as server.js and run:

```
node server.js
```


##### Handling Different Routes

A route is a URL path that a server handles differently. We can define multiple routes using req.url.

```
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    switch (req.url) {
        case "/":
            res.end("<h1>Welcome to Home Page</h1>");
            break;
        case "/about":
            res.end("<h1>About Us</h1>");
            break;
        default:
            res.writeHead(404);
            res.end("<h1>404 Not Found</h1>");
            break;
    }
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

```


##### Simple Node.js HTTP Server with Parsed URL and Handling Different Request Methods:

This project is a basic Node.js HTTP server that handles multiple routes, logs incoming requests, and supports query parameters. It demonstrates how to use the built-in http, fs, and url modules to manage HTTP requests and responses.

```
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end(); // Ignore favicon requests

    // Parse the incoming request URL
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);

    // Log request details to log.txt
    const log = `New ${req.method} Req. ${Date.now()}: ${req.url} received\n`;
    fs.appendFile("log.txt", log, (err) => {
        if (err) console.error("Logging error:", err);
    });

    // Set default response header
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Route handling using switch
    switch (parsedUrl.pathname) {
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            const name = parsedUrl.query.name || "Guest";
            const age = parsedUrl.query.age || "unknown";
            res.end(`Hello ${name}. You are ${age} years old.`);
            break;
        case "/sign-up":
            if (req.method === "GET") {
                res.end("Sign up form");
            } else if (req.method === "POST") {
                res.end("Sign up success!");
            }
            break;
        default:
            res.writeHead(404);
            res.end("404 Not Found");
    }
});

// Start the server
const PORT = 8000;
myServer.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});

```


#### Day-13:ExpressJs

- ***Express.js*** is a minimal and flexible web application framework for Node.js. It simplifies building web applications and APIs by providing essential features like routing, middleware, and handling HTTP requests.
- It is used to build server-side applications by handling routing, requests, responses, and middleware.


***Key Features:***
> [!NOTE]
>
>  Fast and minimalistic
>  Middleware support
>  Template engines
>  Routing
>  Easy integration with databases
>  Scalable


Why Use Express.js?
-  Reduces the complexity of handling raw HTTP requests and responses in Node.js
-  Built on top of Node.js, leveraging asynchronous non-blocking I/O
-  Ideal for building APIs, websites, and real-time applications.

##### [Setting Up Express.js](/broadway-mern-stack?tab=readme-ov-file#setting-up-express.js)

Step 1: Installing Node.js and Express.js
-  Create a new project folder and run `npm init` to create a `package.json` file.

Install Express using:

```
  npm install express --save
  or
  npm i express
  or
  pnpm add express
```

Step 2: Create a Basic Express Server

-  Create a file named `index.js`.
-  Write the following code to set up a basic Express server:

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

```

>  `express()` creates an Express application.
>  `app.get()` defines a route to handle ***GET*** requests.
>  `app.listen()` starts the server and listens for requests on a specified port.

##### Understanding Routing:

 Routing in Express is how we handle HTTP requests to specific paths and HTTP methods (GET, POST, etc.).

 Example of Different Routes:

 ```
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted successfully!');
});

app.put('/update', (req, res) => {
  res.send('Data updated!');
});

app.delete('/delete', (req, res) => {
  res.send('Data deleted!');
});

```

Sending JSON Responses

 Express allows sending JSON data as a response using res.json().

Example:

```
app.get('/user', (req, res) => {
  const user = { name: 'John', age: 25 };
  res.json(user);
});

```

Other supported response:

1. `res.end()` => End the response process.
2. `res.redirect()` => Redirect a request.
3. `res.render()` => Render a view template.
4. `res.send()` => Send a response of various type.
5. `res.sendFile()` =>Send a file as an octet stream. 

##### RESTful API
Introduction to RESTful APIs

-  REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on stateless, client-server communication using standard HTTP methods (GET, POST, PUT, DELETE).
-  A RESTful API is an API that follows REST principles.

Principles of REST:
- ***Stateless:*** Each request from a client must contain all the information the server needs to fulfill the request (no session state).
-  ***Client-Server:*** The client (browser) interacts with the server via HTTP requests.
-  ***Uniform Interface:*** Resources are identified by URLs, and standard HTTP methods are used to perform actions.
-  ***CRUD Operations:***
  1. Create: POST
  2.  Read: GET
  3.  Update: PUT or PATCH
  4.  Delete: DELETE

Resource Example:

A resource could be a user or a product, identified by a URL like /users or /products.


##### Implementing the CRUD operations using REST principles:

[Initialize Noddejs Project:](/broadway-mern-stack?tab=readme-ov-file#setting-up-express.js)

```
const express = require('express');
const app = express();
const Users = require('./users.json') //  prepare array of json user objects file name users.json or generate mockdata from [mockaroo](https://www.mockaroo.com/)
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());


// Routes and endpoints will go here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

1. GET request.
   
   Example:

   ```
   // get all users
    app.get('/users',(req,res)=>{
    return res.json(Users)
    })
   
   ```

2. GET by id:
  - Dynamic route

  Example:

  ```
    // get user by id
    app.get('/users/:id',(req,res)=>{

      const userId = Number(req.params.id)

      const user = Users.find((user) => user.id === userId)

      return res.json(user)

    })
  ```

3.  POST Request

    Example:

    ```
    app.post('/users',(req,res)=>{
    const body = req.body;
    console.log(body)

    Users.push({...body,id:Users.length + 1});

    fs.writeFile('MOCK_DATA.json',JSON.stringify(Users),(err,data)=>{
       return res.json({
            status:'success',
            message:'User created successfully',
            id:Users.length
        })
    })
    ```

4. PATCH Request:
   -  Update user

   Example:

   ```
   app.patch('/users/:id',(req,res)=>{

    res.json({
        status:'pending'
    })

    })
   ```

6. DELETE Request:
   -  Delete/Remove user

   Example:

   ```
   app.delete('/users/:id',(req,res)=>{

    res.json({
        status:'pending'
    })

    })
   ```



