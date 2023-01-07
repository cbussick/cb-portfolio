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
    h1: {
      marginBottom: 80,
    },
    body1: {
      fontSize: "2rem",
    },
    body2: {
      fontSize: "1.6rem",
    },
    caption: {
      fontSize: "1.2rem",
    },
    subtitle1: {
      fontSize: "1.3rem",
    },
  },
});

const themeWithOverrides: Theme = {
  ...theme,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "inherit",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "& address": {
            fontStyle: "normal",
          },
        },
      },
    },
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: theme.typography.body2.fontSize,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          padding: theme.spacing(7, 6),
          boxShadow: theme.shadows[10],
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
