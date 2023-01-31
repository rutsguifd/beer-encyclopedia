import { Grid } from "@mui/material";
import { FC } from "react";
import { CardItemBeer } from "../types/BeerExportTypes";
import CardItem from "./CardItem";

interface BeerListProps {
  beers: CardItemBeer[];
}

const CardList: FC<BeerListProps> = ({ beers }) => {
  return (
    <>
      {beers.map((beer) => (
        <Grid item xl={3} lg={4} sm={6} xs={12} display="flex" key={beer.id}>
          <CardItem beer={beer} key={beer.id} />
        </Grid>
      ))}
    </>
  );
};

export default CardList;
