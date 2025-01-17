import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../context/AuthContext";
import Logo from "./Logo";
import "../styles/Navbar.css";

export default function Navbar({ fn }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        <div className="nav-menu">
          <IconButton onClick={fn}>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="nav-logo">
          <Logo path={"/dashboard"} />
        </div>
        <div className="nav-avatar">
          <div><img src={user?.avatar} alt="" /></div>
        </div>
      </div>
    </>
  );
}
