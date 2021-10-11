import { styled, Typography } from "@mui/material";
import { StyledHeaderProps } from "./CBHeaderInterfaces";

export const StyledHeader = styled(Typography)<StyledHeaderProps>(
  ({ theme, ...props }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: props.testColor,
  })
);
