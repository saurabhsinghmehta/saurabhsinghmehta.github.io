import {
  Box,
  Button,
  IconButton,
  Img,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const navRef = useRef();
  const bg = useColorModeValue("#e9a221");
  const color = useColorModeValue("#e9a221", "white");
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(false);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    !show ? setShow(true) : setShow(false);
  };
  const handleResume = () => {
    return window.open("");
  };
  return (
    <Box
      bg={bg}
      color={"white"}
      position={"sticky"}
      top="0"
      zIndex="10"
      borderBottom={"1px solid"}
      borderBottomColor={"#5fc49a"}
    >
      {/* style={{ color: "#3379b5", fontSize: "18px", letterSpacing: "0.15em" }} */}
      <Box className="header-nav">
        <h4 className="Name">Saurabh Singh</h4>
        <nav ref={navRef} style={{ color: "black" }}>
          <Link activeClass="active" to="Home" spy={true} smooth={true}>
            <a className="hvr-underline-from-center" href="#">
              Home
            </a>
          </Link>
          <Link to="about" spy={true} smooth={true}>
            <a className="hvr-underline-from-center" href="#">
              About Me
            </a>
          </Link>
          <Link to="techStack" spy={true} smooth={true}>
            <a className="hvr-underline-from-center" href="#">
              Tech Stack
            </a>
          </Link>
          <Link to="Skills" spy={true} smooth={true}>
            <a className="hvr-underline-from-center" href="#">
              Skills
            </a>
          </Link>
          <Link to="Projects" spy={true} smooth={true}>
            <a className="hvr-underline-from-center" href="#">
              Project
            </a>
          </Link>
          <Link to="Contact" spy={true} smooth={true}>
            <a className="hvr-underline-from-center" href="#">
              Contact
            </a>
          </Link>

          <a
            href="#"
            target={"_blank"}
            download=".Saurabh_Singh_Resume.pdf"
            className="hvr-underline-from-center"
          >
            <Button color={"#e9a221"} bg={"#10264f"}>
              Resume
            </Button>
          </a>
        </nav>
        <button className="nav-btn nav-close-btn">
          {!show ? (
            <IconButton
              bg={color}
              onClick={showNavbar}
              icon={<FaBars />}
              colorScheme={color === "white" ? "#181830" : "white"}
            />
          ) : (
            <IconButton
              bg={color}
              onClick={showNavbar}
              colorScheme={color === "white" ? "#181830" : "white"}
              icon={<FaTimes />}
            />
          )}
        </button>
        {/* <Button className='nav-btn' onClick={showNavbar}> <FaBars /> </Button> */}
      </Box>
    </Box>
  );
};

export default Navbar;
