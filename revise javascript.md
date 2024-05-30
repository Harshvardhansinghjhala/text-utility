"use strict"; -> Strict mode is a way to opt into a restricted variant of JavaScript, thereby improving performance and making your code more robust and easier to debug.
Eliminates some JavaScript silent errors by changing them to throw errors.
Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
Early Error Detection: It catches common coding bloopers, throwing errors when, for instance, variables are used without being declared.
You can apply strict mode to an entire script by placing the directive at the top of the file before any other statements:
<scripts>
"strict mode";
// your code
</scripts>

You can also apply strict mode to a specific function:

function myFunction() {
"use strict";
// Function-level strict mode syntax
}
................................................................
we use jsx in react instead of javascript.

how to write a arrow function ->

function add (a,b){
console.log(a + b);
}

const add = (a,b) =>{
console.log(a +b);
}

const add = (a,b) => console.log(a + b);
const greet = name => console.log(name); console.log("what!");
for one parameter we can write it without brackets but it parameter of function is more than one then we have to use brackets as shown above or it will give error.

different b/w arrow functions and simple functions

this Binding: The this value inside a regular function depends on how the function is called. If called as a method of an object, this refers to the object. If called as a standalone function, this refers to the global object (or undefined in strict mode).

No this Binding: Arrow functions do not have their own this context. Instead, they inherit this from the surrounding scope (lexical scoping). This makes them particularly useful for callbacks and methods like map, filter, and forEach.
Cannot be Hoisted: Unlike regular function declarations, arrow functions (like other function expressions) are not hoisted. They must be defined before they are used.
Implicit Return: If the function body consists of a single expression, you can omit the braces and the return statement, leading to more concise code.

Regular Function with this:
const person = {
name: 'Bob',
greet: function() {
console.log(`Hello, my name is ${this.name}`);
}
};

person.greet(); // Output: Hello, my name is Bob

Arrow Function with this:
const person = {
name: 'Bob',
greet: () => {
console.log(`Hello, my name is ${this.name}`);
}
};

person.greet(); // Output: Hello, my name is undefined (or an error in strict mode)

For lexical this: If you need this to be inherited from the outer scope, arrow functions are the right choice.
For array methods: Methods like map, filter, and reduce often benefit from the concise syntax of arrow functions.

Function Hoisting
Function Declarations are hoisted, which means you can call the function before it is defined in the code. The function declaration is moved to the top of its scope during the compile phase.

console.log(greet('Alice')); // Output: Hello, Alice!

function greet(name) {
return `Hello, ${name}!`;
}
In this example, the function greet can be called before its declaration in the code because the declaration is hoisted to the top

Example of Arrow Function:

console.log(greet('Alice')); // Error: greet is not a function

const greet = (name) => `Hello, ${name}!`;
Similarly, in this example, calling greet before the arrow function is defined will result in an error.

Example to Illustrate Lexical this
Consider a situation where you have an object with a method that uses a callback function:

Using Regular Functions:

const person = {
name: 'Alice',
greet: function() {
setTimeout(function() {
console.log(`Hello, my name is ${this.name}`);
}, 1000);
}
};

person.greet(); // Output: Hello, my name is undefined

In this example, the this context inside the setTimeout callback function refers to the global object (or undefined in strict mode), not the person object, because regular functions have their own this.

Using Arrow Functions:

const person = {
name: 'Alice',
greet: function() {
setTimeout(() => {
console.log(`Hello, my name is ${this.name}`);
}, 1000);
}
};

person.greet(); // Output: Hello, my name is Alice

In this example, the arrow function inside setTimeout does not have its own this context. Instead, it inherits this from the greet method, which correctly refers to the person object.

Another Example: Event Handlers
When using event handlers in JavaScript, you often want the this keyword to refer to the object that the method is a part of:

Using Regular Functions:

function Counter() {
this.count = 0;
this.increment = function() {
setTimeout(function() {
this.count++;
console.log(this.count);
}, 1000);
};
}

const counter = new Counter();
counter.increment(); // Output: NaN (because `this.count` is `undefined`)
In this example, this inside the setTimeout callback does not refer to the Counter instance.

Using Arrow Functions:

function Counter() {
this.count = 0;
this.increment = function() {
setTimeout(() => {
this.count++;
console.log(this.count);
}, 1000);
};
}

const counter = new Counter();
counter.increment(); // Output: 1
With arrow functions, this inside the setTimeout callback refers to the Counter instance, as intended.

1. argument objects is not available in arrow functions
   function add (a,b){
   console.log(arguments);
   return a + b;
   }
   add(3,4);
   output will be -> arguments will be shown in the console. but in arrow functions it will give and error that arguments is not defined.

   this in function and arrow functions ->

callback function -> callback function is that function which is executed when a particular event completes. as shown in below example -> ()=>{
console.log("me 4 secod baad chaloga");
} -> this is a callback function which is executed after 3s but console.log("me turant chaloga"); will execute before it this is asyncronus nature of javascript
setTimeout( ()=>{
console.log("me 4 secod baad chaloga");
},3000)
console.log("me turant chaloga");

................................................................

constructor function -> A constructor function in JavaScript is a special type of function that is used to create objects. When a constructor function is called, it creates a new object and returns that object. The object created by a constructor function has its own set of properties and methods, which can be accessed and modified using the dot notation. Constructors can also have parameters, which can be used to customize the object that is created.
when creating a constructor function the first letter of name of the function should be capitalized

function Alian(name, tech) {
this.name = name;
this.tech = tech;
this.fun = function () {
console.log(`hello ${name} how are you and your tech is ${tech}`);
}
}

let alian1 = new Alian('harsh', 'webdev');
let alian2 = new Alian('yash', 'java');
let alian3 = new Alian('garv', 'javascript');
console.log(alian1)
alian1.fun()

................................................................

promises -> the solution to the callback hell is promises. the promise is the promise of execution of code. the code will be either executed or fails in both the cases subscriber will be notified.

Promises are used in JavaScript to handle asynchronous operations and manage callbacks. They provide a more readable and maintainable way to handle asynchronous code compared to traditional callback functions.

Promises in JavaScript are objects that help manage asynchronous operations, making it easier to handle tasks that take time to complete, like fetching data from a server or reading a file. Think of a promise as a guarantee that something will happen in the future. It can either:

Resolve: The task completed successfully.
Reject: The task failed.

how to make a promise (syntax of promise)
let promise = new Promise (function (resolve,reject){
//code to execute
})
or
let p = new promise((resolve,reject)=>{
//code to execute
})

resolve and reject are callbacks that are provided by javascript itself.they are called like this:
resolve(value) -> if the job finish successfully.
reject(error) -> if the job fails.

let p = new Promise((resolve, reject) => {
setTimeout(() => {
console.log('promise is pending')
resolve('kam ho haya')
reject('nahi ho paya kam')
}, 2000);
})

console.log(p)
setTimeout(() => {
console.log(p)
}, 3000)

................................................................

Note: to run javascript file we use the command node and then name of the file.

how to export a module
function add (a,b){
return a+b;
}
function subtract (a,b){
return a-b;
}

module.exports = add;
or
module.exports = {
add: add,
subtract: subtract
}

or we can use this method to export the module.

exports.add = (a,b) => a+b;
exports.subtract = (a,b) => a-b;

but this are anonymous functions because they don't have name add and subtract are property it also can be add1 or sub.we can use module.exports only one time but we can use exports.add many times.

array destructuring in javascript:
const array = [1, 2, 3];
const [a, b, c] = array;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

Here, [a, b, c] is array destructuring syntax, which assigns the first element of array to a, the second to b, and the third to c.

try and catch ->

try {
// Code that might throw an error goes here
} catch (error) {
// Code to handle the error goes here
}

try: The try block contains code that might throw an error during execution.
catch: The catch block contains code that handles any errors that occur in the try block. The error parameter contains information about the error.

differences between try-catch and then-catch ->

Both try-catch and then-catch are used for handling errors in JavaScript, but they are used in different contexts and have different structures. Here's a detailed comparison:

try-catch is used for handling errors in synchronous code or in asynchronous code when using async/await.

then-catch is used for handling Promises directly without async/await.\

example:
const handleSubmit = (event) => {
event.preventDefault();

fetch('https://example.com/submit', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ text }),
})
.then(response => {
if (response.ok) {
alert('Form submitted successfully!');
setText('');
} else {
return response.text().then(text => {
throw new Error(text || 'Failed to submit form');
});
}
})
.catch(error => {
console.error('Error submitting form:', error);
alert('An error occurred while submitting the form');
});
};

Syntax and Readability:

try-catch with async/await provides a more synchronous-looking, linear flow which can be easier to read and maintain, especially for complex asynchronous operations.
then-catch involves chaining Promises, which can sometimes lead to nested structures and be harder to read.
Error Handling Scope:

try-catch: Can handle errors thrown from both synchronous code and asynchronous operations within the try block.
then-catch: Specifically handles errors in Promises. Errors in synchronous code outside of Promises need to be handled separately.
Asynchronous Handling:

try-catch: Used with async/await, pauses execution at the await keyword until the Promise resolves.
then-catch: Immediately returns a Promise and continues execution, handling the resolved value or error through chained callbacks.

if else ternary operator

condition ? expression_if_true : expression_if_false
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; output - yes

if else ternary operator with else-if
condition1 ? expression_if_condition1_true : (condition2 ? expression_if_condition2_true : expression_if_both_false)
let age = 20;
let category = (age < 13) ? "Child" : (age < 18) ? "Teenager" : "Adult"; output - adult

if else ternary operator with more than one else-if
let score = 85;
let grade = (score >= 90) ? "A" :
(score >= 80) ? "B" :
(score >= 70) ? "C" :
(score >= 60) ? "D" : "F";
