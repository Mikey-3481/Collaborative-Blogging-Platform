import React from "react";
import Logo from "./Logo";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";

export default function Navbar({ fn }) {

  return (
    <>
      <div className="navbar">
        <div className="nav-menu">
          <IconButton onClick={fn}>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="nav-logo">
          <Logo
            path={"/dashboard"}
          />
        </div>
      </div>
    </>
  );
}
