import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Screenone from "./components/Screenone";
// import About from "./components/About";
// import Home from "./Pages/Home";

// import { Routes, Route } from "react-router-dom";


function App() {

  // usestate for mode 
  const [mode, setmode] = useState("light");

  // usestate for alert
  const [alert, setalert] = useState(null);

  // show alert function which will take message and type as a parameter and then render alert accordingly
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null)
    }, 2000);
  };

  // to hide the alert in three seconds
  const timehidealert = () => {
    setTimeout(() => {
      setalert(null)
    }, 5000);
  }

  // togglemode function to switch modes
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "grey"
      document.body.style.color = "white"
      showalert("Dark mode han been enabled", "success")
      timehidealert()
      document.title = "TextUtils:Dark-mode"
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showalert("Light mode han been enabled", "success")
      timehidealert()
      document.title = "TextUtils:Light-mode"
    }
  }


  return (
    <>

      {/* <header>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/mainpage" element={<Screenone
          road="me tere kabil ho ya tere kabil nahi"
          name="harsh vardhan singh jhala"
          work={66}
          mode={mode}
          showalert={showalert}
        />} />
      </Routes> */}

      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />

      <Alert alert={alert} setalert={setalert} />

      <Screenone
        road="me tere kabil ho ya tere kabil nahi"
        name="harsh vardhan singh jhala"
        work={66}
        mode={mode}
        showalert={showalert}
      />

    </>
  );
}

export default App;
