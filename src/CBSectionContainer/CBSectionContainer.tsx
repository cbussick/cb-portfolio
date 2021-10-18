import React from "react";
import { CBSectionContainerProps } from "./CBSectionContainerInterfaces";
import { StyledRoot } from "./CBSectionContainerStyles";

const CBSectionContainer = (props: CBSectionContainerProps): JSX.Element => (
  <StyledRoot
    {...props}
    maxWidth={false}
    backgroundColor={props.backgroundColor}
  >
    {props.children}
  </StyledRoot>
);

export default CBSectionContainer;
