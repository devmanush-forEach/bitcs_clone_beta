import React from "react";
import FlashButton from "../../common/button/FlashButton";
import HomeAbout from "../../components/homeAbout/HomeAbout";
import HomeServices from "../../components/homeServices/HomeServices";
import HomeUpper from "../../components/home_upper/HomeUpper";
import newsletter_img from "../../assets/newsletter-img.png";
import newsletter_bgi from "../../assets/newsletter-shape-one.png";
import newsletter_boxes from "../../assets/newsletter-shape-two.png";
import "./Home.css";
import HomeBusiness from "../../components/homeBusiness/HomeBusiness";
import Slider from "../../components/slider/Slider";
import WhatWeOffer from "../../components/whatWeOffer/WhatWeOffer";
import Companies from "../../components/companies/Companies";

const Home = () => {
  return (
    <>
      <HomeUpper />
      <HomeAbout isHome={true} />
      <HomeServices isHome={true} />
      <div className="home_contact_box">
        <div>
          <h2>Sign Up and connect with us.</h2>
          <div style={{ position: "relative" }}>
            <input type="email" placeholder="Your Email" />
            <div className="subscribe_btn_div">
              <FlashButton text="Subscribe" />
            </div>
          </div>
        </div>
        <div>
          <img src={newsletter_img} alt="" height="200px" />
        </div>
        <div>
          <h2>Contact our support team.</h2>
          <h2>+91-1234512345</h2>
        </div>
        <img src={newsletter_bgi} alt="" className="newsletter_bgi_left" />
        <img src={newsletter_bgi} alt="" className="newsletter_bgi_right" />
        <img src={newsletter_boxes} alt="" className="newsletter_boxes" />
      </div>
      <HomeBusiness isHome={true} />
      <Slider isHome={true} />
      <WhatWeOffer isHome={true} />
      <Companies />
    </>
  );
};

export default Home;
