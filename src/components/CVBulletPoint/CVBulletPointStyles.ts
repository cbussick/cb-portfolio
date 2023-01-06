import { makeSx } from "../../helpers/makeSx";

export const useCVBulletPointStyles = () =>
  makeSx({
    wrapper: (theme) => ({
      backgroundColor: theme.palette.primary.main,
    }),
  });
