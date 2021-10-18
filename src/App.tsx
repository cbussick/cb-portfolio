import "@fontsource/quicksand";
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import CBHeader from "./CBHeader/CBHeader";
import theme from "./theme/theme";

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CBHeader />
      <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
        👷🚧
        <br />
        Work in progress! :)
      </Typography>
    </Box>
  </ThemeProvider>
);

export default App;
