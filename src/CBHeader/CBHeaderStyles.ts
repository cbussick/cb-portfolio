import { styled, Typography } from "@mui/material";
import { StyledHeaderProps } from "./CBHeaderInterfaces";

const shouldForwardProp = (prop: keyof StyledHeaderProps) =>
  prop !== "testColor";

export const StyledHeader = styled(Typography, {
  shouldForwardProp,
})<StyledHeaderProps>(({ theme, ...props }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: props.testColor,
}));
