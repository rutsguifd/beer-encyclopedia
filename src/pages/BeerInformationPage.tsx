import { FC } from "react";
import FullBeerPage from "../components/BeerInformationPage/FullBeerPage";
import MainContainer from "../layouts/MainContainerLayout";

const BeerInformationPage: FC = () => {
  return (
    <MainContainer>
      <FullBeerPage />
    </MainContainer>
  );
};

export default BeerInformationPage;
