import { Typography } from "@mui/material";
import React from "react";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";

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
