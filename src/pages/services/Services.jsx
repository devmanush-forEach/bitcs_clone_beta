import React from "react";
import ExtendNav from "../../common/extendNav/ExtendNav";
import HomeBusiness from "../../components/homeBusiness/HomeBusiness";
import HomeServices from "../../components/homeServices/HomeServices";
import WhatWeOffer from "../../components/whatWeOffer/WhatWeOffer";

const head = "Services We Offer";
const desc =
  "We are a one-stop for your development needs. We help design, create, and develop ideas for early-stage startups and established companies.";
const Services = () => {
  return (
    <div>
      <ExtendNav head={head} desc={desc} />
      <HomeServices />
      <HomeBusiness />
      <WhatWeOffer />
    </div>
  );
};

export default Services;
