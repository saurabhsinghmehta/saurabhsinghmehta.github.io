import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <div>
      <a href="#Portfolio">
        <p>Portfolio</p>
      </a>
      <a href="#About">
        <p>About</p>
      </a>
      <a href="#Contact">
        <p>Contact</p>
      </a>
    </div>
  );
};
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-logo">
        <a href="#header">
          <h1>Saurabh</h1>
        </a>
      </div>
      <div className="portfolio__navbar-links">
        <Menu />
      </div>
      <div className="portfolio__navbar-hamburger">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={"27px"}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={"27px"}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="portfolio__navbar-hamburger_container scale-up-center">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
