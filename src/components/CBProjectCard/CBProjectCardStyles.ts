import { makeSx } from "../../helpers/makeSx";

const cardPadding = 4;

export const useCBProjectCardStyles = () =>
  makeSx({
    card: (theme) => ({
      maxWidth: 600,
      py: theme.spacing(cardPadding),
      px: theme.spacing(0),
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
    cardContent: (theme) => ({
      px: theme.spacing(cardPadding),
    }),
    cardActions: (theme) => ({
      px: theme.spacing(cardPadding),
      flexGrow: 1,
      alignItems: "flex-end",
    }),
  });
