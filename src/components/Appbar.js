import React from "react";

function Appbar(props) {
  return (
    <div className="appbar">
      <div className="titleicon">
        <h1>Joe</h1>
      </div>
      <div className="menuitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Appbar;
