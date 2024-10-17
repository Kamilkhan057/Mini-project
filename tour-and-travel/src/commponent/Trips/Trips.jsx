import React from "react";
import TripsCSS from "./../Trips/Trips.module.css";

import Trips01 from './../../assets/Trips01.jpg'
import Trips02 from './../../assets/Trips02.jpg'
import Trips03 from './../../assets/Trips03.jpg'
import Trips04 from './../../assets/Trips04.jpg'
import Trips05 from './../../assets/Trips05.jpg'
import Trips06 from './../../assets/Trips06.jpg'
import Trips07 from './../../assets/Trips07.jpg'
import Trips08 from './../../assets/Trips08.jpg'
import Trips09 from './../../assets/Trips05.jpg'
import Trips10 from './../../assets/Trips03.jpg'
import Trips11 from './../../assets/Trips04.jpg'
import Trips12 from './../../assets/d1.jpg'




function Trips() {
  return (
    <div className={`${TripsCSS.trips_wrapper} section`} id="trips">
      <h2>Popular Trips</h2>
      <div className={TripsCSS.cards}>
        <div className={TripsCSS.card}>
            <img src={Trips01} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
{/* 2 */}
<div className={TripsCSS.card}>
            <img src={Trips02} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-line"></i>
                </div>
                <h3>Best of Spain</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>5 Days</span>
                    <span><i className="ri-map-pin-line"></i>15 Places</span>
                    <span><i className="ri-flag-line"></i>Spain</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,850</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 3 */}
        <div className={TripsCSS.card}>
            <img src={Trips03} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Italy</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>15 Days</span>
                    <span><i className="ri-map-pin-line"></i>8 Places</span>
                    <span><i className="ri-flag-line"></i>Italy</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,100</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 4 */}
        <div className={TripsCSS.card}>
            <img src={Trips04} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star--fill"></i>
                </div>
                <h3>Canyonlands</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>5 Days</span>
                    <span><i className="ri-map-pin-line"></i>8 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 2,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 5 */}
        <div className={TripsCSS.card}>
            <img src={Trips05} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 6 */}
        <div className={TripsCSS.card}>
            <img src={Trips06} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 7 */}
        <div className={TripsCSS.card}>
            <img src={Trips07} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 8 */}
        <div className={TripsCSS.card}>
            <img src={Trips08} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 9 */}
        <div className={TripsCSS.card}>
            <img src={Trips09} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 10 */}
        <div className={TripsCSS.card}>
            <img src={Trips10} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 11 */}
        <div className={TripsCSS.card}>
            <img src={Trips11} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
        {/* 12 */}
        <div className={TripsCSS.card}>
            <img src={Trips12} alt=""/>
            <div className={TripsCSS.Tripcontent}>
                <div className={TripsCSS.rating}>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                </div>
                <h3>Australia Panorma</h3>

                <div className={TripsCSS.TripDetails}>
                    <span><i className="ri-calendar-line"></i>7 Days</span>
                    <span><i className="ri-map-pin-line"></i>5 Places</span>
                    <span><i className="ri-flag-line"></i>Australia</span>
                </div>
                <div className={TripsCSS.Pricing}>
                    <span className={TripsCSS.Price}>$ 1,200</span>
                    <button className={TripsCSS.book}>Book Now</button>

                </div>






            </div>
        </div>
      </div>
    </div>
  )
}
export default Trips
