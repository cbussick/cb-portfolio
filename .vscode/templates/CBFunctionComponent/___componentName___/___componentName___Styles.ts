import { styled, Typography } from "@mui/material";
import { StyledRootProps } from "./___componentName___Interfaces";

const shouldForwardProp = (prop: keyof StyledRootProps) => prop !== "";

export const StyledRoot = styled(Typography, {
  shouldForwardProp,
})<StyledRootProps>(({ theme, ...props }) => ({
  backgroundColor: theme.palette.primary.main,
}));
