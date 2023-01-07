import { makeSx } from "../../helpers/makeSx";
import { CBSectionContainerStylesProps } from "./CBSectionContainerInterfaces";

export const useCBSectionContainerStyles = (
  props: CBSectionContainerStylesProps
) =>
  makeSx({
    outerContainer: {
      background: props.background,
    },
    innerContainer: (theme) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      paddingTop: theme.spacing(24),
      paddingBottom: theme.spacing(14),
    }),
  });
