import { Typography } from "@mui/material";
import React from "react";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { StyledLogo } from "./CBLogoStyles";

const CBLogo = (): JSX.Element => (
  // Disabled, because `href="#"` seems like an alright href to me here,
  // which takes you up to the beginning of the page.
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <StyledLogo href="#">
    <Typography variant="h5" sx={{ fontWeight: 600 }}>
      👋 <CBTextGradient variant="h5">Christopher Bussick</CBTextGradient>
    </Typography>
  </StyledLogo>
);

export default CBLogo;
