import React from "react";
import "./HomeBusiness.css";
import BusinessData from "./HomeBusinessData";

const HomeBusiness = () => {
  return (
    <section className="business_section">
      <div>
        <div className="business_left">
          <h2>{BusinessData.title}</h2>
          <div className="bsns_left_tile_box">
            {BusinessData.leftCards.map((ele) => (
              <div className="bsns_left_tile">
                <div style={{ gridArea: "img" }}>
                  <span
                    style={{ color: ele.color, backgroundColor: ele.bgColor }}
                  >
                    {ele.img}
                  </span>
                </div>
                <h2 style={{ gridArea: "title" }}>{ele.title}</h2>
                <p style={{ gridArea: "desc" }}>{ele.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="business_right">
          {BusinessData.rightcards.map((ele) => (
            <div
              className="bsns_right_card"
              style={{ backgroundColor: ele.bgColor }}
            >
              <h2 style={{ color: ele.color }}>{ele.percent}</h2>
              <p>{ele.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBusiness;
