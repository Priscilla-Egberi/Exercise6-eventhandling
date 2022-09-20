import React, {useState} from "react";
import "./style.css"
// EVENT HANDLING, we are going to use click events and useState to change 
// the state of a "Hello" text and also the background to the submit button
function App() {
    const [defaultText, text] = useState("Hello")
    function changeText(){
        text("submitted");
        console.log(text("submitted"))
    }
  return (
    <div className="container">
      <h1>{defaultText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={changeText}>Submit</button>
    </div>
  );
}

export default App;
