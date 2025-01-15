import React, { useContext, useEffect, useState } from "react";
import Logo from "../utils/Logo";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Divider, Typography, Button, TextField } from "@mui/material";
import ImageUploader from "../utils/ImageUploader";
import "../styles/EditProfile.css";
import { AuthContext } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../redux/actions/authActions";

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [summary, setSummary] = useState(user.summary);
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const { success } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    dispatch(editProfile({ id, name, avatar, summary }));
  };

  useEffect(() => {
    if (success !== null) {
      navigate(`/profile/${id}`);
    }
  }, [success]);

  return (
    <div className="edit-profile">
      <div className="profile-nav">
        <Logo path={null} />
      </div>
      <Box className="edit-profile-card">
        <div className="edit-name">
          <Typography>Edit Name</Typography>
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <Divider />
        <div className="edit-avatar">
          <Typography>Edit Photo</Typography>
          <ImageUploader avatar={avatar} change={setAvatar} />
        </div>
        <Divider />
        <div className="edit-summary">
          <Typography>Edit Summary</Typography>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
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
          <Button variant="text" color="success" onClick={handleSubmit}>
            Save
          </Button>
          <Button
            variant="text"
            sx={{ color: "grey" }}
            onClick={() => navigate(`/profile/${id}`)}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </div>
  );
}
