import React, { useRef } from "react";
import "./Slider.css";
import SliderCard from "./SliderCard";
import SliderData from "./SliderData";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = () => {
  const settings = {
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      660: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="slider_card_box">
      <p>Testimonials</p>
      <h2>What Clients Say About Us</h2>

      <div className="slider_box">
        <OwlCarousel className="owl-theme" loop margin={10} {...settings}>
          {SliderData.map((card) => {
            return <SliderCard card={card} />;
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Slider;
