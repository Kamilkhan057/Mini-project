import React from "react";
import destinationCSS from './../Destinations/Destination.module.css'
import destination01 from './../../assets/Destination01.jpg'
import destination02 from './../../assets/Destination02.jpg'
import destination03 from './../../assets/Destination03.jpg'
import destination04 from './../../assets/Destination04.jpg'
import destination05 from './../../assets/Destination05.jpg'
import destination06 from './../../assets/Destination06.jpg'




function Destination(){
    return(
        <div className={`${destinationCSS.Destination_wrapper} section`} id="populardestination">
           <h2>
            Popular Destinations 
           </h2>
           <div className={destinationCSS.DestinationCards}>
            <div className={destinationCSS.DestinationCard}>
                <img src={destination01} alt="img-destination"  />
                <div className={destinationCSS.DestinationDetails}>
                    <h3>Europe</h3>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>

                </div>
            </div>
            {/* 2 */}
            <div className={destinationCSS.DestinationCard}>
                <img src={destination02} alt="img-destination"  />
                <div className={destinationCSS.DestinationDetails}>
                    <h3>Asia</h3>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>

                </div>
            </div>
            {/* 3 */}
            <div className={destinationCSS.DestinationCard}>
                <img src={destination03} alt="img-destination"  />
                <div className={destinationCSS.DestinationDetails}>
                    <h3>North America</h3>
                    <div className={destinationCSS.btns}>
                        <a href="#">AllDestinations</a>
                        <a href="#">Deals</a>
                    </div>

                </div>
            </div>
            {/* 4 */}
            <div className={destinationCSS.DestinationCard}>
                <img src={destination04} alt="img-destination"  />
                <div className={destinationCSS.DestinationDetails}>
                    <h3>Latin America</h3>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>

                </div>
            </div>
            {/* 5 */}
            <div className={destinationCSS.DestinationCard}>
                <img src={destination05} alt="img-destination"  />
                <div className={destinationCSS.DestinationDetails}>
                    <h3>Austrilia</h3>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>

                </div>
            </div>
            {/* 6 */}
            <div className={destinationCSS.DestinationCard}>
                <img src={destination06} alt="img-destination"  />
                <div className={destinationCSS.DestinationDetails}>
                    <h3>Africa</h3>
                    <div className={destinationCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                    </div>

                </div>
            </div>
           </div>



        </div>

    )
}
export default Destination