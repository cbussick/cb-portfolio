import { Link, Typography } from "@mui/material";
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
      <motion.div {...getDefaultAnimation()}>
        <Typography
          variant="h1"
          sx={{ textAlign: "center" }}
          component={motion.div}
          {...getDefaultAnimation()}
        >
          👋
          <br />
          <CBTextGradient variant="h1">Reach out</CBTextGradient> to me!
        </Typography>
        <Typography component={motion.div} {...getDefaultAnimation()}>
          You can contact me at:
          <address>
            <Link href={`mailto:${eMail}`}>{eMail}</Link>
          </address>
        </Typography>
      </motion.div>
    </CBSectionContainer>
  );
}

export default CBContactSection;
