import { HeaderLink } from "../interfaces/HeaderLink";
import { Section } from "../interfaces/Section";

export const headerLinks: HeaderLink[] = [
  { id: "", label: "Home", section: Section.Home },
  { id: "about", label: "About", section: Section.About },
  { id: "projects", label: "Projects", section: Section.Projects },
  { id: "contact-me", label: "Contact me", section: Section.Contact },
];

export const getHeaderLinkForSection = (
  section: Section
): HeaderLink | undefined =>
  headerLinks.find((link) => link.section === section);
