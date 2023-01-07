import theme from "../theme/theme";

export enum CBGradientDirection {
  TopToBottom = "top-to-bottom",
  LeftToRight = "left-to-right",
  BottomToTop = "bottom-to-top",
  RightToLeft = "right-to-left",
}

const gradientTypeMap: Record<CBGradientDirection, number> = {
  [CBGradientDirection.TopToBottom]: 180,
  [CBGradientDirection.LeftToRight]: 90,
  [CBGradientDirection.BottomToTop]: 0,
  [CBGradientDirection.RightToLeft]: 270,
};

export const getCBGradient = (direction?: CBGradientDirection) =>
  `linear-gradient(${
    direction
      ? gradientTypeMap[direction]
      : gradientTypeMap[CBGradientDirection.LeftToRight]
  }deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`;
