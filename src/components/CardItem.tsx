import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardItemBeer } from "../types/BeerExportTypes";
import { Zoom } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./styles/Header.module.css";

interface beerProps {
  beer: CardItemBeer;
}

const CardItem: FC<beerProps> = ({ beer }) => {
  return (
    <Zoom in>
      <Card sx={{ borderColor: "divider" }}>
        <CardMedia
          component="img"
          sx={{ objectFit: "contain", height: 240 }}
          image={beer.image_url}
          alt="beer"
        />
        <CardContent>
          <Link
            className={classes.link}
            to={{ pathname: "/beer", search: `id=${beer.id}` }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {beer.name}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {beer.tagline}
          </Typography>
        </CardContent>
      </Card>
    </Zoom>
  );
};

export default CardItem;
