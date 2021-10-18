import "@fontsource/quicksand";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import CBAboutSection from "./components/CBAboutSection/CBAboutSection";
import CBContactSection from "./components/CBContactSection/CBContactSection";
import CBHeader from "./components/CBHeader/CBHeader";
import CBHomeSection from "./components/CBHomeSection/CBHomeSection";
import CBProjectsSection from "./components/CBProjectsSection/CBProjectsSection";
import theme from "./theme/theme";

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CBHeader />
      <CBHomeSection />
      <CBAboutSection />
      <CBProjectsSection />
      <CBContactSection />
    </Box>
  </ThemeProvider>
);

export default App;
