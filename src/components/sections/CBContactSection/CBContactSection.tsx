import { Link, Typography } from "@mui/material";
import React from "react";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

const eMail = "bussick.christopher@gmail.com";

const CBContactSection = (): JSX.Element => (
  <CBSectionContainer section={Section.Contact}>
    <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
      👋
      <br />
      <CBTextGradient variant="h1">Reach out</CBTextGradient> to me!
    </Typography>
    <address>
      EMail: <Link href={`mailto:${eMail}`}>{eMail}</Link>
    </address>
  </CBSectionContainer>
);

export default CBContactSection;
