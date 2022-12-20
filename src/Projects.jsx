import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaLink } from "react-icons/fa";
import { Fade } from "react-reveal";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  const projectsArr = [
    {
      title: "BFC",
      banner: require("./res/other/bfc.png"),
      description:
        "This was our first React collaborative project, there were four members assigned for the project. I was the leader of this project, handled everything and managed developers, It took around 5 days to complete the task. In this project, my contribution was I had to build the Admin Panel page and also singin/signup with full functionality.",

      techBlue: [
        {
          image: require("./res/yellow/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/yellow/chakra-ui.png"),
          alt: "Chakra UI",
        },
        {
          image: require("./res/yellow/java-script.png"),
          alt: "Javascript",
        },
        {
          image: require("./res/yellow/redux.png"),
          alt: "redux",
        },
      ],
      github: "https://github.com/saurabhsinghmehta/flawless-trick-6809",
      live: "https://bfc-vivek-bhatt05.vercel.app/",
    },
    {
      title: "",
      banner: require("./res/other/lifestore.png"),
      description:
        "Lifestylestore.com is a e-commerce website where in you can buy any product which comes under your fasion and daily needs, In this repository I have cloned the website using the tech stacks which are as follows:- html,css,chakraUi,react etc..",

      techBlue: [
        {
          image: require("./res/yellow/java-script.png"),
          alt: "Javascript",
        },
        {
          image: require("./res/yellow/html.png"),
          alt: "HTML",
        },
        {
          image: require("./res/yellow/css-3.png"),
          alt: "CSS",
        },
      ],

      github:
        "https://github.com/saurabhsinghmehta/Lifestylestores.com-clone-website",
      live: "https://eloquent-cactus-9fedce.netlify.app/",
    },
  ];

  const bg = useColorModeValue("black");
  const color = useColorModeValue("white", "white");
  return (
    <Box
      paddingY={"30px"}
      paddingTop={"80px"}
      bg={bg}
      color={color}
      id="Projects"
    >
      <Text textAlign={"center"} fontSize="3xl" color={color}>
        Projects
      </Text>
      <VStack paddingY={"30px"} width={"70%"} margin={"auto"} gap={"50px"}>
        {projectsArr.map((elem) => {
          return (
            <HStack className="hvr-grow-shadow">
              <SimpleGrid
                columns={[1, 1, 1, 2]}
                padding={{ lg: "40px", sm: "2px" }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
                border={"3px solid"}
                borderColor={color}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                borderRadius={"15px"}
              >
                <Fade left cascade>
                  <Box
                    overflowY={"hidden"}
                    height={{ lg: "300px", md: "200px" }}
                  >
                    <Img
                      border="3px solid"
                      borderColor={color}
                      borderRadius={"10px"}
                      width={"2500px"}
                      src={elem.banner}
                      alt={elem.title}
                    />
                  </Box>
                </Fade>
                <VStack alignSelf={"flex-start"}>
                  <Fade right cascade>
                    <Text fontSize="2xl" color={"color"} textAlign={"center"}>
                      {elem.title}
                    </Text>
                  </Fade>
                  <Text color={"#e9a221"} fontSize={"18px"} align={"center"}>
                    {elem.description}
                  </Text>
                  <Flex
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                    gap={"10px"}
                    paddingY={"20px"}
                    alignSelf={"center"}
                  >
                    {(bg === "black" ? elem.techBlue : elem.techYellow).map(
                      (el) => (
                        <Img
                          className="hvr-pop"
                          alignSelf={"start"}
                          width={"30px"}
                          src={el.image}
                          alt={el.alt}
                        />
                      )
                    )}{" "}
                  </Flex>
                  <HStack align={"end"}>
                    <a href={elem.github} target={"_blank"}>
                      <Button
                        className="hvr-underline-from-center"
                        leftIcon={<FaLink />}
                      >
                        Github
                      </Button>
                    </a>
                    <a href={elem.live} target={"_blank"}>
                      <Button
                        className="hvr-underline-from-center"
                        leftIcon={<FaLink />}
                      >
                        Live
                      </Button>
                    </a>
                  </HStack>
                </VStack>
              </SimpleGrid>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Projects;
