import { CSSProperties } from "react";

export const getBorderGradient = (
  objectBackgroundColor: string,
  gradient: string,
  borderWidth: number
): CSSProperties => ({
  background: `linear-gradient(${objectBackgroundColor}, ${objectBackgroundColor}) padding-box, ${gradient} border-box`,
  border: `${borderWidth}px solid transparent`,
});
