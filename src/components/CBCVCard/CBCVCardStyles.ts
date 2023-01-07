import { makeSx } from "../../helpers/makeSx";

export const useCBCVCardStyles = () =>
  makeSx({
    card: (theme) => ({
      borderRadius: 8,
      padding: theme.spacing(7, 6),
    }),
    cardHeader: {
      p: 0,
    },
    cardContent: (theme) => ({
      p: 0,
      [`&:last-child`]: {
        pb: theme.spacing(3),
      },
    }),
  });
