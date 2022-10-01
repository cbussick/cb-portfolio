import { Box, Button } from "@mui/material";
import { cbContactInformation } from "../../data/cbContactInformation";
import { scrollToElement } from "../../helpers/scrollToElement";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { CBLogoProps } from "./CBLogoInterfaces";
import { CBLogoStyles } from "./CBLogoStyles";

function CBLogo(props: CBLogoProps): JSX.Element {
  return (
    <Box sx={CBLogoStyles(props).wrapper}>
      <Button
        disableRipple
        onClick={(e) => scrollToElement(e, undefined)}
        sx={CBLogoStyles().button}
      >
        <CBTextGradient variant="h5">{`${cbContactInformation.firstName} ${cbContactInformation.lastName}`}</CBTextGradient>
      </Button>
    </Box>
  );
}

export default CBLogo;
