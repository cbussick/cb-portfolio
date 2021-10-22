import { SvgIconProps } from "@mui/material";
import { Section } from "./Section";

export interface HeaderLink {
  id: string;
  label: string;
  section: Section;
  icon: (props: SvgIconProps) => JSX.Element;
}
