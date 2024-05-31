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

the above syntax is used in old versions of the react-router-dom but in current versions some features are changed now we can create our own route instead of using BrowserRouter as shown below and other properties that have changed are also shown below.

................................................................
BUILDING + HOSTING REACT APP FOR FREE ON GITHUB PAGES
for that you need to install github desktop and git. first install git and then install github desktop.

also, git and git bash are not same -> Git is the version control system used to track changes in code.
Git Bash is a command-line interface for Windows that provides a Unix-like environment and includes Git command-line tools.

USING GITDESKTOP
after installing git and github desktop i singed in and i created a repository
then i created a branch by going to branch menu on the top bar and choosing new branch. a branch allows you to work on different versions of a repository at one time.

then i edited a file by opening the repository in my text editor(vs code) on top left corner i click on repository and select option open in visual studio code and then edited a file saved it.

make a comment -> a comment allows you to save sets of changes. in the summary fiels in the bottom left corner write a short message that describes the changes you made.when you are done click the blue commit button to finish

publish on github
publish will push or upload your commits to this branch of repository on github.publish using the third button in the top bar

open a pull request
a pull request allows you to propose changes in your code.by opening one you are requesting that someone review and merge them.

NPM RUN BUILD
when we use the command npm run build instead of npm start it creates a build folder. it makes your application as a static application. means you only need application inside build folder. you can only open build folder with vs code and run the code using live server and the website will display.

we use npm start for development and npm run build for production.as npm start is not optimized.npm run build will optimize it and compress your files to run application faster and decreases your bandwidth usage and data usage of user.and reduce the const.

Deploying a React App to GitHub Pages
deploy on github -> we can also traditionally deploy a app on github pages but with react its difficult to directly deploy an app on github pages.
gh-pages -> it is an npm package people can use to deploy things to GitHub Pages, a free web hosting service provided by GitHub. so we use gh-pages to deploy app to github.gh-pages can be used by installing using npm install gh-pages --save-dev

react-router doesn't work properly with github pages altho react-router works on server properly.so we will comment out all of our routing in my-app temporally so that we can deploy our app on github pages.

Procedure

1. Create an empty repository on GitHub ->Sign into your GitHub account.Visit the Create a new repository form.Fill in the form as follows:Repository name: You can enter any name you want.Fill in the form as follows:Repository privacy: Select Public (or Private\*).

Initialize repository: Leave all checkboxes empty.
That will make it so GitHub creates an empty repository, instead of pre-populating the repository with a README.md, .gitignore, and/or LICENSE file.

Submit the form.
At this point, your GitHub account contains an empty repository, having the name and privacy type that you specified.

now create your react app and follow the below instructions

Branch names: master vs. main ->The Git repository will have one branch, which will be named either (a) master, the default for a fresh Git installation; or (b) the value of the Git configuration variable, init.defaultBranch, if your computer is running Git version 2.28 or later and you have set that variable in your Git configuration (e.g. via $ git config --global init.defaultBranch main).
Since I have not set that variable in my Git installation, the branch in my repository will be named master.

now enter in the folder where your react app code is in my case i will enter in my-app folder. All of the remaining commands shown in this tutorial can be run from this folder.
