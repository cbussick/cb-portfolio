import { Box, useTheme } from "@mui/material";
import React from "react";
import { ___Component_Name___Props } from "./___componentName___Interfaces";
import { ___Component_Name___Styles } from "./___componentName___Styles";

function ___Component_Name___(props: ___Component_Name___Props): JSX.Element {
  const theme = useTheme();

  return (
    <Box sx={___Component_Name___Styles(theme)}>
      Hey ___Component_Name___ 🚀
    </Box>
  );
}

export default ___Component_Name___;
