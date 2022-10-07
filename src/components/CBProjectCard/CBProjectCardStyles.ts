import { makeSx } from "../../helpers/makeSx";

export const useCBProjectCardStyles = () =>
  makeSx({
    wrapper: (theme) => ({
      maxWidth: 600,
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    }),
  });
