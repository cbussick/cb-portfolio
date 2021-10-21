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
      id={sectionId || undefined}
    >
      {props.children}
    </StyledContainer>
  );
};

export default CBSectionContainer;
