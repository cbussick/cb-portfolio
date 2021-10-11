import React from "react";
import { ___componentName___Props } from "./___componentName___Interfaces";
import { StyledRoot } from "./___componentName___Styles";
import { use___componentName___ViewModel } from "./___componentName___ViewModel";

const ___Component_Name___ = (props: ___componentName___Props): JSX.Element => {
  const viewModel = use___componentName___ViewModel(props);

  return <StyledRoot variant="h1">___componentName___</StyledRoot>;
};

export default ___Component_Name___;
