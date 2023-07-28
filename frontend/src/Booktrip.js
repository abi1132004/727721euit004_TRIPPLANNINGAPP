import { Button } from "@mui/material";
import "./booktrip.css"
import React from 'react';
import { Link } from "react-router-dom";
const Booktrip=()=>{
    return(
        <div className="booktrip">
           <h1>Trip booked successfully</h1>
           <br/><br/>
           <Link to="/Canceltrip"><Button variant="contained" >Cancel the trip</Button></Link>
           <br/><br/>
           <Link to="/UpdateTrip"><Button variant="contained">Update the trip</Button></Link>
        </div>
    )
}
export default Booktrip;