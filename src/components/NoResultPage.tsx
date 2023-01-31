import { Typography } from "@mui/material";
import { FC } from "react";

interface beerNameProps {
  beerName: string;
}

const NoResultPage: FC<beerNameProps> = ({ beerName }) => {
  return (
    <Typography variant="h4" align="center">
      Sorry we couldn't find:
      <strong> {beerName}</strong>
    </Typography>
  );
};

export default NoResultPage;
