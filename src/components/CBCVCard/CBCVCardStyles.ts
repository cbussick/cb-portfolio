import { makeSx } from "../../helpers/makeSx";

export const useCBCVCardStyles = () =>
  makeSx({
    card: (theme) => ({
      borderRadius: 8,
      padding: theme.spacing(7, 6),
    }),
  });
