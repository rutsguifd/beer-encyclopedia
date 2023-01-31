import { Box } from "@mui/material";
import { FC } from "react";
import { DescriptionProps } from "../../types/BeerExportTypes";
import { H4Typography } from "../UI/Typography/H4Typography";
import { Paragraph } from "../UI/Typography/Paragraph";

const Description: FC<DescriptionProps> = ({ description }) => {
  return (
    <Box>
      <H4Typography>Description</H4Typography>
      <Paragraph>{description}</Paragraph>
    </Box>
  );
};

export default Description;
