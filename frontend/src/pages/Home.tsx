import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnimation";

const Home = () => {
  const theme = useTheme();
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 2,
        }}
      >
        <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <TypingAnim />
      </Box>
      <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img
            src="robott.png"
            alt="robot"
            style={{ width: "400px", margin: "auto" }}
          />
          <img
            src="robot.png"
            alt="openai"
            style={{ width: "400px", margin: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  )
      
  };
  
  export default Home;