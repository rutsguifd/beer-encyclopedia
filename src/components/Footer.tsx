import { Box } from "@mui/material";
import { H4Typography } from "./UI/Typography/H4Typography";

const Footer = () => {
  return (
    <Box
      position="static"
      p={2}
      maxWidth="100%"
      minHeight="20vh"
      sx={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
      }}
    >
      <H4Typography>"simply a footer. no useful info"</H4Typography>
    </Box>
  );
};

export default Footer;
