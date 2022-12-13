import React, { useRef } from "react";
import "./Slider.css";
import SliderData from "./SliderData";
import { RiDoubleQuotesL, RiStarFill } from "react-icons/ri";

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
            return (
              <div className="slider_card" ref={cardRef}>
                <div className="upper_card_box">
                  <RiDoubleQuotesL className="card_quotes" />
                  <p>{card.desc}</p>
                  <ul className="star_list">
                    <li>
                      <RiStarFill />
                    </li>
                    <li>
                      <RiStarFill />
                    </li>
                    <li>
                      <RiStarFill />
                    </li>
                    <li>
                      <RiStarFill />
                    </li>
                    <li>
                      <RiStarFill />
                    </li>
                  </ul>
                  <div className="card_user_info">
                    <img
                      src="https://www.bitcs.in/images/clients/client2.jpg"
                      alt=""
                    />
                    <h2 className="card_user_name">{card.name}</h2>
                    <p className="card_user_post">{card.post}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
