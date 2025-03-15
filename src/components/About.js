import React from "react"
import NavBar from "./NavBar"
import AboutHeader from "./AboutHeader"
import AboutContent from "./AboutContent"

function About(){
    return(
        <div className="About">
            <NavBar/>
            <AboutHeader/>
            <AboutContent/>
        </div>
    )
}
export default About