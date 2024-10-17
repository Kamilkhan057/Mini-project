import React from "react";
import aboutCSS from "./../About/about.module.css";
import aboutImg from "./../../assets/about-bg.png";

function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`} id="about">
      <div className={aboutCSS.about_image}>
        <img src={aboutImg} alt="about-img" srcset="" />
      </div>
      <div className={aboutCSS.about_content}>
        <h2>
          Discover Organized <br /> Advantures the , <br />
          Ultimate Travel Hack
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          iste illum aliquid cupiditate facilis quas culpa veniam eveniet ipsam
          obcaecati?
        </p>
        <div className={aboutCSS.about}>
            <p><i className="ri-building-4-line"></i>Accomodation</p>
            <p><i className="ri-car-line"></i>Transpotation Allowance</p>
            <p><i className="ri-magic-line"></i>Exclusive Experiences</p>
            <p><i className="ri-instance-line"></i>local Recommendatios</p>
            <p><i className="ri-pin-distance-line"></i> Personalized terip crafting</p>
            <p><i className="ri-phone-line"></i>24/7 Support</p>
        </div>

        
      </div>
    </div>
  );
}
export default About;
