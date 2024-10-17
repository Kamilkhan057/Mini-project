import React from "react";
import footertopCSS from './../Footertop/Footertop.module.css'
function Footertop(){
    return(
        <div className={`${footertopCSS.Footertop_wrapper} section`}>
            <h2>Explore Iconic Popular Destination<br/>
            With Expert Insides
            </h2>
            <button>Book Advanture</button>
        </div>
    )
}
export default Footertop