import { SxProps, Theme } from "@mui/material";

export const CBProjectCardStyles = (theme: Theme): SxProps<Theme> => ({
  maxWidth: 600,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
});
