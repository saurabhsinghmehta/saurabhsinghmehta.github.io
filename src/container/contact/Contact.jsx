import React from "react";
import "./contact.css";
import Button from "../../components/button/Button";
import footerEllipse from "../../assets/footerElipse.svg";
import footerEllipse3 from "../../assets/footerEllipse3.svg";
import footerEllipse5 from "../../assets/footerEllipse5.svg";
import footerEllipse11 from "../../assets/footerEllipse11.svg";
import footerRectangle from "../../assets/footerRectangle.svg";
import footerRectangle6 from "../../assets/footerRectangle6.svg";

function Contact() {
  return (
    <div className="portfolio__contactMe" id="Contact">
      <div className="portfolio__contactMe-container">
        <h1>Contact Me</h1>
        <p>
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I’d love to help
          with it!
        </p>
        <div>
          <input type="text" placeholder="Your Name..." />
          <input type="text" placeholder="Your Email..." />
          <input type="text" placeholder="Message..." />
        </div>
        <Button text={"Get in Touch"} />
      </div>
      <div className="ellipseIcons">
        <img src={footerEllipse5} alt="elpseIcon" />
        <img src={footerRectangle} alt="elpseIcon" />
        <img src={footerEllipse} alt="elpseIcon" />
        <img src={footerEllipse3} alt="elpseIcon" />
        <img src={footerEllipse} alt="elpseIcon" />
        <img src={footerEllipse11} alt="elpseIcon" />
        <img src={footerRectangle6} alt="elpseIcon" />
      </div>
    </div>
  );
}

export default Contact;
