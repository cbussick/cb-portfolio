import { Typography } from "@mui/material";
import React from "react";
import CBSectionContainer from "../CBSectionContainer/CBSectionContainer";

const CBAboutSection = (): JSX.Element => (
  <CBSectionContainer>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      ℹ️
      <br />
      Stuff about me
    </Typography>
  </CBSectionContainer>
);

export default CBAboutSection;
