import { getBorderGradient } from "../../helpers/getBorderGradient";
import { getCBGradient } from "../../helpers/getCBGradient";
import { makeSx } from "../../helpers/makeSx";

export const useCBProjectCardStyles = () =>
  makeSx({
    card: {
      display: "flex",
      flexDirection: "column",
    },
    cardHeader: {
      p: 0,
      "& .MuiCardHeader-content": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    cardSubHeaderTypography: {},
    cardTitleTypography: {},
    divider: {
      ...getBorderGradient("white", getCBGradient(), 1),
    },
    cardMedia: {
      p: 0,
      width: "100%",
      maxHeight: 500,
      objectFit: "contain",
    },
    cardContent: {
      p: 0,
    },
    cardActions: {
      p: 0,
      flexGrow: 1,
      alignItems: "flex-end",
    },
  });
