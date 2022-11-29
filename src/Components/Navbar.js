import React from "react";
import reactLogo from "../Images/logo512.png"

export default function Navbar(){
    return(
        <nav className = "navbar">
            <div className="logoDiv">
                <img src={reactLogo} className = "logo" />
                <h3 className = "textLogo">ReactFacts</h3> 
            </div>
            <p className = "projectName">React Course - Project 2</p>
        </nav>
    )
}