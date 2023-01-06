import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { getDefaultAnimationWithDelay } from "../../../helpers/getDefaultAnimationWithDelay";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";
import CBTimeline from "../../CBTimeline/CBTimeline";
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
          This is an overview of my education, work experience and skillset.
        </Typography>
        <motion.div
          style={{
            marginTop: theme.spacing(7),
          }}
          {...getDefaultAnimationWithDelay(1)}
        >
          <Typography variant="h2">Education</Typography>
          <CBTimeline bulletPoints={educationBulletPoints} />
        </motion.div>
        <motion.div
          style={{
            marginTop: theme.spacing(7),
          }}
          {...getDefaultAnimationWithDelay(1.5)}
        >
          <Typography variant="h2">Work experience</Typography>
          <CBTimeline bulletPoints={workExperienceBulletPoints} />
        </motion.div>
        <motion.div
          style={{
            marginTop: theme.spacing(7),
          }}
          {...getDefaultAnimationWithDelay(2)}
        >
          <Typography variant="h2">Skillset</Typography>
          Todo: Add fitting format for skillset
        </motion.div>
      </Box>
    </CBSectionContainer>
  );
}

export default CBCVSection;
