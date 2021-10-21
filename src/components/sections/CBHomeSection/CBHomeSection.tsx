import { Link, Typography, useTheme } from "@mui/material";
import React from "react";
import { Section } from "../../../interfaces/Section";
import meAndBruno from "../../../resources/me-and-bruno.jpg";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

const CBHomeSection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <CBSectionContainer section={Section.Home} sx={{ textAlign: "center" }}>
      <Typography
        variant="h1"
        component="div"
        sx={{
          marginBottom: theme.spacing(5),
        }}
      >
        👋
        <br />
        <CBTextGradient variant="h1">Welcome</CBTextGradient>
      </Typography>
      <Typography>
        I&apos;m Christopher! :)
        <br /> I work in software development for both the web and{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Virtual_reality"
          target="_blank"
        >
          VR
        </Link>{" "}
        and study{" "}
        <Link href="https://www.w-hs.de/medieninformatik-ge/" target="_blank">
          media informatics
        </Link>{" "}
        at the{" "}
        <Link href="https://www.w-hs.de/" target="_blank">
          WHS
        </Link>{" "}
        in Gelsenkirchen, Germany 🇩🇪. Apart from computer science stuff I also
        enjoy anime/manga, sports and music production. I currently live in
        Gladbeck.
      </Typography>
      <figure
        style={{
          padding: 0,
          margin: 0,
          marginTop: theme.spacing(7),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={meAndBruno}
          alt="It's me! :)"
          style={{
            width: 650,
            maxWidth: "100%",
            boxShadow: theme.shadows[10],
          }}
        />
        <figcaption style={{ textAlign: "start" }}>
          <Typography variant="caption">Me and Bruno :)</Typography>
        </figcaption>
      </figure>
    </CBSectionContainer>
  );
};

export default CBHomeSection;
