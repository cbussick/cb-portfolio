import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { HeaderLink } from "../../interfaces/HeaderLink";
import { StyledHeader, StyledHeaderLink } from "./CBHeaderStyles";

const headerLinks: HeaderLink[] = [
  { id: "", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact-me", label: "Contact me" },
];

const CBHeader = (): JSX.Element => {
  const headerElements: JSX.Element[] = headerLinks.map((link) => (
    <StyledHeaderLink key={link.id} href={`#${link.id}`} variant="h6">
      {link.label}
    </StyledHeaderLink>
  ));

  return (
    <StyledHeader>
      <Toolbar component="nav">
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 600 }}
        >
          👋 Christopher Bussick
        </Typography>
        <Box>{headerElements}</Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default CBHeader;
