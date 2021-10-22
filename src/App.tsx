import "@fontsource/quicksand";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import CBHeader from "./components/CBHeader/CBHeader";
import CBAboutSection from "./components/sections/CBAboutSection/CBAboutSection";
import CBContactSection from "./components/sections/CBContactSection/CBContactSection";
import CBHomeSection from "./components/sections/CBHomeSection/CBHomeSection";
import CBProjectsSection from "./components/sections/CBProjectsSection/CBProjectsSection";
import theme from "./theme/theme";

const App = (): JSX.Element => {
  const isPageScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window,
  });

  return (
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
        <CBHeader isPageScrolled={isPageScrolled} />
        <CBHomeSection />
        <CBAboutSection />
        <CBProjectsSection />
        <CBContactSection />
      </Container>
    </ThemeProvider>
  );
};

export default App;
