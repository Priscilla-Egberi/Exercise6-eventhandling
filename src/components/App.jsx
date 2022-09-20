import React, {useState} from "react";
import "./style.css"
// EVENT HANDLING, we are going to use click events and useState to change 
// the state of a "Hello" text and also the background to the submit button
function App() {
    const [defaultText, finalText] = useState("Hello")
    function changeText(){
        finalText("submitted");
    }
    const [defaultColor, finalColor] = useState(true)
    
  return (
    <div className="container">
      <h1>{defaultText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: defaultColor? "white": "black"}}
      onClick={changeText} 
      onMouseOver={()=>(finalColor(false))}
      onMouseOut={()=>(finalColor(true))}
      >Submit</button>
    </div>
  );
}

export default App;
