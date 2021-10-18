import "@fontsource/quicksand";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import CBAboutSection from "./CBAboutSection/CBAboutSection";
import CBContactSection from "./CBContactSection/CBContactSection";
import CBHeader from "./CBHeader/CBHeader";
import CBHomeSection from "./CBHomeSection/CBHomeSection";
import CBProjectsSection from "./CBProjectsSection/CBProjectsSection";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CBHomeSection />
        <CBAboutSection />
        <CBProjectsSection />
        <CBContactSection />
      </Box>
    </Box>
  </ThemeProvider>
);

export default App;
