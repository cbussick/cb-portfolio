import { makeSx } from "../../helpers/makeSx";

export const useCBCVCardStyles = () =>
  makeSx({
    card: (theme) => ({
      p: { xs: theme.spacing(7, 3), md: theme.spacing(7, 6) },
    }),
  });
