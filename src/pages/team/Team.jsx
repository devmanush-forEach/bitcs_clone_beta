import React from "react";
import ExtendNav from "../../common/extendNav/ExtendNav";
import TeamList from "./TeamList";
import "./Team.css";
const head = "Our Team";
const desc =
  "Meet the people behind Bitcs journey in leading the development solution provider.";

const Team = () => {
  return (
    <div className="team_container">
      <ExtendNav head={head} desc={desc} />
      <div className="team_card_container">
        {TeamList.map((user) => (
          <div className="team_card">
            <div>
              <img src={user.img} className="user_img" alt="" />
              <img
                src="https://www.bitcs.in/images/team/team-shape.png"
                alt=""
                className="user_outer_img"
              />
            </div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
