import { CSSProperties } from "react";

/**
 * Allows using a gradient inside a border, even if the object has a `border-radius`.
 *
 * @param objectBackgroundColor of the object which should have the border.
 * @param gradient to apply to the border.
 * @param borderWidth of the border.
 * @returns the CSS properties necessary for having a gradient inside a border.
 */
export const getBorderGradient = (
  objectBackgroundColor: string,
  gradient: string,
  borderWidth: number
): CSSProperties => ({
  background: `linear-gradient(${objectBackgroundColor}, ${objectBackgroundColor}) padding-box, ${gradient} border-box`,
  border: `${borderWidth}px solid transparent`,
});
