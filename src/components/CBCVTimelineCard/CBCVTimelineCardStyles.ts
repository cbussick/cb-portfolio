import { makeSx } from "../../helpers/makeSx";

export const useCBCVTimelineCardStyles = () =>
  makeSx({
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
