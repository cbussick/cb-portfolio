import { Link, Typography } from "@mui/material";
import React from "react";
import { cbContactInformation } from "../../../data/cbContactInformation";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

const CBContactSection = (): JSX.Element => {
  const { eMail } = cbContactInformation;

  return (
    <CBSectionContainer section={Section.Contact}>
      <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
        👋
        <br />
        <CBTextGradient variant="h1">Reach out</CBTextGradient> to me!
      </Typography>
      <Typography component="div">
        You can contact me at:
        <address>
          <Link href={`mailto:${eMail}`}>{eMail}</Link>
        </address>
      </Typography>
    </CBSectionContainer>
  );
};

export default CBContactSection;
