import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Setting.css";
import { logoutUser } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";

export default function Setting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const { clearUser } = useContext(AuthContext);
  const { user, updateUser } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
    clearUser(null);
  };

  const handleDraft = (e) => {
    const isChecked = e.target.checked;
    updateUser({ draft: isChecked });
  };

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="setting">
      <Box className="options">
        <Box className="blog-draft" id={user?.role === "editor" ? "" : "none"}>
          <Typography variant="">Use Blogger draft</Typography>
          <Switch
            defaultChecked={user?.draft || false}
            onChange={handleDraft}
          />
        </Box>
        <Link
          to={`/profile/${user?.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </Link>
        <Link onClick={handleLogout}>
          {loading ? "Please wait ..." : "Log Out"}
        </Link>
      </Box>
    </div>
  );
}
