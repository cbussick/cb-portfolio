import { AppBar, Button, styled } from "@mui/material";
import {
  CBStyledHeaderLinkProps,
  CBStyledHeaderProps,
} from "./CBHeaderInterfaces";

const shouldForwardHeaderProp = (prop: keyof CBStyledHeaderProps) =>
  prop !== "isPageScrolled";

const shouldForwardLinkProp = (prop: keyof CBStyledHeaderLinkProps) =>
  prop !== "isMobileViewport";

export const StyledHeader = styled(AppBar, {
  shouldForwardProp: shouldForwardHeaderProp,
})<CBStyledHeaderProps>(({ theme, ...props }) => ({
  backgroundColor: theme.palette.background.default,
  transition: "0.3s",
  boxShadow: props.isPageScrolled ? theme.shadows[6] : "none",
  padding: props.isPageScrolled ? undefined : `${theme.spacing(2)} 0px`,
}));

export const StyledHeaderLink = styled(Button, {
  shouldForwardProp: shouldForwardLinkProp,
})<CBStyledHeaderLinkProps>(({ theme, ...props }) => ({
  padding: theme.spacing(2),
  justifyContent: props.isMobileViewport ? "flex-start" : undefined,
  paddingRight: props.isMobileViewport ? theme.spacing(5) : undefined,
  // This notation with alpha/opacity at the end is necessary to have a proper transition with a gradient on hover
  color: `${theme.palette.text.primary}FF`,
  ".link-icon": {
    transition: "0.2s",
  },
  ".link-label": {
    transition: "0.2s",
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`,
    backgroundClip: "text",
  },
  "&:hover": {
    // Necessary to disable the default hover `backgroundColor` of a button
    backgroundColor: "transparent",
    ".link-icon": {
      color: theme.palette.primary.main,
    },
    ".link-label": {
      color: `${theme.palette.text.primary}00`,
      // Necessary here to override the theme link styling
      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 100%)`,
      backgroundClip: "text",
    },
  },
}));
