import React from "react";
import "./HomeUpper.css";
import img1 from "../../assets/home_top/img1.png";
import img2 from "../../assets/home_top/img2.png";
import img3 from "../../assets/home_top/img3.png";
import img4 from "../../assets/home_top/img4.png";
import img5 from "../../assets/home_top/img5.png";
import img6 from "../../assets/home_top/img6.png";
import img7 from "../../assets/home_top/img7.png";
import img8 from "../../assets/home_top/img8.png";
import img9 from "../../assets/home_top/img9.png";
import shape4 from "../../assets/home_top/shape4.png";
import FlashButton from "../../common/button/FlashButton";

const HomeUpper = () => {
  return (
    <div className="home_upper_box">
      <div className="home_upper_text">
        <h2>Revolutionising technology around the globe</h2>
        <p>
          In this growing technological era, we develop and deliver customised
          solutions for various industries to meet their business requirements.
        </p>
        <div className="home_btn_box">
          <FlashButton text="Learn More" />
          <FlashButton text="Contact us" />
        </div>
      </div>
      <div className="home_right_animation">
        <img src={img1} alt="" className="shape1" />
        <img src={img2} alt="" className="shape2" />
        <img src={img3} alt="" className="shape3" />
        <img src={img4} alt="" className="shape4" />
        <img src={img5} alt="" className="shape5" />
        <img src={img6} alt="" className="shape6" />
        <img src={img7} alt="" className="shape7" />
        <img src={shape4} alt="" className="shape8" />
        <img src={img9} alt="" className="shape9" />
        <img src={img8} alt="" className="shape10" />
      </div>
    </div>
  );
};

export default HomeUpper;
