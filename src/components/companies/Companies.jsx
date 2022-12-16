import React from "react";
import companies from "./CompaniesData";
import "./Companies.css";

const Companies = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="wwo_companies_box">
        {companies.map((ele) => (
          <img src={ele} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Companies;
