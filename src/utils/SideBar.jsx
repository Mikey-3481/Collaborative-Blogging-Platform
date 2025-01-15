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
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import "../styles/SideBar.css";
import BlogTitle from "../components/BlogTitle";
import { useNavigate } from "react-router-dom";
import { toggleDialog } from "../redux/actions/modalActions";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SideBar({ open }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOpen = () => {
    dispatch(toggleDialog());
  };

  return (
    <Drawer variant="persistent" open={open}>
      <nav
        aria-label="secondary mailbox folders"
        id={user?.role === "editor" ? "" : "none"}
      >
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
          <ListItem
            id={user?.role === "admin" ? "" : "none"}
            disablePadding
          >
            <ListItemButton onClick={() => navigate("/admin-dashboard")}>
              <ListItemIcon>
                <FormatPaintIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <BlogTitle />
    </Drawer>
  );
}
