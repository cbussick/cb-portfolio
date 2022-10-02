import { Box, Button } from "@mui/material";
import { cbContactInformation } from "../../data/cbContactInformation";
import { scrollToElement } from "../../helpers/scrollToElement";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { CBLogoProps } from "./CBLogoInterfaces";
import { useCBLogoStyles } from "./CBLogoStyles";

function CBLogo(props: CBLogoProps): JSX.Element {
  const styles = useCBLogoStyles(props);

  return (
    <Box sx={styles.wrapper}>
      <Button
        disableRipple
        onClick={(e) => scrollToElement(e, undefined)}
        sx={styles.button}
      >
        <CBTextGradient variant="h5">{`${cbContactInformation.firstName} ${cbContactInformation.lastName}`}</CBTextGradient>
      </Button>
    </Box>
  );
}

export default CBLogo;
