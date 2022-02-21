import React from "react";
import ReactDOM from "react-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <section>
      <div className="navbar-container">
        <span className="logo">
          <FaReact className="react" />
          <p className="name">Anas Parwez</p>
        </span>
        <ul className="nav-ul">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Me</a>
        </ul>
        <div className="burger">
          <GiHamburgerMenu
            onClick={() => handleClick()}
            className={`${
              show === true ? "burger-animation" : "burger-normal"
            }`}
          />
        </div>
      </div>
      <div className={`drop-ul ${show && "active"}`}>
        <ul>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
