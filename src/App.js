import React from "react";
import "./App.css";
import { Header } from "./container";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioImg from "./assets/PortfolioImg.svg";
import wisemonki from "./assets/wisemonki.png";
import About from "./container/about/About";
import Contact from "./container/contact/Contact";
import portfolio from "./assets/portfolio.png";
import gpt3 from "./assets/gpt3.png";
function App() {
  return (
    <div>
      <Navbar />
      <Header />

      <Portfolio
        projectName={"GPT-3"}
        projectDiscription={
          "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR."
        }
        techStack={["html", "css", "javascript", "react"]}
        PortfolioImg={gpt3}
        direction={true}
        live={""}
        github={"https://github.com/saurabhsinghmehta/gpt3"}
      />
      <Portfolio
        projectName={"Wisemonki LLP"}
        projectDiscription={
          "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR."
        }
        techStack={["html", "css", "javascript", "react"]}
        PortfolioImg={wisemonki}
        live={""}
        github={"https://github.com/wisemonki/WiseMonki_website"}
      />
      <Portfolio
        projectName={"My Portfolio"}
        projectDiscription={
          "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR."
        }
        techStack={["html", "css", "javascript", "react"]}
        PortfolioImg={portfolio}
        direction={true}
        live={""}
        github={
          "https://github.com/saurabhsinghmehta/saurabhsinghmehta.github.io"
        }
      />
      <About />
      <Contact />
    </div>
  );
}

export default App;
