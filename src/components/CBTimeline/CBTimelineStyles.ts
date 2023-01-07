import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { makeSx } from "../../helpers/makeSx";

export const useCBTimelineStyles = () =>
  makeSx({
    timeline: {
      pb: 0,
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
  });
