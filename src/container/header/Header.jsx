import React from "react";
import "./header.css";
import github from "../../assets/github.svg";
import linkdin from "../../assets/linkdin.svg";
import Ellipse3 from "../../assets/Ellipse3.svg";
import Ellipse12 from "../../assets/Ellipse12.svg";
import Ellipse11 from "../../assets/Ellipse11.svg";
import Ellipse4 from "../../assets/Ellipse4.svg";
import Rectangle7 from "../../assets/Rectangle7.svg";

function Header() {
  return (
    <div className="portfolio__header" id="header">
      <div className="portfolio__header-designSvg">
        <img src={Ellipse11} alt="" />
        <img src={Rectangle7} alt="" />
        <img src={Ellipse3} alt="" />
        <img src={Ellipse12} alt="" />
        <img src={Ellipse4} alt="" />
      </div>
      <div className="portfolio__header-profileContent section__padding">
        <div className="portfolio__header-profileHeadline">
          <h1>I’m Saurabh. Glad to see you!</h1>
        </div>
        <div className="portfolio__header-profileDiscription">
          <p>
            I’m a software developer! I can help you build a product , feature
            or website Look through some of my work and experience! If you like
            what you see and have a project you need coded, don’t hesitate to
            contact me.
          </p>
        </div>
        <div>
          <p>LET'S CONNECT</p>
        </div>

        <div className="portfolio__header-profileContent_socialhandles">
          <a
            href="https://github.com/saurabhsinghmehta"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabhsinghmehta/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkdin} alt="linkdin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
