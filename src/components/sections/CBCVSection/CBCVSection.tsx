import { Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { getDefaultAnimationWithDelay } from "../../../helpers/getDefaultAnimationWithDelay";
import { Section } from "../../../interfaces/Section";
import CBCVCard from "../../CBCVCard/CBCVCard";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";
import CVBulletPoint from "../../CVBulletPoint/CVBulletPoint";
import { educationData, workExperienceData } from "./cvData";

function CBCVSection(): JSX.Element {
  const theme = useTheme();

  const educationBulletPoints: JSX.Element[] = educationData.map((entry) => (
    <CVBulletPoint key={entry.title} {...entry} />
  ));

  const workExperienceBulletPoints: JSX.Element[] = workExperienceData.map(
    (entry) => <CVBulletPoint key={entry.title} {...entry} />
  );

  return (
    <CBSectionContainer section={Section.CV}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center" }}
        component={motion.div}
        {...getDefaultAnimationWithDelay(0)}
      >
        <CBTextGradient variant="h1">CV</CBTextGradient>
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ textAlign: "justify" }}
          component={motion.div}
          {...getDefaultAnimationWithDelay(0.5)}
        >
          This is an overview of my work experience, education and skillset.
        </Typography>
        <Stack spacing={8} sx={{ marginTop: theme.spacing(7) }}>
          <motion.div {...getDefaultAnimationWithDelay(1)}>
            <CBCVCard
              title="Work experience"
              bulletPoints={workExperienceBulletPoints}
            />
          </motion.div>
          <motion.div {...getDefaultAnimationWithDelay(1.5)}>
            <CBCVCard title="Education" bulletPoints={educationBulletPoints} />
          </motion.div>
          <motion.div {...getDefaultAnimationWithDelay(2)}>
            <Typography variant="h2">Skillset</Typography>
            Todo: Add fitting format for skillset
          </motion.div>
        </Stack>
      </Box>
    </CBSectionContainer>
  );
}

export default CBCVSection;
