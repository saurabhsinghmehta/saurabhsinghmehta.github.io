import React from "react";
import "./App.css";
import { Header } from "./container";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioImg from "./assets/PortfolioImg.svg";
import wisemonki from "./assets/wisemonki.png";
import About from "./container/about/About";
import Contact from "./container/contact/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Portfolio
        projectName={"Facebook 360"}
        projectDiscription={
          "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR."
        }
        techStack={["html", "css", "javascript"]}
        PortfolioImg={PortfolioImg}
      />
      <Portfolio
        projectName={"Facebook 360"}
        projectDiscription={
          "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR."
        }
        techStack={["html", "css", "javascript"]}
        PortfolioImg={wisemonki}
      />
      <About />
      <Contact />
    </div>
  );
}

export default App;
