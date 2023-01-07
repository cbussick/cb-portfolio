import { SxProps, Theme } from "@mui/material";
import { CBTimelineProps } from "../CBTimeline/CBTimelineInterfaces";

export interface CBCVCardProps {
  title: string;
  bulletPoints: CBTimelineProps["bulletPoints"];
  sx?: SxProps<Theme>;
}
