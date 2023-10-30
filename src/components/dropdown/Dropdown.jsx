import React, { useState } from "react";
import "./dropdown.css";
import dropdownbottam from "../../assets/dropdownbottam.svg";
import dropdownright from "../../assets/dropdownright.svg";

function Dropdown({ skillsHeading, skillsData }) {
  const [dropdownActive, setdropDownActive] = useState(false);

  const dropdownIcon = () => {
    return dropdownActive ? dropdownright : dropdownbottam;
  };
  return (
    <div className="portfolio__about-skillSection-dropdown">
      {" "}
      <div
        className="portfolio__about-skillSection_dropdownPalate"
        onClick={() =>
          setdropDownActive(!dropdownActive, console.log("working"))
        }
      >
        <h4>{skillsHeading}</h4>
        <img src={dropdownIcon()} alt="dropdownIcon" />
      </div>
      <div
        id={dropdownActive ? "showDropdownDiv" : ""}
        className="scale-up-center"
      >
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="portfolio__about-skillSection_dropdownDivShow"
          >
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
