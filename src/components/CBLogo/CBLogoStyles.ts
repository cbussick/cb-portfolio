import { makeSx } from "../../helpers/makeSx";
import { CBLogoProps } from "./CBLogoInterfaces";

export const useCBLogoStyles = (props: CBLogoProps) =>
  makeSx({
    wrapper: () => ({
      flexGrow: 1,
      display: "flex",
      justifyContent: props?.isMobileViewport ? "center" : undefined,
      position: props?.isSmallViewport ? "absolute" : undefined,
      right: props?.isSmallViewport ? 0 : undefined,
      left: props?.isSmallViewport ? 0 : undefined,
      // Don't block the mobile menu icon when trying to tap on it
      zIndex: 0,
    }),
    button: {
      "&:hover": {
        background: "transparent",
      },
    },
  });
