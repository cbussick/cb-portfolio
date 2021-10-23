import { Construction, Contacts, Home } from "@mui/icons-material/";
import { HeaderLink } from "../../interfaces/HeaderLink";
import { Section } from "../../interfaces/Section";

export const headerLinks: HeaderLink[] = [
  { id: "", label: "Home", section: Section.Home, icon: Home },
  {
    id: "projects",
    label: "Projects",
    section: Section.Projects,
    icon: Construction,
  },
  {
    id: "contact-me",
    label: "Contact me",
    section: Section.Contact,
    icon: Contacts,
  },
];

export const getHeaderLinkForSection = (
  section: Section
): HeaderLink | undefined =>
  headerLinks.find((link) => link.section === section);
