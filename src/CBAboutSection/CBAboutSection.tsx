import { Typography } from "@mui/material";
import React from "react";
import CBSectionContainer from "../CBSectionContainer/CBSectionContainer";
import { Section } from "../interfaces/Section";

const CBAboutSection = (): JSX.Element => (
  <CBSectionContainer section={Section.About}>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      ℹ️
      <br />
      Stuff about me
    </Typography>
  </CBSectionContainer>
);

export default CBAboutSection;
