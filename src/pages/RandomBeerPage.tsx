import Typography from "@mui/material/Typography";
import RandomBeer from "../components/RandomBeerPage";
import MainContainer from "../layouts/MainContainerLayout";

const RandomBeerPage = () => {
  return (
    <MainContainer>
      <Typography variant="h3" sx={{ mt: 6, mb: 6 }}>
        Random Generated Beer
      </Typography>
      <RandomBeer />
    </MainContainer>
  );
};

export default RandomBeerPage;
