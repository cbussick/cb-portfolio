import { Typography } from "@mui/material";
import React from "react";
import CBSectionContainer from "../CBSectionContainer/CBSectionContainer";
import { Section } from "../interfaces/Section";

const CBContactSection = (): JSX.Element => (
  <CBSectionContainer section={Section.Contact}>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      👋
      <br />
      Reach out to me! :)
    </Typography>
  </CBSectionContainer>
);

export default CBContactSection;
