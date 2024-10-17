import React from "react";
import searchCSS from './../Searches/Search.module.css'

function Search (){
    return(
        <div className={`${searchCSS.Search_wrapper} section`} id="searches">
            <h2>Popular Searches</h2>
            <div className={searchCSS.Cards}>                
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Domestic Trips <span>See America In a New Light</span></h3>
                </div>

                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Vacations in 14 Days <span>Limited Avaliablity ans Saling Fast</span></h3>
                </div>

                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3> offer for Traveling Groups <span>Save When you 9+ Guests</span></h3>
                </div>

                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Past Guests Benefits <span>Saving with global Tour Rewards </span></h3>
                </div>

                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Tours Under $2000 <span>Browse our Value Vacations </span></h3>
                </div>

                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>
                    <h3>Past Guests Benefits <span>SAving with our Global Tour Rewards </span></h3>
                </div>
                



            </div>

        </div>




    )
}
export default Search