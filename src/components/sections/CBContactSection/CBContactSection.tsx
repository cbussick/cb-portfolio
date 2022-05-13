import { Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { cbContactInformation } from "../../../data/cbContactInformation";
import { getDefaultAnimationWithDelay } from "../../../helpers/getDefaultAnimationWithDelay";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

function CBContactSection(): JSX.Element {
  const { eMail } = cbContactInformation;

  return (
    <CBSectionContainer section={Section.Contact}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center" }}
        component={motion.div}
        {...getDefaultAnimationWithDelay(0)}
      >
        👋
        <br />
        <CBTextGradient variant="h1">Reach out</CBTextGradient> to me!
      </Typography>
      <Typography component={motion.div} {...getDefaultAnimationWithDelay(0.5)}>
        You can contact me at:
        <address>
          <Link href={`mailto:${eMail}`}>{eMail}</Link>
        </address>
      </Typography>
    </CBSectionContainer>
  );
}

export default CBContactSection;
