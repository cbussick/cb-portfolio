import theme from "../theme/theme";

export enum CBGradientDirection {
  BottomToTop = "bottom-to-top",
  LeftToRight = "left-to-right",
  TopToBottom = "top-to-bottom",
  RightToLeft = "right-to-left",
}

const gradientTypeMap: Record<CBGradientDirection, number> = {
  [CBGradientDirection.BottomToTop]: 0,
  [CBGradientDirection.LeftToRight]: 90,
  [CBGradientDirection.TopToBottom]: 180,
  [CBGradientDirection.RightToLeft]: 270,
};

export const getCBGradient = (direction?: CBGradientDirection | number) => {
  let degrees = gradientTypeMap[CBGradientDirection.LeftToRight];
  if (direction) {
    if (typeof direction === "number") {
      degrees = direction;
    } else {
      degrees = gradientTypeMap[direction];
    }
  }
  return `linear-gradient(${degrees}deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`;
};
