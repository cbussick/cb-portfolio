import { Typography } from "@mui/material";
import React from "react";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";

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
