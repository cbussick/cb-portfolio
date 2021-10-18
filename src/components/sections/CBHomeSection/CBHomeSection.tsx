import { Divider, Link, Typography } from "@mui/material";
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
      <Divider sx={{ marginTop: 5 }} />
      <br />
      <CBTextGradient variant="h1">Welcome</CBTextGradient> 👋
      <br />
      <Typography variant="h3">
        I&apos;m Christopher
        <br />I live in{" "}
        <Link href="https://en.wikipedia.org/wiki/Gladbeck" target="_blank">
          Gladbeck
        </Link>
        , Germany 🇩🇪.
      </Typography>
    </Typography>
  </CBSectionContainer>
);

export default CBHomeSection;
