import React, { useRef } from "react";
import "./Slider.css";
import SliderCard from "./SliderCard";
import SliderData from "./SliderData";

const Slider = () => {
  const containerRef = useRef();
  const cardRef = useRef();

  return (
    <div className="slider_card_box">
      <p>Testimonials</p>
      <h2>What Clients Say About Us</h2>

      <div className="slider_box">
        <div ref={containerRef} className="slider_card_container">
          {SliderData.map((card) => {
            return <SliderCard card={card} ref={cardRef} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
