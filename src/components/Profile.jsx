import React from "react";
import Logo from "../utils/Logo";
import { Typography, Button, Box, Paper } from "@mui/material";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profile-nav">
        <Logo path={null} />
      </div>
      <Box className="profile-card">
        <div className="profile-name">
          <Typography color="warning" variant="h6">
            Michael
          </Typography>
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/edit-profile/:id")}
          >
            Edit Profile
          </Button>
        </div>
        <div className="profile-content">
          <Paper className="profile-avatar"></Paper>
          <Box className="profile-member-data">
            On Blogger since January 2025
          </Box>
          <Box className="profile-summary">
            <Typography variant="h6">About me</Typography>
            <Typography className="summary">
              European Union laws require you to give European Union visitors
              information about cookies used and data collected on your blog. In
              many cases, these laws also require you to obtain consent. As a
              courtesy, we have added a notice on your blog to explain Google's
              use of certain Blogger and Google cookies, including use of Google
              Analytics and AdSense cookies, and other data collected by Google.
              You are responsible for confirming this notice actually works for
              your blog, and that it displays. If you employ other cookies, for
              example by adding third party features, this notice may not work
              for you. If you include functionality from other providers there
              may be extra information collected from your users.
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
}
