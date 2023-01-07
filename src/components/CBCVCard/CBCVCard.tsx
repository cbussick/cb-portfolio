import {
  Card,
  CardContent,
  CardHeader,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { mergeSx } from "../../helpers/mergeSx";
import CBTimeline from "../CBTimeline/CBTimeline";
import { CBCVCardProps } from "./CBCVCardInterfaces";
import { useCBCVCardStyles } from "./CBCVCardStyles";

function CBCVCard(props: CBCVCardProps): JSX.Element {
  const styles = useCBCVCardStyles();
  const sx: SxProps<Theme> = mergeSx(props.sx, styles.card);

  return (
    <Card sx={sx} component={motion.div}>
      <CardHeader
        title={<Typography variant="h2">{props.title}</Typography>}
        sx={{ p: 0 }}
      />
      <CardContent sx={styles.cardContent}>
        <CBTimeline bulletPoints={props.bulletPoints} />
      </CardContent>
    </Card>
  );
}

export default CBCVCard;
