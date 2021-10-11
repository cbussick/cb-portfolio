import { Typography } from "@material-ui/core";
import React from "react";
import { ___componentName___Props } from "./___componentName___Interfaces";
import { use___componentName___Styles } from "./___componentName___Styles";
import { use___componentName___ViewModel } from "./___componentName___ViewModel";

const ___Component_Name___ = (props: ___componentName___Props): JSX.Element => {
  const viewModel = use___componentName___ViewModel(props);
  const classes = use___componentName___Styles();

  return (
    <Typography variant="h1" className={classes.wrapper}>
      ___componentName___
    </Typography>
  );
};

export default ___Component_Name___;
