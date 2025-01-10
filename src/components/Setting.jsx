import React from "react";
import { Box, Typography, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/Setting.css";

export default function Setting() {
  return (
    <div className="setting">
      <Box className="options">
        <Box className="blog-draft">
          <Typography variant="">Use Blogger draft</Typography>
          <Switch defaultChecked={false} />
        </Box>
        <Link to={"/profile/:id"} target="_blank" rel="noopener noreferrer">View Profile</Link>
        <Link to={"/"}>Log Out</Link>
      </Box>
    </div>
  );
}
