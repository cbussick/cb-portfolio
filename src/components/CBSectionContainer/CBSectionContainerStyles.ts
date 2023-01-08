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
      paddingTop: { xs: theme.spacing(18), md: theme.spacing(30) },
      paddingBottom: theme.spacing(14),
    }),
  });
