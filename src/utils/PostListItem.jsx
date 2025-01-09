import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import "../styles/PostListItem.css";

export default function PostListItem() {
  return (
    <Paper className="blog-paper" elevation={3}>
      <Box>
        <Typography></Typography>
        <Typography></Typography>
      </Box>
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Paper>
  );
}
