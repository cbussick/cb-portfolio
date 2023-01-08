import { CardContent, CardHeader, Typography } from "@mui/material";
import CBCVCard from "../CBCard/CBCVCard";
import CBTimeline from "../CBTimeline/CBTimeline";
import { CBCVTimelineCardProps } from "./CBCVTimelineCardInterfaces";
import { useCBCVTimelineCardStyles } from "./CBCVTimelineCardStyles";

function CBCVTimelineCard(props: CBCVTimelineCardProps): JSX.Element {
  const styles = useCBCVTimelineCardStyles();

  return (
    <CBCVCard>
      <CardHeader
        title={<Typography variant="h2">{props.title}</Typography>}
        sx={styles.cardHeader}
      />
      <CardContent sx={styles.cardContent}>
        <CBTimeline bulletPoints={props.bulletPoints} />
      </CardContent>
    </CBCVCard>
  );
}

export default CBCVTimelineCard;
