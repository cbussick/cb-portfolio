import React from "react";
import { CBHeaderProps } from "./CBHeaderInterfaces";
import { StyledHeader } from "./CBHeaderStyles";

const CBHeader = (props: CBHeaderProps): JSX.Element => (
  <StyledHeader testColor={props.testColor} variant="h1">
    CBHeader
  </StyledHeader>
);

export default CBHeader;
