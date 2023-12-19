import React from "react";
import { RiDoubleQuotesL, RiStarFill } from "react-icons/ri";

const SliderCard = ({ card }) => {
  return (
    <div className="slider_card">
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
            height={70}
            width={70}
          />
          <h2 className="card_user_name">{card.name}</h2>
          <p className="card_user_post">{card.post}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
