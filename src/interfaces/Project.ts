import { TypographyProps } from "@mui/material";

export enum ProjectThumbnailType {
  Image = "image",
  Video = "video",
  None = "none",
}

export interface Project {
  id: string;
  name: string;
  thumbnailType: ProjectThumbnailType;
  thumbnail?: string;
  url?: string;
  description: TypographyProps["children"];
  techStack: string[];
}
