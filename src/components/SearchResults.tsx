import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CardList from "../components/CardList";
import { CircularProgress, Grid } from "@mui/material";
import NoResultPage from "../components/NoResultPage";
import SearchError from "./SearchError";

const SearchResults: FC = () => {
  const [searchParams] = useSearchParams();
  const beerName = searchParams.get("beer-name") || "beer";
  const currentPage = searchParams.get("page") || "1";

  const { beers, loading, error } = useTypedSelector((state) => state.beer);
  const { fetchBeer } = useActions();
  useEffect(() => {
    fetchBeer(beerName, currentPage);
  }, [beerName, currentPage]);

  if (error) return <SearchError error={error} />;

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : beers.length ? (
        <>
          <Grid
            container
            sx={{
              margin: "auto",
            }}
          >
            <CardList beers={beers} />
          </Grid>
        </>
      ) : (
        <NoResultPage beerName={beerName} />
      )}
    </>
  );
};

export default SearchResults;
