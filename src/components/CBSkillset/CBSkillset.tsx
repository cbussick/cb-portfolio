import { Grid2Props, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactComponent as IllustratorLogo } from "../../resources/illustrator-logo.svg";
import { ReactComponent as MetaQuestLogo } from "../../resources/meta-quest-logo.svg";
import { ReactComponent as PhotoshopLogo } from "../../resources/photoshop-logo.svg";
import { ReactComponent as ReactLogo } from "../../resources/react-logo.svg";
import { ReactComponent as TypeScriptLogo } from "../../resources/typescript-logo.svg";
import { ReactComponent as UELogo } from "../../resources/ue-logo.svg";
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
    <Stack spacing={6}>
      <Typography variant="h2">Skillset</Typography>
      <Typography>
        These are the technologies I am proficient with and which I usually rely
        on when building projects.
      </Typography>
      <Grid2 container spacing={12} sx={styles.grid}>
        <Grid2 {...gridItemProps}>
          <ReactLogo />
        </Grid2>
        <Grid2 {...gridItemProps}>
          <TypeScriptLogo />
        </Grid2>
        <Grid2 {...gridItemProps}>
          <UELogo />
        </Grid2>
        <Grid2 {...gridItemProps}>
          <MetaQuestLogo />
        </Grid2>
        <Grid2 {...gridItemProps}>
          <PhotoshopLogo />
        </Grid2>
        <Grid2 {...gridItemProps}>
          <IllustratorLogo />
        </Grid2>
      </Grid2>
    </Stack>
  );
}

export default CBSkillset;
