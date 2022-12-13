import React from "react";
import "./HomeAbout.css";
import homeAboutData from "./homeAboutData";
import homeImage from "../../assets/home_about.png";
import aboutImage from "../../assets/about-img-up.png";

import { TbCloudComputing, TbArrowNarrowRight } from "react-icons/tb";
import { BsCheck2Circle } from "react-icons/bs";
import FlashButton from "../../common/button/FlashButton";

const HomeAbout = ({ isHome }) => {
  return (
    <div className="home_about" style={{ paddingTop: isHome ? 250 : 0 }}>
      {isHome && (
        <div className="cards_container">
          {homeAboutData.cards.map((ele) => (
            <div className="home_about_card">
              <div className="about_card_img_div">
                <TbCloudComputing />
              </div>
              <h2>{ele.title}</h2>
              <p>{ele.desc}</p>
              <button className="to_right_arrow">
                <TbArrowNarrowRight />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="home_about_bottom">
        <img src={isHome ? homeImage : aboutImage} alt="" />
        <div>
          <span>About Us</span>
          <h2>{homeAboutData.title}</h2>
          <p>{homeAboutData.desc}</p>
          <div className="home_about_list_box">
            <ul>
              {homeAboutData.aboutList.map((ele) => (
                <li>
                  <span>
                    <BsCheck2Circle />
                  </span>
                  {ele}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FlashButton text="Learn More" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
