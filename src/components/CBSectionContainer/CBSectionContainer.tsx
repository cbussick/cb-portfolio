import { Container, Stack } from "@mui/material";
import { getHeaderLinkForSection } from "../CBHeader/headerLinkData";
import { CBSectionContainerProps } from "./CBSectionContainerInterfaces";
import { useCBSectionContainerStyles } from "./CBSectionContainerStyles";

function CBSectionContainer(props: CBSectionContainerProps): JSX.Element {
  const sectionId = getHeaderLinkForSection(props.section)?.id;
  const styles = useCBSectionContainerStyles(props);

  return (
    <Container sx={styles.outerContainer} maxWidth={false}>
      <Container
        maxWidth="xl"
        sx={styles.innerContainer}
        // `|| undefined` is necessary to not pass the sectionId prop to the DOM element
        // when the returned `sectionId` is an empty string ("")
        id={sectionId || undefined}
      >
        <Stack spacing={{ xs: 5, md: 10 }}>{props.children}</Stack>
      </Container>
    </Container>
  );
}

export default CBSectionContainer;
