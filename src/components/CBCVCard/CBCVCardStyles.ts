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
    cardContent: {
      p: 0,
      [`&:last-child`]: {
        pb: 0,
      },
    },
  });
