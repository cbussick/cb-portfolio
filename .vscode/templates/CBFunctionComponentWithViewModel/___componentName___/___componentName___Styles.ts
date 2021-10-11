import { styled, Typography } from "@mui/material";
import { StyledRootProps } from "./___componentName___Interfaces";

export const StyledRoot = styled(Typography)<StyledRootProps>(
  ({ theme, ...props }) => ({
    backgroundColor: theme.palette.primary.main,
  })
);
