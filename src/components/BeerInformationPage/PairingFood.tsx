import { Box } from "@mui/material";
import { FC } from "react";
import { PairingFoodProps } from "../../types/BeerExportTypes";
import { H4Typography } from "../UI/Typography/H4Typography";
import { Paragraph } from "../UI/Typography/Paragraph";

const PairingFood: FC<PairingFoodProps> = ({ food_pairing }) => {
  return (
    <Box>
      <H4Typography>Pairing Food</H4Typography>
      <Paragraph>{food_pairing}</Paragraph>
    </Box>
  );
};

export default PairingFood;
