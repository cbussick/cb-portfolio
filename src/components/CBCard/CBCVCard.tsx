import { Card, CardHeader } from "@mui/material";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { CBCVCardProps } from "./CBCVCardInterfaces";
import { useCBCVCardStyles } from "./CBCVCardStyles";

/**
 * A simple wrapper which allows reusing the styling for all cards inside the CV section.
 */
function CBCVCard(props: CBCVCardProps): JSX.Element {
  const styles = useCBCVCardStyles();

  return (
    <Card sx={styles.card}>
      <CardHeader
        title={<CBTextGradient variant="h2">{props.title}</CBTextGradient>}
        sx={styles.cardHeader}
      />
      {props.children}
    </Card>
  );
}

export default CBCVCard;
