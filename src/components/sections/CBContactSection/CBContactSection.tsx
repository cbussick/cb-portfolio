import { Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { cbContactInformation } from "../../../data/cbContactInformation";
import { getDefaultAnimation } from "../../../helpers/getDefaultAnimation";
import { Section } from "../../../interfaces/Section";
import CBSectionContainer from "../../CBSectionContainer/CBSectionContainer";
import CBTextGradient from "../../CBTextGradient/CBTextGradient";

function CBContactSection(): JSX.Element {
  const { eMail } = cbContactInformation;

  return (
    <CBSectionContainer section={Section.Contact}>
      <Typography
        variant="h1"
        sx={{ textAlign: "center" }}
        component={motion.div}
        {...getDefaultAnimation(0)}
      >
        <CBTextGradient variant="h1">Reach out</CBTextGradient> to me!
      </Typography>
      <Stack spacing={6} alignItems="center">
        <Typography component={motion.div} {...getDefaultAnimation(0.3)}>
          If you have any questions or want to talk about something, just send
          me a message :)
          <br />
        </Typography>
        <Typography component={motion.div} {...getDefaultAnimation(0.6)}>
          You can contact me at:
          <address>
            <Link href={`mailto:${eMail}`}>{eMail}</Link>
          </address>
        </Typography>
      </Stack>
    </CBSectionContainer>
  );
}

export default CBContactSection;
