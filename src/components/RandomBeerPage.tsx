import { CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RANDOM } from "../utils/consts";
import AdditionalInfo from "./BeerInformationPage/AdditionalInfo";
import BrewingProcess from "./BeerInformationPage/BrewingProcess";
import BrewingTips from "./BeerInformationPage/BrewingTips";
import Description from "./BeerInformationPage/Description";
import MainInfo from "./BeerInformationPage/MainInfo";
import PairingFood from "./BeerInformationPage/PairingFood";
import SearchError from "./SearchError";
import { FullWidthBox } from "./UI/Box/FullWidthBox";

const RandomBeer = () => {
  const { beer, loading, error } = useTypedSelector((state) => state.beerById);
  const { fetchBeerById } = useActions();

  useEffect(() => {
    fetchBeerById(RANDOM);
  }, []);

  if (error) return <SearchError error={error} />;

  if (loading) return <CircularProgress />;

  return (
    <>
      <Typography
        variant="h5"
        sx={{ textDecoration: "underline" }}
        onClick={() => fetchBeerById(RANDOM)}
      >
        generate another beer
      </Typography>
      <FullWidthBox>
        <MainInfo {...beer} />
        <Description {...beer} />
        <AdditionalInfo {...beer} />
        <BrewingProcess {...beer} />
        <BrewingTips {...beer} />
        <PairingFood {...beer} />
      </FullWidthBox>
    </>
  );
};

export default RandomBeer;
