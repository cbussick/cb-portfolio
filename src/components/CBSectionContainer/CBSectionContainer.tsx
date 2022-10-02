import { Container } from "@mui/material";
import { getHeaderLinkForSection } from "../CBHeader/headerLinkData";
import { CBSectionContainerProps } from "./CBSectionContainerInterfaces";
import { CBSectionContainerStyles } from "./CBSectionContainerStyles";

function CBSectionContainer(props: CBSectionContainerProps): JSX.Element {
  const sectionId = getHeaderLinkForSection(props.section)?.id;
  const styles = CBSectionContainerStyles(props);

  return (
    <Container
      {...props}
      maxWidth="xl"
      sx={styles.wrapper}
      // `|| undefined` is necessary to not pass the sectionId prop to the DOM element
      // when the returned `sectionId` is an empty string ("")
      id={sectionId || undefined}
    >
      {props.children}
    </Container>
  );
}

export default CBSectionContainer;
