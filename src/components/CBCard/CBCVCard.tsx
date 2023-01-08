import { Card } from "@mui/material";
import { CBCVCardProps } from "./CBCVCardInterfaces";
import { useCBCVCardStyles } from "./CBCVCardStyles";

/**
 * A simple wrapper which allows reusing the styling for all cards inside the CV section.
 */
function CBCVCard(props: CBCVCardProps): JSX.Element {
  const styles = useCBCVCardStyles();

  return <Card sx={styles.card}>{props.children}</Card>;
}

export default CBCVCard;
