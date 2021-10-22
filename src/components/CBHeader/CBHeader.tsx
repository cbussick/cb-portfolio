import { GitHub } from "@mui/icons-material";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { scrollToElement } from "../../helpers/scrollToElement";
import CBLogo from "../CBLogo/CBLogo";
import { CBHeaderProps } from "./CBHeaderInterfaces";
import { StyledHeader, StyledHeaderLink } from "./CBHeaderStyles";
import { headerLinks } from "./headerLinkData";

const CBHeader = (props: CBHeaderProps): JSX.Element => {
  const headerElements: JSX.Element[] = headerLinks.map((link) => {
    const selector = link.id === "" ? undefined : `#${link.id}`;

    return (
      <StyledHeaderLink
        key={link.id}
        href={selector}
        onClick={(e) => scrollToElement(e, selector)}
        startIcon={<link.icon />}
        classes={{ startIcon: "link-icon" }}
      >
        <Typography variant="subtitle1" component="span" className="link-label">
          {link.label}
        </Typography>
      </StyledHeaderLink>
    );
  });

  return (
    <StyledHeader isPageScrolled={props.isPageScrolled}>
      <Toolbar component="nav">
        <CBLogo />
        <Box>{headerElements}</Box>
        <IconButton
          href="https://github.com/ChristopherBussick/"
          target="_blank"
        >
          <GitHub titleAccess="Me on GitHub" />
        </IconButton>
      </Toolbar>
    </StyledHeader>
  );
};

export default CBHeader;
