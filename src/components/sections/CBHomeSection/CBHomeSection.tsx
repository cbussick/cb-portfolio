import { Typography } from "@mui/material";
import React from "react";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

const CBHomeSection = (): JSX.Element => (
  <CBSectionContainer section={Section.Home}>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      👷🚧
      <br />
      Work in <CBTextGradient variant="h1">progress</CBTextGradient>! :)
    </Typography>
  </CBSectionContainer>
);

export default CBHomeSection;
