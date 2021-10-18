import { AppBar, Link, styled } from "@mui/material";

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledHeaderLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(2),
  textDecoration: "none",
  transition: "0.2s",
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`,
  backgroundClip: "text",
  // This notation with alpha/opacity at the end is necessary to have a proper transition with a gradient on hover
  color: `${theme.palette.text.primary}FF`,
  "&:hover": {
    color: `${theme.palette.text.primary}00`,
    // Necessary here to override the theme link styling
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`,
    backgroundClip: "text",
  },
}));
