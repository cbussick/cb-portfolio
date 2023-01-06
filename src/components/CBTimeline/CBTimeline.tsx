import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { CBTimelineProps } from "./CBTimelineInterfaces";
import { useCBTimelineStyles } from "./CBTimelineStyles";

function CBTimeline(props: CBTimelineProps): JSX.Element {
  const styles = useCBTimelineStyles();

  return (
    <Timeline sx={styles.timeline}>
      {props.bulletPoints.map((bulletPoint, index, array) => (
        <TimelineItem key={bulletPoint?.toString()}>
          <TimelineSeparator>
            <TimelineDot sx={styles.dot} />
            {index !== array.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={styles.content}>{bulletPoint}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default CBTimeline;
