import React from "react";
import { getHeaderLinkForSection } from "../CBHeader/headerLinkData";
import { CBSectionContainerProps } from "./CBSectionContainerInterfaces";
import { StyledContainer } from "./CBSectionContainerStyles";

const CBSectionContainer = (props: CBSectionContainerProps): JSX.Element => (
  <StyledContainer
    {...props}
    maxWidth={false}
    backgroundColor={props.backgroundColor}
    id={getHeaderLinkForSection(props.section)?.id}
  >
    {props.children}
  </StyledContainer>
);

export default CBSectionContainer;
