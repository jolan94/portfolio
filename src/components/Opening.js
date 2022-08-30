import React from "react";
import introimage from "../assets/introimg.png";

function Opening(props) {
  return (
    <div className="opening grid grid-cols-6">
      <div className="introtext">I'm Joe, Full Stack Web Developer</div>
      <div className="introlook">
        <img src={introimage} className="introimage" alt="Joe A"></img>
      </div>
    </div>
  );
}

export default Opening;
