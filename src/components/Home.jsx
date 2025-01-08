import React from "react";
import { Button } from "@mui/material";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-navbar">
        <div className="home-logo">
          <img className="logo" src={require("../styles/img/logo.png")} alt="Logo" />
        </div>
        <div className="nav-btn-group">
          <Button sx={{color: "#2e2c2c"}} className="login-btn">Log In</Button>
          <Button variant="outlined" className="register-btn">
            Sign Up
          </Button>
        </div>
      </div>
      <h1 className="title">Get started with our powerful blogging platform</h1>
      <div className="reading-list-btn">
        <Button variant="contained">Start reading</Button>
      </div>
    </div>
  );
}
