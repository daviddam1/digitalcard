import React from "react-dom"
import Girl from"../assets/girl.png"
export default function Data(){
    return(
        <div className="data">
            <img src={Girl} id="girl" alt="girl"></img>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <h4>laurasmith.website</h4>
        </div>
    )
}