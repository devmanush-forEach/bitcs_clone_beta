import React from "react";
import "./Footer.css";
import { AiOutlineHeart } from "react-icons/ai";
import FooterData from "./FooterData";
import navLogo from "../../assets/logo.png";
import { ImFacebook } from "react-icons/im";
import { RiLinkedinFill } from "react-icons/ri";
import { HiChevronDoubleRight } from "react-icons/hi";
import footer_shape_one from "../../assets/footer-shape-one.png";
import footer_shape_two from "../../assets/footer-shape-two.png";

const Footer = () => {
  return (
    <>
      <footer className="main_footer">
        <div className="footer_intro">
          <div className="footerlogo_box">
            <img src={navLogo} alt="logo" />
            <span>BITCS</span>
          </div>
          <p>{FooterData.desc}</p>
          <div className="footer_social_media_box">
            <a href={FooterData.fbLink} className="fb_icon">
              <ImFacebook />
            </a>
            <a href={FooterData.linkedinLink} className="linkedin_icon">
              <RiLinkedinFill />
            </a>
          </div>
        </div>
        <div className="footer_services_box">
          <div>{FooterData.services.title}</div>
          <ul>
            {FooterData.services.list.map((ele) => (
              <li>
                <HiChevronDoubleRight /> {ele}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_links_box">
          <div>{FooterData.links.title}</div>
          <ul>
            {FooterData.links.list.map((ele) => (
              <li>
                <HiChevronDoubleRight />
                {ele}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer_information_box">
          <div>{FooterData.information.title}</div>
          <ul>
            {FooterData.information.list.map((ele) => (
              <li>
                <div className="information_list_items">
                  <div style={{ gridArea: "img" }}>{ele.icon}</div>
                  <h2 style={{ gridArea: "title" }}>{ele.title}</h2>
                  <p style={{ gridArea: "address" }}>{ele.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <>
          <img src={footer_shape_one} alt="" className="footer_bgi shape_one" />
          <img src={footer_shape_two} alt="" className="footer_bgi shape_two" />
        </>
      </footer>
      <footer className="lower_footer">
        <div>Copyright ©2018-2022 Bitcs Pvt Ltd. All Rights Reserved</div>
        <div>Terms & Conditions - Privacy Policy</div>
        <div>
          Designed By <AiOutlineHeart className="footer_heart" />
          <span> Nikhil</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
