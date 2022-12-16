import React from "react";
import ExtendNav from "../../common/extendNav/ExtendNav";
import HomeBusiness from "../../components/homeBusiness/HomeBusiness";
import HomeAbout from "../../components/homeAbout/HomeAbout";
import Slider from "../../components/slider/Slider";
import Companies from "../../components/companies/Companies";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
const head = "About";
const desc =
  "Bitcs the best partner for your development journey with an expert team of professionals.";

const About = () => {
  return (
    <div>
      <ExtendNav head={head} desc={desc} />
      <HomeAbout isHome={false} />
      <WhyChooseUs />
      <HomeBusiness />
      <Slider />
      <Companies />
    </div>
  );
};

export default About;
