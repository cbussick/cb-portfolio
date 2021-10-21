import "@fontsource/quicksand";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import CBHeader from "./components/CBHeader/CBHeader";
import CBAboutSection from "./components/sections/CBAboutSection/CBAboutSection";
import CBContactSection from "./components/sections/CBContactSection/CBContactSection";
import CBHomeSection from "./components/sections/CBHomeSection/CBHomeSection";
import CBProjectsSection from "./components/sections/CBProjectsSection/CBProjectsSection";
import theme from "./theme/theme";

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container
      maxWidth={false}
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
    </Container>
  </ThemeProvider>
);

export default App;
