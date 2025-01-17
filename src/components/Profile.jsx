import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../utils/Logo";
import Loading from "../utils/Loading";
import { AuthContext } from "../context/AuthContext";
import { findUser, resetState } from "../redux/actions/authActions";
import "../styles/Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { success } = useSelector((state) => state.auth);

  const { updateUser, user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  const editProfile = () => {
    dispatch(resetState());
    navigate(`/edit-profile/${id}`);
  };

  useEffect(() => {
    if (id) {
      dispatch(findUser(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (success) {
      updateUser(success);
      setLoading(false);
    }
  }, [success, updateUser]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="profile">
      <div className="profile-nav">
        <Logo path={null} />
      </div>

      <Box className="profile-card">
        <div className="profile-name">
          <Typography color="warning" variant="h6">
            {user.name}
          </Typography>
          <Button variant="contained" color="warning" onClick={editProfile}>
            Edit Profile
          </Button>
        </div>
        <div className="profile-content">
          <div className="profile-content">
            <Paper className="profile-avatar">
              <img src={user.avatar} alt="" />
            </Paper>
            <Box className="profile-member-data">{user.createdAt}</Box>
            <Box className="profile-summary">
              <Typography variant="h6">About me</Typography>
              <Typography className="summary">
                {user.summary || "No summary available"}
              </Typography>
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
}
