import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import renderText from "../helpers/renderText";
import renderImage from "../helpers/renderImage";
import "../styles/PostListItem.css";

export default function PostListItem({ blog }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { updateBlogData } = useContext(BlogContext);

  const handleNavigattion = () => {
    updateBlogData(blog);
    navigate("/edit-blog");
  };

  const ReadMore = ({ children }) => {
    const text = children.slice(0, 800);

    return (
      <p>
        {text}
        {"  . . . "}
        <Link
          to={`/blog/${blog.id}`}
          target="_blank"
          rel="noopener noreferrer"
          id={location.pathname === "/admin-dashboard" ? "none" : ""}
        >
          Read more
        </Link>
      </p>
    );
  };

  return (
    <Paper
      className="post-paper"
      id={user?.draft && user.id === blog.author ? "draft" : ""}
      elevation={3}
    >
      <Box className="post-header">
        <Typography variant="h5" className="post-title">
          {blog.title}
        </Typography>
        <Typography
          className="psot-updated"
          id={user.role === "admin" ? "none" : ""}
        >
          {blog.published}
        </Typography>
      </Box>
      <Box className="post-content">
        <Box className="post-img">
          <img src={renderImage(blog.content)} alt="" />
        </Box>
        <Box className="post-text">
          <ReadMore>{renderText(blog.content)}</ReadMore>
        </Box>
      </Box>
      <IconButton
        id={
          user.role === "admin" && location.pathname === "/admin-dashboard"
            ? ""
            : "none"
        }
        onClick={handleNavigattion}
      >
        <EditIcon />
      </IconButton>
    </Paper>
  );
}
