import {
  Box,
  color,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import { Fade } from "react-reveal";
import { Button } from "react-scroll";
import TypewriterComponent from "typewriter-effect";
// import "./res/Preeti_Bildani_Resume.pdf"
function Home() {
  const bg = useColorModeValue("black");
  const color = useColorModeValue("#f1da4f");

  // const handleResume = () => {
  //     return window.open('https://drive.google.com/file/d/1n_wtR7GrfwU5w1E3kijo2u4ZDTggBCJs/view?usp=share_link');
  // }
  return (
    <Box bg={bg} id={"Home"}>
      <Box width={"80%"} height={"100%"} margin="auto" paddingTop={"60px"}>
        <Text
          className="Profile_Name"
          paddingTop={"30px"}
          color={color}
          align="center"
          fontSize={{ sm: "20px", md: "30px", lg: "50px" }}
        >
          Hi, I am
          <Fade color={"white"} textAlign={"center"} top cascade>
            <span color={"white"} className="Profile_Name">
              {" "}
              Saurabh{" "}
            </span>
            <span color={"white"} className="Profile_Name">
              {" "}
              Singh{" "}
            </span>
          </Fade>
        </Text>
        <Text
          fontSize="30px"
          paddingBottom={"30px"}
          color={color}
          textAlign="center"
        >
          <TypewriterComponent
            options={{
              strings: ["A Full Stack Web Developer", "A Mern Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
        <div>
          <Box
            width={["100%", "80%", "60%"]}
            margin={"auto"}
            justifyContent={"flex"}
          >
            <Fade top cascade>
              <Text
                color={"#f5f5f5"}
                paddingY={"30px"}
                fontSize={"22px"}
                textAlign="center"
                wordBreak={"break-word"}
              >
                My current studies are in the MERN Full Stack Programme at Masai
                School, where I have learned that good apps lead to good
                business, and I enjoy building websites using different
                technology stacks in a problem-solving approach.
              </Text>
            </Fade>
            {/* <Fade left cascade>
                            <Img margin={"auto"} objectFit={"croped"} width={"80%"} src={require('./res/Profile.jpg')} alt="profile" borderRadius={"20px"} />
                        </Fade> */}
          </Box>
        </div>
      </Box>

      <Box
        width={["80%", "50%"]}
        id="about"
        margin="auto"
        marginTop={"200px"}
        paddingY={"20px"}
      >
        <HStack gap={"20px"}>
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            padding={"20px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            {/* <Box width={"250px"} box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"> */}
            <Fade left cascade>
              <Img
                margin={"auto"}
                objectFit={"croped"}
                width={"80%"}
                src={require("./res/saurabh_singh.png")}
                alt="profile"
                borderRadius={"20px"}
              />
            </Fade>
            {/* </Box> */}
            <VStack width={"100%"}>
              <Fade right cascade>
                <HStack fontSize={"33px"}>
                  <Text className="hvr-underline-from-center" color={color}>
                    About Me
                  </Text>
                </HStack>
                <Text
                  style={{ color: "white" }}
                  textAlign={"center"}
                  paddingY={"10px"}
                  fontSize={"20px"}
                >
                  Hi Everyone, I am{" "}
                  <span style={{ color: "#f1da4f" }}>Saurabh Singh</span> from{" "}
                  <span style={{ color: "#f1da4f" }}>Khatima, Uttrakhand</span>.
                  Analytical and detail-oriented full-Stack Web Developer who is
                  proficient with the MERN stack and good at usercentric
                  solutions. Collaborative, team player, and proficient in
                  working with interdisciplinary teams and executing
                  goal-oriented projects. Intensely interested in obtaining a
                  Software Developer position to work on enhancing smooth
                  product working.
                </Text>
                <Box
                  className="btn-grad"
                  borderRadius={"5px"}
                  border={"1px solid"}
                  borderColor={color}
                >
                  <a
                    href="preeti.pdf"
                    target={"_blank"}
                    download="Saurabh_Singh_Resume.pdf"
                  >
                    Resume
                  </a>
                </Box>
              </Fade>
            </VStack>
          </SimpleGrid>
        </HStack>
      </Box>
    </Box>
  );
}

export default Home;
