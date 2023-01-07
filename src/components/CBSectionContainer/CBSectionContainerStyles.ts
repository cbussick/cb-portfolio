import { makeSx } from "../../helpers/makeSx";
import { CBSectionContainerStylesProps } from "./CBSectionContainerInterfaces";

export const useCBSectionContainerStyles = (
  props: CBSectionContainerStylesProps
) =>
  makeSx({
    wrapper: (theme) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(14),
      backgroundColor: props.backgroundColor,
    }),
  });
