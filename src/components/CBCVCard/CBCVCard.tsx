import { Card, SxProps, Theme, Typography } from "@mui/material";
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
      <Typography variant="h2">{props.title}</Typography>
      <CBTimeline bulletPoints={props.bulletPoints} />
    </Card>
  );
}

export default CBCVCard;
