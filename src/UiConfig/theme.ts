export const theme = {
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          size: "large",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid",
          width: "100%",
          maxWidth: "100%",
          padding: "2%",
          margin: "2%",
        },
      },
    },
  },
};
