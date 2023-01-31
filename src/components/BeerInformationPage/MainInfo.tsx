import { Box, Grid, Paper, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { MainInfoProps } from "../../types/BeerExportTypes";
import tooltips from "../../utils/tooltipTitles";

const MainInfo: FC<MainInfoProps> = ({
  image_url,
  name,
  tagline,
  first_brewed,
  attenuation_level,
  target_og,
  target_fg,
}) => {
  return (
    <Box sx={{ mt: 6 }}>
      <Grid container spacing={2}>
        <Grid
          item
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
          width="100%"
        >
          <Paper
            component="img"
            src={image_url}
            alt={name}
            sx={{
              objectFit: "contain",
              width: "100%",
              maxHeight: "50vh",
              padding: 2,
            }}
          />
        </Grid>
        <Grid
          item
          md={8}
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="h4">
            <strong>{name}</strong>
          </Typography>
          <Typography variant="h6">{tagline}</Typography>
          <Typography variant="h6">Brewed: {first_brewed}</Typography>
          <Tooltip
            placement="bottom-start"
            title={tooltips.attenuationLevelTitle}
          >
            <Typography variant="h6">
              attenuation level: {attenuation_level}
            </Typography>
          </Tooltip>
          <Tooltip placement="bottom-start" title={tooltips.og}>
            <Typography variant="h6">original gravity: {target_og}</Typography>
          </Tooltip>
          <Tooltip placement="bottom-start" title={tooltips.fg}>
            <Typography variant="h6">final gravity: {target_fg}</Typography>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainInfo;
