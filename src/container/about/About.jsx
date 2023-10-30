import React from "react";
import "./about.css";
import Button from "../../components/button/Button";
import github from "../../assets/github.svg";
import linkdin from "../../assets/linkdin.svg";
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import atom from "../../assets/atom.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import js from "../../assets/js.png";

function About() {
  return (
    <div className="portfolio__about section__padding">
      <div className="portfolio__about-aboutSection">
        <h1>About Myself</h1>
        <p>
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience! If you
          like what you see and have a project you need coded, don’t hesitate to
          contact me.
        </p>
        <p>LET'S CONNECT</p>
        <div className="portfolio__aboutSection-profileContent_socialhandles">
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
        <Button text={"Get my Resume"} />
      </div>
      <div className="portfolio__about-skillSection">
        <Dropdown
          skillsData={[
            {
              src: html,
              title: "Html",
            },
            {
              src: css,
              title: "CSS",
            },
            {
              src: js,
              title: "Javascript",
            },
          ]}
          skillsHeading={"Languages"}
        />
        <Dropdown
          skillsData={[
            {
              src: html,
              title: "Html",
            },
            {
              src: css,
              title: "CSS",
            },
            {
              src: js,
              title: "Javascript",
            },
          ]}
          skillsHeading={"Frameworks"}
        />
        <Dropdown
          skillsData={[
            {
              src: html,
              title: "Html",
            },
            {
              src: css,
              title: "CSS",
            },
            {
              src: js,
              title: "Javascript",
            },
          ]}
          skillsHeading={"Skills"}
        />
      </div>
    </div>
  );
}

export default About;
