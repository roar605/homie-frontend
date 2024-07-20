import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Residencies from "./Residencies";
import Value from "./Value";
import Contact from "./Contact";

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Residencies/>
            <Value/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Homepage;