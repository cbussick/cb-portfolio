import { ContainerProps } from "@mui/material";
import { Section } from "../../interfaces/Section";

export interface CBSectionContainerProps extends ContainerProps {
  section: Section;
  background?: string;
}
