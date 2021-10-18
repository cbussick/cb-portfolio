import { Container, styled } from "@mui/material";
import { StyledRootProps } from "./CBSectionContainerInterfaces";

const shouldForwardProp = (prop: keyof StyledRootProps) =>
  prop !== "backgroundColor";

export const StyledRoot = styled(Container, {
  shouldForwardProp,
})<StyledRootProps>(({ theme, ...props }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  backgroundColor: props.backgroundColor,
}));
