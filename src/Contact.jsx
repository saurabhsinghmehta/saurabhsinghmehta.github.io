import {
  Box,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";
import { ImHeart } from "react-icons/im";

const Contact = () => {
  const bg = useColorModeValue("black");
  const color = useColorModeValue("#5fc49a");

  const contactImagesYellow = [
    {
      image: require("./res/yellow/linkedin.png"),
      alt: "Linkedin",
      link: "https://www.linkedin.com/in/saurabh-singh-mehta/",
    },
    {
      image: require("./res/yellow/github.png"),
      alt: "Github",
      link: "https://github.com/saurabhsinghmehta",
    },
    {
      image: require("./res/yellow/email.png"),
      alt: "Email",
      link: "mailto:saurabhsingh.bba17@gmail.com",
    },
  ];
  const contactImagesBlue = [
    {
      image: require("./res/yellow/linkedin.png"),
      alt: "Linkedin",
      link: "https://www.linkedin.com/in/saurabh-singh-mehta/",
    },
    {
      image: require("./res/yellow/github.png"),
      alt: "Github",
      link: "https://github.com/saurabhsinghmehta",
    },
    {
      image: require("./res/yellow/email.png"),
      alt: "Email",
      link: "mailto:saurabhsingh.bba17@gmail.com",
    },
  ];
  return (
    <Box
      bg={bg}
      color={color}
      paddingY={"30px"}
      paddingTop={"80px"}
      id="Contact"
    >
      <Text paddingY={"30px"} fontSize="3xl" color={color} textAlign={"center"}>
        Get in Touch
      </Text>
      <Fade left cascade>
        <HStack
          align={"center"}
          width={["60%", "40%", "40%", "20%"]}
          margin={"auto"}
          gap={"10px"}
          justifyContent={"space-between"}
        >
          {(bg === "white" ? contactImagesBlue : contactImagesYellow).map(
            (el) => {
              return (
                <Link
                  width={"15%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  href={el.link}
                  target={"_blank"}
                >
                  <Img
                    width={"fit-content"}
                    margin={"auto"}
                    className="hvr-pop"
                    src={el.image}
                    alt={el.alt}
                  />{" "}
                </Link>
              );
            }
          )}
        </HStack>
      </Fade>
      <Text
        paddingTop={"30px"}
        fontSize="md"
        color={color}
        textAlign={"center"}
      >
        Email : saurabhsingh.bba17@gmail.com
      </Text>
      <Text
        paddingBottom={"30px"}
        fontSize="md"
        color={color}
        textAlign={"center"}
      >
        contact no. : +91 8191800380
      </Text>
      <Text
        marginLeft={"5px"}
        marginTop={"-10px"}
        marginRight={"10px"}
        paddingBottom={"30px"}
        fontSize="xl"
        color={color}
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
      >
        Made By Saurabh Singh
        <ImHeart color="red" />
      </Text>
    </Box>
  );
};

export default Contact;
