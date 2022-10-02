import { SxProps, Theme } from "@mui/material";

export const makeSx = <T>(styles: { [K in keyof T]: SxProps<Theme> }) => styles;
