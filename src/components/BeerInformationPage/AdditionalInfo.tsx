import { Box, Grid, Paper, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { AdditionalInfoProps } from "../../types/BeerExportTypes";
import tooltips from "../../utils/tooltipTitles";
import { H4Typography } from "../UI/Typography/H4Typography";

const AdditionalInfo: FC<AdditionalInfoProps> = ({
  volume,
  abv,
  ebc,
  ibu,
  ph,
  srm,
  boil_volume,
}) => {
  return (
    <Box mt={5}>
      <H4Typography>Additional Info</H4Typography>
      <Grid container spacing={2}>
        <Grid item md={6} width="100%">
          <Tooltip placement="bottom" title={tooltips.boilVolume}>
            <Typography variant="h6">
              Volume: {volume?.value} {volume?.unit} ( {boil_volume?.value} )
            </Typography>
          </Tooltip>
          <Tooltip placement="bottom" title={tooltips.abv}>
            <Paper>
              <Typography variant="h6">alcohol by volume: {abv}</Typography>
            </Paper>
          </Tooltip>
          <Tooltip placement="bottom" title={tooltips.ibu}>
            <Typography variant="h6">Ibu: {ibu}</Typography>
          </Tooltip>
        </Grid>
        <Grid item md={6} width="100%">
          <Tooltip placement="bottom" title={tooltips.ebc}>
            <Paper>
              <Typography variant="h6">Ebc: {ebc}</Typography>
            </Paper>
          </Tooltip>
          <Tooltip placement="bottom" title={tooltips.ph}>
            <Typography variant="h6">Ph: {ph}</Typography>
          </Tooltip>
          <Tooltip placement="bottom" title={tooltips.srm}>
            <Paper>
              <Typography variant="h6">srm: {srm}</Typography>
            </Paper>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdditionalInfo;
