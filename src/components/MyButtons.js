import React from "react";
import '../components/MyButton.css'

function MyButtons() {
    return ( <div className="buttons-div">
        <button onClick={console.log("clicked")} id="Like-Button">LIKE</button>
        <button  id="Comment-Button">Comment</button>
        <button id="Share-Button">Share</button>
    </div> );
}

export default MyButtons ;