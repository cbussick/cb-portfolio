import { getBorderGradient } from "../../helpers/getBorderGradient";
import { getCBGradient } from "../../helpers/getCBGradient";
import { makeSx } from "../../helpers/makeSx";

const cardPadding = 4;

export const useCBProjectCardStyles = () =>
  makeSx({
    card: (theme) => ({
      py: theme.spacing(cardPadding),
      px: 0,
      display: "flex",
      flexDirection: "column",
    }),
    cardHeader: (theme) => ({
      pt: 0,
      px: theme.spacing(cardPadding),
      "& .MuiCardHeader-content": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    }),
    cardSubHeaderTypography: {
      pt: 0,
    },
    cardTitleTypography: {
      pt: 0,
    },
    divider: (theme) => ({
      mx: theme.spacing(cardPadding),
      ...getBorderGradient("white", getCBGradient(), 1),
    }),
    cardMedia: (theme) => ({
      width: "100%",
      maxHeight: 500,
      objectFit: "contain",
      my: theme.spacing(4),
      px: theme.spacing(cardPadding),
    }),
    cardContent: (theme) => ({
      pt: 0,
      px: theme.spacing(cardPadding),
    }),
    cardActions: (theme) => ({
      px: theme.spacing(cardPadding),
      flexGrow: 1,
      alignItems: "flex-end",
    }),
  });
