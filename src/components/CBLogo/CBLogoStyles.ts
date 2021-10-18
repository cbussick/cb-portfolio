import { Link, styled } from "@mui/material";

export const StyledLink = styled(Link)(({ theme }) => ({
  flexGrow: 1,
  textDecoration: "none",
  color: theme.palette.primary.main,
}));
