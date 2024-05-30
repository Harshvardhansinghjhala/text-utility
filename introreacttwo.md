CODE FOR SCREENONE COMPONENT EXPLANATION ->

const changelowercase = (event) => {
event.preventDefault();
let newtext = text.toLowerCase();
settext(newtext);
} -> this is a function that is called when a button with name changelowercase is clicked. the motive of the function is that it will change the text into uppercase inside a textarea which is placed inside a form. but when we are clicking on the function the page reloads and text again chages to lowercase this is due to the default behaviour of form element. to prevent this behaviour we have used event.preventDefault(); in the above function. which will stop the default behaviour of form to auto submit.

    or

    you can use an onsubmit event handler directly in form element so you don't need to manually do event.preventDefault() for every element of form

     <form className='container' onSubmit={submithandling}>

    const submithandling = (event) => {
        event.preventDefault();
    }


    <p>Total word count is {text.split(" ").length} and Total letter count is {text.length}</p>
    <p>Time required to read text is {0.003 * text.split(" ").length} minutes</p>
    counting total word and letter of textarea.
    {text.split(" ").length} text.split(" ") will return an array and we are finding length of array

    to copy the text from textarea
    const copy = ()=>{
        navigator.clipboard.writetext(text)
    }

    <h2>Preview<h2/>
    <p>{text.length > 0 ? text : 'Enter text to preview'}</p>
    if length of text is greater than zero then show text and if it 0 then show the text 'Enter text to preview'

................................................................
About.js file notes ->

how to add dark mode button.when we click on the dark mode button it will change the mode to dark.

we can also define styles as a object inside a component function and use it in our element to style them.
in javascript style is given using camel case for example - backgroundColor: 'red'; instead of background-color: 'red',

this is an style object and we will define it inside our object and use it to style our elements. using this syntex in element style={mystyle}

let mystyle = {
color: 'white',
backgroundColor: 'black',
}

toggle to dark mode using a button -> to do so we will use useState.we will first set inital state of style as shown below then in togglestyle function which it trigred when we click on mode change button we will change style using if else condition.

const [mystyle, setmystyle] = useState({
color: 'black',
backgroundColor: 'white',
})

// use state for toggling name of button that will change mode
const [modename, setmodename] = useState("Switch Dark Mode");

const tooglestyle = () => {
if (mystyle.color === 'black') {
setmystyle(
{
color: 'white',
backgroundColor: 'black',
border: '1px solid white'
}
)
setmodename("Switch Light Mode");
}
else {
setmystyle(
{
backgroundColor: 'white',
color: 'black',
}
)
setmodename("Switch Dark Mode");
}
}

enhancing the dark moke -> we will make useState() in App.js component to manage the dark and light modes from there.

// creating usestate for mode in App.js component so that it can be used to change the mode of whole application.initial value of mode is set to light (light mode)
const [mode, setmode] = useState("light");

togglemode is a function that will toggle between light and light mode it will be called when we chick a button on navbar
togglemode defines that if mode is set to light then on click setmode to dark and toggle other properties also. else set mode to light and toggle other properties.
const togglemode = () => {
if (mode === "light") {
setmode("dark")
document.body.style.backgroundColor = "grey"
document.body.style.color = "white"
}
else {
setmode("light")
document.body.style.backgroundColor = "white"
document.body.style.color = "black"
}
}

return (
<>
<Navbar title="kabil nahi" mode={mode} togglemode={togglemode} />
<Screenone
        road="me tere kabil ho ya tere kabil nahi"
        name="harsh vardhan singh jhala"
        work={66}
        mode={mode}
      />
{/_ <About /> _/}
</>
);

we have created togglemode function here in app.js but it will be triggered when we click on button in navbar which is in navbar.js so we have to send function from app.js and receive it in navbar.js. so we are sending function using togglemode={togglemode} and receiving it in navbar.js using onclick={props.togglemode} here we have first set a props.togglemode in navbar.js inside a onclick function. then created the function in app.js and sended it in navbar.js using togglemode={togglemode}

similar,we have created a usestate const [mode, setmode] = useState("light"); in app.js and sended it in navbar.js and screenone.js using mode={mode} and received it in navbar.js and screenone.js using props.mode as shown below

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> -> here we have first opened the curly braces to we can write javascript then used template engine inside backticks and received mode using props.mode which is used to change color of the navbar and body

// code inside screenone.js
<textarea value={text} name="" id="" cols="100" rows="7" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'light' ? '2px solid black' : '2px solid white' }} onChange={handlechange}></textarea>

style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'light' ? '2px solid black' : '2px solid white' }}
here we have defined style on the text area using javascript ternary oprator
and props.mode which is declared in the app.js file.

style={{}} -> one curly brace for using javascript and other curly brace for writing an object which contains style properties.backgroundColor,color and border properties
backgroundColor: props.mode === 'light' ? 'white' : 'grey',-> we have used ternary oprator here that if props.mode === 'light' then set backgroundColor of textarea to white else to grey. we have done similar thing for color and border properties.

<label className={`form-check-label text-${props.mode === 'light' ? "black" : "white"}`} htmlFor="flexSwitchCheckDefault" >{props.mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</label> -> used ternary operator and props.mode to chage the color and name(label) of the switch when mode changes

................................................................
dismissible alert message -> in Alert.js component
in this we will learn that how to show different alerts messages when we change the mode of our website or when we perform any task.

we have created Alert.js component where we have an dismissible alert message

function Alert(props) {
return (

props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{props.alert.type}</strong>:{props.alert.msg}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => { props.setalert(null) }}></button>

</div>

)
}

now, we will write a usestate for alert message but, it App.js file so that we can set and use different alerts for different components by passing them in component name and using them there with the help of props

const [alert,setalert] = usestate(null);'
we have set the initial state of the alert to null that means there is nothing present in the alert.

now i will create a arrow function showalert that will set the alert message and type of alert for different tasks using setalert and i will use that function to set alert for different tasks by passing a message and type of alert as a parameter value.

```javascript
const showalert = (message,type)=>{
    setalert({
        mes: message,
        type: type;
    })
}
```

show alert function takes two parameters message and type. message is the alert message that we want to display and type is the type of alert like success or warning or danger.setalert inside showalert function takes an object that has two properties mes and type

now we will set alert for different task like we will set the alert when we switch to light mode or dark mode.

```javascript
const togglemode = () => {
  if (mode === "light") {
    setmode("dark");
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
    showalert("Dark mode han been enabled", "success");
    timehidealert();
  } else {
    setmode("light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    showalert("Light mode han been enabled", "success");
    timehidealert();
  }
};
```

here we have called showalert function when we are switching to light mode and dark mode using showalert("Dark mode han been enabled", "success") so this alert will be shown when we switch to dark mode. we have have passed type "success" that we will use in Alert.js to change color of alert based on its type.
timehidealert() function is used to hide alert after a certain amount of time here is timehidealert function below.

const timehidealert = () => {
setTimeout(() => {
setalert(null)
}, 5000);
} -> it will hide alert after 5 second automatically

now we have sended alert in Alert.js and screenone.js components so we can use them to show the alert there using props.
<Alert alert={alert} setalert={setalert} />
<Screenone mode={mode} showalert={showalert}/>

props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{props.alert.type}</strong>:{props.alert.msg}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => { props.setalert(null) }}></button>

</div>

class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> -> we are the type of alert using javascript template and inside javascript template we are sending {props.alert.type} which will return the type of alert which we mentioned as success earlier in App.js
here we have replaced "alert alert-danger alert-dismissible fade show" to above line. so that whatever type we specify in alert will replace alert-danger.

<strong>{props.alert.type}</strong>:{props.alert.msg} -> here we are showing alert type and message that we specify in App.js which is different for different tasks.

<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => { props.setalert(null) }}></button>
one problem is occuring when we are closing the alert window using close button. and the problem is that after closing the alert window when we are switching between dark and light mode alert message is not showing. so we set alert to null when we close the alert window using close button.

USE OF && AND OPRATOR FOR CONDITIONAL RENDERING
NOTE -> use of && in the above example -> props.alert && <div class={`alert a.....
here we have used props.alert && because we are getting an error when we are running our code. the error is as me have set the initial value of alert to null.
In the given React code, the expression props.alert && is used as a conditional rendering technique to ensure that the div containing the alert message is only rendered if props.alert is not null or undefined.If it is null or undefined, then the code after && will not execute the.

This uses a logical AND (&&) operator for conditional rendering.
The expression props.alert && <div>...</div> means that the <div> element will only be rendered if props.alert evaluates to a truthy value (i.e., it is not null, undefined, false, 0, NaN, or an empty string).
If props.alert is null or undefined, the entire expression will evaluate to false, and nothing will be rendered.

Purpose of Using props.alert &&
Prevent Rendering When No Alert: It prevents the rendering of the alert <div> when there is no alert to show (i.e., when props.alert is null).
Conditional Display: It ensures that the alert box is displayed only when there is an actual alert to display, making the UI cleaner and avoiding unnecessary empty elements.

how to capitalize the first letter of the alert type. success -> Success

```javascript
const capitalized = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
```

This code defines a function called capitalized that takes a single argument word and returns the same word with its first letter capitalized.

return word.charAt(0).toUpperCase() + word.slice(1); ->
word.charAt(0): This method returns the character at index 0 of the string word, which is the first character.
.toUpperCase(): This method converts the character returned by charAt(0) to uppercase.
+: This is the string concatenation operator, used to combine the uppercase first character with the rest of the string.
word.slice(1): This method returns a substring of word starting from index 1 to the end of the string. Essentially, it removes the first character.

<strong>{capitalized(props.alert.type)}</strong>:{props.alert.msg} -> {capitalized(props.alert.type)}
we used capitalized function here to capitalize the type of alert message.

showing alerts in screenone.js component on various tasks like convert to upper case, lowercase copy ect. when this tasks completes it will show an success alert.
we already sended the showalert={showalert} function in screenone.js now we will use it there using props. <Screenone mode={mode} showalert={showalert}/>

````javascript
const changeuppercase = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to uppercase", "success")
    }

const changelowercase = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("Converted to lowercase", "success")
    }
    ```

to remove the alert  message in 2 second
```javascript
const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null)
    }, 2000);
  };
````

................................................................

adding custom theme in application (different color modes other light and dark)
fist we will make buttons in navbar for different themes then on clicking them we will change the theme accordingly.

................................................................
CHANGE TITLE DYNAMICALLY, ADDING FAVICON AND ABOUT GOOGLE SEARCH CONSOLE

which icon to use png or ico ->
Modern Websites: For modern websites targeting up-to-date browsers, a favicon.png is generally sufficient and preferred due to its superior image quality and transparency support.
Legacy Support: If you need to support older browsers, particularly Internet Explorer versions before IE11, you should include a favicon.ico as well.
For the best compatibility and quality, you can include both favicon.ico and favicon.png

<link rel="icon" type="image/png" sizes="32x32" href="/path/to/favicon.png">
<link rel="icon" type="image/x-icon" href="/path/to/favicon.ico">

how to dynamically change the title of the page when you visit different pages. lets change the title of the page when we chage the mode of page.
document.title = "TextUtils:Light-mode" -> use this line to change title in your function.

GOOGLE SEARCH CONSOLE
Google web master or google search console/google search center -> Google Search Central, formerly Google Webmasters, is here to help the right people view your content with resources to make your website discoverable to Google Search.
When you built your website, you likely created it with your users in mind, trying to make it easy for them to find and explore your content. One of those users is a search engine, which helps people discover your content. SEO—short for search engine optimization—is about helping search engines understand your content, and helping users find your site and make a decision about whether they should visit your site through a search engine.
Google is a fully automated search engine that uses programs called crawlers to explore the web constantly, looking for pages to add to our index. You usually don't need to do anything except publish your site on the web. In fact, the vast majority of sites listed in our results are found and added automatically as we crawl the web. for more visit google search console website.

```

```
