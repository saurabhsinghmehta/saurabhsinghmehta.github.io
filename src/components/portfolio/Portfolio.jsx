import React from "react";
import "./portfolio.css";

import Button from "../button/Button";
function Portfolio({
  projectName,
  projectDiscription,
  techStack,
  direction = false,
  PortfolioImg,
}) {
  const conditionalStyle = () => {
    return direction ? "projectContainerDirection__row-reverse" : "";
  };
  return (
    <div
      className={`portfolio__portfolioComp section__padding ${conditionalStyle()}`}
      id="Portfolio"
    >
      <div className="portfolio__portfolioComp-projectImg">
        <img src={PortfolioImg} alt="projectImg" />
      </div>
      <div className="portfolio__portfolioComp-projectContent">
        <h1>{projectName}</h1>
        <p>{projectDiscription}</p>
        <div className="projectContent__techStack">
          {techStack.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="projectContent__buttonStack">
          <Button text={"Live"} />
          <Button text={"Github"} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
