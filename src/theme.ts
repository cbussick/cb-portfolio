import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC107",
    },
    secondary: {
      main: "#03A9F4",
    },
    grey: {
      "500": "#a4a4a4",
    },
    text: {
      primary: "#737373",
    },
  },
  typography: {
    fontFamily: ["quicksand", "sans-serif"].join(","),
    body1: {
      fontSize: "1.2rem",
    },
  },
});
