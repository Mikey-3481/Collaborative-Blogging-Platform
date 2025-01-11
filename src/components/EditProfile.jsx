import React from "react";
import Logo from "../utils/Logo";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Typography, Button, TextField } from "@mui/material";
import ImageUploader from "../utils/ImageUploader";
import "../styles/EditProfile.css";

export default function EditProfile() {
  const navigate = useNavigate();

  return (
    <div className="edit-profile">
      <div className="profile-nav">
        <Logo isPath={false} />
      </div>
      <Box className="edit-profile-card">
        <div className="edit-name">
          <Typography>Edit Name</Typography>
          <TextField />
        </div>
        <Divider />
        <div className="edit-avatar">
          <Typography>Edit Photo</Typography>
          <ImageUploader />
        </div>
        <Divider />
        <div className="edit-summary">
          <Typography>Edit Summary</Typography>
          <textarea
            value={
              "European Union laws require you to give European Union visitors information about cookies used and data collected on your blog. Inmany cases, these laws also require you to obtain consent. As acourtesy, we have added a notice on your blog to explain Google'suse of certain Blogger and Google cookies, including use of GoogleAnalytics and AdSense cookies, and other data collected by Google.You are responsible for confirming this notice actually works foryour blog, and that it displays. If you employ other cookies, forexample by adding third party features, this notice may not workfor you. If you include functionality from other providers theremay be extra information collected from your users."
            }
            name=""
            id=""
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              padding: "10px",
              color: "#888888",
            }}
          ></textarea>
        </div>
        <Box className="edit-btn-group">
          <Button
            variant="text"
            color="success"
            onClick={() => navigate("/profile/:id")}
          >
            Save
          </Button>
          <Button
            variant="text"
            sx={{ color: "grey" }}
            onClick={() => navigate("/profile/:id")}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </div>
  );
}
