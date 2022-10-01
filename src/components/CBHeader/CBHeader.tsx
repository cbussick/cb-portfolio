import { GitHub } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { cbContactInformation } from "../../data/cbContactInformation";
import { scrollToElement } from "../../helpers/scrollToElement";
import CBLogo from "../CBLogo/CBLogo";
import {
  CBHeaderLinkStyles,
  CBHeaderStyles,
  mobileMenuButtonStyles,
} from "./CBHeaderStyles";
import { headerLinks } from "./headerLinkData";

function CBHeader(): JSX.Element {
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

  const gitHubLink = cbContactInformation.gitHub;

  const GitHubLinkButton = isSmallViewport ? (
    <Button
      href={gitHubLink}
      startIcon={<GitHub />}
      classes={{ startIcon: "link-icon" }}
      sx={CBHeaderLinkStyles(theme, { isMobileViewport })}
      target="_blank"
    >
      <Typography variant="subtitle1" component="span" className="link-label">
        Me on GitHub
      </Typography>
    </Button>
  ) : (
    <IconButton
      href={gitHubLink}
      sx={{
        transition: "0.2s",
        "&& .MuiTouchRipple-child": {
          color: theme.palette.text.primary,
          opacity: 0.3,
        },
        "&:hover": {
          // Necessary to disable the default hover `backgroundColor` of a button
          backgroundColor: "transparent",
          color: theme.palette.primary.main,
        },
      }}
      target="_blank"
    >
      <GitHub titleAccess="Me on GitHub" />
    </IconButton>
  );

  const headerElements: JSX.Element[] = headerLinks.map((link) => {
    const selector = link.id === "" ? undefined : `#${link.id}`;

    return (
      <Button
        key={link.id}
        href={selector}
        onClick={(e) => {
          scrollToElement(e, selector);
        }}
        startIcon={<link.icon />}
        classes={{ startIcon: "link-icon" }}
        sx={CBHeaderLinkStyles(theme, { isMobileViewport })}
      >
        <Typography variant="subtitle1" component="span" className="link-label">
          {link.label}
        </Typography>
      </Button>
    );
  });

  return (
    <AppBar sx={CBHeaderStyles(theme, { isPageScrolled })}>
      <Container maxWidth="xl">
        <Toolbar component="nav" disableGutters>
          {isMobileViewport ? (
            <>
              {MobileMenuButton}
              <CBLogo
                isMobileViewport={isMobileViewport}
                isSmallViewport={isSmallViewport}
              />
              {!isSmallViewport && GitHubLinkButton}
            </>
          ) : (
            <>
              <CBLogo
                isMobileViewport={isMobileViewport}
                isSmallViewport={isSmallViewport}
              />
              {headerElements}
              {GitHubLinkButton}
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
            {isSmallViewport && GitHubLinkButton}
          </Drawer>
        )}
      </Container>
    </AppBar>
  );
}

export default CBHeader;
