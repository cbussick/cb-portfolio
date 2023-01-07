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
    cardHeader: { pt: 0, px: 0 },
    cardSubHeaderTypography: (theme) => ({
      pt: 0,
      px: theme.spacing(cardPadding),
    }),
    cardTitleTypography: (theme) => ({
      pt: 0,
      px: theme.spacing(cardPadding),
    }),
    cardContent: (theme) => ({
      px: theme.spacing(cardPadding),
    }),
    cardActions: (theme) => ({
      px: theme.spacing(cardPadding),
      flexGrow: 1,
      alignItems: "flex-end",
    }),
  });
