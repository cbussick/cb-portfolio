import { makeSx } from "../../helpers/makeSx";

export const useCBCVCardStyles = () =>
  makeSx({
    card: (theme) => ({
      p: theme.spacing(7, 6),
    }),
    cardHeader: {
      p: 0,
    },
    cardContent: (theme) => ({
      p: theme.spacing(0, 5),
      [`&:last-child`]: {
        pb: theme.spacing(3),
      },
    }),
  });
