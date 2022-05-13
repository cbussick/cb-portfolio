import { Link, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { cbContactInformation } from "../../../data/cbContactInformation";
import { getDefaultAnimationWithDelay } from "../../../helpers/getDefaultAnimationWithDelay";
import { Section } from "../../../interfaces/Section";
import meAndBruno from "../../../resources/me-and-bruno.jpg";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

function CBHomeSection(): JSX.Element {
  const theme = useTheme();

  const { firstName } = cbContactInformation;

  return (
    <CBSectionContainer section={Section.Home}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center" }}
        component={motion.div}
        {...getDefaultAnimationWithDelay(0)}
      >
        👋
        <br />
        <CBTextGradient variant="h1">Welcome</CBTextGradient>
      </Typography>
      <Typography
        sx={{ textAlign: "justify" }}
        component={motion.div}
        {...getDefaultAnimationWithDelay(0.5)}
      >
        I&apos;m {firstName}!
        <br />I do software de&shy;vel&shy;op&shy;ment for both the web and{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Virtual_reality"
          target="_blank"
        >
          VR
        </Link>{" "}
        and study{" "}
        <Link href="https://www.w-hs.de/medieninformatik-ge/" target="_blank">
          media in&shy;for&shy;ma&shy;tics
        </Link>{" "}
        at the{" "}
        <Link href="https://www.w-hs.de/" target="_blank">
          WH
        </Link>{" "}
        in Gel&shy;sen&shy;kir&shy;chen, Ger&shy;many 🇩🇪. Be&shy;sides all
        things related to com&shy;pu&shy;ter science I also enjoy sports, music
        pro&shy;duc&shy;tion, man&shy;ga and ani&shy;me.
      </Typography>
      <motion.figure
        style={{
          padding: 0,
          margin: 0,
          marginTop: theme.spacing(7),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        {...getDefaultAnimationWithDelay(1)}
      >
        <img
          src={meAndBruno}
          alt="Me and Bruno"
          style={{
            width: 650,
            maxWidth: "100%",
            boxShadow: theme.shadows[10],
          }}
        />
        <figcaption style={{ textAlign: "start" }}>
          <Typography variant="caption">Me and Bruno :)</Typography>
        </figcaption>
      </motion.figure>
    </CBSectionContainer>
  );
}

export default CBHomeSection;
