import { Box, Card, Typography, useTheme } from "@mui/material";
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
          This is an overview of my work experience, education and skillset.
        </Typography>
        <Box sx={{ marginTop: theme.spacing(6) }}>
          {/* Todo: Put these cards into a reusable component */}
          <Card
            sx={{
              marginTop: theme.spacing(6),
              borderRadius: 8,
              padding: theme.spacing(7, 6),
              marginBottom: theme.spacing(8),
            }}
            component={motion.div}
            {...getDefaultAnimationWithDelay(1)}
          >
            <Typography variant="h2">Work experience</Typography>
            <CBTimeline bulletPoints={workExperienceBulletPoints} />
          </Card>
          <Card
            sx={{
              borderRadius: 8,
              padding: theme.spacing(7, 6),
              marginBottom: theme.spacing(8),
            }}
            component={motion.div}
            {...getDefaultAnimationWithDelay(1.5)}
          >
            <Typography variant="h2">Education</Typography>
            <CBTimeline bulletPoints={educationBulletPoints} />
          </Card>
          <motion.div
            style={{
              marginTop: theme.spacing(4),
            }}
            {...getDefaultAnimationWithDelay(2)}
          >
            <Typography variant="h2">Skillset</Typography>
            Todo: Add fitting format for skillset
          </motion.div>
        </Box>
      </Box>
    </CBSectionContainer>
  );
}

export default CBCVSection;
