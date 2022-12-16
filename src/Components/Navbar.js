import React from "react";
import reactLogo from "../Images/logo512.png"

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark": ""}>
            <div className="logoDiv">
                <img src={reactLogo} className = "logo" />
                <h3 className = "textLogo">ReactFacts</h3> 
            </div>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggle}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}