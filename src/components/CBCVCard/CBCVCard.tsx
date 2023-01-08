import {
  Card,
  CardContent,
  CardHeader,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { mergeSx } from "../../helpers/mergeSx";
import CBTimeline from "../CBTimeline/CBTimeline";
import { CBCVCardProps } from "./CBCVCardInterfaces";
import { useCBCVCardStyles } from "./CBCVCardStyles";

function CBCVCard(props: CBCVCardProps): JSX.Element {
  const styles = useCBCVCardStyles();
  const sxCard: SxProps<Theme> = mergeSx(props.sx, styles.card);

  return (
    <Card sx={sxCard}>
      <CardHeader
        title={<Typography variant="h2">{props.title}</Typography>}
        sx={styles.cardHeader}
      />
      <CardContent sx={styles.cardContent}>
        <CBTimeline bulletPoints={props.bulletPoints} />
      </CardContent>
    </Card>
  );
}

export default CBCVCard;
