import "@fontsource/quicksand";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import CBHeader from "./components/CBHeader/CBHeader";
import CBContactSection from "./components/sections/CBContactSection/CBContactSection";
import CBHomeSection from "./components/sections/CBHomeSection/CBHomeSection";
import CBProjectsSection from "./components/sections/CBProjectsSection/CBProjectsSection";
import theme from "./theme/theme";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <CBHeader />
        <Container maxWidth={false} component="main">
          <CBHomeSection />
          <CBProjectsSection />
          <CBContactSection />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
