import { DoubleArrow } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { ProjectThumbnailType } from "../../interfaces/Project";
import CBTextGradient from "../CBTextGradient/CBTextGradient";
import { CBProjectCardProps } from "./CBProjectCardInterfaces";
import { StyledCard } from "./CBProjectCardStyles";

function CBProjectCard(props: CBProjectCardProps): JSX.Element {
  const theme = useTheme();

  const { project } = props;

  return (
    <StyledCard>
      <CardHeader
        title={project.name}
        titleTypographyProps={{
          variant: "h3",
          component: CBTextGradient,
          // Necessary because the `fontWeight` from the `CBTextGradient` is ignored here for whatever reason
          fontWeight: 600,
          display: "inline",
        }}
        subheader={<>Tech Stack: {project.techStack.join(", ")}</>}
        subheaderTypographyProps={{ variant: "caption" }}
        sx={{
          pt: 0,
        }}
      />
      <Divider sx={{ mb: theme.spacing(3) }} />
      {project.thumbnailType !== ProjectThumbnailType.None && (
        <CardMedia
          component={
            project.thumbnailType === ProjectThumbnailType.Image
              ? "img"
              : ReactPlayer
          }
          image={
            project.thumbnailType === ProjectThumbnailType.Image
              ? project.thumbnail
              : undefined
          }
          alt={
            project.thumbnailType === ProjectThumbnailType.Image
              ? project.name
              : undefined
          }
          url={
            project.thumbnailType === ProjectThumbnailType.Video
              ? project.url
              : undefined
          }
          controls={
            project.thumbnailType === ProjectThumbnailType.Video
              ? true
              : undefined
          }
          width="100%"
        />
      )}
      <CardContent>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ textAlign: "justify" }}
        >
          {project.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ flexGrow: 1, alignItems: "flex-end" }}>
        <Button
          variant="contained"
          aria-label="go to the project"
          endIcon={<DoubleArrow />}
          href={project.url}
          target="_blank"
        >
          <Typography variant="body2">Take me to the project!</Typography>
        </Button>
      </CardActions>
    </StyledCard>
  );
}

export default CBProjectCard;
