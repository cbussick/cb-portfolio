import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { makeSx } from "../../helpers/makeSx";

export const useCBTimelineStyles = () =>
  makeSx({
    timeline: {
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    },
    dot: (theme) => ({
      backgroundColor: theme.palette.primary.main,
      borderWidth: 4,
    }),
  });
