import { Box, Toolbar } from "@mui/material";
import React from "react";
import CBLogo from "../CBLogo/CBLogo";
import { StyledHeader, StyledHeaderLink } from "./CBHeaderStyles";
import { headerLinks } from "./headerLinkData";

const CBHeader = (): JSX.Element => {
  const headerElements: JSX.Element[] = headerLinks.map((link) => (
    <StyledHeaderLink key={link.id} href={`#${link.id}`} variant="h6">
      {link.label}
    </StyledHeaderLink>
  ));

  return (
    <StyledHeader>
      <Toolbar component="nav">
        <CBLogo />
        <Box>{headerElements}</Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default CBHeader;
