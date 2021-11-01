import { AppBar, Button, styled, Theme } from "@mui/material";
import {
  CBStyledHeaderLinkProps,
  CBStyledHeaderProps,
} from "./CBHeaderInterfaces";

const shouldForwardHeaderProp = (prop: keyof CBStyledHeaderProps) =>
  prop !== "isPageScrolled";

const shouldForwardLinkProp = (prop: keyof CBStyledHeaderLinkProps) =>
  prop !== "isMobileViewport";

export const mobileMenuButtonStyles = (
  isInsideDrawer: boolean
): Record<string, unknown> => ({
  ".hamburger-react": {
    // Don't have the mobile menu icon blocked by the logo when it is absolutely positioned
    // on small viewports
    zIndex: 1,
    // Remove blue flashing when tapping the mobile menu icon
    //
    // Note: This property is non-standard as of 2021.11.01
    // See https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
    WebkitTapHighlightColor: "transparent",
    alignSelf: isInsideDrawer ? "flex-end" : undefined,
    marginTop: 1,
    marginRight: 1,
  },
});

export const StyledHeader = styled(AppBar, {
  shouldForwardProp: shouldForwardHeaderProp,
})<CBStyledHeaderProps>(({ theme, ...props }) => ({
  backgroundColor: theme.palette.background.default,
  transition: "0.3s",
  boxShadow: props.isPageScrolled ? theme.shadows[6] : "none",
  padding: props.isPageScrolled
    ? undefined
    : `${theme.spacing(1)} 0px ${theme.spacing(2)} 0px`,
  ...mobileMenuButtonStyles(false),
}));

export const headerLinkStyles = (
  theme: Theme,
  props: CBStyledHeaderLinkProps
): Record<string, unknown> => ({
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
});

export const StyledHeaderLink = styled(Button, {
  shouldForwardProp: shouldForwardLinkProp,
})<CBStyledHeaderLinkProps>(({ theme, ...props }) => ({
  ...headerLinkStyles(theme, props),
}));
