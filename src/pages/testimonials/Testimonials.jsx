import React from "react";
import ExtendNav from "../../common/extendNav/ExtendNav";

const head = "Testimonials";
const desc =
  "Some of our happy clients explaining about their experience with Bitcs team. We are proud to share few of them here.";

const Testimonials = () => {
  return (
    <div>
      <ExtendNav desc={desc} head={head} />
    </div>
  );
};

export default Testimonials;
