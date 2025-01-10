import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "../styles/SideBar.css";
import BlogTitle from "../components/BlogTitle";
import { useNavigate } from "react-router-dom";
import { toggleDialog } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SideBar({ open }) {
  const dispatch = useDispatch();
  const isDialogOpen = useSelector((state) => state.isDialogOpen);
  const navigate = useNavigate();

  const handleOpen = () => {
    dispatch(toggleDialog());
  };

  return (
    <Drawer variant="persistent" open={open}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpen}>
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
        </List>
      </nav>
      <BlogTitle />
    </Drawer>
  );
}
