import React from "react";
import MyButtons from "./MyButtons";

import '../components/PostOwnerName.css';
import myimage from '../components/assets/OIP.jpg'

function Post(props) {
    return ( <div id="container-div">

        <img className="myImage" src={myimage}/>
        <h1>{props.id}</h1>
       
        <h1>{props.userName}</h1>
        <textarea placeholder="please enterva text here"></textarea>
        <br/>
        <br/>
        
        <MyButtons/>
        <br/>
{/* 
        <button>submit</button> */}

        
    </div> );
}

export default Post ;