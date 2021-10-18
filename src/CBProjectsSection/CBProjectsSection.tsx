import { Typography } from "@mui/material";
import React from "react";
import CBSectionContainer from "../CBSectionContainer/CBSectionContainer";
import { Section } from "../interfaces/Section";

const CBProjectsSection = (): JSX.Element => (
  <CBSectionContainer section={Section.Projects}>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      💡👷
      <br />
      Projects I&apos;ve worked on
    </Typography>
  </CBSectionContainer>
);

export default CBProjectsSection;
