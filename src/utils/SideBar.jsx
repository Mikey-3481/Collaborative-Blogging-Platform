import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  Button,
  ButtonGroup,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import BuildIcon from "@mui/icons-material/Build";
import PublishIcon from "@mui/icons-material/Publish";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../styles/SideBar.css";
import BlogTitle from "../components/Dialog/BlogTitle";
import Confirm from "../components/Dialog/Confirm";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BlogContext } from "../context/BlogContext";
import {
  toggleConfirmDialog,
  toggleTtitleDialog,
} from "../redux/actions/modalActions";
import {
  createPost,
  deletePost,
  publishBlog,
  updateBlog,
} from "../redux/actions/postActions";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import TitleIcon from "@mui/icons-material/Title";
import Collapse from "@mui/material/Collapse";
import EditTitle from "../components/Dialog/EditTitle";

export default function SideBar({ open }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { blogData, clearBlogData } = useContext(BlogContext);
  const [isOpenList, setIsOpen] = useState(true);
  const [isOpenEditTitleDialog, setIsOpenEditTitleDialog] = useState(false);

  const handleEditTitle = () => {
    setIsOpenEditTitleDialog(!isOpenEditTitleDialog);
  };

  const handleOpenList = () => {
    setIsOpen(!isOpenList);
  };

  const handleOpenTitleDialog = () => {
    if (blogData.title) {
      navigate("/create-blog");
    } else {
      dispatch(toggleTtitleDialog());
    }
  };

  const dropBlog = () => {
    clearBlogData();
    navigate("/dashboard");
  };

  const handleSave = () => {
    const newBlog = {
      author: user.id,
      title: blogData.title,
      content: blogData.content,
    };

    try {
      dispatch(createPost(newBlog));
    } catch (error) {
      return;
    } finally {
      clearBlogData();
      navigate("/dashboard");
    }
  };

  const handleEdit = () => {
    const updatedData = blogData;
    const blogId = blogData.id;

    dispatch(updateBlog(blogId, updatedData));
  };

  const handleOpenConfirmDialog = () => {
    dispatch(toggleConfirmDialog());
  };

  const handlePublish = () => {
    const blogId = blogData.id;
    dispatch(publishBlog(blogData));
    dispatch(deletePost(blogId));
    navigate("/admin-dashboard");
  };

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <Drawer variant="persistent" open={open}>
      <nav
        aria-label="secondary mailbox folders"
        id={user?.role === "editor" ? "" : "none"}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenTitleDialog}>
              <ListItemText primary="Create Blog" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/setting")}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/dashboard")}>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="Reading List" />
            </ListItemButton>
          </ListItem>
          <ListItem id={user?.role === "admin" ? "" : "none"} disablePadding>
            <ListItemButton onClick={() => navigate("/admin-dashboard")}>
              <ListItemIcon>
                <FormatPaintIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <nav id={location.pathname === "/create-blog" ? "" : "none"}>
        <Divider />
        <ButtonGroup>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: "10px" }}
            endIcon={<SaveIcon />}
            onClick={handleSave}
          >
            Save Blog
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ mt: "10px" }}
            endIcon={<ClearIcon />}
            onClick={dropBlog}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </nav>
      <nav id={location.pathname === "/edit-blog" ? "" : "none"}>
        <Divider />
        <ListItemButton onClick={handleOpenList}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Blog settigs" />
          {isOpenList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <Collapse
          in={isOpenList}
          timeout="auto"
          unmountOnExit
          sx={{ pl: "30px" }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleEditTitle}>
                <ListItemText primary="Edit Title" />
                <ListItemIcon>
                  <TitleIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleEdit}>
                <ListItemText primary="Save" />
                <ListItemIcon>
                  <SaveIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleReturn}>
                <ListItemText primary="Return" />
                <ListItemIcon>
                  <KeyboardReturnIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleOpenConfirmDialog}>
                <ListItemText primary="Drop" />
                <ListItemIcon>
                  <DeleteForeverIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handlePublish}>
                <ListItemText primary="Publish" />
                <ListItemIcon>
                  <PublishIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </nav>
      {handleOpenTitleDialog ? <BlogTitle /> : null}
      {handleOpenConfirmDialog ? <Confirm /> : null}
      <EditTitle
        open={isOpenEditTitleDialog}
        setOpen={setIsOpenEditTitleDialog}
      />
    </Drawer>
  );
}
