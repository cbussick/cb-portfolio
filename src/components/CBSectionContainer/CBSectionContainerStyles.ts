import { Container, styled } from "@mui/material";
import { StyledContainerProps } from "./CBSectionContainerInterfaces";

const shouldForwardProp = (prop: keyof StyledContainerProps) =>
  prop !== "backgroundColor";

export const StyledContainer = styled(Container, {
  shouldForwardProp,
})<StyledContainerProps>(({ theme, ...props }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  paddingTop: theme.spacing(14),
  backgroundColor: props.backgroundColor,
}));
