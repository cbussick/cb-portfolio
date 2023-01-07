import { makeSx } from "../../helpers/makeSx";

export const useCBSkillsetStyles = () =>
  makeSx({
    card: (theme) => ({
      borderRadius: 8,
      padding: theme.spacing(7, 6),
    }),
    grid: { alignItems: "center", justifyContent: "center" },
  });
