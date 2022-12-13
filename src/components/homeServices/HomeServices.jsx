import React from "react";
import "./HomeServices.css";
import topRight from "../../assets/home_service_top.png";
import bottomLeft from "../../assets/home_service_left.png";
import homeServiceData from "./homeServicesData";

const HomeServices = ({ isHome }) => {
  return (
    <section className="home_service_section">
      {isHome && <span>Services</span>}
      <h2>{homeServiceData.title}</h2>
      <p>{homeServiceData.desc}</p>
      <div className="service_tiles_box">
        {homeServiceData.cards.map((ele) => (
          <div className="section_card" style={{ borderColor: ele.color }}>
            <div>
              <span style={{ color: ele.color, backgroundColor: ele.bgColor }}>
                {ele.img}
              </span>
            </div>
            <h2>{ele.title}</h2>
            <p>{ele.desc}</p>
          </div>
        ))}
      </div>

      <>
        <img src={topRight} alt="" className="top_right" />
        <img src={bottomLeft} alt="" className="bottom_left" />
      </>
    </section>
  );
};

export default HomeServices;
