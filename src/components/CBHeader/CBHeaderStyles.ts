import { AppBar, Button, styled } from "@mui/material";

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledHeaderLink = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  // This notation with alpha/opacity at the end is necessary to have a proper transition with a gradient on hover
  color: `${theme.palette.text.primary}FF`,
  ".link-icon": {
    transition: "0.2s",
  },
  ".link-label": {
    transition: "0.2s",
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`,
    backgroundClip: "text",
  },
  "&:hover": {
    // Necessary to disable the default hover `backgroundColor` of a button
    backgroundColor: "transparent",
    ".link-icon": {
      color: theme.palette.primary.main,
    },
    ".link-label": {
      color: `${theme.palette.text.primary}00`,
      // Necessary here to override the theme link styling
      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`,
      backgroundClip: "text",
    },
  },
}));
