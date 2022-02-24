import React from "react";
import ReactDOM from "react-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Me</Link>
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
          <Link to="/" onClick={() => setShow(!show)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setShow(!show)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setShow(!show)}>
            Contact Me
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
