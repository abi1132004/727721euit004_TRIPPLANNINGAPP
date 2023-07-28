import React from "react";
import './app.css'
import Footer from "./Footer1.js";
import Main from "./Main";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Home1 from "./Home1";
function Mainpage(){
    return(
        <div>
        <Navbar/>
        <Home1/>
         <Main/>
        <Footer/> 
        </div>
    )
}
export default Mainpage;