import React from "react";
import { Typography, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="loading-container">
      <CircularProgress />
      <Typography>Plese wait...</Typography>
    </div>
  );
}
