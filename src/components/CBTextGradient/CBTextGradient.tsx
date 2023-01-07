import { Typography } from "@mui/material";
import { getCBGradient } from "../../helpers/getCBGradient";
import { CBTextGradientProps } from "./CBTextGradientInterfaces";

function CBTextGradient(props: CBTextGradientProps): JSX.Element {
  return (
    <Typography
      {...props}
      component="em"
      sx={{
        background: getCBGradient(),
        backgroundClip: "text",
        color: "transparent",
        fontStyle: "normal",
        fontWeight: 600,
      }}
    />
  );
}

export default CBTextGradient;
