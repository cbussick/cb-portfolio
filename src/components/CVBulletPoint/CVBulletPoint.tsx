import { Typography } from "@mui/material";
import { CVBulletPointProps } from "./CVBulletPointInterfaces";

function CVBulletPoint(props: CVBulletPointProps): JSX.Element {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {props.title}
      </Typography>
      <Typography variant="body2">{props.caption}</Typography>
      <Typography variant="subtitle1" component="p">
        {props.startDate} - {props.endDate}
      </Typography>
    </>
  );
}

export default CVBulletPoint;
