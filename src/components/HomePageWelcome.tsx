import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomePageWelcome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h2" textAlign="justify">
          Welcome to Beer Encyclopedia
        </Typography>
        <Typography variant="h5">
          Here you can find information about some beer.
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Typography variant="h4" textAlign="justify">
          Welcome to Beer Encyclopedia
        </Typography>
        <Typography variant="h6">
          Here you can find information about some beer.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePageWelcome;
