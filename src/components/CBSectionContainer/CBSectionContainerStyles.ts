import { makeSx } from "../../helpers/makeSx";
import theme from "../../theme/theme";
import { CBSectionContainerStylesProps } from "./CBSectionContainerInterfaces";

export const CBSectionContainerStyles = (
  props: CBSectionContainerStylesProps
) =>
  makeSx({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      paddingTop: theme.spacing(14),
      backgroundColor: props.backgroundColor,
    },
  });
