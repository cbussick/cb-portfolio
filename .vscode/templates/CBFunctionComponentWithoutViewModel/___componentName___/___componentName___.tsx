import { Typography } from "@material-ui/core";
import React from "react";
import { ___componentName___Props } from "./___componentName___Interfaces";
import { use___componentName___Styles } from "./___componentName___Styles";

const ___Component_Name___ = (props: ___componentName___Props): JSX.Element => {
  const classes = use___componentName___Styles();

  return (
    <Typography variant="h1" className={classes.wrapper}>
      ___componentName___
    </Typography>
  );
};

export default ___Component_Name___;
