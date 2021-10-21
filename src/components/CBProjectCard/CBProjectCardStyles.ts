import { Card, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));
