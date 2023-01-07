import { Typography } from "@mui/material";
import { cbGradient } from "../../helpers/cbGradient";
import { CBTextGradientProps } from "./CBTextGradientInterfaces";

function CBTextGradient(props: CBTextGradientProps): JSX.Element {
  return (
    <Typography
      {...props}
      component="em"
      sx={{
        background: cbGradient,
        backgroundClip: "text",
        color: "transparent",
        fontStyle: "normal",
        fontWeight: 600,
      }}
    />
  );
}

export default CBTextGradient;
