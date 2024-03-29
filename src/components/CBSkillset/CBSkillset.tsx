import { Grid2Props, Link, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactComponent as IllustratorLogo } from "../../resources/illustrator-logo.svg";
import { ReactComponent as MetaQuestLogo } from "../../resources/meta-quest-logo.svg";
import { ReactComponent as PhotoshopLogo } from "../../resources/photoshop-logo.svg";
import { ReactComponent as ReactLogo } from "../../resources/react-logo.svg";
import { ReactComponent as TypeScriptLogo } from "../../resources/typescript-logo.svg";
import { ReactComponent as UELogo } from "../../resources/ue-logo.svg";
import CBCVCard from "../CBCard/CBCVCard";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { useCBSkillsetStyles } from "./CBSkillsetStyles";

const gridItemProps: Grid2Props = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 2,
  sx: { maxWidth: { xs: 300, sm: 1000 } },
};

function CBSkillset(): JSX.Element {
  const styles = useCBSkillsetStyles();

  return (
    <CBCVCard title={<CBTextGradient variant="h2">Skillset</CBTextGradient>}>
      <Typography sx={{ textAlign: "justify" }}>
        These are the technologies I am proficient with and which I{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Law_of_the_instrument"
          target="_blank"
        >
          usually
        </Link>{" "}
        rely on when building projects. I am always interested in learning new
        stuff 🚀
      </Typography>
      <Grid2 container spacing={12} sx={styles.grid}>
        <Grid2 {...gridItemProps}>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <ReactLogo />
          </a>
        </Grid2>
        <Grid2 {...gridItemProps}>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <TypeScriptLogo />
          </a>
        </Grid2>
        <Grid2 {...gridItemProps}>
          <a
            href="https://www.unrealengine.com/"
            target="_blank"
            rel="noreferrer"
          >
            <UELogo />
          </a>
        </Grid2>
        <Grid2 {...gridItemProps}>
          <a
            href="https://www.meta.com/quest/"
            target="_blank"
            rel="noreferrer"
          >
            <MetaQuestLogo />
          </a>
        </Grid2>
        <Grid2 {...gridItemProps}>
          <a
            href="https://www.adobe.com/products/photoshop.html"
            target="_blank"
            rel="noreferrer"
          >
            <PhotoshopLogo />
          </a>
        </Grid2>
        <Grid2 {...gridItemProps}>
          <a
            href="https://www.adobe.com/products/illustrator.html"
            target="_blank"
            rel="noreferrer"
          >
            <IllustratorLogo />
          </a>
        </Grid2>
      </Grid2>
    </CBCVCard>
  );
}

export default CBSkillset;
