import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles/createTheme";
import { CBSectionContainerStylesProps } from "./CBSectionContainerInterfaces";

export const CBSectionContainerStyles = (
  theme: Theme,
  props: CBSectionContainerStylesProps
): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  paddingTop: theme.spacing(14),
  backgroundColor: props.backgroundColor,
});
