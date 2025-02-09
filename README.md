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
  - break;
  - continue;
  - return;

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

> __Callback hell__ occurs when multiple nested callbacks are used to handle asynchronous operations, making the code difficult to read and maintain. Example:

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

- fetch api



