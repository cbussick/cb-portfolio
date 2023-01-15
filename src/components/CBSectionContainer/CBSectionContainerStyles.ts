import { Theme } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createTypography";
import { makeSx } from "../../helpers/makeSx";
import { Section } from "../../interfaces/Section";
import { CBSectionContainerProps } from "./CBSectionContainerInterfaces";

/**
 * A map containing CSS properties which should only be applied to a specific section.
 *
 * @returns a map of CSS properties specific for each section.
 */
const getSectionStylesMap = (theme: Theme): Record<Section, CSSProperties> => ({
  [Section.Home]: { pt: { xs: theme.spacing(14), md: theme.spacing(20) } },
  [Section.Projects]: {},
  [Section.CV]: {},
  [Section.Contact]: {},
});

export const useCBSectionContainerStyles = (props: CBSectionContainerProps) =>
  makeSx({
    outerContainer: {
      background: props.background,
    },
    innerContainer: (theme) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      pt: { xs: theme.spacing(18), md: theme.spacing(30) },
      pb: { xs: theme.spacing(7), md: theme.spacing(14) },
      ...getSectionStylesMap(theme)[props.section],
    }),
  });
