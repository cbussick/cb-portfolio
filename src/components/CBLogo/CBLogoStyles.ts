import { Link, styled } from "@mui/material";

export const StyledLogo = styled(Link)(() => ({
  textDecoration: "none",
  background: "transparent",
  "&:hover": {
    background: "transparent",
  },
}));
