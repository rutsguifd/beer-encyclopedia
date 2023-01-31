import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { FC } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <Box minHeight="100vh">
      <Header />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "80vw",
          minHeight: "100vh",
          mt: "2vh",
          mb: "5vh",
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainContainer;
