import { GitHub } from "@mui/icons-material";
import {
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { Twirl as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { scrollToElement } from "../../helpers/scrollToElement";
import CBLogo from "../CBLogo/CBLogo";
import {
  headerLinkStyles,
  mobileMenuButtonStyles,
  StyledHeader,
  StyledHeaderLink,
} from "./CBHeaderStyles";
import { headerLinks } from "./headerLinkData";

const CBHeader = (): JSX.Element => {
  const theme = useTheme();

  const isPageScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window,
  });

  const isMobileViewport = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallViewport = useMediaQuery(theme.breakpoints.down("sm"));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const MobileMenuButton = (
    <Hamburger
      toggled={isMobileMenuOpen}
      toggle={setIsMobileMenuOpen}
      label={isMobileMenuOpen ? "Close menu" : "Show menu"}
      size={isSmallViewport ? 24 : 32}
      rounded
    />
  );

  const GitHubLink = isSmallViewport ? (
    <Button
      href="https://github.com/ChristopherBussick/"
      startIcon={<GitHub />}
      classes={{ startIcon: "link-icon" }}
      // Necessary to provide the styling like this in order to have the `target="_blank"` prop here
      sx={{ ...headerLinkStyles(theme, { isMobileViewport }) }}
      target="_blank"
    >
      <Typography variant="subtitle1" component="span" className="link-label">
        Me on GitHub
      </Typography>
    </Button>
  ) : (
    <IconButton href="https://github.com/ChristopherBussick/" target="_blank">
      <GitHub titleAccess="Me on GitHub" />
    </IconButton>
  );

  const headerElements: JSX.Element[] = headerLinks.map((link) => {
    const selector = link.id === "" ? undefined : `#${link.id}`;

    return (
      <StyledHeaderLink
        key={link.id}
        href={selector}
        onClick={(e) => {
          scrollToElement(e, selector);
        }}
        startIcon={<link.icon />}
        classes={{ startIcon: "link-icon" }}
        isMobileViewport={isMobileViewport}
      >
        <Typography variant="subtitle1" component="span" className="link-label">
          {link.label}
        </Typography>
      </StyledHeaderLink>
    );
  });

  return (
    <StyledHeader isPageScrolled={isPageScrolled}>
      <Toolbar component="nav">
        {isMobileViewport ? (
          <>
            {MobileMenuButton}
            <CBLogo
              isMobileViewport={isMobileViewport}
              isSmallViewport={isSmallViewport}
            />
            {!isSmallViewport && GitHubLink}
          </>
        ) : (
          <>
            <CBLogo
              isMobileViewport={isMobileViewport}
              isSmallViewport={isSmallViewport}
            />
            {headerElements}
            {GitHubLink}
          </>
        )}
      </Toolbar>
      {isMobileViewport && (
        <Drawer
          open={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          sx={{ ...mobileMenuButtonStyles(true) }}
        >
          {MobileMenuButton}
          {headerElements}
          {isSmallViewport && GitHubLink}
        </Drawer>
      )}
    </StyledHeader>
  );
};

export default CBHeader;
