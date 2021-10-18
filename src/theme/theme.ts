import { createTheme, responsiveFontSizes, Theme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC107",
      dark: "#ff7f07",
    },
    secondary: {
      main: "#03A9F4",
    },
    text: {
      primary: "#737373",
    },
  },
  typography: {
    fontFamily: ["quicksand", "sans-serif"].join(", "),
    body1: {
      fontSize: "1.2rem",
    },
  },
});

const themeWithOverrides: Theme = {
  ...theme,
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          textDecoration: "none",
          transition: "0.3s",
          background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, ${theme.palette.primary.light} 71%, ${theme.palette.primary.light} 94%, rgba(255,255,255,0) 100%)`,
          "&:hover": {
            color: theme.palette.primary.contrastText,
            background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${theme.palette.primary.light} 6%, ${theme.palette.primary.light} 94%, rgba(255,255,255,0) 100%)`,
          },
        },
      },
    },
  },
};

const themeWithResponsiveFontSizes = responsiveFontSizes(themeWithOverrides, {
  factor: 3,
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
});

export default themeWithResponsiveFontSizes;
