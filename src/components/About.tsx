import { Box, Link, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box sx={{ my: 6 }}>
        <Typography variant="h3">Website made by Kish Viktor</Typography>
        <Typography variant="h4">Using Punk API.</Typography>
      </Box>
      <Link color="inherit" typography="h5" href="https://github.com/rutsguifd">
        Here You Can Click To Visit My Github
      </Link>
      <Typography textAlign="center" variant="h4" sx={{ my: 10 }}>
        Actually I don't know what to add:/ Hope You liked it
      </Typography>
      <Typography textAlign="center" variant="h4" sx={{ my: 10 }}>
        Also There should have been page pagination but this api is kinda bad
      </Typography>
      <Link color="inherit" typography="h5" href="https://punkapi.com/">
        Here You can check it out
      </Link>
    </>
  );
};

export default About;
