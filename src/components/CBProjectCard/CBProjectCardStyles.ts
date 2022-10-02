import { makeSx } from "../../helpers/makeSx";
import theme from "../../theme/theme";

export const CBProjectCardStyles = () =>
  makeSx({
    wrapper: {
      maxWidth: 600,
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    },
  });
