React is a popular JavaScript library for building user interfaces. It was created by Facebook and is now maintained by Facebook and a community of developers. React enables developers to create reusable UI components and manage the state of those components efficiently.

Create a react app using npx

why not npm -> npm is used to install and manage packages in our nodejs but, on the other hand npx is used when you want to use a package one time without downloading it,

use this command to create react app
npx create-react-app my-app

my-app is the name of our app

now the react app is created and the main folder we have to focus on are src and public

inside public folder we have index.html which has basic structure of html page and inside its body an div with id="root" inside which we will place all the components
using index.js

in scr folder we will make all the components and export them to app.js file which will export them to index.html in public folder.

to run the app we will first go to the project folder using cd filename and then run the command npm start
also, To create a production build, use npm run build.

when you are working with javascript react at first you will not able to use emmet abbreviation to activate emmet abbreviation you need to go to setting and search emmet abbreviation then select Emmet: Include Languages option and add javascript as a item and javascriptreact as a value.

when we send our project to someone we don't send node_modules folder which contains all the dependencies used in the project. because it can be downloaded with the help of packages.json using the command npm install.means if we delete node_modules folder and we need it again so we will use the command npm install and with the help of packages.json it will add node_modules folder again.also, therefore we add node_modules in gitignore file.so that it cannot sended when someone takes our project.

to open a any file with vs code use the command shift + right click. if you directly right click then it will show you fewer option and then you have to again click on show more options and you will see open with vs code but by pressing shift + right click you can see all options directly.

npm run build
Purpose: This command is used to create an optimized, production-ready build of your application.

git add . -> Purpose: Stages all changes (new, modified, deleted files) in the current directory and its subdirectories for the next commit.

git commit -m -> Commits the staged changes to the repository with a descriptive message.

case -> let's say we make two modules module1.js and module2.js
in module2.js we have this code

const a = 'harsh';
const b = 'varshal';
const c = 'priya';
const d = 'garavel';

export default c;

here we are exporting c by default

code in module1.js where we are importing c from module2.js

import mi from './module2.js';
console.log(mi);

this will gave error when we run module1.js
to solve the error either we need to change type/javascript in json file or we haveVE TO change the name of module2.js and module1.js to module2.mjs and module1.mjs respectively. mjs instead of js
now it wont give an error when we run the file

what happens when we export multiple things.

again code in module2.js
const a = 'harsh';
const b = 'varshal';
const c = 'priya';
const d = 'garavel';

export default c;
export {a};
export {b};
export {d};

this is how you export multiple modules

now again, code in module1.js
import mi,{a,b,d} fromm 'module2.js'; -> this is how you import multiple modules from a file.

now you can print mi as
console.log(mi);
and a, b , d as
console.log(a);
console.log(b);
console.log(d);

but you cannot import multiple modules like this:
import mi,{a1, b1, ds}
it will give you an error message that a1 is not exist. you have to use the same name a,b and d because they are not exported using default. you can give whatever name you want for c because it is exported by default.

we can make a component folder in src folder which contains all our components to keep things organized.

the name of the component should be capitalized

how to use props -> with the help of props we can use different values in a component.

function main(props) {
return (
<>

<p>below is the props</p>
<p>{props.title}</p>
<p>{props.name}</p>
</>
)
}

now when you import main function in app.js file and use it there you can give it whatever title and name you want.

<Main title="mainstrean" name="harsh" />

props types and setting props type

first import propt-types using import PropTypes from 'prop-types'
or you can write impt and press enter if you have ES7 React/Redux/GraphQL/React-Native snippets then it will write the full line for you.

now you can set prop types -> name of the component.proptypes = {property: PropTypes.string, property: PropTypes.string} (p of component.proptypes should be smallletter)

Navbar.prototype = {
title: PropTypes.string
}

Screenone.prototype = {
name: PropTypes.string,
work: PropTypes.string,
road: PropTypes.string
}

now you have set proptypes of these properties.if you enter number instead of string in any of them it will gave error in console.

if you want to give number in any property in props you have to pass it inside {} example -> road={33} and string in "" -> work="this"

you have specify proptypes after function.proptypes is used so that you don't send number instead of string in any property or string instead of number in a property.

we can also give proptypes as array, object or number.

we can also set isRequired property to specify that its necessary to pass a value for this property. as shown below.

Screenone.propTypes = {
road: PropTypes.string,
name: PropTypes.string.isRequired,
work: PropTypes.number
}

setting default values of proptypes.

Screenone.defaultProps = {
road: "this is road'
name: "user",
work: 44
}

difference ways of setting eventListener in simple javascript and react
simple javascript
<button onClick="handleClick()">Click Me</button>

react
<button onClick={handleClick}>Click Me</button>

comment in ejs -> this is how use comment in ejs while making React components you can use javascript comment using // this is javascript comment
but, when you are marking a comment in return of a component function you should use the below comment method because there we are using jsx
{/_ This is a comment in JSX _/}

................................................................

state and handling events in react

In React, state is a crucial concept for creating dynamic and interactive components. It allows components to manage and respond to internal data changes.

first, you have to import useState using below line.
import React, { useState } from 'react';

The line import React, { useState } from 'react' is used to import both the React library and the useState hook from the react package in a single statement.
import React from 'react': This part imports the default export from the react package, which is the React library itself. You need to import React in every file where you use JSX, because JSX gets transpiled into React.createElement calls.

then, you can use states inside a function as show in example below

export default function Screenone(props) {

    // Declare a state variable named "count", and set its initial value to 0
    const [count, setcount] = useState(0);

    // Function to handle increment
    // use the setcount to change value of state variable count as shown below you can use it as many times as you want to change the value of the variable.

    const increment = () => {
        setcount(count + 1);
    }

    // Function to handle decrement
    const decrement = () => {
        setcount(count - 1);
    }

    return (
        <>
            {/* changing count using state */}
            <h1>{count}</h1>
            <button onClick={increment}>Increase the number</button>
            <button onClick={decrement}>Decrease the number</button>
        </>
    )

}

why use state -> in react you cannot update a variable directly as shown below it will give an error so we use state.
const [text, settext] = useState("we are going on war");
text = "war is ended";

const [text, setText] = useState('');
useState('') initializes the text state with an empty string.

Event Handling in React using state

import React, { useState } from 'react';

function Form() {
const [text, setText] = useState('');

const handleChange = (event) => {
setText(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
alert('Submitted text: ' + text);
};

return (

<form onSubmit={handleSubmit}>
<input type="text" value={text} onChange={handleChange} />
<button type="submit">Submit</button>
</form>
);
}

export default Form;

in input type="text" we added onchange eventListener using onChange={handleChange} and provided it a function handleChange which means when any change occurs in input handleChange function will be called.
const handleChange = (event) => {
setText(event.target.value);
}; -> we have passed event object as the parameter in handleChange function which return many properties and methods. then we have used this line settext(event.target.value) where event.target refers to the element which triggered the function which is input in this case. and event.target.value refers to the value inside text input. which means when we make any change in input value it will be shown in input as we have used here settext(event.target.value) without onchange event in input you are not able to change the value of the input and it will always remain initial value.

in form we have used onsubmit event which is calling handleSubmit function which Prevents the default form submission behavior and displays an alert with the submitted text

const handleSubmit = (event) => {
event.preventDefault();
alert('Submitted text: ' + text);
};
event.preventDefault(); -> this line of code prevents the default form submission behavior. This lineof code will give an alert when you submit the form

event.preventDefault() prevents the default form submission behavior, which includes the reloading of the page. By calling event.preventDefault() within the handleSubmit function, you are explicitly instructing the browser not to perform its default action of submitting the form data to the server and reloading the page.

Instead, you can handle the form submission yourself within the handleSubmit function. In the provided code, an alert is displayed with the submitted text, but you could also perform other actions such as sending an HTTP request to a server (e.g., via AJAX), updating the UI, or navigating to a different page within your React application.

By preventing the default form submission behavior, you retain control over what happens when the form is submitted, allowing you to customize the behavior based on your application's requirements.

If you're using a React app and want to submit form data without reloading the page (while using event.preventDefault()), you can submit the data via an asynchronous request to a server using fetch, axios, or another HTTP library. Here's a complete example using fetch to submit the form data:

import React, { useState } from 'react';

function Form() {
const [text, setText] = useState('');

const handleChange = (event) => {
setText(event.target.value);
};

const handleSubmit = async (event) => {
event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch('https://example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }), // Send the form data as JSON
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setText(''); // Optionally reset the form state here
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }

};

return (

<form onSubmit={handleSubmit}>
<input type="text" value={text} onChange={handleChange} />
<button type="submit">Submit</button>
</form>
);
}

export default Form;

EXPLAINATION OF THE ABOVE CODE : ->
try: The try block contains code that might throw an error during execution.
catch: The catch block contains code that handles any errors that occur in the try block. The error parameter contains information about the error.

Using the fetch API
The fetch API is a modern way to make HTTP requests (such as GET or POST) to a server from a web application. Here's the breakdown of the fetch call:

const response = await fetch('https://example.com/submit', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ text }),
});

await:
The await keyword is used to wait for a Promise to resolve. Here, it waits for the fetch call to complete before moving on to the next line of code.
It can only be used inside an async function.
await is used to wait for the asynchronous fetch call to complete. This means the code execution will pause here until the fetch request is finished.

NOTE ->await fetch(...):
The await keyword is used to pause the execution of the handleSubmit function until the Promise returned by fetch is resolved (i.e., the network request is complete and a response is received).
During this pause, the JavaScript engine can continue executing other code (e.g., other functions, event handlers) that does not depend on the result of this fetch request.
When using await within an async function, only the code within that async function will pause at the await keyword. The rest of your JavaScript code outside of this function will continue to run normally. This is because await only affects the asynchronous flow within the specific async function.
When await fetch(...) is encountered, the handleSubmit function pauses execution at that point until the fetch Promise is resolved.
The function does not proceed to the next line (if (response.ok) { ... }) until the fetch call is completed.

fetch('https://example.com/submit', { ... }):
fetch: The fetch function is used to make network requests.
'https://example.com/submit': This is the URL to which the request is sent. You need to replace this with your actual server endpoint. For example, it might be https://api.yoursite.com/form-submit if you are sending data to your server's API endpoint.
fetch is called with two arguments:
'https://example.com/submit': This is the URL to which the request is being sent. You need to replace this with your actual server endpoint.
An options object { ... } that configures the fetch request.

Configuration Object:
The second argument to fetch is a configuration object containing various settings for the request.

method: 'POST':
Specifies the HTTP method to be used. Here, POST is used to send data to the server.
This specifies that the HTTP method used for the request is POST. POST requests are typically used to send data to the server to create or update a resource.

headers: { 'Content-Type': 'application/json' }:
headers: An object containing headers to include in the request.
'Content-Type': 'application/json': This header indicates that the request body is in JSON format.indicates that the request body contains JSON data.

body: JSON.stringify({ text }):
body is the actual data sent with the request. JSON.stringify({ text }) converts the text object to a JSON string. This is necessary because the server expects the data in JSON format.

if (response.ok) { ... } else { ... }:
response.ok is a boolean property of the response object that indicates if the HTTP status code is in the range 200-299 (successful responses).
If the response is successful, the code inside the if block is executed; otherwise, the else block runs.

alert('Form submitted successfully!');:
If the response is successful (response.ok is true), this line shows an alert to the user indicating that the form was submitted successfully.

setText('');:
This line resets the text state to an empty string, effectively clearing the form input field.

throw new Error('Failed to submit form');:
If the response is not successful (response.ok is false), an error is thrown. This causes the execution to jump to the catch block.

catch (error) { ... }:
If an error occurs during the fetch request or if throw new Error('Failed to submit form') is executed, the code inside the catch block runs.

console.error('Error submitting form:', error);:
This line logs the error to the console for debugging purposes.

alert('An error occurred while submitting the form');:
This line shows an alert to the user indicating that an error occurred during form submission.

IS IT IMPORTANT TO USE IF ELSE CONDITION INSIDE TRY BLOCK WHEN YOU ARE ALREADY USING CATCH BLOCK TO HANDLE THE ERROR. ->

Using the if-else condition inside the try block along with the catch block serves different purposes, and both are important in handling different types of situations.

The if-else condition is used to handle the success or failure of the HTTP response:
if (response.ok) { ... } else { ... }:
response.ok is a property of the Response object that indicates whether the request was successful (status code 200-299).
If condition (if (response.ok)) handles what to do when the request is successful.
Else condition (else) handles what to do when the request fails (status code outside 200-299) but does not throw an error (e.g., 400 Bad Request or 500 Internal Server Error).

Why Use the catch Block

The catch block is used to handle unexpected errors that might occur during the fetch request:
Network Errors: If there is a network error (e.g., the server is down or there is no internet connection), the fetch request will throw an error.
Other JavaScript Errors: If there are any other errors in the code inside the try block, those will also be caught by the catch block.

Technically, you can skip the if-else condition, but it would change how you handle different failure cases. If you skip the if-else condition and only rely on the catch block, you won't be able to distinguish between different types of errors effectively. For example:

if-else condition: Used to handle HTTP responses and determine if the request was successful based on the response status code.
catch block: Used to handle unexpected errors, such as network issues or other JavaScript errors.

managing multiple state variables ->

import React, { useState } from 'react';

function Form() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleNameChange = (event) => {
setName(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
console.log('Name:', name);
console.log('Email:', email);
};

return (

<form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
<input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
<button type="submit">Submit</button>
</form>
);
}

export default Form;

Here, two state variables name and email are managed independently using separate useState calls.

when we use the async and await methods then the await method pauses the execution of that asynchronous function until any fetch request is done. but it allows to run other functions.
When using await within an async function, only the code within that async function will pause at the await keyword. The rest of your JavaScript code outside of this function will continue to run normally. This is because await only affects the asynchronous flow within the specific async function.
