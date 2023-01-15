import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { getDefaultAnimation } from "../../../helpers/getDefaultAnimation";
import { Section } from "../../../interfaces/Section";
import CBProjectCard from "../../CBProjectCard/CBProjectCard";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";
import { projects } from "./projectsData";

function CBProjectsSection(): JSX.Element {
  const projectCards = projects.map((project) => (
    <Box key={project.id} component={motion.div} {...getDefaultAnimation()}>
      <CBProjectCard project={project} />
    </Box>
  ));

  return (
    <CBSectionContainer section={Section.Projects}>
      <Stack spacing={10}>
        <Typography
          variant="h1"
          sx={{ textAlign: "center" }}
          component={motion.div}
          {...getDefaultAnimation()}
        >
          Some <CBTextGradient variant="h1">Projects</CBTextGradient> I&apos;ve
          Worked on
        </Typography>

        <Stack spacing={9}>{projectCards}</Stack>
      </Stack>
    </CBSectionContainer>
  );
}

export default CBProjectsSection;
