import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { getDefaultAnimationWithDelay } from "../../../helpers/getDefaultAnimationWithDelay";
import { Section } from "../../../interfaces/Section";
import CBProjectCard from "../../CBProjectCard/CBProjectCard";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";
import { projects } from "./projectsData";

function CBProjectsSection(): JSX.Element {
  const projectCards = projects.map((project) => (
    <Grid
      item
      key={project.id}
      sx={{ display: "flex" }}
      component={motion.div}
      {...getDefaultAnimationWithDelay(0.5)}
    >
      <CBProjectCard project={project} />
    </Grid>
  ));

  return (
    <CBSectionContainer section={Section.Projects}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center" }}
        component={motion.div}
        {...getDefaultAnimationWithDelay(0)}
      >
        💡👷
        <br />
        Some <CBTextGradient variant="h1">Projects</CBTextGradient> I&apos;ve
        worked on
      </Typography>

      <Grid
        container
        spacing={9}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {projectCards}
      </Grid>
    </CBSectionContainer>
  );
}

export default CBProjectsSection;
