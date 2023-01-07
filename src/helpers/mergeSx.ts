import { SxProps, Theme } from "@mui/material";

/**
 * This is the recommended approach for merging sx objects:
 * https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
 *
 * @example
 * <Box
 *     sx={[
 *       {
 *         width: 'auto',
 *         textDecoration: 'underline',
 *       },
 *       // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
 *       ...(Array.isArray(sx) ? sx : [sx]),
 *     ]}
 * />
 *
 * @param sx
 * @param sxToMerge
 * @returns a merged sx property
 */
export const mergeSx = (
  sx?: SxProps<Theme>,
  sxToMerge?: SxProps<Theme>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
): SxProps<Theme> => [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...(Array.isArray(sx) ? sx : [sx]),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...(Array.isArray(sxToMerge) ? sxToMerge : [sxToMerge]),
];
