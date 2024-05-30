import PropTypes from 'prop-types'

// import useState from react
import React, { useState } from 'react'


export default function Screenone(props) {

    // Declare a state variable named "count", and set its initial value to 0
    const [count, setcount] = useState(0);
    const [text, settext] = useState("please, enter your info. here");

    // Function to handle increment
    const increment = () => {
        setcount(count + 1);
    }

    // Function to handle decrement
    const decrement = () => {
        setcount(count - 1);
    }

    // functions for text area

    const changeuppercase = (event) => {
        // event.preventDefault();
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to uppercase", "success")
    }

    const changelowercase = (event) => {
        // event.preventDefault();
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("Converted to lowercase", "success")
    }

    const handlechange = (event) => {
        settext(event.target.value);
    }

    const clear = () => {
        settext("");
        props.showalert("Cleared", "success")
    }

    const submithandling = (event) => {
        event.preventDefault();
    }

    const copy = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Text copied to clipboard");
        }).catch(() => {
            alert("Failed to copy text");
        })
        props.showalert("Text copied to clipboard", "success")
    };

    const handelextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showalert("Extra spaces removed", "success")
    }

    return (
        <>
            <p>i am first screen of your project and i demand justice</p>
            <p>your are standing in my court man. here justice is always served</p>
            <p>{props.road}</p>
            <p>{props.name}</p>
            <p>{props.work}</p>

            {/* changing count using state */}
            <h1>{count}</h1>
            <button className="mx-2" onClick={increment}>Increase the number</button>
            <button className="mx-2" onClick={decrement}>Decrease the number</button>

            <br /><br />

            <form className='container' onSubmit={submithandling}>
                <div className="mb-3" >
                    <textarea value={text} name="" id="" cols="100" rows="7" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'light' ? '2px solid black' : '2px solid white' }} onChange={handlechange}></textarea>
                </div>
                <button className="btn btn-success border  " onClick={changeuppercase}>convert to uppercase</button>
                <button className="btn btn-success border  mx-3" onClick={changelowercase}>convert to lowercase</button>
                <button className="btn btn-success border  mx-3" onClick={clear}>clear</button>
                <button className="btn btn-success border  mx-3" onClick={copy}>copy</button>
                <button className="btn btn-success border  mx-3" onClick={handelextraspaces}>remove extra spaces</button>

                <h2>word summary</h2>
                <p>Total word count is {text.split(" ").length} and Total letter count is {text.length}</p>
                <p>Time required to read text is {0.003 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Enter text to preview" : text}</p>
            </form>

        </>
    )
}


Screenone.propTypes = {
    road: PropTypes.string,
    name: PropTypes.string.isRequired,
    work: PropTypes.number
}

Screenone.defaultProps = {
    road: "i am road",
    name: "i am name",
    work: 10
}