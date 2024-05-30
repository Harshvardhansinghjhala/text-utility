REACT ROUTER SETUP
WHAT IS REACT ROUTER -> React Router is a standard library for routing in React applications. It enables developers to build single-page applications (SPAs) with navigation without reloading the entire page. Here are the key features and concepts of React Router:

first we will install react-router-dom using the below command -
npm install react-router-dom

then we will wrap our application in BrowserRouter in index.js
first we will import BrowserRouter from react-router-dom using the code
import {BrowserRouter} from react-router-dom

then we will wrap our application in BrowserRouter as shown below
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>

then we will import the required functionality from react-router-dom in App.js as shown below -
import {Routes, route} from react-router-dom
then we will our all routes inside <Routes> </Routes> as shown below

```javascript
<Routes>
  <Route
    path="/"
    element={<Navbar title="TextUtils" mode={mode} togglemode={togglemode} />}
  />

  <Route path="/about" element={<About />} />

  <Route
    path="/pageone"
    element={
      <Screenone
        road="me tere kabil ho ya tere kabil nahi"
        name="harsh vardhan singh jhala"
        work={66}
        mode={mode}
        showalert={showalert}
      />
    }
  />
</Routes>
```

<Route path="/" element={<Navbar title="TextUtils" mode={mode} togglemode={togglemode} />} />
here inside Route we have two things first is path and second is element.path takes the url of the route and element takes the name and propes of the route.

it can be also written as <Route path="/" element={<Navbar title="TextUtils" mode={mode} togglemode={togglemode} />} > </Route> but prefer the above one.

now go the link that will send you to the route and replace a tag with Link and href attribute with to don't forget to import Link from react-router-dom

a tag and href attribute will also work but when we go from one url to another the page will reload.so we use Link and to attribute to avoid it.

<Link className="nav-link" to='/Mainpage'> Text Converter</Link>

you can also use NavLink instead of Link.don't forget to import NavLink.
<NavLink className="nav-link" to='/Mainpage'> Text Converter</NavLink>
if we use NavLink it will also provides an attribute of class.and when we click on the link it will automatically set class to active.so its better to use NavLink instead of Link because it gives us an extra property

we have specified Navbar inside of a header which will display it on every page.

<header>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
</header>
