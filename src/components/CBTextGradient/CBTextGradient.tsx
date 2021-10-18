import { Typography, useTheme } from "@mui/material";
import React from "react";
import { CBTextGradientProps } from "./CBTextGradientInterfaces";

const CBTextGradient = (props: CBTextGradientProps): JSX.Element => {
  const theme = useTheme();

  return (
    <Typography
      {...props}
      component="em"
      sx={{
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`,
        backgroundClip: "text",
        color: "transparent",
        fontStyle: "normal",
        fontWeight: 600,
      }}
    />
  );
};

export default CBTextGradient;
