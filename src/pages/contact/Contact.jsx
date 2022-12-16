import React from "react";
import "./Contact.css";
import ExtendNav from "../../common/extendNav/ExtendNav";
import contact_img from "../../assets/contact-img.png";
import ContactData from "./ContactData";
import FlashButton from "../../common/button/FlashButton";

const head = "Contact Us";
const desc =
  "We can give life to your ideas. Let's talk! Feel rest assured that your ideas are always protected.";

const Contact = () => {
  return (
    <div className="contact_page_container">
      <ExtendNav head={head} desc={desc} />
      <div className="contact_cards_container">
        {ContactData.map((ele) => (
          <div className="contact_info_card">
            <span>{ele.icon}</span>
            <h2>{ele.title}</h2>
            <p>{ele.address}</p>
          </div>
        ))}
      </div>
      <div className="contact_lower_box">
        <span>Contact Us</span>
        <h2>Drop us a message for any query</h2>
        <p>
          If you have any questions about these Terms, please contact us by
          email <a href="https://info@bitcs.in"> info@bitcs.in </a>
          or by phone +91-7428013133.
        </p>
        <div className="contact_form_box">
          <div className="contact_form_div">
            <form action="" className="contact_form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <div>
                <button type="submit" className="form_sbmt_btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="contact_page_icon_box">
            <img src={contact_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
