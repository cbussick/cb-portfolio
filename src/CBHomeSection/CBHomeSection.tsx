import { Typography } from "@mui/material";
import React from "react";
import CBSectionContainer from "../CBSectionContainer/CBSectionContainer";

const CBHomeSection = (): JSX.Element => (
  <CBSectionContainer>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      👷🚧
      <br />
      Work in progress! :)
    </Typography>
  </CBSectionContainer>
);

export default CBHomeSection;
