import { CssBaseline } from "@mui/material";
import React from "react";
import CBHeader from "./CBHeader/CBHeader";

const App = (): JSX.Element => (
  <>
    <CssBaseline />
    <CBHeader testColor="yellow" />
  </>
);

export default App;
