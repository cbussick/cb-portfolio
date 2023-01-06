import { Typography } from "@mui/material";
import { CVBulletPointProps } from "./CVBulletPointInterfaces";

function CVBulletPoint(props: CVBulletPointProps): JSX.Element {
  return (
    <>
      <Typography variant="h3">{props.title}</Typography>
      <Typography>{props.caption}</Typography>
      <Typography>
        {props.startDate} - {props.endDate}
      </Typography>
    </>
  );
}

export default CVBulletPoint;
