import { Typography } from "@mui/material";
import React from "react";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

const CBAboutSection = (): JSX.Element => (
  <CBSectionContainer section={Section.About}>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      ℹ️
      <br />
      Stuff <CBTextGradient variant="h1">about</CBTextGradient> me
    </Typography>
  </CBSectionContainer>
);

export default CBAboutSection;
