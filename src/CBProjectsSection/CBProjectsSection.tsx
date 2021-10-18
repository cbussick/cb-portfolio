import { Typography } from "@mui/material";
import React from "react";
import CBSectionContainer from "../CBSectionContainer/CBSectionContainer";

const CBProjectsSection = (): JSX.Element => (
  <CBSectionContainer>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      💡👷
      <br />
      Projects I&apos;ve worked on
    </Typography>
  </CBSectionContainer>
);

export default CBProjectsSection;
