import { AppBar, Link, styled } from "@mui/material";

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledHeaderLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[500],
  padding: theme.spacing(2),
  textDecoration: "none",
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));
