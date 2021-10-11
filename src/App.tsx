import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import CBHeader from "./CBHeader/CBHeader";
import { theme } from "./theme";

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CBHeader testColor={theme.palette.primary.main} />
  </ThemeProvider>
);

export default App;
