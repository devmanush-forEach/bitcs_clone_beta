import React from "react";
import wcuData from "./WCUData";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="wcu_container">
      <span>Why Choose Us</span>
      <p>{wcuData.desc}</p>
      <div className="wcu_card_container">
        {wcuData.cards.map((card, i) => (
          <div className="wcu_card">
            <div className="wcu_card_img_box">
              <span
                style={{
                  backgroundColor: card.color,
                }}
              >
                0{i + 1}
                <span
                  className="wcu_card_img"
                  style={{
                    color: card.color,
                  }}
                >
                  {card.img}
                </span>
              </span>
            </div>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
