import { SvgIconComponent } from "@mui/icons-material";
import { Section } from "./Section";

export interface HeaderLink {
  id: string;
  label: string;
  section: Section;
  icon: SvgIconComponent;
}
