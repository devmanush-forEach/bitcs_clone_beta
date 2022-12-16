import React from "react";
import ExtendNav from "../../common/extendNav/ExtendNav";
import TestimonialsData from "./TestimonialsData";
import SliderCard from "../../components/slider/SliderCard";
import "./Testimonials.css";

const head = "Testimonials";
const desc =
  "Some of our happy clients explaining about their experience with Bitcs team. We are proud to share few of them here.";

const Testimonials = () => {
  return (
    <div className="testimonial_container">
      <ExtendNav desc={desc} head={head} />
      <div className="users_card_box">
        {TestimonialsData.map((card) => (
          <div className="testimonial_card">
            <SliderCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
