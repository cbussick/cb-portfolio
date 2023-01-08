import { CardContent } from "@mui/material";
import CBCVCard from "../CBCard/CBCVCard";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import CBTimeline from "../CBTimeline/CBTimeline";
import { CBCVTimelineCardProps } from "./CBCVTimelineCardInterfaces";
import { useCBCVTimelineCardStyles } from "./CBCVTimelineCardStyles";

function CBCVTimelineCard(props: CBCVTimelineCardProps): JSX.Element {
  const styles = useCBCVTimelineCardStyles();

  return (
    <CBCVCard
      title={<CBTextGradient variant="h2">{props.title}</CBTextGradient>}
    >
      <CardContent sx={styles.cardContent}>
        <CBTimeline bulletPoints={props.bulletPoints} />
      </CardContent>
    </CBCVCard>
  );
}

export default CBCVTimelineCard;
