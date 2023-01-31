import { Box, Typography } from "@mui/material";
import { FC } from "react";
import HomePageWelcome from "../components/HomePageWelcome";
import RandomBeer from "../components/RandomBeerPage";
import MainContainer from "../layouts/MainContainerLayout";

const HomePage: FC = () => {
  return (
    <MainContainer>
      <Box width="100%">
        <HomePageWelcome />
      </Box>
      <Typography variant="h3" sx={{ mt: 6, mb: 6 }}>
        Beer Of The Loading
      </Typography>
      <RandomBeer />
    </MainContainer>
  );
};

export default HomePage;
