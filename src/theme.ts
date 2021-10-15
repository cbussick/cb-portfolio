import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC107",
    },
    secondary: {
      main: "#03A9F4",
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

const themeWithResponsiveFontSizes = responsiveFontSizes(theme, {
  factor: 3,
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
});

export default themeWithResponsiveFontSizes;
