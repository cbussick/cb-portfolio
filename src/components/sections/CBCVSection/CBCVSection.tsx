import { Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { getDefaultAnimationWithDelay } from "../../../helpers/getDefaultAnimationWithDelay";
import { Section } from "../../../interfaces/Section";
import { ReactComponent as IllustratorLogo } from "../../../resources/illustrator-logo.svg";
import { ReactComponent as MetaQuestLogo } from "../../../resources/meta-quest-logo.svg";
import { ReactComponent as PhotoshopLogo } from "../../../resources/photoshop-logo.svg";
import { ReactComponent as ReactLogo } from "../../../resources/react-logo.svg";
import { ReactComponent as TypeScriptLogo } from "../../../resources/typescript-logo.svg";
import { ReactComponent as UELogo } from "../../../resources/ue-logo.svg";
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
            <Stack spacing={6}>
              <Typography variant="h2">Skillset</Typography>
              <Typography>
                These are the technologies I am proficient with and which I
                usually rely on when building projects.
              </Typography>
              <Stack direction="row" spacing={8} sx={{ maxHeight: 200 }}>
                <ReactLogo />
                <TypeScriptLogo />
                <UELogo />
                <MetaQuestLogo />
                <PhotoshopLogo />
                <IllustratorLogo />
              </Stack>
            </Stack>
          </motion.div>
        </Stack>
      </Box>
    </CBSectionContainer>
  );
}

export default CBCVSection;
