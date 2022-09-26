import { Box, Button, Typography } from "@mui/material";
import { cbContactInformation } from "../../data/cbContactInformation";
import { scrollToElement } from "../../helpers/scrollToElement";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { CBLogoProps } from "./CBLogoInterfaces";
import { CBLogoStyles } from "./CBLogoStyles";

function CBLogo(props: CBLogoProps): JSX.Element {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: props.isMobileViewport ? "center" : undefined,
        position: props.isSmallViewport ? "absolute" : undefined,
        right: props.isSmallViewport ? 0 : undefined,
        left: props.isSmallViewport ? 0 : undefined,
        // Don't block the mobile menu icon when trying to tap on it
        zIndex: 0,
      }}
    >
      <Button
        disableRipple
        onClick={(e) => scrollToElement(e, undefined)}
        sx={CBLogoStyles()}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          👋{" "}
          <CBTextGradient variant="h5">{`${cbContactInformation.firstName} ${cbContactInformation.lastName}`}</CBTextGradient>
        </Typography>
      </Button>
    </Box>
  );
}

export default CBLogo;
