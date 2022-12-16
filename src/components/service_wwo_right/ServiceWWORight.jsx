import React from "react";
import "./ServiceWWOData";
import "./ServiceWWORight.css";
import { BsCheck2Circle } from "react-icons/bs";

const ServiceWWORight = ({ card, index }) => {
  return (
    <div
      className="service_wwo_right_card"
      style={{ flexDirection: index % 2 !== 0 ? "row-reverse" : "row" }}
    >
      <div className="service_wwo_image">
        <img src={card.img} alt="" />
      </div>
      <div className="service_wwo_points_box">
        <h2>{card.title}</h2>
        <p>{card.desc}</p>
        <ul className="service_wwo_list">
          {card.list.map((ele) => (
            <li>
              <span>
                <BsCheck2Circle />
              </span>
              {ele}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceWWORight;
