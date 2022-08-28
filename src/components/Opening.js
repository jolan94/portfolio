import React from "react";
import introimage from "../assets/introimg.png";

function Opening(props) {
  return (
    <div className="opening">
      <div className="introtext">I'm Joe, Full Stack Web Developer</div>
      <div className="introimage">
        <img src={introimage} alt="Joe A"></img>
      </div>
    </div>
  );
}

export default Opening;
