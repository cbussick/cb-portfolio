import { timelineItemClasses } from "@mui/lab/TimelineItem";
import {
  CBGradientDirection,
  getCBGradient,
} from "../../helpers/getCBGradient";
import { makeSx } from "../../helpers/makeSx";

export const useCBTimelineStyles = () =>
  makeSx({
    timeline: {
      p: 0,
      mt: 0,
      mb: 0,
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    },
    dot: (theme) => ({
      backgroundColor: theme.palette.primary.main,
      borderWidth: 4,
    }),
    connector: {
      background: getCBGradient(CBGradientDirection.BottomToTop),
    },
  });
