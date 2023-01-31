import { Box } from "@mui/material";
import { FC } from "react";
import { BrewingTipsProps } from "../../types/BeerExportTypes";
import { H4Typography } from "../UI/Typography/H4Typography";
import { Paragraph } from "../UI/Typography/Paragraph";

const BrewingTips: FC<BrewingTipsProps> = ({ brewers_tips }) => {
  return (
    <Box>
      <H4Typography>Brewing Tips</H4Typography>
      <Paragraph>{brewers_tips}</Paragraph>
    </Box>
  );
};

export default BrewingTips;
