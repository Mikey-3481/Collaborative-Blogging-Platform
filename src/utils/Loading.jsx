import React from "react";
import styled from "styled-components";
import { Typography, CircularProgress } from "@mui/material";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled(Typography)`
  margin-top: 1rem;
  color: #555;
  font-size: 1.2rem;
  text-align: center;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress />
      <LoadingText>Please wait...</LoadingText>
    </LoadingContainer>
  );
}
