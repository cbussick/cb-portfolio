import { SxProps, Theme } from "@mui/material";

/**
 * Helper function for creating an object containing multiple `SxProps`.
 * It infers and explicitly returns the keys of the object used as its input parameter.
 * Every `SxProps` can have access to the `theme` by using a callback.
 * @param styles Object containing the defined `SxProps`.
 * @returns The object containing the defined `SxProps` and their keys.
 */
export const makeSx = <T>(styles: { [K in keyof T]: SxProps<Theme> }) => styles;
