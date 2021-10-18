import { Typography } from "@mui/material";
import React from "react";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

const CBProjectsSection = (): JSX.Element => (
  <CBSectionContainer section={Section.Projects}>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      💡👷
      <br />
      Some <CBTextGradient variant="h1">Projects</CBTextGradient> I&apos;ve
      worked on
    </Typography>
  </CBSectionContainer>
);

export default CBProjectsSection;
