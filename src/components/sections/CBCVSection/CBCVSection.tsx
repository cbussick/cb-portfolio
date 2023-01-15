import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { getDefaultAnimation } from "../../../helpers/getDefaultAnimation";
import { Section } from "../../../interfaces/Section";
import CBCVTimelineCard from "../../CBCVTimelineCard/CBCVTimelineCard";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBSkillset from "../../CBSkillset/CBSkillset";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";
import CVBulletPoint from "../../CVBulletPoint/CVBulletPoint";
import { educationData, workExperienceData } from "./cvData";

function CBCVSection(): JSX.Element {
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
        {...getDefaultAnimation()}
      >
        <CBTextGradient variant="h1">CV</CBTextGradient>
      </Typography>
      <Typography
        sx={{
          textAlign: "justify",
        }}
        component={motion.div}
        {...getDefaultAnimation()}
      >
        This is an overview of my work experience, education and skillset.
      </Typography>
      <motion.div {...getDefaultAnimation()}>
        <CBCVTimelineCard
          title="Work experience"
          bulletPoints={workExperienceBulletPoints}
        />
      </motion.div>
      <motion.div {...getDefaultAnimation()}>
        <CBCVTimelineCard
          title="Education"
          bulletPoints={educationBulletPoints}
        />
      </motion.div>
      <motion.div {...getDefaultAnimation()}>
        <CBSkillset />
      </motion.div>
    </CBSectionContainer>
  );
}

export default CBCVSection;
