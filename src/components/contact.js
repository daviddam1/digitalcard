import React from "react-dom"

export default function Contact(){
    return(
        <div>
            <div className="contact">
                <button className="email">
                    <i class="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>
                <button className="linkedin">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                </button>                
            </div>
        </div>
    )
}
