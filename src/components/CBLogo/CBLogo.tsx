import { Box, Typography } from "@mui/material";
import React from "react";
import { scrollToElement } from "../../helpers/scrollToElement";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { StyledLogo } from "./CBLogoStyles";

const CBLogo = (): JSX.Element => (
  <Box sx={{ flexGrow: 1, display: "flex" }}>
    <StyledLogo
      onClick={(e) => scrollToElement(e, undefined)}
      sx={{ cursor: "pointer" }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        👋 <CBTextGradient variant="h5">Christopher Bussick</CBTextGradient>
      </Typography>
    </StyledLogo>
  </Box>
);

export default CBLogo;
