import { Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { cbGradient } from "../../../helpers/cbGradient";
import { getDefaultAnimation } from "../../../helpers/getDefaultAnimation";
import { Section } from "../../../interfaces/Section";
import CBCVCard from "../../CBCVCard/CBCVCard";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBSkillset from "../../CBSkillset/CBSkillset";
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
    <CBSectionContainer section={Section.CV} background={cbGradient}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", color: theme.palette.common.white }}
        component={motion.div}
        {...getDefaultAnimation()}
      >
        CV
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{ textAlign: "justify", color: theme.palette.common.white }}
          component={motion.div}
          {...getDefaultAnimation()}
        >
          This is an overview of my work experience, education and skillset.
        </Typography>
        <Stack spacing={12} sx={{ marginTop: theme.spacing(10) }}>
          <motion.div {...getDefaultAnimation()}>
            <CBCVCard
              title="Work experience"
              bulletPoints={workExperienceBulletPoints}
            />
          </motion.div>
          <motion.div {...getDefaultAnimation()}>
            <CBCVCard title="Education" bulletPoints={educationBulletPoints} />
          </motion.div>
          <motion.div {...getDefaultAnimation()}>
            <CBSkillset />
          </motion.div>
        </Stack>
      </Box>
    </CBSectionContainer>
  );
}

export default CBCVSection;
