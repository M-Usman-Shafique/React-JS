import React, { useState } from "react";
import "../Misc/Responsive.css";

function Responsive() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box">
      <div className="icon-box">
        <button onClick={() => setIsOpen(!isOpen)} className="menu-icon">
          ☰
        </button>
      </div>
      <div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>Profile</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Responsive;
