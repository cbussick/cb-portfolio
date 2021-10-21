import React from "react";
import { getHeaderLinkForSection } from "../CBHeader/headerLinkData";
import { CBSectionContainerProps } from "./CBSectionContainerInterfaces";
import { StyledContainer } from "./CBSectionContainerStyles";

const CBSectionContainer = (props: CBSectionContainerProps): JSX.Element => {
  const sectionId = getHeaderLinkForSection(props.section)?.id;
  return (
    <StyledContainer
      {...props}
      maxWidth="xl"
      backgroundColor={props.backgroundColor}
      // `|| undefined` is necessary to not pass the sectionId prop to the DOM element
      // when the returned `sectionId` is an empty string ("")
      id={sectionId || undefined}
    >
      {props.children}
    </StyledContainer>
  );
};

export default CBSectionContainer;
