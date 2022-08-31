import { React, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Appbar(props) {
  const navRef = useRef();

  const onToggleClick = (e) => {
    navRef.current.classList.toggle("show");
  };

  return (
    <div className="appbar">
      <header>
        <h3>Joe</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Skills</a>
          <a href="/#">Work</a>
          <a href="/#">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={onToggleClick}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={onToggleClick}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Appbar;
