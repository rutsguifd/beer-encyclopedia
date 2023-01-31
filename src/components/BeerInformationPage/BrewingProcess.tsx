import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { FC } from "react";
import { BrewingProcessProps } from "../../types/BeerExportTypes";
import { Hops, Malt, MashTemp } from "../../types/modules/IBeer";
import { H4Typography } from "../UI/Typography/H4Typography";

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1),
}));

const BrewingProcess: FC<BrewingProcessProps> = ({ method, ingredients }) => {
  return (
    <Box>
      <H4Typography>Brewing Information</H4Typography>
      <Grid container spacing={2}>
        <Grid item md={6} width="100%">
          <Typography variant="h6" textAlign="center">
            <strong>Fermentation</strong>
          </Typography>
          <StyledPaper>
            <Typography variant="h6">
              Fermentation Temperature: {method?.fermentation.temp.value}{" "}
              {method?.fermentation.temp.unit}
            </Typography>
          </StyledPaper>
          <Typography variant="h6" textAlign="center">
            <strong>Mashing Temperature</strong>
          </Typography>
          {method?.mash_temp.map((item: MashTemp, i) => (
            <StyledPaper key={i}>
              <Typography variant="h6">
                Temperature: {item.temp.value} {item.temp.unit}
              </Typography>
              <Typography variant="h6">
                Duration: {item.duration} minutes
              </Typography>
            </StyledPaper>
          ))}
          <Typography variant="h6" textAlign="center">
            <strong>Hops</strong>
          </Typography>
          {ingredients?.hops.map((item: Hops, i) => (
            <StyledPaper key={i}>
              <Typography variant="h6">Name: {item.name}</Typography>
              <Typography variant="h6">
                Amount: {item.amount.value} {item.amount.unit}
              </Typography>
            </StyledPaper>
          ))}
        </Grid>
        <Grid item md={6} width="100%">
          <Typography variant="h6" textAlign="center">
            <strong>Yeast</strong>
          </Typography>
          <StyledPaper>
            <Typography variant="h6">{ingredients?.yeast}</Typography>
          </StyledPaper>
          <Typography variant="h6" textAlign="center">
            <strong>Malt</strong>
          </Typography>
          {ingredients?.malt.map((item: Malt, i) => (
            <StyledPaper key={i}>
              <Typography variant="h6">Name: {item.name}</Typography>
              <Typography variant="h6">
                Amount: {item.amount.value} {item.amount.unit}
              </Typography>
            </StyledPaper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrewingProcess;
