import React from "react";
import "./ExtendNav.css";

const ExtendNav = ({ head, desc }) => {
  return (
    <div className="extendedNav">
      <div>
        <h2>{head}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ExtendNav;
