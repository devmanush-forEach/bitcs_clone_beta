import React, { useState } from "react";
import "./WhatWeOffer.css";
import WhatWeOfferData from "./WhatWeOfferData";
import offer_middle from "../../assets/offer/offer_middle.png";
import ServiceWWORight from "../service_wwo_right/ServiceWWORight";
import ServiceWWOData from "../service_wwo_right/ServiceWWOData";

const WhatWeOffer = ({ isHome }) => {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <div className="wwo_main_box">
      <p>What We Offer</p>
      <h2>{WhatWeOfferData.title}</h2>
      <h3>{WhatWeOfferData.desc}</h3>
      {isHome ? (
        <div className="wwo_card_container">
          <>
            <div className="wwo_left_cards_box">
              {WhatWeOfferData.left_cards.map((card, i) => (
                <div className="wwo_card left_cards">
                  <div className="wwo_card_icon">{card.img}</div>
                  <h2 className="wwo_card_title">{card.title}</h2>
                  <p className="wwo_card_text">{card.kind}</p>
                </div>
              ))}
            </div>
            <div className="offer_middle_box">
              <img src={offer_middle} alt="" />
            </div>
            <div className="wwo_right_cards_box">
              {WhatWeOfferData.right_cards.map((card, i) => (
                <div className="wwo_card right_cards">
                  <div className="wwo_card_icon">{card.img}</div>
                  <h2 className="wwo_card_title">{card.title}</h2>
                  <p className="wwo_card_text">{card.kind}</p>
                </div>
              ))}
            </div>
          </>
        </div>
      ) : (
        <div className="service_page_wwo">
          <div className="service_wwo_left">
            {WhatWeOfferData.service_page.map((card, i) => (
              <div
                className={
                  active !== i
                    ? "service-cards  wwo_card left_cards"
                    : "service_wwo_card"
                }
                style={{ flexBasis: "23%" }}
                onClick={() => {
                  setActive(i);
                }}
              >
                <div className="wwo_card_icon">{card.img}</div>
                <h2 className="service_cards wwo_card_title">{card.title}</h2>
                <p className="wwo_card_text">{card.kind}</p>
              </div>
            ))}
          </div>
          <div className="service_wwo_right">
            <ServiceWWORight card={ServiceWWOData[active]} index={active} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatWeOffer;
