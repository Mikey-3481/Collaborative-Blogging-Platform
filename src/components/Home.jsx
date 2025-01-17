import React, { useState, useEffect, useContext } from "react";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const startReading = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="home">
      <div className="home-navbar">
        <div className="home-logo">
          <img
            className="logo"
            src={require("../styles/img/logo.png")}
            alt="Logo"
          />
        </div>
        <div className="menu-icon">
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="nav-btn-group">
          <Button sx={{ color: "#2e2c2c" }} onClick={() => navigate("/login")}>
            Log In
          </Button>
          <Button variant="outlined" onClick={() => navigate("/register")}>
            Sign Up
          </Button>
        </div>
      </div>
      <nav className={isDrawerOpen ? "open-home-drawer" : "home-drawer"}>
        <Button
          sx={{ color: "#2e2c2c" }}
          variant="outlined"
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
        <Button variant="contained" onClick={() => navigate("/register")}>
          Sign Up
        </Button>
      </nav>
      <h1 className="title">Get started with our powerful blogging platform</h1>
      <div className="reading-list-btn">
        <Button
          variant="contained"
          sx={{ position: "unset" }}
          onClick={startReading}
        >
          Start reading
        </Button>
      </div>
    </div>
  );
}
