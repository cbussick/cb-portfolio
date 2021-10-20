import { DoubleArrow } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { CBProjectCardProps } from "./CBProjectCardInterfaces";
import { StyledCard } from "./CBProjectCardStyles";

const CBProjectCard = (props: CBProjectCardProps): JSX.Element => {
  const { project } = props;

  return (
    <StyledCard sx={{ maxWidth: 545 }}>
      <CardHeader
        title={project.name}
        titleTypographyProps={{
          variant: "h3",
          component: CBTextGradient,
          // Necessary because the `fontWeight` from the `CBTextGradient` is ignored here for whatever reason
          fontWeight: 600,
        }}
      />
      <CardMedia component="img" image={project.thumbnail} alt={project.name} />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          href={project.url}
          variant="contained"
          aria-label="go to the project"
          endIcon={<DoubleArrow />}
        >
          Take me to the project!
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default CBProjectCard;
