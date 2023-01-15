import { CSSProperties } from "@mui/material/styles/createTypography";

export enum BorderSide {
  Top = "top",
  Right = "right",
  Bottom = "bottom",
  Left = "left",
}

/**
 * Allows using a gradient inside a border, even if the object has a `border-radius`.
 *
 * @param objectBackgroundColor of the object which should have the border.
 * @param gradient to apply to the border.
 * @param borderWidth of the border.
 * @param side to apply the border to. Can be one or multiple.
 * @returns the CSS properties necessary for having a gradient inside a border.
 */
export const getBorderGradient = (
  objectBackgroundColor: string,
  gradient: string,
  borderWidth: number,
  side?: BorderSide | BorderSide[]
): CSSProperties => {
  const border = `${borderWidth}px solid transparent`;

  return {
    background: `linear-gradient(${objectBackgroundColor}, ${objectBackgroundColor}) padding-box, ${gradient} border-box`,
    border: side ? undefined : border,
    borderTop: side?.includes(BorderSide.Top) ? border : undefined,
    borderRight: side?.includes(BorderSide.Right) ? border : undefined,
    borderBottom: side?.includes(BorderSide.Bottom) ? border : undefined,
    borderLeft: side?.includes(BorderSide.Left) ? border : undefined,
  };
};
