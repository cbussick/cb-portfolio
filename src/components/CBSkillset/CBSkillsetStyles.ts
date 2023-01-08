import { makeSx } from "../../helpers/makeSx";

export const useCBSkillsetStyles = () =>
  makeSx({
    card: (theme) => ({
      borderRadius: 8,
      p: { xs: theme.spacing(7, 3), md: theme.spacing(7, 6) },
    }),
    grid: { alignItems: "center", justifyContent: "center" },
  });
