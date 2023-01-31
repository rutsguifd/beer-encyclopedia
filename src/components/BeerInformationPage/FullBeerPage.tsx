import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SearchError from "../SearchError";
import { FullWidthBox } from "../UI/Box/FullWidthBox";
import AdditionalInfo from "./AdditionalInfo";
import BrewingProcess from "./BrewingProcess";
import BrewingTips from "./BrewingTips";
import Description from "./Description";
import MainInfo from "./MainInfo";
import PairingFood from "./PairingFood";

const FullBeerPage = () => {
  const { beer, loading, error } = useTypedSelector((state) => state.beerById);
  const { fetchBeerById } = useActions();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "random";
  useEffect(() => {
    fetchBeerById(id);
  }, [id]);

  if (error) return <SearchError error={error} />;

  if (loading) return <CircularProgress />;

  return (
    <>
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

export default FullBeerPage;
