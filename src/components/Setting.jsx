import React, { useContext, useEffect } from "react";
import { Box, Typography, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Setting.css";
import { logoutUser } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";

export default function Setting() {
  console.log("this is setting function");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.auth);
  const { clearUser } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
  };

  useEffect(() => {
    if (!loading && !success && !error) {
      navigate("/");
      clearUser(null);
    }
  }, [loading, success, error]);

  return (
    <div className="setting">
      <Box className="options">
        <Box className="blog-draft">
          <Typography variant="">Use Blogger draft</Typography>
          <Switch defaultChecked={false} />
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
